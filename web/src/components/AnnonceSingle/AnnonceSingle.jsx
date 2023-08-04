import { Link, routes } from '@redwoodjs/router'

const AnnonceSingle = ({ annonce }) => {
  return (
    <article>
      <h2>
        <Link to={routes.annonceDetail({ id: annonce.id })}>
          {annonce.title}
        </Link>
      </h2>
      <p>Description : {annonce.description}</p>
      <p>Kilométrage : {annonce.kilometrage}</p>
      <p>Année de mise en circulation : {annonce.yearofcirculation}</p>
      <p>Prix : {annonce.price} Euros</p>
      <p>{annonce.published}</p>
      <p>
        {annonce.createdAt} by {annonce.authorId}
      </p>
    </article>
  )
}

export default AnnonceSingle
