# Gemini API Integration Guide

## Overview

This guide covers the integration of Google's Gemini API into the Infini Pro X marketing platform for AI-powered features including conversational AI, lead qualification, and intelligent recommendations.

## Setup

### 1. Obtain Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the API key for use in your environment variables

### 2. Environment Configuration

Create a `.env.local` file in the project root:

```bash
# Gemini API Configuration
GEMINI_API_KEY=your_api_key_here
GEMINI_MODEL=gemini-1.5-pro
GEMINI_API_ENDPOINT=https://generativelanguage.googleapis.com/v1beta

# Optional: Rate limiting
GEMINI_MAX_REQUESTS_PER_MINUTE=60
GEMINI_TIMEOUT_MS=30000
```

### 3. Install Dependencies

```bash
npm install @google/generative-ai
```

## Core Implementation

### AI Service Configuration

Create the base AI service at `src/lib/ai/gemini-service.ts`:

```typescript
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const aiConfig = {
  model: process.env.GEMINI_MODEL || 'gemini-1.5-pro',
  generationConfig: {
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 2048,
  },
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ],
};

export const model = genAI.getGenerativeModel({
  model: aiConfig.model,
  ...aiConfig,
});
```

### System Prompts

Define system prompts at `src/lib/ai/prompts.ts`:

```typescript
export const SYSTEM_PROMPTS = {
  // Main chatbot assistant
  ASSISTANT: `You are the AI assistant for INFINI PRO X, Pakistan's premier AI solutions provider.

Your role:
- Help visitors understand our AI products and services
- Qualify leads by understanding their business needs
- Provide accurate information about WhatsApp AI Agents, custom AI platforms, n8n workflow automation, and industrial AI solutions
- Guide users to appropriate solutions based on their industry (Real Estate, E-Commerce, Healthcare, Education, Manufacturing)
- Maintain a professional, confident, yet approachable tone
- When appropriate, offer to schedule a consultation or demo

Key offerings:
1. WhatsApp AI Agents - 24/7 customer support automation
2. Custom AI Websites & Platforms - Tailored digital solutions
3. Process Automation (n8n) - Workflow optimization
4. Industrial AI Solutions - Manufacturing intelligence

Company background:
- 21+ years of industrial expertise
- Proven track record in Pakistani market
- End-to-end implementation (not just consultation)
- Production-proven solutions

