var allOrange = [
  { name: 'Navel Orange', color: 'orange' },
  { name: 'Purple Orange', color: 'purple' }]

function getAll (request, response) {
  if (!response) return response.status(401).json({message: 'no orange found'})
  response.status(201).json(allOrange)
}

module.exports = {
  getAll: getAll
}
