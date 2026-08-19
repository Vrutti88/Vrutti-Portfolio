import React, { useState } from 'react';
import { 
  Activity, 
  Play, 
  CheckCircle2, 
  Clock, 
  Database, 
  Server, 
  ShieldCheck, 
  Terminal, 
  RotateCw, 
  Send,
  Cpu,
  Layers
} from 'lucide-react';
import { useApiHealth } from '../../hooks/useApiHealth';
import { api } from '../../utils/apiClient';

export const ApiMonitor = () => {
  const { health, latency, latencyHistory, runLatencyTest, isTesting } = useApiHealth();
  const [selectedEndpoint, setSelectedEndpoint] = useState('/api/health');
  const [customMethod, setCustomMethod] = useState('GET');
  const [responseOutput, setResponseOutput] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [requestLatency, setRequestLatency] = useState(null);

  const endpoints = [
    { method: 'GET', path: '/api/health', desc: 'System telemetry, memory & database status' },
    { method: 'GET', path: '/api/projects', desc: 'Queries indexed project catalog' },
    { method: 'GET', path: '/api/skills', desc: 'Returns categorized technology arsenal' },
    { method: 'GET', path: '/api/stats', desc: 'Aggregated real-time developer metrics' },
    { method: 'POST', path: '/api/ping', desc: 'High-speed latency probe endpoint' },
  ];

  const handleExecuteRequest = async (ep = null) => {
    const targetEndpoint = ep ? ep.path : selectedEndpoint;
    const targetMethod = ep ? ep.method : customMethod;

    setIsSending(true);
    const start = performance.now();

    try {
      let res;
      if (targetMethod === 'POST') {
        res = await api.post(targetEndpoint.replace('/api', ''), {});
      } else {
        res = await api.get(targetEndpoint.replace('/api', ''));
      }

      const elapsed = Math.round(performance.now() - start);
      setRequestLatency(elapsed);
      setResponseOutput({
        status: res.status,
        statusText: res.statusText || 'OK',
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'x-powered-by': 'Express',
          'x-developer': 'Vrutti Patil'
        },
        data: res.data
      });
    } catch (err) {
      const elapsed = Math.round(performance.now() - start);
      setRequestLatency(elapsed);
      setResponseOutput({
        status: err.response?.status || 500,
        statusText: err.response?.statusText || 'ERROR',
        error: err.message,
        data: err.response?.data || { error: 'Network request error' }
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="api-console" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-bg-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>[04] LIVE BACKEND API MONITOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-sans">
              Interactive API Diagnostics Console
            </h2>
          </div>

          <p className="text-sm font-mono text-text-secondary mt-2 md:mt-0 max-w-md">
            Execute real HTTP probes against the Express backend and observe real-time latency, payload schemas, and server telemetry.
          </p>
        </div>

        {/* API Console Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel: Telemetry Dashboard & Endpoints */}
          <div className="lg:col-span-5 space-y-4">
            {/* Live Health Overview Card */}
            <div className="p-5 rounded-2xl bg-bg-card border border-brand-green/30 shadow-xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-bg-border mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-brand-green animate-pulse" />
                  <span className="font-bold text-text-primary">BACKEND HEALTH</span>
                </div>

                <span className="px-2 py-0.5 rounded bg-brand-green/15 text-brand-green border border-brand-green/30 font-bold text-[10px]">
                  HTTP/2 200 OK
                </span>
              </div>

              {/* Status Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-lg bg-bg-surface border border-bg-border">
                  <div className="text-text-secondary text-[10px] mb-1">MEASURED LATENCY</div>
                  <div className="text-xl font-bold text-brand-green flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{latency}ms</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-bg-surface border border-bg-border">
                  <div className="text-text-secondary text-[10px] mb-1">DATABASE STATE</div>
                  <div className="text-sm font-bold text-brand-green-bright flex items-center gap-1.5 pt-1">
                    <Database className="w-4 h-4 text-brand-green" />
                    <span>Connected</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-bg-surface border border-bg-border">
                  <div className="text-text-secondary text-[10px] mb-1">SERVICE RUNTIME</div>
                  <div className="text-xs font-bold text-text-primary flex items-center gap-1.5 pt-1">
                    <Server className="w-4 h-4 text-brand-purple" />
                    <span>Node.js Express</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-bg-surface border border-bg-border">
                  <div className="text-text-secondary text-[10px] mb-1">MEMORY (HEAP)</div>
                  <div className="text-xs font-bold text-brand-cyan flex items-center gap-1.5 pt-1">
                    <Cpu className="w-4 h-4 text-brand-cyan" />
                    <span>{health?.memoryUsage?.heapUsed || '38 MB'}</span>
                  </div>
                </div>
              </div>

              {/* Latency History Rolling Sparkline */}
              <div className="pt-2 border-t border-bg-border">
                <div className="flex items-center justify-between text-[10px] text-text-secondary mb-2">
                  <span>Rolling Ping Latency Spectrum</span>
                  <span className="text-brand-green font-bold">AVG ~38ms</span>
                </div>
                <div className="flex items-end gap-1.5 h-8 bg-bg-surface/50 p-1.5 rounded-lg border border-bg-border">
                  {latencyHistory.map((val, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-brand-green/30 hover:bg-brand-green rounded-t transition-all"
                      style={{ height: `${Math.min(100, (val / 100) * 100)}%` }}
                      title={`${val}ms`}
                    />
                  ))}
                </div>
              </div>

              {/* Instant Probe Trigger */}
              <button
                onClick={runLatencyTest}
                disabled={isTesting}
                data-cursor="PROBE"
                className="mt-4 w-full py-2.5 rounded-lg bg-bg-surface border border-brand-green/40 hover:border-brand-green text-brand-green hover:bg-brand-green/10 font-bold transition-all flex items-center justify-center gap-2"
              >
                <RotateCw className={`w-3.5 h-3.5 ${isTesting ? 'animate-spin' : ''}`} />
                <span>{isTesting ? 'Pinging Server...' : 'Trigger Instant Latency Probe'}</span>
              </button>
            </div>

            {/* Selectable Endpoints Directory */}
            <div className="p-4 rounded-2xl bg-bg-card border border-bg-border font-mono text-xs space-y-2">
              <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-2">
                Available REST Endpoints
              </div>

              {endpoints.map((ep) => (
                <div
                  key={ep.path}
                  onClick={() => {
                    setSelectedEndpoint(ep.path);
                    setCustomMethod(ep.method);
                    handleExecuteRequest(ep);
                  }}
                  data-cursor="TEST"
                  className={`p-2.5 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                    selectedEndpoint === ep.path
                      ? 'border-brand-green bg-brand-green/10 text-brand-green'
                      : 'border-bg-border bg-bg-surface/40 hover:border-bg-border-bright text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                      ep.method === 'GET' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                    }`}>
                      {ep.method}
                    </span>
                    <span className="font-semibold">{ep.path}</span>
                  </div>

                  <span className="text-[10px] text-text-muted hover:text-brand-green">Test &gt;</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Interactive Request / Response Inspector */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full p-5 rounded-2xl bg-[#05080D] border border-bg-border font-mono text-xs flex flex-col justify-between">
              <div>
                {/* Request Builder Bar */}
                <div className="flex items-center gap-2 pb-3 border-b border-bg-border mb-4">
                  <span className="px-2.5 py-1.5 rounded bg-bg-surface border border-bg-border text-brand-green font-bold">
                    {customMethod}
                  </span>

                  <input
                    type="text"
                    value={selectedEndpoint}
                    onChange={(e) => setSelectedEndpoint(e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded bg-bg-surface border border-bg-border text-text-primary text-xs focus:outline-none focus:border-brand-green"
                  />

                  <button
                    onClick={() => handleExecuteRequest()}
                    disabled={isSending}
                    data-cursor="EXECUTE"
                    className="px-4 py-1.5 rounded bg-brand-green text-black font-bold flex items-center gap-1.5 shadow-glow-sm hover:bg-brand-green-bright transition-all"
                  >
                    <Send className={`w-3.5 h-3.5 ${isSending ? 'animate-pulse' : ''}`} />
                    <span>{isSending ? 'Sending...' : 'Execute'}</span>
                  </button>
                </div>

                {/* HTTP Status Response Ribbon */}
                <div className="flex items-center justify-between text-[11px] text-text-secondary mb-3 pb-2 border-b border-bg-border/60">
                  <div className="flex items-center gap-2">
                    <span>STATUS:</span>
                    <span className={`font-bold ${responseOutput ? 'text-brand-green' : 'text-text-muted'}`}>
                      {responseOutput ? `${responseOutput.status} ${responseOutput.statusText}` : 'Awaiting Probe'}
                    </span>
                  </div>

                  {requestLatency !== null && (
                    <div className="flex items-center gap-1 text-brand-green">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Roundtrip: {requestLatency}ms</span>
                    </div>
                  )}
                </div>

                {/* Response Body JSON Viewer */}
                <div className="relative">
                  <div className="text-[10px] text-text-muted mb-1 flex items-center justify-between">
                    <span>Response Payload (application/json)</span>
                    <span className="text-brand-green">Live Server Data</span>
                  </div>

                  <pre className="p-4 rounded-xl bg-bg-darkest border border-bg-border text-text-primary overflow-x-auto max-h-96 text-[11px] leading-relaxed select-text">
                    {responseOutput
                      ? JSON.stringify(responseOutput.data, null, 2)
                      : JSON.stringify(
                          {
                            status: "ready",
                            message: "Select an endpoint on the left or click 'Execute' to perform a live API roundtrip.",
                            gateway: "vrutti-portfolio-express-api",
                            cors: "enabled",
                            rateLimit: "200 req / 15 min"
                          },
                          null,
                          2
                        )}
                  </pre>
                </div>
              </div>

              {/* Console Footnote */}
              <div className="mt-4 pt-3 border-t border-bg-border flex items-center justify-between text-[10px] text-text-muted">
                <span>Express API Server Port: 5001</span>
                <span className="text-brand-green">REST API v1.0 • JSON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
