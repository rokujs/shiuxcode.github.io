import DB from '../../../dataBase/db'
import enablePublicAccess from '../../../cors.middleware'

const allProjects = async (req, res) => {
  try {
    await enablePublicAccess(req, res)

    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ length, data: allEntries }))
  } catch (error) {
    console.error(error)
    res.statusCode = 502
    res.end(
      JSON.stringify({
        length: 0,
        data: [],
        error: 'Something went wrong in our servers'
      })
    )
  }
}

export default allProjects
