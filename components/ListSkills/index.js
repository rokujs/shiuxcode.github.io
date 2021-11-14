import { useState, useEffect } from 'react'

import ItemSkills from 'components/ItemListSkills'
const data = [
  {
    category: 'Frontend',
    technologies: [
      {
        name: 'HTML',
        color: '#e34c26',
        percentage: '90',
        icon: 'faHtml5'
      },
      {
        name: 'CSS',
        color: '#563d7c',
        percentage: '90',
        icon: 'faCss3'
      },
      {
        name: 'JavaScript',
        color: '#f1e05a',
        percentage: '100',
        icon: 'faJs'
      },
      {
        name: 'React',
        color: '#61dafb',
        percentage: '40',
        icon: 'faReact'
      },
      {
        name: 'Vue',
        color: '#41b883',
        percentage: '50',
        icon: 'faVuejs'
      }
    ]
  },
  {
    category: 'Backend',
    technologies: [
      {
        name: 'PHP',
        color: '#4F5D95',
        percentage: '90',
        icon: 'faPhp'
      },
      {
        name: 'Node.js',
        color: '#8BE296',
        percentage: '90',
        icon: 'faNodeJs'
      },
      {
        name: 'Java',
        color: '#b07219',
        percentage: '90',
        icon: 'faJava'
      },
      {
        name: 'rust',
        color: '#C0C0C0',
        percentage: '90',
        icon: 'faRust'
      },
      {
        name: 'Python',
        color: '#3572A5',
        percentage: '90',
        icon: 'faPython'
      }
    ]
  },
  {
    category: 'Databases',
    technologies: [
      {
        name: 'MongoDB',
        color: '#a0522d',
        percentage: '90',
        icon: 'faDatabase'
      },
      {
        name: 'MySQL',
        color: '#5b5b5b',
        percentage: '90',
        icon: 'faDatabase'
      },
      {
        name: 'PostgreSQL',
        color: '#6e6e6e',
        percentage: '90',
        icon: 'faDatabase'
      }
    ]
  },
  {
    category: 'Tools',
    technologies: [
      {
        name: 'Git',
        color: '#f1e05a',
        percentage: '90',
        icon: 'faGitAlt'
      },
      {
        name: 'GitHub',
        color: '#24292e',
        percentage: '90',
        icon: 'faGithub'
      },
      {
        name: 'GitLab',
        color: '#24292e',
        percentage: '90',
        icon: 'faGitlab'
      },
      {
        name: 'GitFlow',
        color: '#24292e',
        percentage: '90',
        icon: 'faGit'
      },
      {
        name: 'GitKraken',
        color: '#24292e',
        percentage: '90',
        icon: 'faGitkraken'
      },
      {
        name: 'GitBash',
        color: '#24292e',
        percentage: '90',
        icon: 'faGit'
      },
      {
        name: 'GitKraken',
        color: '#24292e',
        percentage: '90',
        icon: 'faGit'
      },
      {
        name: 'GitKraken',
        color: '#24292e',
        percentage: '90',
        icon: 'faGit'
      },
      {
        name: 'GitKraken',
        color: '#24292e',
        percentage: '90',
        icon: 'faGit'
      },
      {
        name: 'GitKraken',
        color: '#24292e',
        percentage: '90',
        icon: 'faGit'
      },
      {
        name: 'GitKraken',
        color: '#24292e',
        percentage: '90',
        icon: 'faGit'
      },
      {
        name: 'GitKraken',
        color: '#24292e',
        percentage: '90',
        icon: 'faGit'
      }
    ]
  }
]

function ListSkills () {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    setSkills(data)
  }, [])
  return (
    <>
      {skills.map(({ category, technologies }) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {technologies.map(tech => (
              <ItemSkills
                key={tech.name}
                name={tech.name}
                color={tech.color}
                percentage={tech.percentage}
                icon={tech.icon}
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
            margin-left: 5rem;
          }
        `}
      </style>
    </>
  )
}

export default ListSkills
