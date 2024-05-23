import React, { useEffect, useState } from 'react';
import { unlockDoor } from '../api/door';

const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371e3; // Radius of the Earth in meters
  const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in meters
  return d;
};

const DoorAccess: React.FC = () => {
  const [status, setStatus] = useState<string>('Checking your location...');

  const targetLatitude = 28.84578826621423;
  const targetLongitude = -81.32068611268436;

  useEffect(() => {
    const checkLocationAndUnlockDoor = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const distance = calculateDistance(latitude, longitude, targetLatitude, targetLongitude);

            if (distance <= 500) {
              unlockDoor()
                .then(() => {
                  setStatus('Door unlocked');
                })
                .catch((error) => {
                  setStatus('Failed to unlock the door');
                  console.error('Failed to unlock the door:', error);
                });
            } else {
              setStatus('You are too far from the door to unlock it: Distance is ' + distance.toFixed(2) + ' meters');
            }
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
