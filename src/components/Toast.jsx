import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="bg-slate-900 border border-cyan-500/40 text-white p-4 rounded-xl shadow-2xl flex items-center gap-3 max-w-md backdrop-blur-md">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5 text-cyan-400" />
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase">
            {toast.title || 'Submission Successful'}
          </h4>
          <p className="text-xs text-slate-300">
            {toast.message}
          </p>
        </div>
        <button onClick={onClose} className="text-slate-500 hover:text-white p-1">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