Always be helpful, accurate, and focused on solving the visitor's business challenges.`,

  // Lead qualification
  LEAD_QUALIFIER: `Analyze the conversation and score the lead quality from 0-100 based on:
1. Budget indicators (30 points)
2. Timeline urgency (25 points)
3. Decision-making authority (25 points)
4. Business fit with our solutions (20 points)

Provide JSON response with: score, category (hot/warm/cold), reasoning, recommended_next_action`,

  // ROI Calculator
  ROI_CALCULATOR: `You are an ROI calculator for AI automation solutions.
Analyze the provided business metrics and calculate potential:
- Time savings (hours/week)
- Cost reduction (PKR/month)
- Revenue increase potential
- Payback period

Provide realistic, conservative estimates based on industry benchmarks.`,

  // Product Recommender
  PRODUCT_RECOMMENDER: `Based on the user's industry and described challenges, recommend the most suitable INFINI PRO X solution(s):

Available solutions:
1. WhatsApp AI Agent - Best for: high customer inquiry volume, after-hours support needs
2. Custom AI Platform - Best for: unique business processes, complex workflows
3. n8n Automation - Best for: repetitive tasks, multi-system integration
4. Industrial AI - Best for: manufacturing, quality control, process optimization

Provide 1-3 recommendations with reasoning.`,
};
```

### API Routes

#### Chat Endpoint

Create `src/app/api/chat/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { model } from '@/lib/ai/gemini-service';
import { SYSTEM_PROMPTS } from '@/lib/ai/prompts';

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Build conversation context
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: SYSTEM_PROMPTS.ASSISTANT }],
        },
        {
          role: 'model',
          parts: [{ text: 'Understood. I am ready to assist visitors to INFINI PRO X.' }],
        },
        ...conversationHistory.map((msg: any) => ({
          role: msg.role,
          parts: [{ text: msg.content }],
        })),
      ],
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return NextResponse.json({
      response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
```

#### Streaming Chat Endpoint

Create `src/app/api/chat/stream/route.ts`:

```typescript
import { NextRequest } from 'next/server';
import { model } from '@/lib/ai/gemini-service';
import { SYSTEM_PROMPTS } from '@/lib/ai/prompts';

export async function POST(request: NextRequest) {
  const { message, conversationHistory = [] } = await request.json();

  const encoder = new TextEncoder();
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();

  (async () => {
    try {
      const chat = model.startChat({
        history: [
          {
            role: 'user',
            parts: [{ text: SYSTEM_PROMPTS.ASSISTANT }],
          },
          {
            role: 'model',
            parts: [{ text: 'Understood. I am ready to assist visitors to INFINI PRO X.' }],
          },
          ...conversationHistory.map((msg: any) => ({
            role: msg.role,
            parts: [{ text: msg.content }],
          })),
        ],
      });

      const result = await chat.sendMessageStream(message);

      for await (const chunk of result.stream) {
        const text = chunk.text();
        await writer.write(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
      }

      await writer.write(encoder.encode('data: [DONE]\n\n'));
    } catch (error) {
      console.error('Streaming error:', error);
      await writer.write(
        encoder.encode(`data: ${JSON.stringify({ error: 'Stream failed' })}\n\n`)
      );
    } finally {
      await writer.close();
    }
  })();

  return new Response(stream.readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
```

#### Lead Qualification Endpoint

Create `src/app/api/ai/qualify-lead/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { model } from '@/lib/ai/gemini-service';
import { SYSTEM_PROMPTS } from '@/lib/ai/prompts';

interface LeadQualificationResult {
  score: number;
  category: 'hot' | 'warm' | 'cold';
  reasoning: string;
  recommendedAction: string;
}

export async function POST(request: NextRequest) {
  try {
    const { conversationHistory } = await request.json();

    const prompt = `${SYSTEM_PROMPTS.LEAD_QUALIFIER}

Conversation to analyze:
${JSON.stringify(conversationHistory, null, 2)}

Provide your analysis in JSON format.`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    // Parse JSON response
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Invalid response format');
    }

    const qualification: LeadQualificationResult = JSON.parse(jsonMatch[0]);

    return NextResponse.json(qualification);
  } catch (error) {
    console.error('Lead qualification error:', error);
    return NextResponse.json(
      { error: 'Failed to qualify lead' },
      { status: 500 }
    );
  }
}
```

#### ROI Calculator Endpoint

Create `src/app/api/ai/calculate-roi/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { model } from '@/lib/ai/gemini-service';
import { SYSTEM_PROMPTS } from '@/lib/ai/prompts';

interface BusinessMetrics {
  industry: string;
  monthlyCustomerInquiries: number;
  averageResponseTime: number;
  staffHoursOnSupport: number;
  averageHourlyWage: number;
  currentConversionRate: number;
}

export async function POST(request: NextRequest) {
  try {
    const metrics: BusinessMetrics = await request.json();

    const prompt = `${SYSTEM_PROMPTS.ROI_CALCULATOR}

Business metrics:
- Industry: ${metrics.industry}
- Monthly customer inquiries: ${metrics.monthlyCustomerInquiries}
- Average response time: ${metrics.averageResponseTime} minutes
- Staff hours on support: ${metrics.staffHoursOnSupport} hours/week
- Average hourly wage: PKR ${metrics.averageHourlyWage}
- Current conversion rate: ${metrics.currentConversionRate}%

Calculate ROI for implementing a WhatsApp AI Agent. Provide results in JSON format with:
- timeSavingsHoursPerWeek
- costReductionPKRPerMonth
- revenueIncreasePercentage
- paybackPeriodMonths
- totalFirstYearSavingsPKR
- assumptions (array of strings)`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Invalid response format');
    }

    const roiAnalysis = JSON.parse(jsonMatch[0]);

    return NextResponse.json(roiAnalysis);
  } catch (error) {
    console.error('ROI calculation error:', error);
    return NextResponse.json(
      { error: 'Failed to calculate ROI' },
      { status: 500 }
    );
  }
}
```

## Client-Side Integration

### Chat Hook

Create `src/hooks/useAIChat.ts`:

```typescript
import { useState, useCallback } from 'react';

interface Message {
  role: 'user' | 'model';
  content: string;
  timestamp: string;
}

export function useAIChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    setIsLoading(true);
    setError(null);

    // Add user message
    const userMessage: Message = {
      role: 'user',
      content,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: content,
          conversationHistory: messages,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const aiMessage: Message = {
        role: 'model',
        content: data.response,
        timestamp: data.timestamp,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  const clearChat = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearChat,
  };
}
```

### Streaming Chat Hook

Create `src/hooks/useStreamingChat.ts`:

```typescript
import { useState, useCallback } from 'react';

interface Message {
  role: 'user' | 'model';
  content: string;
  timestamp: string;
}

export function useStreamingChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    setIsStreaming(true);
    setError(null);

    const userMessage: Message = {
      role: 'user',
      content,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);

    let aiContent = '';

    try {
      const response = await fetch('/api/chat/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: content,
          conversationHistory: messages,
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error('Failed to get response');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      // Add placeholder for AI message
      const aiMessageIndex = messages.length + 1;
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          content: '',
          timestamp: new Date().toISOString(),
        },
      ]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') break;

            try {
              const parsed = JSON.parse(data);
              if (parsed.text) {
                aiContent += parsed.text;
                setMessages((prev) => {
                  const updated = [...prev];
                  updated[aiMessageIndex] = {
                    ...updated[aiMessageIndex],
                    content: aiContent,
                  };
                  return updated;
                });
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsStreaming(false);
    }
  }, [messages]);

  const clearChat = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages,
    isStreaming,
    error,
    sendMessage,
    clearChat,
  };
}
```

## Usage Examples

### Basic Chat Component

```typescript
'use client';

