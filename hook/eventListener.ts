import { useEffect } from 'react';

export const handleFocus = (idTag: string) => {
  document.getElementById(idTag)?.focus();
};

export const handleClickTouch = (link: string) => {
  document.location.href = link;
};
export const handleExternalTouch = (link: string) => {
  const a = document.createElement('a');
  a.target = '_blank';
  a.href = link;
  a.click();
};

export const useEventListener = (
  getElement: string,
  event: string,
  listener: EventListenerOrEventListenerObject,
): void => {
  useEffect(() => {
    const myAbsolutelyNotNullElement =
      window.document.getElementById(getElement)!;

    myAbsolutelyNotNullElement.addEventListener(event, listener, {
      passive: false,
    });

    return () => {
      myAbsolutelyNotNullElement.removeEventListener(event, listener);
    };
  }, [getElement, event, listener]);
};
