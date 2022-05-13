export default async function getProject (id) {
  try {
    const res = await window.fetch(
      `https://ancient-thicket-10868.herokuapp.com/projects/${id}`
    )
    const response = await res.json()

    return response
  } catch (error) {
    throw new Error(error)
  }
}
