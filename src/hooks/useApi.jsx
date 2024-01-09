import { useState, useEffect } from "react";

const useApi = (URL) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState("false");
  const [error, setError] = useState(null);

  const fetchApiCall = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(URL);
      const res = await response.json();
      setFetchedData(res);
    } catch (e) {
      console.log("error found while fetching data \n", e);
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchApiCall();
  }, []);

  return [fetchedData, isLoading, error];
};

export default useApi;
