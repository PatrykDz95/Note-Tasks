const request = require('supertest')
const app = require('../server')
const Task = require('../models/note')
//jest.useFakeTimers()
// const {
//     userOneId,
//     userOne,
//     userTwoId,
//     userTwo,
//     taskOne,
//     taskTwo,
//     taskThree,
//     setupDatabase
// } = require('./fixtures/db')

//beforeEach(setupDatabase)

// describe('Sample Test', () => {
//     it('should test that true === true', () => {
//       expect(true).toBe(true)
//     })
//   })
  

describe('Post Endpoints', () => {
    it('should create a new note', async () => {
      const res = await request(app)
        .post('/notes/add')
        .send({
          title: 'hello',
          note: 'test is cool',
        })
      expect(res.statusCode).toEqual(201)
    })
})


describe('Get Endpoints', () => {
    it('should get note', async () => {
      const res = await request(app)
        .get('/notes/all')
        .send()
        expect(res.statusCode).toEqual(200)
    })
})


describe('Get Endpoint', () => {
  it('should get length of body', async () => {
    const res = await request(app)
      .get('/notes/all')
      .send()
      expect(res.body.length).toEqual(1)
  })
})
    // const response = await request(app)
    //     .post('notes/add')
    //     .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    //     .send({
    //         description: 'From my test'
    //     })
    //     .expect(201)
    // const task = await Task.findById(response.body._id)
    // expect(task).not.toBeNull()
    // expect(task.completed).toEqual(false)


// test('Should fetch user tasks', async () => {
//     const response = await request(app)
//         .get('/tasks')
//         .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
//         .send()
//         .expect(200)
//     expect(response.body.length).toEqual(2)
// })

// test('Should not delete other users tasks', async () => {
//     const response = await request(app)
//         .delete(`/tasks/${taskOne._id}`)
//         .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
//         .send()
//         .expect(404)
//     const task = await Task.findById(taskOne._id)
//     expect(task).not.toBeNull()
// })
