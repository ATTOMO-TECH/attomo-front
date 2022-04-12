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
          direction1: { x: 0, y: 0, z: 0 },
          direction2: { x: -100, y: -100, z: -100 },
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
          gradient: 'horizontal',
          sensitivity: 0.05,
        },
        waterMark: false,
        // <script data-who="💎 Made with naker.io 💎" src="https://d23jutsnau9x47.cloudfront.net/back/v1.0.9/viewer.js" data-option="{|environment|:{|gradient|:|horizontal|,|sensitivity|:0.1,|colorStart|:[0,0,0,1],|colorEnd|:[0,0,0,1]},|particle|:{|life|:5,|power|:0.005,|texture|:|https://res.cloudinary.com/naker-io/image/upload/v1566560053/circle_05.png|,|number|:646,|colorStart|:[255,255,255,1],|colorEnd|:[57,138,171,0.52],|sizeStart|:0.14,|sizeEnd|:0.28,|direction1|:{|x|:0,|y|:0,|z|:0},|direction2|:{|x|:0,|y|:0,|z|:0}},|waterMark|:false}" ></script>
        // environment: {
        //   gradient: 'horizontal',
        //   sensitivity: 0.32,
        //   colorStart: [0, 0, 0, 1],
        //   colorEnd: [0, 0, 0, 1],
        // },
        // particle: {
        //   life: 5,
        //   power: 0.1,
        //   texture:
        //     'https://res.cloudinary.com/naker-io/image/upload/v1566560053/circle_05.png',
        //   number: 888,
        //   colorStart: [255, 255, 255, 1],
        //   colorEnd: [57, 138, 171, 0.52],
        //   sizeStart: 0.1,
        //   sizeEnd: 0.2,
        //   direction1: { x: 100, y: 100, z: 100 },
        //   direction2: { x: -100, y: -100, z: -100 },
        // },
      });
    };
  }
};
export default function Background() {
  useEffect(() => {
    onLoadBg();
  }, []);
  return <Styles.Bg id="back-container" />;
}
