import { useEffect } from 'react';
import { Styles } from './styles';

declare global {
  interface Window {
    nakerback: any;
  }
}

const particle = {
  direction1: { x: 0, y: 0, z: 100 },
  direction2: { x: 0, y: 0, z: 100 },
  life: 5,
  power: 0.05,
  texture:
    'https://res.cloudinary.com/naker-io/image/upload/v1566560053/circle_05.png',
  number: 1000,
  colorStart: [251, 251, 251, 0],
  colorEnd: [57, 138, 171, 0.52],
  sizeStart: 0.1,
  sizeEnd: 0.4,
};
const environment = {
  gradient: 'radial',
  sensitivity: 1,
  colorStart: [57, 138, 171, 0.1],
  colorEnd: [11, 11, 17, 0.5],
};

export default function Background() {
  useEffect(() => {
    const onLoadBg = () => {
      const aScript = document.createElement('script');
      aScript.async = true;
      aScript.src =
        'https://d23jutsnau9x47.cloudfront.net/back/v1.0.9/viewer.js';
      document.head.appendChild(aScript);
      aScript.onload = (e: any) => {
        if (e.cancelable) e.preventDefault();
        window.nakerback.render({
          container: document.getElementById('back-container'),
          particle,
          environment,
          waterMark: false,
          pasive: false,
        });
      };
    };

    onLoadBg();
  }, []);
  document.addEventListener('touchend', (e: any) => e.preventDefault, {
    passive: true,
  });
  document.addEventListener('changedTouches', (e: any) => e.preventDefault, {
    passive: true,
  });
  return <Styles.Bg id="back-container" />;
}
