export const breakpoints = Object.freeze({
  sm: '576px',
  md: '768px',
  lg: '1024px',
})

export const mediaQueryMinWidth = (size: keyof typeof breakpoints) => 
  `@media (min-width: ${breakpoints[size]})`

export const mediaQueryMaxWidth = (size: keyof typeof breakpoints) => 
  `@media (max-width: ${breakpoints[size]})`

export const darkModeQuery = '[data-theme=\'dark\']'