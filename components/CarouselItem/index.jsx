import styles from './styles'

function CarouselItem ({ image, title, active, id }) {
  return (
    <>
      {active === id && (
        <li>
          <img src={image} alt={`thumbnail ${id + 1} of ${title}`} />
        </li>
      )}
      <style jsx>{styles}</style>
    </>
  )
}

export default CarouselItem
