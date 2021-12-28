import { useState, useEffect } from "react";

const useBoredFetch = (topic) => {
  const [data, setData] = useState(null);
  const [param, setParam] = useState(topic);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let url =
      param != undefined
        ? `https://www.boredapi.com/api/activity?type=${param}`
        : `https://www.boredapi.com/api/activity`;

    const getData = async () => {
      let response = await fetch(url);
      response = await response.json();

      if ("error" in response) {
        setData({
          activity: "Can't think of anything right now, try again later.",
        });
        setIsLoading(false);
      } else {
        setData(response);
        setIsLoading(false);
      }
    };

    getData();
  }, [param]);

  return { result: data, loading: isLoading, method: setParam };
};

export default useBoredFetch;
