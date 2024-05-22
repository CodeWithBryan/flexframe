// React functional component called debug

import React, { useState } from 'react';

const Debug: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  // check if geolocation is supported on this browser
  if (navigator.geolocation) {
    const timeoutVal = 10 * 1000 * 1000; // set a timeout value for the query
    navigator.geolocation.getCurrentPosition(
      // what to do if query succeeds
      ((position) => setStatus("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude)),
      ((error) => {
        // what to do if query fails:
        const errors: { [key: number]: string } = {
          1: 'Permission denied',
          2: 'Position unavailable',
          3: 'Request timeout'
        };

        setStatus(errors[error.code]);
      }),
      // these 3 parameters are very important, especially the first one
      { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
    );
  }
  else {
    alert("Geolocation is not supported by this browser");
  }

  return (
    // JSX code for your component's UI goes here
    <div>
      {status}
    </div>
  );
};

export default Debug;