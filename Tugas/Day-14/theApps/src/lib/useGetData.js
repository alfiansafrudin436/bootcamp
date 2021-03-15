import axios from 'axios';
import {useEffect, useState} from 'react';

const useGetData = ({url}) => {
  const [response, setResponse] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          .get(url)
          .then((res) => {
            setResponse(res.data);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (error) {
        setErr(error);
      }
    };
    getData();
  }, [url]);
  return {response, err, isLoading};
};
export default useGetData;
