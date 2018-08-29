import faker from 'faker'
import {Chance} from 'chance'
// import jsf from 'json-schema-faker'

const seed = Math.random()

export const chance = Chance(seed)
faker.seed(seed)

export function randomWords() {
  return faker.random.word()
}

export function randomNumber() {
  return faker.random.number({min:-1000,max:10000})
}

export function randomCard() {
  return faker.helpers.createCard()
}

export function fakeName() {
  return faker.name.findName()
}

export function fakeEmail() {
  return faker.internet.email()
}

// jsf.option({
//   optionalsProbability: 0.5,
// })
//
// jsf.extend('faker', function() {
//   return require('faker')
// })
//
// jsf.format('modelId', function({ modelName = 'model' }) {
//   return `${modelName}_${nanoid()}`
// })

// export { jsf }

// jsf.resolve(schema).then(function(sample) {
//   console.table(sample.user)
//   // "[object Object]"
//
//   console.log(sample.user.name)
//   // "John Doe"
// })
