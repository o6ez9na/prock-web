import { useState, useEffect } from "react";

export function useMetricData(apiMethod, storageKey, defaultSeconds = 5) {
  const [data, setData] = useState([]);

  const [intervalSec, setIntervalSec] = useState(() => {
    return Number(localStorage.getItem(storageKey) || defaultSeconds);
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiMethod();
        setData(response.data);
      } catch (e) {
        console.error(`Error fetching ${storageKey}:`, e);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, intervalSec * 1000);

    return () => clearInterval(intervalId);
  }, [intervalSec, apiMethod, storageKey]);

  const updateInterval = (newSeconds) => {
    setIntervalSec(newSeconds);
    localStorage.setItem(storageKey, newSeconds);
  };

  return { data, intervalSec, updateInterval };
}
