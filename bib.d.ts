import { Entry } from "bibtex-js-parser"

declare module '*.bib' {
  const content: (Entry & { errors?: string[] })[]
  export default content
}