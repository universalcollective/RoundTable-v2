import { useContext, useRef } from 'react'
import { ScrollContext } from '../utils/scroll-observer'

const landing = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }
  return (
    <div
      ref={refContainer}
      className="min-h-screen w-full sticky -z-10 top-0 left-0"
      style={{ transform: `translateY(-${progress * 20}vh)` }}
    >
      <video
        autoPlay
        loop
        muted
        className="object-cover absolute w-full h-full"
      >
        <source src="/anomaly.mp4" type="video/mp4" />
        {/* fallback for browsers that don't support the video tag */}
        <img src="/bg.jpg" alt="hero image" />
      </video>
    </div>
  )
}

export default landing
