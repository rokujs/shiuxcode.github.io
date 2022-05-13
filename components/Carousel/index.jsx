import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

import CarouselItem from 'components/CarouselItem'
import styles from './styles.js'

function Carousel ({ images, title, color, revColor }) {
  const [activeIndex, setActiveIndex] = useState(0)

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

      <style jsx>{`${styles(color, revColor)}`}</style>
    </>
  )
}

export default Carousel
