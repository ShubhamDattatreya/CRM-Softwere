import React, { useState, useEffect } from 'react';
import axios from "axios";

function TimeZone() {

  const [localTime, setLocalTime] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTime = async () => {
    try {
      const response = await axios.get("http://localhost:5000/timezone");

      const date = new Date(response?.data?.startTime);
      const userLocalTime = date.toLocaleString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      });

      setLocalTime(userLocalTime);
      setLoading(false);

    } catch (err) {
      setError("Fail...");
      setLoading(false);
    }
    
  };
 
  useEffect(() => {

   

    const interval = setInterval(() => {
      fetchTime();
    }, 60000);

    return () => clearInterval(interval);

  }, []);

  if (loading) return <h3 >Time Selecting for your country.......</h3>;
  if (error) return <h3>{error}</h3>;

  // import CircularProgress from '@mui/material/CircularProgress';
  // import Box from '@mui/material/Box';
  
  // export default function CircularIndeterminate() {
  //   return (
  //     <Box sx={{ display: 'flex' }}>
  //       <CircularProgress aria-label="Loading…" />
  //     </Box>
  //   );
  // }
  


  return (
    <div>
      <h3 className='font-bold' >{localTime}</h3>
    </div>
  );
}

export default TimeZone;