import Particles from 'react-tsparticles';

export default function BgComponent() {
  return (
    <>
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
          fpsLimit: 900,
          interactivity: {
            detectsOn: 'window',
            events: {
              resize: true,
              onClick: {
                mode: 'remove',
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
                      value: '#f8f8f8',
                    },
                  },
                  radius: 1000,
                },
              },
              attract: {
                distance: 500,
                duration: 1000,
                factor: 1000,
                maxSpeed: 1,
                speed: 1,
              },
              bubble: {
                distance: 100,
                duration: 200,
                opacity: 0.8,
                size: 6,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                duration: 4,
              },
            },
          },
          particles: {
            color: {
              value: ['#ffffff'],
              animation: {
                enable: true,
                speed: 500,
                sync: false,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 1,
                color: '#fffff',
              },
              polygon: {
                nb_sides: 0,
              },
              image: {
                src: '/ico/particle.png',
                width: 10,
                height: 10,
              },
            },
            shadow: {
              color: 'blue',
              blur: 5,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: 'top',
              enable: true,
              outMode: 'bounce',
              random: true,
              speed: 1,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 8000,
              },
              value: 2200,
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 0.01,
                opacity_min: 0.65,
                sync: true,
              },
            },

            size: {
              value: 1,
              random: true,
              animation: {
                enable: true,
                speed: 20,
                minimumValue: 0.1,
                sync: true,
              },
            },
          },
          particles_nb: 2,
          detectRetina: true,
        }}
      />
    </>
  );
}
