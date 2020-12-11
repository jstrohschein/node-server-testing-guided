const hobbits = require('./hobbitsModel')
const db = require('../data/dbConfig')


describe('hobbits model', () => {

  describe('insert()', () => {

    beforeEach(async () => {
      await db('hobbits').truncate()
    })

    test('should insert the provided hobbits', async () => {
      await hobbits.insert({ name: 'gaffer' })
      await hobbits.insert({ name: 'sam' })

      const hobbits = db('hobbits')
      expect(hobbits).toHaveLength(2)
    })

    test('should returns the inserted object', async () => {
      let hobbit = await hobbits.insert({ name: 'gaffer' })
      expect(hobbit.name).toBe('gaffer')

      hobbit = await hobbits.insert({ name: 'sam' })
      expect(hobbit.name).toBe('sam')
    })
    
    
  })


})