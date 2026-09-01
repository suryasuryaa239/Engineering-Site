import React, { useState, useEffect, useRef } from 'react';
import { 
  Activity, 
  Wind, 
  Play, 
  RotateCcw, 
  Sliders, 
  Gauge, 
  ShieldAlert, 
  Zap, 
  Flame, 
  Layers 
} from 'lucide-react';

export default function SimulationPlayground({ onOpenQuote }) {
  const [simType, setSimType] = useState('fea'); // 'fea' or 'cfd'
  const [loadValue, setLoadValue] = useState(250); // kN for FEA, m/s for CFD
  const [showMesh, setShowMesh] = useState(true);
  const canvasRef = useRef(null);

  // Canvas render logic for interactive FEA & CFD
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.03;
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;

      if (simType === 'fea') {
        // --- FEA STRUCTURAL ANALYSIS SIMULATION ---
        const flex = (loadValue / 500) * 22 * Math.sin(time * 2);
        
        // Draw Fixed Mounting Wall
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(40, centerY - 80, 20, 160);
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 2;
        ctx.strokeRect(40, centerY - 80, 20, 160);

        // Mounting Hatch Lines
        for (let y = centerY - 75; y < centerY + 75; y += 12) {
          ctx.beginPath();
          ctx.moveTo(25, y + 10);
          ctx.lineTo(40, y);
          ctx.strokeStyle = '#64748b';
          ctx.stroke();
        }

        // Deforming Beam Points
        const p1 = { x: 60, y: centerY - 40 };
        const p2 = { x: 60, y: centerY + 40 };
        const p3 = { x: width - 120, y: centerY + 20 + flex };
        const p4 = { x: width - 120, y: centerY - 20 + flex };

        // Stress Heatmap Gradient
        const grad = ctx.createLinearGradient(60, centerY, width - 120, centerY);
        const ratio = loadValue / 500;
        
        if (ratio < 0.4) {
          grad.addColorStop(0, 'rgba(0, 242, 254, 0.9)');
          grad.addColorStop(0.5, 'rgba(59, 130, 246, 0.8)');
          grad.addColorStop(1, 'rgba(16, 185, 129, 0.7)');
        } else if (ratio < 0.75) {
          grad.addColorStop(0, 'rgba(245, 158, 11, 0.95)');
          grad.addColorStop(0.3, 'rgba(0, 242, 254, 0.8)');
          grad.addColorStop(1, 'rgba(59, 130, 246, 0.6)');
        } else {
          grad.addColorStop(0, 'rgba(239, 68, 68, 0.95)'); // High stress red
          grad.addColorStop(0.2, 'rgba(245, 158, 11, 0.9)');
          grad.addColorStop(0.7, 'rgba(0, 242, 254, 0.7)');
          grad.addColorStop(1, 'rgba(59, 130, 246, 0.5)');
        }

        // Draw Beam Body
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p4.x, p4.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // FEA Finite Element Mesh Grid Overlay
        if (showMesh) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
          ctx.lineWidth = 1;
          const cols = 14;
          const rows = 5;

          for (let i = 0; i <= cols; i++) {
            const t = i / cols;
            const topX = p1.x + (p4.x - p1.x) * t;
            const topY = p1.y + (p4.y - p1.y) * t;
            const botX = p2.x + (p3.x - p2.x) * t;
            const botY = p2.y + (p3.y - p2.y) * t;

            ctx.beginPath();
            ctx.moveTo(topX, topY);
            ctx.lineTo(botX, botY);
            ctx.stroke();
          }

          for (let j = 0; j <= rows; j++) {
            const t = j / rows;
            ctx.beginPath();
            for (let i = 0; i <= cols; i++) {
              const u = i / cols;
              const topX = p1.x + (p4.x - p1.x) * u;
              const topY = p1.y + (p4.y - p1.y) * u;
              const botX = p2.x + (p3.x - p2.x) * u;
              const botY = p2.y + (p3.y - p2.y) * u;

              const px = topX + (botX - topX) * t;
              const py = topY + (botY - topY) * t;

              if (i === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.stroke();
          }
        }

        // Force Arrow Vector
        const forceX = width - 120;
        const forceY = centerY - 60 + flex;
        ctx.strokeStyle = '#ef4444';
        ctx.fillStyle = '#ef4444';
        ctx.lineWidth = 4;
        
        ctx.beginPath();
        ctx.moveTo(forceX, forceY);
        ctx.lineTo(forceX, centerY - 20 + flex);
        ctx.stroke();

        // Arrowhead
        ctx.beginPath();
        ctx.moveTo(forceX - 8, centerY - 28 + flex);
        ctx.lineTo(forceX + 8, centerY - 28 + flex);
        ctx.lineTo(forceX, centerY - 18 + flex);
        ctx.closePath();
        ctx.fill();

        ctx.font = 'bold 12px monospace';
        ctx.fillText(`F = ${loadValue} kN`, forceX - 30, forceY - 10);

        // Max Stress Hotspot Glow
        ctx.beginPath();
        ctx.arc(65, centerY, 12, 0, Math.PI * 2);
        ctx.fillStyle = ratio > 0.75 ? 'rgba(239, 68, 68, 0.6)' : 'rgba(245, 158, 11, 0.5)';
        ctx.fill();

      } else {
        // --- CFD FLUID DYNAMICS AERODYNAMIC STREAMLINES SIMULATION ---
        const speed = (loadValue / 120) * 8 + 2;

        // Airfoil Body Geometry
        ctx.fillStyle = '#1e293b';
        ctx.strokeStyle = '#00f2fe';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(centerX - 100, centerY);
        ctx.quadraticCurveTo(centerX - 30, centerY - 45, centerX + 100, centerY);
        ctx.quadraticCurveTo(centerX - 30, centerY + 20, centerX - 100, centerY);
        ctx.closePath();
        ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
        ctx.fill();
        ctx.stroke();

        // Airfoil Surface Mesh
        if (showMesh) {
          ctx.strokeStyle = 'rgba(0, 242, 254, 0.15)';
          for (let x = centerX - 90; x < centerX + 90; x += 20) {
            ctx.beginPath();
            ctx.moveTo(x, centerY - 30);
            ctx.lineTo(x, centerY + 15);
            ctx.stroke();
          }
        }

        // Fluid Streamlines
        const lineCount = 14;
        for (let i = 0; i < lineCount; i++) {
          const baseY = (height / (lineCount + 1)) * (i + 1);
          ctx.beginPath();
          
          for (let x = 0; x < width; x += 15) {
            // Deflection calculation near airfoil
            const dx = x - centerX;
            const dy = baseY - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            let defY = baseY;
            if (dist < 130) {
              const influence = Math.exp(-dist / 60);
              defY = baseY + (baseY < centerY ? -35 : 35) * influence * Math.sin((x - time * speed * 20) * 0.02);
            }

            if (x === 0) ctx.moveTo(x, defY);
            else ctx.lineTo(x, defY);
          }

          const streamGrad = ctx.createLinearGradient(0, 0, width, 0);
          streamGrad.addColorStop(0, 'rgba(59, 130, 246, 0.2)');
          streamGrad.addColorStop(0.5, 'rgba(0, 242, 254, 0.8)');
          streamGrad.addColorStop(1, 'rgba(16, 185, 129, 0.4)');

          ctx.strokeStyle = streamGrad;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [simType, loadValue, showMesh]);

  // Derived metrics
  const vonMisesStress = Math.round((loadValue / 500) * 380 + 45); // MPa
  const safetyFactor = (350 / (vonMisesStress || 1)).toFixed(2);
  const reynoldsNum = (loadValue * 14200).toLocaleString();

  return (
    <section id="simulation" className="py-24 relative bg-slate-950 border-t border-slate-800">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag justify-center mx-auto">
            <span>Interactive Virtual Validation Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            FEA & CFD <span className="gradient-text">Simulation Playground</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Experience how Rise Point Consultancy Services validates structural reliability and fluid dynamics before physical manufacturing.
          </p>
        </div>

        {/* Playground Card */}
        <div className="glass-card p-6 sm:p-8 border-cyan-500/30 bg-slate-900/90 shadow-2xl">
          
          {/* Top Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            
            {/* Sim Switcher */}
            <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
              <button
                onClick={() => {
                  setSimType('fea');
                  setLoadValue(250);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  simType === 'fea'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Activity className="w-4 h-4" />
                <span>FEA Stress Analysis</span>
              </button>

              <button
                onClick={() => {
                  setSimType('cfd');
                  setLoadValue(60);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  simType === 'cfd'
                    ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Wind className="w-4 h-4" />
                <span>CFD Fluid Aerodynamics</span>
              </button>
            </div>

            {/* Mesh Toggle & Action */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowMesh(!showMesh)}
                className={`px-3 py-2 rounded-lg text-xs font-mono border transition-all ${
                  showMesh
                    ? 'bg-cyan-950/60 border-cyan-500/40 text-cyan-400'
                    : 'bg-slate-800/40 border-slate-700 text-slate-400'
                }`}
              >
                {showMesh ? 'Mesh: ON (Wireframe)' : 'Mesh: OFF'}
              </button>

              <button
                onClick={onOpenQuote}
                className="btn-primary text-xs px-4 py-2"
              >
                Request Custom Simulation
              </button>
            </div>

          </div>

          {/* Main Visualizer Canvas Area */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden mb-8 shadow-inner">
            <canvas ref={canvasRef} className="w-full h-full block" />
            
            {/* Live HUD Overlay */}
            <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-xs font-mono space-y-1">
              <div className="text-cyan-400 font-bold flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>{simType === 'fea' ? 'SOLVER: FEA Structural (Von Mises)' : 'SOLVER: CFD Navier-Stokes Streamlines'}</span>
              </div>
              <div className="text-slate-400">
                {simType === 'fea' ? `Applied Force: ${loadValue} kN` : `Fluid Velocity: ${loadValue} m/s`}
              </div>
            </div>

            {/* Bottom Legend Color Bar */}
            <div className="absolute bottom-4 right-4 bg-slate-900/85 backdrop-blur-md p-3 rounded-xl border border-slate-800 flex items-center gap-3 text-[11px] font-mono">
              <span className="text-slate-400">Heatmap:</span>
              <div className="w-32 h-3 rounded bg-gradient-to-r from-blue-500 via-cyan-400 via-amber-400 to-red-500" />
              <span className="text-slate-300">Min ➔ Max</span>
            </div>
          </div>

          {/* Slider & Dynamic Metric Readout Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
            
            {/* Interactive Slider Controls */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex justify-between items-center text-sm font-bold text-white">
                <span className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <span>{simType === 'fea' ? 'Adjust Applied Mechanical Load (kN)' : 'Adjust Flow Airspeed (m/s)'}</span>
                </span>
                <span className="text-cyan-400 font-mono text-base">{loadValue} {simType === 'fea' ? 'kN' : 'm/s'}</span>
              </div>

              <input
                type="range"
                min={simType === 'fea' ? "50" : "10"}
                max={simType === 'fea' ? "500" : "120"}
                value={loadValue}
                onChange={(e) => setLoadValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>{simType === 'fea' ? '50 kN (Low Load)' : '10 m/s (Laminar)'}</span>
                <span>{simType === 'fea' ? '500 kN (Extreme Load)' : '120 m/s (High Speed)'}</span>
              </div>
            </div>

            {/* Calculated Metrics Readouts */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              
              {simType === 'fea' ? (
                <>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-1">Max Von Mises Stress</div>
                    <div className={`text-2xl font-extrabold font-mono ${vonMisesStress > 300 ? 'text-red-400' : 'text-amber-400'}`}>
                      {vonMisesStress} <span className="text-xs text-slate-400">MPa</span>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-1">Safety Factor (FoS)</div>
                    <div className={`text-2xl font-extrabold font-mono ${safetyFactor < 1.2 ? 'text-red-400' : 'text-emerald-400'}`}>
                      {safetyFactor} <span className="text-xs text-slate-400">x</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-1">Reynolds Number (Re)</div>
                    <div className="text-2xl font-extrabold font-mono text-cyan-400">
                      {reynoldsNum}
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-1">Drag Coeff (Cd)</div>
                    <div className="text-2xl font-extrabold font-mono text-blue-400">
                      0.284 <span className="text-xs text-slate-400">optimized</span>
                    </div>
                  </div>
                </>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
