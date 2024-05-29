import React, { useEffect, useState } from 'react';
import { unlockDoor } from '../api/door';

const DoorAccess: React.FC = () => {
  const [status, setStatus] = useState<string>('Checking your location...');

  useEffect(() => {
    const checkLocationAndUnlockDoor = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            unlockDoor(latitude, longitude)
              .then(({ data }) => {
                if (data === 'distance') {
                  setStatus('You are too far from the door to unlock it');
                  return;
                }

                if (data === 'subscription') {
                  setStatus('You do not have a subscription to unlock the door');
                  return;
                }

                if (data === 'success') {
                  setStatus('Door unlocked');
                }
              })
              .catch((error) => {
                setStatus('Failed to unlock the door');
                console.error('Failed to unlock the door:', error);
              });
          },
          (error) => {
            setStatus('Failed to get your location');
            console.error('Failed to get your location:', error);
          },
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
      } else {
        setStatus('Geolocation is not supported by this browser');
      }
    };

    checkLocationAndUnlockDoor();
  }, []);

  return (
    <div>
      {status}
    </div>
  );
};

export default DoorAccess;
