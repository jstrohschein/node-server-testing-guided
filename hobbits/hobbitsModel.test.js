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
    it('gets all the hobbits', async () => {
      // make an insert { name: "Sam" } use db('hobbits')
      // check that the helper returns array with length 1
      await db('hobbits').insert({ name: "Sam" })
      let hobbits = await Hobbit.getAll()
      expect(hobbits).toHaveLength(1)
      // make an insert { name: "Gaffer" } use db('hobbits')
      // check that the helper returns array with length 2
      await db('hobbits').insert({ name: "Gaffer" })
      hobbits = await Hobbit.getAll()
      expect(hobbits).toHaveLength(2)
    })
  })

  describe('insert()', () => {
    it('can insert hobbits', async () => {
      // use insert, assert hobbits.length is 1
      await Hobbit.insert({ name: "Sam" })
      let hobbits = await db('hobbits')
      expect(hobbits).toHaveLength(1)
      // use insert, assert hobbits.length is 2
      await Hobbit.insert({ name: "Gaffer" })
      hobbits = await db('hobbits')
      expect(hobbits).toHaveLength(2)
    })

    it('gives back the inserted hobbit', () => {
      // 1- write the test which will fail
    })
  })

  describe('update()', () => {

  })

  describe('remove()', () => {

  })
})
