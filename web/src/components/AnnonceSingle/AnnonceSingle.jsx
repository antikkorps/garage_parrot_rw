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
      {annonce.Image.length > 0 && (
        <>
          <p>Images:</p>
          {annonce.Image.map((image) =>
            image.featuredImage ? (
              <div key={image.id}>
                <img
                  src={image.url}
                  alt={image.name}
                  width="200px"
                  height="auto"
                />
                <p>{image.name}</p>
              </div>
            ) : null
          )}
        </>
      )}
    </article>
  )
}

export default AnnonceSingle
