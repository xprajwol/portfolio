import { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    axios.get(`${API}${endpoint}`)
      .then(res => { if (!cancelled) { setData(res.data); setLoading(false); } })
      .catch(err => { if (!cancelled) { setError(err.message); setLoading(false); } });
    return () => { cancelled = true; };
  }, [endpoint]);

  return { data, loading, error };
}

export async function postContact(payload) {
  const res = await axios.post(`${API}/api/contact`, payload);
  return res.data;
}
