import { useEffect, useState } from 'react';

const CallResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch('/api/calls/results');
      const data = await response.json();
      setResults(data);
    };

    fetchResults();
  }, []);

  return (
    <div>
      <h2>Call Results</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <p>Phone Number: {result.phoneNumber}</p>
            <p>Message: {result.message}</p>
            <p>Status: {result.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CallResults;