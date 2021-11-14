import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as iconTech from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

function ItemSkills ({ name, percentage, color, icon }) {
  return (
    <>
      <li>
        <i title={name}>
          <FontAwesomeIcon icon={iconTech[icon] ?? faDatabase} className='icon' />
        </i>
        <progress value={percentage} max='100'>
          {percentage + '%'}
        </progress>
      </li>
      <style jsx>
        {`
          li {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 1.5rem;
            border-radius: 0.5rem;
            background-color: var(--color-bg-text);
            margin-bottom: 1rem;
          }

          i {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: ${color};
            background-color: var(--color-purple);
            padding: 0.5rem;
            border-radius: 50%;
            margin-right: 1.5rem;
            min-width: 5rem;
            min-height: 5rem;
          }

          progress {
            display: inline-block;
            width: 100%;
            height: 1rem;
            border-radius: 999px;
            border: none;
            overflow: hidden;
            -webkit-appearance: none;
          }

          ::-webkit-progress-bar {
            background-color: var(--color-primary);
          }
          ::-webkit-progress-value {
            background-color: ${color};
          }
        `}
      </style>
    </>
  )
}

export default ItemSkills
