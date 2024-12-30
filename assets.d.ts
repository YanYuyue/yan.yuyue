declare module '*.md' {
  const content: string
  export default content
}

declare module '*.bib' {
  const content: (import("bibtex-js-parser").Entry & { errors?: string[] })[]
  export default content
}