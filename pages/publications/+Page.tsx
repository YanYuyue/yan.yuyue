

import { parseAuthor } from './author';
import { Publication } from './Publication';
import pubs from './publications.bib'


type _P = {
  type: string,
  title: string,
  author: string,
}


export default function() {
  return <div>
    {pubs.map((pub, i) => <Publication key={i} entry={pub as any}/>)}
  </div>
}