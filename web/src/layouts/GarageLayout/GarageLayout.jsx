import { Link, routes } from '@redwoodjs/router'

const GarageLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Garage Parrot</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Accueil</Link>
            </li>
            <li>
              <Link to={routes.about()}>A propos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}
export default GarageLayout
