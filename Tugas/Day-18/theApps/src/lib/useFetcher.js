import axios from 'axios';
import {useEffect, useState} from 'react';

const useFetcher = ({url,method, data=null, config=null}) => {
  const [response, setResponse] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          [method](url, JSON.parse(config), JSON.parse(data))
          .then((res) => {
            setResponse(res);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (error) {
        setErr(error);
      }
    };
    getData();
  }, [url, method, data, config]);
  return {response, err, isLoading};
};
export default useFetcher;
