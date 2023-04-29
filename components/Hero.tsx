import Image from 'next/image'
import { useContext, useRef } from 'react'
import { ScrollContext } from '../utils/scroll-observer'

const Hero = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo
    if (progress >= 0 && progress < 1) return 1
    return 0.2
  }

    const numOfPages = 4

    if (elContainer) {
      const { clientHeight, offsetTop } = elContainer
      const screenHeight = window.innerHeight
      const screenHalfHeight = screenHeight / 2
      const percentY =
        Math.min(
          clientHeight + screenHalfHeight,
          Math.max(-screenHeight, scrollY - offsetTop) + screenHalfHeight
        ) / clientHeight
      progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
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

        <section className="w-full bg-white text-custom-100">
          <div
            ref={refContainer}
            className="text-4xl lg:text-6xl px-5 font-semibold leading-none tracking-tight py-20 lg:py-40 mx-auto max-w-3xl  "
          >
            <span
              className={`transition-opacity ease-in-out duration-400 after:content-['_']`}
              style={{ opacity: opacityForBlock(progress, 0) }}
            >
              Round Table,
            </span>
            <span
              className={`transition-opacity ease-in-out duration-700 after:content-['_']`}
              style={{ opacity: opacityForBlock(progress, 1) }}
            >
              the ultimate destination
            </span>
            <span
              className={`transition-opacity ease-in-out duration-500 after:content-['_']`}
              style={{ opacity: opacityForBlock(progress, 2) }}
            >
              for independent creators to unleash their full potential
            </span>
            <span
              className={`transition-opacity ease-in-out duration-500 after:content-['_']`}
              style={{ opacity: opacityForBlock(progress, 3) }}
            >
              and take center stage.
            </span>

          </div>
        </section>


      </div>
    );
  };

  export default Hero; 
