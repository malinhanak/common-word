import { useState, useEffect } from "react";

export const useLocalStorage = (key: string, initialValue: boolean = false) => {
  const [value, setValue] = useState(() => {
    const currentValue = localStorage.getItem(key);
    return currentValue ? JSON.parse(currentValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
