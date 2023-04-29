import type { NextPage } from 'next'
import Head from 'next/head'
import IntroText from '../components/IntroText'
import Hero from '../components/Hero'
import About from '../components/About'
// import ImageLinks from '../components/Images'
import MusicPlayer from '../components/musicplayer'
import FloatingIcons from '../components/sidebar'
import Footer from '../components/FooterComponent'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faPause, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

// import Hero2 from '../components/Hero2'

library.add(faPlay, faPause, faVolumeUp)

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Round Table Ent. </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Hero />

      <IntroText />
      {/* <ImageLinks /> */}

      {/* Section 1 */}
      <About /> 

      {/* Section 2 */}
      <About />

      <Footer />
      <MusicPlayer />
      <FloatingIcons />
    </div>
  )
}

export default Home
