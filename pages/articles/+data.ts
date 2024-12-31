import path from "path"
import fs from "fs"
import { PageContext } from "vike/types"
import { articlesDirectory } from "./defs"

export function data(pageContext: PageContext) {

  const { filename } = pageContext.routeParams

  const fullPath = path.join(articlesDirectory, `${filename}.md`)
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  return {
    article: fileContents,
  }
}
