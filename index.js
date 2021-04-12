const express = require('express');
const figlet = require('figlet');

const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname })
});
  
app.get("/:text", (req, res) => {
  const text = req.params["text"];
  figlet(text, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    res.send(`<pre>${data}</pre>`);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})