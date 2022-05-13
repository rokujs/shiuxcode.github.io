import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import style from './styles.module.css'

function ItemSkill ({
  technology,
  color,
  negativeColor,
  onClick,
  onReset,
  isButton,
  active
}) {
  return (
    <>
      <li className={style.item}>
        {isButton
          ? (
          <>
            <button onClick={() => onClick(technology)}>{technology}</button>
            {active && (
              <button onClick={onReset}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            )}
          </>
            )
          : (
          <span>{technology}</span>
            )}
      </li>
      <style jsx>
        {`
          button {
            display: inline-block;
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
