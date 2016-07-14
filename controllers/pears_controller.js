var allPear = [
  { name: 'Snow Apple', color: 'blue' },
  { name: 'Pear', color: 'green' }]

function getAll (request, response) {
  if (!response) return response.status(401).json({message: 'no pear found'})
  response.status(201).json(allPear)
}

module.exports = {
  getAll: getAll
}
