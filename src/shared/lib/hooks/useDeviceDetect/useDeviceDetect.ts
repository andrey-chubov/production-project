import { useState, useEffect } from 'react';

// export function useDeviceDetect() {
//   const isMobile = window.matchMedia;
//   if (!isMobile) return false;

//   const device = isMobile('(pointer:coarse)');
//   return device.matches;
// }

// export const useDeviceDetect = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.matchMedia('(pointer:coarse)').matches);

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize); // удаляем обработчик
//   }, []);

//   return isMobile;
// };

export const useDeviceDetect = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (width <= 768);
};