import { useAIChat } from '@/hooks/useAIChat';

export function ChatWidget() {
  const { messages, isLoading, sendMessage } = useAIChat();
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="chat-widget">
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
          placeholder="Ask about our AI solutions..."
        />
        <button type="submit" disabled={isLoading}>
          Send
        </button>
      </form>
    </div>
  );
}
```

## Rate Limiting

Implement rate limiting to prevent abuse:

```typescript
// src/lib/rate-limiter.ts
const rateLimits = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 60,
  windowMs: number = 60000
): boolean {
  const now = Date.now();
  const record = rateLimits.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimits.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}
```

## Error Handling

### Common Errors

1. **API Key Invalid**
   - Check `.env.local` configuration
   - Verify key is active in Google AI Studio

2. **Rate Limit Exceeded**
   - Implement exponential backoff
   - Cache responses when possible

3. **Timeout**
   - Adjust `GEMINI_TIMEOUT_MS`
   - Implement retry logic

### Error Response Format

```typescript
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": {
    // Additional context
  }
}
```

## Testing

### Test API Integration

```bash
# Test chat endpoint
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Tell me about WhatsApp AI Agents"}'

# Test ROI calculator
curl -X POST http://localhost:3000/api/ai/calculate-roi \
  -H "Content-Type: application/json" \
  -d '{
    "industry": "Real Estate",
    "monthlyCustomerInquiries": 500,
    "averageResponseTime": 15,
    "staffHoursOnSupport": 40,
    "averageHourlyWage": 800,
    "currentConversionRate": 3.5
  }'
```

## Best Practices

1. **Context Management**: Keep conversation history under 10 messages for optimal performance
2. **Prompt Engineering**: Test and refine system prompts regularly
3. **Caching**: Cache common responses to reduce API calls
4. **Monitoring**: Track API usage and response times
5. **Fallbacks**: Always have fallback responses for API failures
6. **Security**: Never expose API keys client-side

## Cost Optimization

- Use caching for repeated queries
- Implement request debouncing
- Set appropriate `maxOutputTokens`
- Monitor usage in Google AI Studio

---

**Document Version**: 1.0
**Last Updated**: 2024-12-01
