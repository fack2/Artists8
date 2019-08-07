const app = require('./app')
const PORT = process.env.PORT || 4000
require('env2')('./config.env')

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`)
})
