import style from './styles.module.css'

const ItemSkill = ({ technology, color, negativeColor, onClick, button }) => {
  return (
    <>
      <li className={style.item}>
        {button
          ? <button onClick={onClick}>{technology}</button>
          : <span>{technology}</span>
        }
      </li>
      <style jsx>
        { `
          button {
            background-color: ${color};
            border: none;
            border-radius: 0.5rem;
            color: ${negativeColor};
            padding: 1rem;
            font-size: 1.5rem;
            font-weight: bold;
            cursor: pointer;

          }

          li {
            background-color: ${color};
          }
      `}
      </style>
    </>
  )
}

export default ItemSkill
