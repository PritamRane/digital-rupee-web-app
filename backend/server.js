const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();
app.use(cors());


const url = process.env.MONGODB_URI;
const dbName = 'digital_rupee';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 5000, 
  };

const client = new MongoClient(url,options);

client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

 
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });



  // User Registration API
  app.post('/api/register', bodyParser.json(), async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if the email already exists in the database
      const existingUser = await client
        .db(dbName)
        .collection('users')
        .findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }
  
      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10); 
  
      const newUser = {
        name,
        email,
        password: hashedPassword, // Store the hashed password in the database
        balance: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
  
      const result = await client.db(dbName).collection('users').insertOne(newUser);
  
      return res.status(201).json({ message: 'User registered successfully', userId: result.insertedId });
    } catch (err) {
      console.error('Error registering user:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  
