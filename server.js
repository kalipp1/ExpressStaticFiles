const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/public/images')));

app.use('/user/pannel', (req, res) => {
    res.send('You need to log in');
  });
    
  app.use('/user/settings', (req, res) => {
    res.send('You need to log in');
  });

app.get('/', (req, res) => {
  res.show('index.html');
});

app.get('/home', (req, res) => {
    res.show('index.html');
  });

app.get('/about', (req, res) => {
  res.show('about.html');
});

app.use((req, res) => {
  res.status(404).show('page404.html');
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});