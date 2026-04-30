'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    document.documentElement.className = saved;
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.className = next;
  };

  return (
    <button onClick={toggle} className="p-2 rounded-md bg-gray-200 dark:bg-gray-700">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}