import ItemSkills from 'components/ItemSkill'
import { getColor } from 'utils/negativeColor'

function Filter ({ skills }) {
  const onClick = e => {
    console.log(e)
  }
  return (
    <>
      <ul>
        {skills.map(({ name, color }) => {
          const negative = getColor(color)
          return (
            <ItemSkills
              key={name}
              technology={name}
              color={color}
              negativeColor={negative}
              onClick={onClick}
              button
            />
          )
        })}
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
          display: flex;
          gap: 1rem;
        }
      `}</style>
    </>
  )
}

export default Filter
