import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AnnonceDetailPage = () => {
  return (
    <>
      <MetaTags title="AnnonceDetail" description="AnnonceDetail page" />

      <h1>AnnonceDetailPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AnnonceDetailPage/AnnonceDetailPage.jsx</code>
      </p>
      <p>
        My default route is named <code>annonceDetail</code>, link to me with `
        <Link to={routes.annonceDetail()}>AnnonceDetail</Link>`
      </p>
    </>
  )
}

export default AnnonceDetailPage
