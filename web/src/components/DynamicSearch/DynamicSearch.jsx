import React, { useState } from 'react'

import { gql, useQuery } from '@apollo/client'
import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import { BiSearchAlt } from 'react-icons/bi'

import AnnonceSingle from '../AnnonceSingle/AnnonceSingle'

export const SEARCH_QUERY = gql`
  query AnnoncesVehiculesSearchQuery($searchQuery: String!) {
    annonces(
      where: { title: { contains: $searchQuery, mode: "insensitive" } }
    ) {
      id
      title
    }
  }
`

const DynamicSearch = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchInputChange = (event) => {
    const newSearchQuery = event.target.value
    setSearchQuery(newSearchQuery)
  }

  const { data } = useQuery(SEARCH_QUERY, {
    variables: { searchQuery },
    skip: searchQuery === '', // Skip query execution if searchQuery is empty
  })
  const annonces = data?.annonces || []

  return (
    <>
      <div className="mx-auto flex py-10 sm:w-1/2">
        <InputGroup size="lg" className="mt-5">
          <Input
            placeholder="Trouvez votre véhicule"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <InputRightAddon>
            <BiSearchAlt width={30} />
          </InputRightAddon>
        </InputGroup>
      </div>
      <div className="card">
        {annonces.map((annonce) => (
          <AnnonceSingle key={annonce.id} annonce={annonce} />
        ))}
      </div>
    </>
  )
}

export default DynamicSearch
