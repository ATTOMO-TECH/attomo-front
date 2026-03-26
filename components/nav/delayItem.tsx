import { useState, useEffect } from 'react';

interface Props {
  children: any;
  delay: any;
}

export const Delay = ({ children, delay }: Props) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setDone(true), delay);
    return () => clearTimeout(showTimer);
  });

  return done && <>{children}</>;
};
