import Head from 'next/head'
import WeatherCarousel from '../components/WeatherCarousel/WeatherCarousel'
import Nav from '../components/Nav/Nav'

const Home = () => {
  return (
    <>
      <Head>
        <title>Weather Watch</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Nav />
      <WeatherCarousel />
    </>
  )
}

export default Home
