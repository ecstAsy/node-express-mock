const express = require('express');
const app = express();
const { Order, Book, Card } = require('./mock');

app.get('/api/order', (req, res) => res.json(Order))

app.post('/api/book', (req, res) => res.json(Book))

app.get('/api/card', (req, res) => res.json(Card))

app.get('/api/get', (req, res) => {
  res.json({
    method: 'GET',
    stu: {
      name: 'ddd'
    }
  })
})

app.post('/api/post', (req, res) => {
  res.json({
    method: 'POST',
    car: {
      brand: 'BWM',
      price: 1900
    }
  })
})

app.listen(5888, () => {
  console.log('node 服务器已经启动！');
});