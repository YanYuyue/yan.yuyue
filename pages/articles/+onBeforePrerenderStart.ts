import path from "path"
import fs from "fs"
import { articlesDirectory } from "./defs"

export default function () {
  const filenames = fs.readdirSync(articlesDirectory)
  
  return filenames
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      url: `/articles/${file.replace('.md', '')}`
    }))
}