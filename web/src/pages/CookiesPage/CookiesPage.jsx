import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CookiesPage = () => {
  return (
    <>
      <MetaTags title="Cookies" description="Cookies page" />

      <h1> This is the Cookies Policy Page</h1>
      <p>To be written</p>
      <p>
        My default route is named <code>cookies</code>, link to me with `
        <Link to={routes.cookies()}>Cookies</Link>`
      </p>
    </>
  )
}

export default CookiesPage
