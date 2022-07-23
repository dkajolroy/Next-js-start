import database from '../../../config/database'
database()

export default function allUsers(req, res) {
  res.status(200).send([])
}