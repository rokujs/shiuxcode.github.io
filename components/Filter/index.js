import { useState } from 'react'

import ItemSkills from 'components/ItemSkill'
import { getColor } from 'utils/negativeColor'

function Filter ({ skills, setFilter, projects }) {
  const [filter, setFilterState] = useState('')

  const applyFilter = name => {
    const newFilter = projects.filter(pro =>
      pro.technologies.some(item => item.toLowerCase() === name.toLowerCase())
    )
    setFilter(newFilter)
    setFilterState(name)
  }

  const resetFilter = () => {
    setFilter(projects)
    setFilterState('')
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
              onClick={applyFilter}
              onReset={resetFilter}
              active={filter === name}
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
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: center;
          margin: 6rem;
          margin-bottom: 0;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          ul {
            margin: 0;
          }
        }
      `}</style>
    </>
  )
}

export default Filter
