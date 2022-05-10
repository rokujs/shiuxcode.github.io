function CarouselItem ({ image, title, active, id }) {
  return (
    <>
      {active === id && (
        <li>
          <img src={image} alt={`thumbnail ${id + 1} of ${title}`} />
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

         {
          /* Desktop */
        }

        @media (min-width: 800px) {
          li {
            width: 50vw;
            animation-name: growImage;
            animation-duration: 0.5s;
          }

          li img {
            animation-name: fadeIn;
            animation-duration: 0.5s;
          }

          @keyframes growImage {
            0% {
              width: 0;
            }
            65% {
              width: 55vw;
            }
            100% {
              width: 50vw;
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        }
      `}</style>
    </>
  )
}

export default CarouselItem
