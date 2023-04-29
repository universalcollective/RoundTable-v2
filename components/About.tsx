import Image from 'next/image'
import { useContext, useRef } from 'react'
import { ScrollContext } from '../utils/scroll-observer'

const About = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }
  return (
    <div>
     <div
      ref={refContainer}
      className="min-h-screen w-full sticky -z-10 top-0 left-0"
      style={{ transform: `translateY(-${progress * 20}vh)` }}
    >
      <Image
        width={2400}
        height={1600}
        src="/bg.jpg"
        alt="hero image"
        className="object-cover absolute w-full h-full"
      />
    </div>

    <section className="w-full border-t border-gray-100 bg-white p-20 text-center text-md text-gray-400 lg:p-40">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
          porttitor lacus luctus accumsan. Magna fringilla urna porttitor
          rhoncus dolor purus non enim praesent. Consectetur lorem donec massa
          sapien. Risus feugiat in ante metus dictum at tempor commodo. Neque
          convallis a cras semper auctor neque. Mi proin sed libero enim sed
          faucibus turpis in eu. Aliquet eget sit amet tellus cras adipiscing
          enim. Amet cursus sit amet dictum sit amet. Arcu dictum varius duis
          at. Tincidunt praesent semper feugiat nibh sed pulvinar proin.
          Porttitor massa id neque aliquam vestibulum. Aliquet nibh praesent
          tristique magna sit amet purus gravida quis. Nisi porta lorem mollis
          aliquam ut porttitor. Sed libero enim sed faucibus turpis in eu. Massa
          eget egestas purus viverra. Nulla porttitor massa id neque. Pretium
          aenean pharetra magna ac placerat vestibulum. Nec ultrices dui sapien
          eget mi proin sed libero enim. Nibh tortor id aliquet lectus proin.
        </div>

        <div className="mt-10">
          &nbsp;
          In arcu cursus euismod quis viverra. Tortor consequat id porta nibh.
          Neque sodales ut etiam sit. Augue neque gravida in fermentum et
          sollicitudin ac orci. Fusce id velit ut tortor. Et ligula ullamcorper
          malesuada proin libero nunc. Scelerisque eu ultrices vitae auctor.
          Blandit volutpat maecenas volutpat blandit. Tristique nulla aliquet
          enim tortor at auctor urna. Sodales neque sodales ut etiam sit amet
          nisl. Et molestie ac feugiat sed lectus. Nunc sed blandit libero
          volutpat sed cras. Dignissim convallis aenean et tortor at. Elementum
          sagittis vitae et leo duis ut diam quam nulla. Quis vel eros donec ac
          odio tempor orci. Posuere morbi leo urna molestie at elementum eu. Sed
          viverra ipsum nunc aliquet bibendum enim. Posuere urna nec tincidunt
          praesent semper feugiat nibh sed pulvinar.
        </div>
      </section>
    </div>
  )
}

export default About;
