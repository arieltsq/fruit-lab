var allApple = [
  { name: 'Fuji Apple', color: 'red' },
  { name: 'Mountain Apple', color: 'blue' }]

function getAll (request, response) {
  if (!response) return response.status(401).json({message: 'no apple found'})
  response.status(201).json(allApple)
}

module.exports = {
  getAll: getAll
}
