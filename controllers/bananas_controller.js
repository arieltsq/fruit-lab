var allBanana = [
  { name: 'Banana1', color: 'yellow' },
  { name: 'Banana2', color: 'green' }]

function getAll (request, response) {
  if (!response) return response.status(401).json({message: 'no banana found'})
  response.status(201).json(allBanana)
}

module.exports = {
  getAll: getAll
}
