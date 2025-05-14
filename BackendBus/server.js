const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const MONGOURL = 'mongodb://127.0.0.1:27017/BusBooking';

mongoose.connect(MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB Connected');
})
.catch((err) => {
  console.error('❌ MongoDB Connection Failed:', err);
});

// Import the model 
const Person = require('./Module/app');

app.get('/', (req, res) => {
  res.send('Bus backend Running');
});

app.post('/person', async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    const savedPerson = await newPerson.save();
    res.status(200).json(savedPerson);
  } catch (error) {
    console.log('❌ Error saving person:', error);
    res.status(500).json({ message: 'Failed To Load Data', error });
  }
});

const PORT = 8500;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
