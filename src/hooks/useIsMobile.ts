import { useSyncExternalStore } from "react";

const query = "only screen and (max-width: 768px)";

const getSnapshot = () => window.matchMedia(query).matches;

const subscribe = (callback: () => void) => {
  const matchMedia = window.matchMedia(query);
  matchMedia.addEventListener("change", callback);

  return () => matchMedia.removeEventListener("change", callback);
};

const getServerSnapshot = () => {
  throw Error("useIsMobile is a client-only hook");
};

export default function useIsMobile() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
