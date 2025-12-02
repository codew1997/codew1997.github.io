import { BlogPost, Feature } from './types';

export const SITE_NAME = "CodeBox";
export const SITE_URL = "https://yourusername.github.io/codebox";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.example.codebox";

// Mock markdown content to simulate file loading for the static site experience
const POST_1_CONTENT = `
# Mastering Dynamic Programming: A Cyberpunk Guide

In the neon-lit streets of algorithmic complexity, **Dynamic Programming (DP)** is your high-tech augmentation. It's not about brute force; it's about optimizing your memory banks.

## The Core Concept

DP is essentially **Recursion + Memoization**.

> "Those who cannot remember the past are condemned to repeat it." - *Dynamic Programming Principle*

### key Steps to Solve Any DP Problem

1.  **Identify the Subproblem**: Break the massive system down into hackable nodes.
2.  **Define the State**: What variables define the current reality? \`dp[i]\`? \`dp[i][j]\`?
3.  **The Recurrence Relation**: The algorithmic link between states.
4.  **Base Cases**: The firewall that stops infinite recursion.

### Code Snippet: Fibonacci Optimization

\`\`\`java
// The Old Way (O(2^n)) - Too Slow
public int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

// The Cyber Way (O(n)) - Optimized
public int fibOptimized(int n) {
    int[] dp = new int[n + 1];
    dp[0] = 0; dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}
\`\`\`

## Conclusion

Mastering DP isn't just about passing the interview; it's about wiring your brain to think in optimized states. Keep hacking.
`;

const POST_2_CONTENT = `
# Top 5 Java Patterns for Android Devs

Building a robust Android app requires structural integrity. Here are the blueprints you need.

## 1. Singleton Pattern
Ensure a class has only one instance. Critical for network clients like Retrofit.

## 2. Builder Pattern
Construct complex objects step by step. Perfect for AlertDialogs.

## 3. Observer Pattern
Define a subscription mechanism. LiveData and RxJava rely heavily on this.

## 4. Factory Pattern
Create objects without specifying the exact class of object that will be created.

## 5. Adapter Pattern
Convert the interface of a class into another interface clients expect. RecyclerView Adapters are the prime example.

---
*Download CodeBox to see full implementations.*
`;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'mastering-dynamic-programming',
    title: 'Mastering Dynamic Programming',
    excerpt: 'Unlock the secrets of DP with our comprehensive guide to memoization and tabulation.',
    date: '2023-10-27',
    readTime: '5 min read',
    content: POST_1_CONTENT,
    tags: ['Algorithms', 'Java', 'Interview']
  },
  {
    id: '2',
    slug: 'top-java-patterns',
    title: 'Top 5 Java Patterns for Android',
    excerpt: 'Architectural blueprints every senior developer must know.',
    date: '2023-11-02',
    readTime: '4 min read',
    content: POST_2_CONTENT,
    tags: ['Design Patterns', 'Android', 'Architecture']
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'dsa',
    title: 'DSA Mastery',
    description: 'Interactive visualisations for Linked Lists, Trees, and Graphs. Master the logic visually.',
    icon: 'BrainCircuit'
  },
  {
    id: 'patterns',
    title: 'Design Patterns',
    description: 'Library of 23+ GoF patterns implemented in C++ and Java with real-world analogies.',
    icon: 'Layers'
  },
  {
    id: 'offline',
    title: 'Offline Sync',
    description: 'Access your cheat sheets and saved snippets anywhere. No signal? No problem.',
    icon: 'WifiOff'
  },
  {
    id: 'ai',
    title: 'AI Code Assist',
    description: 'Integrated AI to explain complex time complexity analysis instantly.',
    icon: 'Bot'
  }
];
