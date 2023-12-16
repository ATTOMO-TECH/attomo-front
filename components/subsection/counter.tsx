import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import AnimatedProgressProvider from './animated';
import { SubSections } from './style';
import '@fontsource/lato/300.css';

export default function Counter() {
  const [value, setValue] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  const handleScroll = () => {
    if (isMounted) {
      if (window.scrollY > 300) {
        setValue(360);
      } else {
        setValue(0);
      }
    }
  };

  useEffect(() => {
    setIsMounted(true);
    window.addEventListener('scroll', handleScroll);
    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <>
      <SubSections.SectionCounter>
        <AnimatedProgressProvider
          valueStart={value}
          valueEnd={value}
          duration={1.1}>
          {(valueCount) => {
            const roundedValue = Math.round(valueCount);
            return (
              <CircularProgressbar
                className=" "
                strokeWidth={1}
                styles={{
                  background: {
                    fill: 'none',
                  },
                  path: { stroke: 'white' },

                  trail: { stroke: 'none' },

                  text: {
                    fontFamily: 'Lato',
                    fill: 'white',
                    fontSize: '',
                    fontWeight: 300,
                  },
                }}
                text={`${roundedValue}º`}
                value={(roundedValue * 3) / 10}
              />
            );
          }}
        </AnimatedProgressProvider>
      </SubSections.SectionCounter>
    </>
  );
}
