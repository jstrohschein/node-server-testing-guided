const server = require('./server')
const request = require('supertest')


describe('server.js', () => {

  test('should check for testing env', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })

  describe('GET', () => {

    test('should return 200 OK', () => {
      return request(server)
        .get('/')
          .then(res => {
            expect(res.status).toBe(200)
          })
    })

    test('should have a response body of JSON', () => {
      return request(server)
        .get('/')
          .then(res => {
            expect(res.type).toBe('application/json')
          })
    })

    test('should return {api:"up"}', () => {
      return request(server)
        .get('/')
          .then(res => {
            expect(res.body).toEqual({ api:"up" })
          })
    })
    
    
    
  })
  
})

//return code under various circumstances
//return object syntax
//return object value