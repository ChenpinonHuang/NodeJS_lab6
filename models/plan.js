const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true // This must exist
  },
  strategy: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Plan', PlanSchema);