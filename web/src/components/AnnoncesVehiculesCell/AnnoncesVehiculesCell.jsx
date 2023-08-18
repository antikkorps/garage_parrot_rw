import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import { BiSearchAlt } from 'react-icons/bi'

import AnnonceSingle from 'src/components/AnnonceSingle/AnnonceSingle'

export const QUERY = gql`
  query AnnoncesVehiculesQuery {
    annonces {
      id
      title
      description
      kilometrage
      yearofcirculation
      price
      published
      authorId
      createdAt
      Equipment {
        id
        name
      }
      Image {
        id
        name
        url
        featuredImage
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ annonces }) => {
  return (
    <>
      <div className="bg-white dark:bg-stone-950">
        <div className="mx-auto flex py-10 sm:w-1/2">
          <InputGroup size="lg" className="mt-5">
            <Input placeholder="Trouvez votre véhicule" />
            <InputRightAddon>
              <BiSearchAlt width={30} />
            </InputRightAddon>
          </InputGroup>
        </div>
        <div className="card">
          {annonces.map((annonce) => {
            return <AnnonceSingle key={annonce.id} annonce={annonce} />
          })}
        </div>
      </div>
    </>
  )
}
