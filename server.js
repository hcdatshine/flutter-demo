var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.listen(port);

app.get('/test', (req, res) => {
  res.json({'message':'Hello World'});
});

const dotenv = require('dotenv')
dotenv.config()
let current_url = process.env.NODE_ENV === 'development' ? process.env.local_url:process.env.server_url

app.post('/upload', function(req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({'error': 'No files were uploaded.'});
  }
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.file;
  sampleFile.mv(`${current_url}${sampleFile.name}`, function(err) {
    // return json
    if (err){
      return res.status(500).json({'error': 'No files were uploaded.'});
    }
    else {
      res.status(200).json({'success':'File uploaded!'});
    }
  });
});
