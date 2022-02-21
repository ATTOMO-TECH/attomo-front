import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import AnimatedProgressProvider from './animated';
import { SubSections } from './style';

export default function Counter() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setValue(360);
      } else {
        setValue(0);
      }
    });
  }, []);

  return (
    <>
      <SubSections.SectionCounter>
        <>
          <AnimatedProgressProvider
            valueStart={value}
            valueEnd={value}
            duration={0.4}>
            {(valueCount) => {
              const roundedValue = Math.round(valueCount);
              return (
                <CircularProgressbar
                  className="animate-pulse"
                  strokeWidth={1}
                  text={`${roundedValue}º`}
                  styles={{
                    background: {
                      fill: 'none',
                    },
                    path: { stroke: 'white' },
                    trail: { stroke: 'none' },
                    text: {
                      fill: 'white',
                      fontSize: '',
                      fontWeight: 'lighter',
                      fontFamily: 'Lato',
                    },
                  }}
                  value={roundedValue}
                />
              );
            }}
          </AnimatedProgressProvider>
        </>
      </SubSections.SectionCounter>
    </>
  );
}
