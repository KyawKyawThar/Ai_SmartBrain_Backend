const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: 'b7f308a27afd4656af8fb7ab1d23f3df',
});

//   apiKey: 'dcb17e67f7554a479980dd50e643b6cd',
//   b7f308a27afd4656af8fb7ab1d23f3df'

const handleApiCall = (req, res) => {
  app.models

    // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)

    // .predict('c0c0ac362b03416da06ab3fa36fb58e3', req.body.input)
    .predict('c0c0ac362b03416da06ab3fa36fb58e3', req.body.input)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json('unable to work with API'));
};

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db('users')
    .where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then((entries) => {
      res.json(entries[0]);
    })
    .catch((err) => res.status(400).json('unable to get entries'));
};
module.exports = {
  handleImage: handleImage,
  handleApiCall: handleApiCall,
};
