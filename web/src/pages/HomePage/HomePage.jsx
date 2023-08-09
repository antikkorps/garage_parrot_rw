import { MetaTags } from '@redwoodjs/web'

import AnnoncesVehiculesCell from 'src/components/AnnoncesVehiculesCell'
import HeroSection from 'src/components/HeroSection/HeroSection'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <HeroSection />
      <AnnoncesVehiculesCell />
    </>
  )
}

export default HomePage
