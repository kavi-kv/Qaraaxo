const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', postRoutes);


app.listen(3007,() => {
    console.log("Registration runnning on port 3007")
})
