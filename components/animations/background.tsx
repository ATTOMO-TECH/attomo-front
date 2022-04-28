import { useEffect } from 'react';
import { Styles } from './styles';

declare global {
  interface Window {
    nakerback: any;
  }
}

const onLoadBg = () => {
  if (process?.browser) {
    const aScript = document.createElement('script');
    aScript.src = 'https://d23jutsnau9x47.cloudfront.net/back/v1.0.9/viewer.js';
    document.head.appendChild(aScript);

    aScript.onload = () => {
      window.nakerback.render({
        container: document.getElementById('back-container'),
        particle: {
          direction1: { x: 0, y: 0, z: 100 },
          direction2: { x: 0, y: 0, z: 100 },
          life: 5,
          power: 0.005,
          texture:
            'https://res.cloudinary.com/naker-io/image/upload/v1566560053/circle_05.png',
          number: 1000,
          colorStart: [251, 251, 251, 0],
          colorEnd: [57, 138, 171, 0.52],
          sizeStart: 0.1,
          sizeEnd: 0.4,
        },
        environment: {
          gradient: 'radial',
          sensitivity: 1,
          colorStart: [57, 138, 171, 0.1],
          colorEnd: [11, 11, 17, 0.5],
        },
        waterMark: false,
      });
    };
  }
};
export default function Background() {
  useEffect(() => {
    onLoadBg();
    // document.addEventListener('' , onLoadBg, {passive: true});
  }, []);
  return <Styles.Bg id="back-container" />;
}
