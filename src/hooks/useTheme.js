import { useEffect, useState } from 'react';

const STORAGE_KEY = 'evix-theme';
const listeners = new Set();
let current = readInitial();

function readInitial() {
  if (typeof window === 'undefined') return 'light';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {}
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}

function apply(theme) {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
}

function setTheme(next) {
  if (next !== 'light' && next !== 'dark') return;
  current = next;
  apply(next);
  try { window.localStorage?.setItem(STORAGE_KEY, next); } catch {}
  listeners.forEach((fn) => fn(next));
}

apply(current);

export function useTheme() {
  const [value, setValue] = useState(current);
  useEffect(() => {
    listeners.add(setValue);
    return () => { listeners.delete(setValue); };
  }, []);
  return [value, () => setTheme(current === 'dark' ? 'light' : 'dark'), setTheme];
}
