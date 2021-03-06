'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
/**
 * TODO: Create slug for post for clean urls
 * http://tinyurl.com/n3havlm
 */
const PostSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, default: '//unsplash.it/1600/700' },
  content: { type: String, required: true },
  type: {type: String, required: true},
  tags: [{ type: String }],
  isDeleted: { type: Boolean, default: false }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Post', PostSchema)
