import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

import CarouselItem from 'components/CarouselItem'

function Carousel ({ images, title, color, revColor }) {
  const [activeIndex, setActiveIndex] = useState(0)

  console.log(activeIndex)

  const onClickLeft = () => {
    setActiveIndex(activeIndex - 1)
  }

  const onClickRight = () => {
    setActiveIndex(activeIndex + 1)
  }

  return (
    <>
      <div className='prev'>
        {activeIndex !== 0 && (
          <button onClick={onClickLeft}>
            <FontAwesomeIcon icon={faChevronLeft} className='icon' />
          </button>
        )}
      </div>

      <ul>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            image={image}
            title={title}
            active={activeIndex}
            id={index}
          />
        ))}
      </ul>

      <div className='next'>
        {activeIndex !== images.length - 1 && (
          <button onClick={onClickRight}>
            <FontAwesomeIcon icon={faChevronRight} className='icon' />
          </button>
        )}
      </div>

      <style jsx>{`
        ul {
          text-align: center;
          margin: 4vh 0;
        }

        div > button {
          background-color: ${color};
          color: ${revColor};
          font-size: 2rem;
          border: none;
          border-radius: 1rem;
          width: 4rem;
          height: 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        {
          /* Desktop */
        }

        @media (min-width: 800px) {
          ul {
            background-color: ${color};
            display: block;
            width: 52vw;
            margin: 2rem 0;
            padding: 1vw;
            border-radius: 2rem;
          }
        }
      `}</style>
    </>
  )
}

export default Carousel
