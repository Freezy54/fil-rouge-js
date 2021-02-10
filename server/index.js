const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const distDir = "../dist/";
const bodyParser = require ('body-parser');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Fr33zy:1234@cluster0.5xdel.mongodb.net/base1?retryWrites=true&w=majority";
const Hero = require('./model/heros.model');


const app = express();
var promise = mongoose.connect(uri, {useNewUrlParser: true});

promise.then(() => {
    console.log('DB Connected');
    app.listen('5000', () => {
        console.log ('Listenning on port 5000');
    })
})

app.use(express.static(path.join(__dirname, distDir)));
app.use(/^((?!(api)).)*/, (req, res) => {
    res.sendFile(path.join(__dirname, distDir + "/index.html"));
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// Si tu ouvres 2 serveurs sur le même port ça marche moins bien !!!!!
// app.listen('5000', () => {
//     console.log('server started');
// });

//Routes

app.post('/api/heros', (req, res) => {
    var newHero = new Hero(req.body);
  
    newHero.save((err, obj) => {
      if(err) {
        console.log(err);
        return res.send(500);
      }
  
      res.send(obj);
    });
  });
  
  app.get('/api/heros', (req, res) => {
    Hero.find({}, (err, obj) => {
      if(err) {
        console.log(err);
        return res.send(500);
      }
      return res.send(obj);
    });
  });
  
  // Le :id sera autimatiquement transofrmé par l'identifiant envoyé apr la requête xhttp
  app.get('/api/heros/:id', (req, res) => {
    // Pour effectuer une recherche on va utiliser le modèle
    // BodyParser permet de conserver l'id dans req.params.id
    Hero.findOne({_id: req.params.id}, (err, obj) => {
      if(err) {
        console.log(err);
        return res.send(500);
      }
  
      return res.send(obj);
    })
  });
  
  app.put('/api/heros/:id', (req, res) => {
    Hero.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}, (err, obj) => {
      if(err) {
        console.log(err);
        return res.send(500);
      }
  
      return res.send(obj);
    });
  });
  
  app.delete('/api/heros/:id', (req, res) => {
    Hero.deleteOne({_id: req.params.id}, (err, obj) => {
      if(err) {
        console.log(err);
        return res.send(500);
      }
      res.status(204).end();
    });
  });