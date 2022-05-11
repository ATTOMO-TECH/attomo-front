import { useEffect } from 'react';

export const handleFocus = (idTag: string) => {
  document.getElementById(idTag)?.focus();
};

export const handleFocusClass = (
  idTag: string,
  listener: EventListenerOrEventListenerObject,
) => {
  document
    .getElementsByClassName(idTag)
    .item(0)
    ?.addEventListener('focus', listener);
};
export const handleClickTouch = (link: string) => {
  document.location.href = link;
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
