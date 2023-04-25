import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  // data from an api
  const [data, setData] = useState([]);
  // getting status
  const [loading, setLoading] = useState(true);
  // possible error
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const json = await response.json();
        // convert data to the list of js objects
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    console.log("fetching")
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;