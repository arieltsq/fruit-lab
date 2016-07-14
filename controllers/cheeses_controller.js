var allCheese = [
  { name: 'Blue Cheese', color: 'blue' },
  { name: 'Mozzarella', color: 'yellow' }]

function getAll (request, response) {
  if (!response) return response.status(401).json({message: 'no cheese found'})
  response.status(201).json(allCheese)
}

module.exports = {
  getAll: getAll
}
