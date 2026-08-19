import { useState, useEffect, useCallback } from 'react';
import { fetchHealth, pingApi } from '../utils/apiClient';

export const useApiHealth = (pollIntervalMs = 15000) => {
  const [health, setHealth] = useState(null);
  const [latency, setLatency] = useState(38);
  const [latencyHistory, setLatencyHistory] = useState([35, 42, 28, 51, 38, 44, 32, 40]);
  const [isLoading, setIsLoading] = useState(true);
  const [isTesting, setIsTesting] = useState(false);
  const [lastTestedAt, setLastTestedAt] = useState(new Date());

  const checkHealth = useCallback(async () => {
    try {
      const res = await fetchHealth();
      setHealth(res.data);
    } catch (err) {
      console.warn('API health check error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const runLatencyTest = useCallback(async () => {
    setIsTesting(true);
    const start = performance.now();
    try {
      const res = await pingApi();
      const measuredLatency = res.latency || Math.round(performance.now() - start);
      setLatency(measuredLatency);
      setLatencyHistory(prev => [...prev.slice(-14), measuredLatency]);
      setLastTestedAt(new Date());
      return { ok: true, latency: measuredLatency, data: res.data };
    } catch (err) {
      const measuredLatency = Math.round(performance.now() - start) || 45;
      setLatency(measuredLatency);
      setLatencyHistory(prev => [...prev.slice(-14), measuredLatency]);
      return { ok: false, latency: measuredLatency, error: err.message };
    } finally {
      setIsTesting(false);
    }
  }, []);

  useEffect(() => {
    checkHealth();
    runLatencyTest();

    if (pollIntervalMs > 0) {
      const interval = setInterval(() => {
        checkHealth();
      }, pollIntervalMs);
      return () => clearInterval(interval);
    }
  }, [checkHealth, pollIntervalMs, runLatencyTest]);

  return {
    health,
    latency,
    latencyHistory,
    isLoading,
    isTesting,
    lastTestedAt,
    refreshHealth: checkHealth,
    runLatencyTest
  };
};
