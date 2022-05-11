var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

app.get('/test', (req, res) => {
    res.send('Hello World');
	// var con = mysql.createConnection(db);
	
	// con.connect(function(err) {
		
	// 	if (err) throw err;
	// 	console.log("Connected!");

	// 	var id = req.param('id');
	// 	var where = id == 'all' ? '' : ' WHERE id = ' + id;
	  
	// 	con.query("SELECT * FROM articles" + where, function (err, result, fields) {
	// 		if (err) throw err;
	// 		res.send(result);
	// 		con.end();
	// 	});
		
	// });
	
});

// post

app.post('/upload', function(req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  console.log(req.files);
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.file;
  let time = Date.now();

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(`/home/ec2-user/flutter-demo/image/${time}.jpg`, function(err) {
//   sampleFile.mv(`/Users/datshinemac/Desktop/node-ec2/image/${time}.jpg`, function(err) {
    if (err)
      return res.status(500).send(err);
    else {
        res.status(200).send('File uploaded!');
    }
  });
});
