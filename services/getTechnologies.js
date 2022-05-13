import Fetch from 'isomorphic-unfetch'

export default async function getTechnologies () {
  const resProjects = await Fetch(
    'https://ancient-thicket-10868.herokuapp.com/projects'
  )
  const resSkills = await Fetch(
    'https://ancient-thicket-10868.herokuapp.com/skills'
  )

  const errorCodeProjects = resProjects.ok ? false : resProjects.statusCode
  const errorCodeSkills = resSkills.ok ? false : resSkills.statusCode

  const dataProjects = await resProjects.json()
  const dataSkills = await resSkills.json()

  const listTechnologies = dataProjects
    .map(({ technologies }) => technologies)
    .reduce((acc, curr) => acc.concat(curr), [])
  const listWithoutDuplicates = [...new Set(listTechnologies)]

  // Create technologies array from skills
  const technologies = dataSkills
    .map(({ technologies }) =>
      technologies.map(({ name, color }) => {
        const data = { name, color }
        return data
      })
    )
    .reduce((acc, curr) => acc.concat(curr), [])
    .filter(tech => listWithoutDuplicates.includes(tech.name))

  return {
    errorCodeProjects,
    errorCodeSkills,
    dataProjects,
    technologies
  }
}
