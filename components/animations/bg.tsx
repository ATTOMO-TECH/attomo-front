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
                smooth: 100,
              },
            },
          },
          modes: {
            bubble: {
              distance: 4,
              duration: 200,
              opacity: 0.8,
              size: 100,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },

          collisions: {
            enable: true,
          },
          move: {
            direction: 'top',
            enable: true,
            outMode: 'destroy',
            random: true,
            speed: 1,
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
            value: 0.4,
          },

          size: {
            random: true,
            value: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
