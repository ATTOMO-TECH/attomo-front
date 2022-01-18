import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
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
        <CircularProgressbar
          value={value}
          strokeWidth={1}
          backgroundPadding={0}
          text={`${value}º`}
          styles={{
            background: {
              fill: 'none',
            },
            path: { stroke: 'white' },
            trail: { stroke: '#0a0c1a' },
            text: {
              fill: 'white',
              fontSize: '',
              fontWeight: 'lighter',
              fontFamily: 'Lato',
            },
          }}
        />
      </SubSections.SectionCounter>
    </>
  );
}
