/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const useDebounceSync = (
  action: () => void,
  waitMilliseconds: number,
  dependencies: any[],
) => {
  useEffect(() => {
    // Debounce logic
    const debounceTimer = setTimeout(() => {
      action();
    }, waitMilliseconds);

    // Cleanup the timer
    return () => clearTimeout(debounceTimer);
  }, [...dependencies]);
}

export default useDebounceSync;