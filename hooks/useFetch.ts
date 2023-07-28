import useSWR from "swr";

const useFetch = <T>(url: string) => {
  const { data, error } = useSWR<T>(url, async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });
  return { data, error };
};

export default useFetch;
