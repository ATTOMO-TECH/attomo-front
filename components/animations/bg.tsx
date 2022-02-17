import Particles from 'react-tsparticles';

export default function BgComponent() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: '#0F0B11',
          },
        },
        fullScreen: {
          zIndex: -1,
        },
        fpsLimit: 300,
        interactivity: {
          detectsOn: 'window',
          events: {
            resize: true,
            onClick: {
              enable: true,
              mode: [],
            },
            onhover: {
              enable: true,
              mode: 'attract',
              parallax: {
                enable: true,
                force: 10,
                smooth: 50,
              },
            },
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },

          collisions: {
            enable: false,
          },
          move: {
            direction: 'top',
            enable: true,
            outMode: 'bounce',
            random: true,
            speed: 2,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.3,
          },

          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
