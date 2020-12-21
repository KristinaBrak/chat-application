import {useState, useEffect} from 'react';
import {KEY} from '../consts';

const useAPI = initialUrl => {
  const [url, setUrl] = useState(initialUrl);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);
  const [shouldReload, setShouldReload] = useState(true);

  const fetchData = () => {
    if (shouldReload) {
      fetch(url, {
        method: 'GET',
        headers: {
          'secret-key': KEY,
          'Content-Type': 'application/json',
        },
      })
        .then(
          response =>
            new Promise(resolve => {
              response.json().then(json => resolve({json, status: response.status}));
            })
        )
        .then(({json, status}) => {
          if (status !== 200) {
            setError(json.message);
          } else {
            setData(json);
          }
          setLoading(false);
          setShouldReload(false);
        })
        .catch(err => {
          setShouldReload(false);
          setLoading(false);
          setError(err.message);
        });
    }
  };

  const changeUrl = newUrl => {
    setUrl(newUrl);
    setShouldReload(true);
    setLoading(true);
  };

  useEffect(fetchData, [url, shouldReload]);

  const reload = () => {
    setShouldReload(true);
  };

  return [loading, error, data, reload, changeUrl];
};

export default useAPI;
