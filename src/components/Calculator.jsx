import { useState } from 'react';

const buttons = [
  ['7', '8', '9', '÷'],
  ['4', '5', '6', '×'],
  ['1', '2', '3', '−'],
  ['0', '.', '=', '+'],
  ['C']
];

function format(num) {
  if (num === null || num === undefined || num === '') return '';
  const n = Number(num);
  if (!Number.isFinite(n)) return String(num);
  return n.toString();
}

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [acc, setAcc] = useState(null);
  const [op, setOp] = useState(null);
  const [justEvaluated, setJustEvaluated] = useState(false);

  const handleInput = (value) => {
    // Clear
    if (value === 'C') {
      setDisplay('0');
      setAcc(null);
      setOp(null);
      setJustEvaluated(false);
      return;
    }

    // Operator mapping
    if (['+', '−', '×', '÷'].includes(value)) {
      const current = Number(display);
      if (acc === null) {
        setAcc(current);
      } else if (op) {
        const res = evaluate(acc, current, op);
        setAcc(res);
        setDisplay(String(res));
      }
      setOp(value);
      setJustEvaluated(false);
      return;
    }

    // Equals
    if (value === '=') {
      if (op !== null && acc !== null) {
        const res = evaluate(acc, Number(display), op);
        setDisplay(String(res));
        setAcc(null);
        setOp(null);
        setJustEvaluated(true);
      }
      return;
    }

    // Number / dot
    if (value === '.') {
      if (justEvaluated) {
        setDisplay('0.');
        setJustEvaluated(false);
        return;
      }
      if (!display.includes('.')) setDisplay(display + '.');
      return;
    }

    // digit
    if (/^\d$/.test(value)) {
      if (display === '0' || justEvaluated) {
        setDisplay(value);
        setJustEvaluated(false);
      } else setDisplay(display + value);
      return;
    }
  };

  return (
    <div className="relative z-10 mx-auto max-w-sm w-full p-6">
      <div className="rounded-3xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-md shadow-[0_0_60px_rgba(99,102,241,0.25)] overflow-hidden">
        <div className="px-6 pt-8 pb-6 bg-gradient-to-b from-slate-900/80 to-slate-900">
          <div className="text-right text-5xl font-light text-white tracking-tight min-h-[64px]">
            {format(display)}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 p-6">
          {buttons.flat().map((b, idx) => {
            const isOp = ['+', '−', '×', '÷', '='].includes(b);
            const isWide = b === '0' ? 'col-span-2' : b === 'C' ? 'col-span-4' : '';
            const base = 'h-14 rounded-2xl text-lg font-medium transition-transform active:scale-[0.98]';
            const color = b === 'C'
              ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              : isOp
              ? 'bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-[0_10px_35px_-10px_rgba(99,102,241,0.9)] hover:from-violet-500 hover:to-indigo-500'
              : 'bg-slate-800/80 text-slate-100 hover:bg-slate-700/80';
            return (
              <button
                key={idx}
                className={`${base} ${color} ${isWide}`}
                onClick={() => handleInput(b)}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-slate-400">
        Supports +, −, ×, ÷, decimals, and chaining operations.
      </p>
    </div>
  );
}

function evaluate(a, b, operator) {
  switch (operator) {
    case '+':
      return round(a + b);
    case '−':
      return round(a - b);
    case '×':
      return round(a * b);
    case '÷':
      return b === 0 ? NaN : round(a / b);
    default:
      return b;
  }
}

function round(n) {
  return Math.round(n * 1e12) / 1e12;
}
