import { useEffect, useState } from "react";

interface FetchOptions extends RequestInit {
  // Add any specific options you need for your fetch calls
}

interface FetchResult<T> {
  data: T | undefined;
  isError: boolean;
  isLoading: boolean;
}

export function useFetch<T>(url: string, options: FetchOptions = {}): FetchResult<T> {
  const [data, setData] = useState<T | undefined>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData(undefined);
    setIsError(false);
    setIsLoading(true);

    const controller = new AbortController();

    fetch(url, { signal: controller.signal, ...options })
      .then((res) => {
        if (res.status === 200) {
          return res.json() as Promise<T>; // Assuming T is the expected response type
        }
        return Promise.reject(res);
      })
      .then(setData)
      .catch((e) => {
        // an AbortError is thrown if the abort() function is called
        if (e.name === "AbortError") return;

        setIsError(true);
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [url, options]);

  return { data, isError, isLoading };
}
