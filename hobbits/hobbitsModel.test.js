const Hobbit = require('./hobbitsModel')
const db = require('../data/dbConfig.js')

// each test starts with the SAME database
beforeEach(async () => {
  await db('hobbits').truncate()
})

describe('hobbits model', () => {
  describe('getAll()', () => {
    it('gets an empty array', async () => {
      const hobbits = await Hobbit.getAll()
      expect(hobbits).toHaveLength(0)
    })
    it('gets all the hobbits', () => {
      // make an insert { name: "Sam" } use db('hobbits')
      // check that the helper returns array with length 1

      // make an insert { name: "Gaffer" } use db('hobbits')
      // check that the helper returns array with length 2
    })
  })

  describe('insert()', () => {
    
  })

  describe('update()', () => {
    
  })

  describe('remove()', () => {
    
  })
})
