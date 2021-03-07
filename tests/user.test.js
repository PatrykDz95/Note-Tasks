const request = require('supertest')
const app = require('../server')
const User = require('../models/user')
//const { userOneId, userOne, setupDatabase } = require('./fixtures/db')
//jest.useFakeTimers()


describe('Post Endpoints', () => {
    it('should create a new user', async () => {
      const res = await request(app)
        .post('/api/users/register')
        .send({
            name: "PL1",
            email: "raasat2aa@gmail.com",
            password: "12345Patryk",
            password2: "12345Patryk"
        })
      expect(res.statusCode).toEqual(400)
    })
})



// beforeEach(setupDatabase)

// test('Should signup a new user', async () => {
//     const response = await request(app).post('/api/users/register').send({
//         name: 'Andrew',
//         email: 'andrew@example.com',
//         password: 'MyPass777!',
//         password2: 'MyPass777!'
//     }).expect(200)

//     // Assert that the database was changed correctly
//     const user = await User.findById(response.body.user._id)
//     expect(user).not.toBeNull()

//     // Assertions about the response
//     expect(response.body).toMatchObject({
//         user: {
//             name: 'Andrew',
//             email: 'andrew@example.com'
//         },   
//     })
//     expect(user.password).not.toBe('MyPass777!')
// })

// test('Should login existing user', async () => {
//     const response = await request(app).post('/api/users/login').send({
//         email: userOne.email,
//         password: userOne.password
//     }).expect(400)
// })

// test('Should not login nonexistent user', async () => {
//     await request(app).post('/api/users/login').send({
//         email: userOne.email,
//         password: 'thisisnotmypass'
//     }).expect(400)
// })
