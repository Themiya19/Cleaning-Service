'use client';

import { useEffect, useState } from 'react';

export interface WebsiteContent {
  [key: string]: any;
}

const defaultContent: WebsiteContent = {};

let cachedContent: WebsiteContent | null = null;
let lastFetch = 0;
const CACHE_DURATION = 30000; // 30 seconds

export function useWebsiteContent() {
  const [content, setContent] = useState<WebsiteContent | null>(cachedContent);
  const [isLoading, setIsLoading] = useState(!cachedContent);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchContent = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Use cache if recent
        if (cachedContent && Date.now() - lastFetch < CACHE_DURATION) {
          setContent(cachedContent);
          setIsLoading(false);
          return;
        }
        const response = await fetch(`/api/website-content?t=${Date.now()}`);
        if (!response.ok) throw new Error('Failed to fetch content');
        const data = await response.json();
        cachedContent = data;
        lastFetch = Date.now();
        if (isMounted) setContent(data);
      } catch (err: any) {
        setError(err.message || 'Error fetching content');
        if (isMounted) setContent(defaultContent);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    fetchContent();
    // Optionally, set up periodic refresh
    const interval = setInterval(fetchContent, CACHE_DURATION);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return { content, isLoading, error };
}
