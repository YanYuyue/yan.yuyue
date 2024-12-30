import { useEffect, useState } from "react";

export const breakpoints = Object.freeze({
  sm: 576,
  md: 768,
  lg: 1024,
});

type Breakpoint = keyof typeof breakpoints;

export const mediaQueryMinWidth = (size: keyof typeof breakpoints) => 
  `@media (min-width: ${breakpoints[size]}px)`

export const mediaQueryMaxWidth = (size: keyof typeof breakpoints) => 
  `@media (max-width: ${breakpoints[size] - 1}px)`

export const darkModeQuery = '[data-theme=\'dark\']'

export function useBreakpoint(): Breakpoint {
  const [value, setValue] = useState<Breakpoint>('lg');

  useEffect(() => {
    const mediaQueries = {
      sm: window.matchMedia(`(max-width: ${breakpoints.sm - 1}px)`),
      md: window.matchMedia(`(min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 1}px)`),
      lg: window.matchMedia(`(min-width: ${breakpoints.md}px)`)
    };

    function handleChange() {
      if (mediaQueries.sm.matches) {
        setValue('sm');
      } else if (mediaQueries.md.matches) {
        setValue('md'); 
      } else {
        setValue('lg');
      }
    }

    handleChange();

    Object.values(mediaQueries).forEach(mq => {
      mq.addEventListener('change', handleChange);
    });

    return () => {
      Object.values(mediaQueries).forEach(mq => {
        mq.removeEventListener('change', handleChange);
      });
    };
  }, []);

  return value;
}