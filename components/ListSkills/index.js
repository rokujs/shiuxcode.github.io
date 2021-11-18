import ItemSkills from 'components/ItemListSkills'

function ListSkills ({ skills }) {
  return (
    <>
      {skills.map(({ category, technologies }) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {technologies.map((tech, index) => (
              <ItemSkills
                key={tech.name}
                name={tech.name}
                color={tech.color}
                percentage={tech.percentage}
                icon={tech.icon}
                index={index}
              />
            ))}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          div {
            margin-bottom: 8rem;
          }

          h2 {
            color: var(--color-primary);
            text-align: left;
            font-size: 2.8rem;
            font-weight: bold;
            margin-bottom: 2.5rem;
          }

          ul {
            list-style: none;
            margin-left: 0;
          }

          // Desktop

          @media (min-width: 768px) {
            ul {
              margin-left: 5rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default ListSkills
