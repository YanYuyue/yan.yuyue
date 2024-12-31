

import { PublicationList } from './components';

import pubsWork from './_pub_working.bib';
import pubsConf from './_pub_conference.bib';
import pubsJour from './_pub_journal.bib';


export default function () {
  return <>
    <h1>Working Publications</h1>
    <PublicationList entries={pubsWork} headCharacter='W' />
    <h1>Journal Papers</h1>
    <PublicationList entries={pubsJour} headCharacter='J' />
    <h1>Conference Papers</h1>
    <PublicationList entries={pubsConf} headCharacter='C' />
  </>
}