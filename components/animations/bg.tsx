import Particles from 'react-tsparticles';

export default function BgComponent() {
  return (
    <Particles
      id="tsparticles"
      options={{
        autoPlay: true,
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
            },

            onhover: {
              enable: true,
              mode: 'attract',
              parallax: {
                enable: true,
                force: 100,
                smooth: 1000,
              },
            },
          },
          modes: {
            light: {
              area: {
                gradient: {
                  start: {
                    value: '#ffffff',
                  },
                  stop: {
                    value: '#ffffff',
                  },
                },
                radius: 1000,
              },
            },
            attract: {
              distance: 100,
              duration: 1000,
              factor: 1,
              maxSpeed: 10,
              speed: 1,
            },
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
            value: ['#ffffff', '#757676', '#ffffff', '#800909', '#ffffff'],
            animation: {
              enable: true,
              speed: 50,
              sync: false,
            },
          },
          shape: {
            type: 'circle',
          },
          shadow: {
            color: 'blue',
            blur: 5,
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
            value: 220,
          },
          opacity: {
            value: 0.4,
          },

          size: {
            value: 1,
            random: true,
            animation: {
              enable: true,
              speed: 20,
              minimumValue: 0.1,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
