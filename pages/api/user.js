import user from '../../../data'
export default function allUsers(req, res) {
  res.status(200).send(user)
}