import allData from './data'

class Database {
  getAll () {
    const data = Object.values(allData)
    return data
  }

  getById (id) {
    if (!Object.prototype.hasOwnProperty.call(allData, id)) {
      return null
    }

    const entry = allData[id]
    return entry
  }
}

export default Database
