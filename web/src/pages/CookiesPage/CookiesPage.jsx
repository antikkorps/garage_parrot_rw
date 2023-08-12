import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CookiesPage = () => {
  return (
    <>
      <MetaTags title="Cookies" description="Cookies page" />

      <h1>CookiesPage</h1>
      <p>
        Find me in <code>./web/src/pages/CookiesPage/CookiesPage.jsx</code>
      </p>
      <p>
        My default route is named <code>cookies</code>, link to me with `
        <Link to={routes.cookies()}>Cookies</Link>`
      </p>
    </>
  )
}

export default CookiesPage
