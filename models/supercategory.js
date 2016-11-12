/**
 * @module models/supercategory
 * @license MIT
 */

/** Depende6ncies */
const mongoose = require('mongoose');

/** Schema */
const Schema = mongoose.Schema;
const supercategorySchema = new Schema({
  title: String,
  categories: [{
    type: Schema.ObjectId,
    ref: 'category',
    required: true,
    default: [],
  }],
});

module.exports = mongoose.model('supercategory', supercategorySchema);
