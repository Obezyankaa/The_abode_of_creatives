import { useEffect, useState } from "react";

export function useToken() {
     const [token, setToken] = useState('');
console.log('token-->>', token);

  useEffect(() => {
    if (window.__token__) {
      setToken(window.__token__);
    }
  }, [])
    return [token]
}