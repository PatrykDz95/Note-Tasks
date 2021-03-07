// const mongoose = require('mongoose')
// const jwt = require('jsonwebtoken')
// const Note = require('../../models/note')
// const User = require('../../models/user')

// const userOneId = new mongoose.Types.ObjectId()
// const userOne = {
//     _id: userOneId,
//     name: 'Mike',
//     email: 'mike@example.com',
//     password: '56what!!'
// }

// const userTwoId = new mongoose.Types.ObjectId()
// const userTwo = {
//     _id: userTwoId,
//     name: 'Jess',
//     email: 'jess@example.com',
//     password: 'myhouse099@@',
// }

// const taskOne = {
//     _id: new mongoose.Types.ObjectId(),
//     title: 'First task',
//     note: 'note',
// }

// const taskTwo = {
//     _id: new mongoose.Types.ObjectId(),
//     title: 'First task',
//     note: 'note',
// }

// const taskThree = {
//     _id: new mongoose.Types.ObjectId(),
//     title: 'First task',
//     note: 'note',
// }

// const setupDatabase = async () => {
//     await new User(userOne).save()
//     await new User(userTwo).save()
//     await new Note(taskOne).save()
//     await new Note(taskTwo).save()
//     await new Note(taskThree).save()
// }

// module.exports = {
//     userOneId,
//     userOne,
//     userTwoId,
//     userTwo,
//     taskOne,
//     taskTwo,
//     taskThree,
//     setupDatabase
// }