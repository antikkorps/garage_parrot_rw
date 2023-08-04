import { MetaTags } from '@redwoodjs/web'

import AnnonceVehiculeSingleCell from 'src/components/AnnonceVehiculeSingleCell'

const AnnonceDetailPage = ({ id }) => {
  return (
    <>
      <MetaTags title="AnnonceDetail" description="AnnonceDetail page" />

      <AnnonceVehiculeSingleCell id={id} />
    </>
  )
}

export default AnnonceDetailPage
