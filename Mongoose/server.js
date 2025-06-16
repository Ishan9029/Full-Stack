const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  catagory: {
    type: String,
    required: true,
    enum: ['Electronics', 'Books', 'Clothing'],
  },
});

mongoose
  .connect('mongodb://localhost:27017/bookstore')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
