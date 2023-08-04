import { MetaTags } from '@redwoodjs/web'

import AnnoncesVehiculesCell from 'src/components/AnnoncesVehiculesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <AnnoncesVehiculesCell />
    </>
  )
}

export default HomePage
