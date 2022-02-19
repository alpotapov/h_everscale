import { useCallback, useState, useEffect } from 'react';

const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState('idle');
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(
    (args) => {
      setStatus('pending');
      setValue(null);
      setError(null);

      asyncFunction(...args)
        .then((response) => {
          setStatus('success');
          setValue(response);
        })
        .catch((err) => {
          setStatus('error');
          setError(err);
        });
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (immediate && status === 'idle') {
      execute();
    }
  }, [immediate, execute, status]);

  return { execute, status, value, error };
};

export default useAsync;
