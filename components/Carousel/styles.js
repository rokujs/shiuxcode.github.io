import css from 'styled-jsx/css'

export default function styles (color, revColor) {
  return css`
    ul {
      order: 1;
      width: auto;
      text-align: center;
      margin: 4vh 0;
    }

    .prev {
      order: 2;
    }

    .next {
      order: 3;
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
        margin: 2rem 0;
        padding: 1vw;
        border-radius: 2rem;
        order: 2;
      }

      .prev {
        order: 1;
      }
    }
  `
}
