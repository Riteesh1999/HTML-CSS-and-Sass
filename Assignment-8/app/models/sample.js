const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    email : 
    {
        type:  String, 
        required: true, 
        default: ''
    },
    password : 
    {
        type: String, 
        required: true,  
        default: ''
    },
    versionKey: false

})

UserSchema.pre('save', async function (next) {
    try {
      if (this.isNew) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
      }
      next()
    } catch (error) {
      next(error)
    }
  })

  const User = mongoose.model('schema', UserSchema)
  module.exports = User



  
