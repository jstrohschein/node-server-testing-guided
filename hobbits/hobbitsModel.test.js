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

    it('gives back the inserted hobbit', async () => {
      // 1- write the test which will fail
      const sam = await Hobbit.insert({ name: "Sam" })
      expect(sam).toMatchObject({ id: 1, name: 'Sam' })
      const gaffer = await Hobbit.insert({ name: "Gaffer" })
      expect(gaffer).toMatchObject({ id: 2, name: 'Gaffer' })
    })
  })

  describe('update()', () => {
    it('can insert', async () => {
      // make an insert using just knex
      await db('hobbits').insert({ name: "Gaffer" })
      // make the update
      let sam = await Hobbit.update(1, { name: "Sam" })
      // assert we get back the updated thing
      expect(sam).toMatchObject({ id: 1, name: "Sam" })
      // further test that the thing got updated in the db
      sam = await db('hobbits').where({ id: 1 }).first()
      expect(sam.name).toBe("Sam")
    })
  })

  describe('remove()', () => {
    it('can remove', async () => {
      await db('hobbits').insert({ name: "Sam" })
      await Hobbit.remove(1)
      let hobbits = db('hobbits')
      expect(hobbits).toHaveLength(0)
    })
  })
})
