function CarouselItem ({ image, title, active, id }) {
  return (
    <>
      {active === id && (
        <li>
          <img src={image} alt={`thumbnail ${id + 1} of ${title}`}/>
        </li>
      )}
      <style jsx>{`
        li {
          list-style: none;
          width: 100%;
          height: 100%;
        }
        li img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1rem;
        }
      `}</style>
    </>
  )
}

export default CarouselItem
