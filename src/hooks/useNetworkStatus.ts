import { useSyncExternalStore } from "react";

const getSnapshot = () => navigator.onLine;

export default function useNetworkStatus(): boolean {
  const subscribe = (callback: () => void) => {
    window.addEventListener("online", callback);
    window.addEventListener("offline", callback);

    return () => {
      window.removeEventListener("online", callback);
      window.removeEventListener("offline", callback);
    };
  };

  return useSyncExternalStore(subscribe, getSnapshot);
}
