import { useContext, useRef } from 'react'
import { ScrollContext } from '../utils/scroll-observer'

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1
  return 0.2
}

const IntroText = () => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  const numOfPages = 4
  let progress = 0

  const { current: elContainer } = refContainer

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
  );
};
export default IntroText;
