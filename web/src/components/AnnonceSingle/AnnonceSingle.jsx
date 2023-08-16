import { Link, routes } from '@redwoodjs/router'

const AnnonceSingle = ({ annonce }) => {
  return (
    <article className="mx-auto my-5 flex justify-center overflow-hidden rounded p-4 shadow-lg sm:w-1/3">
      {annonce.Image.length > 0 && (
        <>
          {annonce.Image.map((image) =>
            image.featuredImage ? (
              <div key={image.id}>
                <a href={image.url}>
                  <img
                    src={image.url}
                    alt={image.name}
                    width="200px"
                    height="auto"
                    className="w-full"
                  />
                </a>
                <div className="px-6 pb-2 pt-4">
                  <p className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    {image.name}
                  </p>
                </div>
              </div>
            ) : null
          )}
        </>
      )}
      <div className="px-6 py-4">
        <h2 className="my-2 text-xl font-bold">
          <Link to={routes.annonceDetail({ id: annonce.id })}>
            {annonce.title}
          </Link>
        </h2>
        <div className="text-base text-gray-700">
          <p>Description : {annonce.description}</p>
          <p>Kilométrage : {annonce.kilometrage}</p>
          <p>Année de mise en circulation : {annonce.yearofcirculation}</p>
          <p>Prix : {annonce.price} Euros</p>
          <p>{annonce.published}</p>
          <p>
            {annonce.createdAt} by {annonce.authorId}
          </p>
        </div>
      </div>
    </article>
  )
}

export default AnnonceSingle
