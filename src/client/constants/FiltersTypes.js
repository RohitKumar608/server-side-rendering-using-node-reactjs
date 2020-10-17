const { v4: uuidv4 } = require('uuid')

export let launchYears = []

for (let year = 2006; year < 2021; year++) {
  launchYears.push({
    id: uuidv4(),
    value: year
  })
}

export const launchStatus = [{
    id: uuidv4(),
    value: true
  },
  {
    id: uuidv4(),
    value: false
  }
]
