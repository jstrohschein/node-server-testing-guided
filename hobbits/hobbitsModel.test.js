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
      // assertion
    })
  })

  describe('insert()', () => {
    
  })

  describe('update()', () => {
    
  })

  describe('remove()', () => {
    
  })
})
