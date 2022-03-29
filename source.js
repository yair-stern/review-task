const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());

let count = 0;
const isPalindromText = [];

app.get('/api/isPalindromText', (req, res) => {
    res.send(isPalindromText);
  })

app.get('/api/posts/:id', (req, res) => {
    const message = isPalindromText.find (c => c.id === parseInt(req.params.id));
    if (!message) res.status(404).send('error 404. the asked id is not exist');
    else res.send(message);
  })

app.post ('/api/isPalindromText', (req, res) => {
    if (!req.body.text && req.body.text != "")
        return res.status(400).send("error 400. missing text");
    count++;
    const message = {
        id: count,
        text: req.body.text,
        palindrom: isPalindrom(req.body.text)        
    }
    isPalindromText.push(message);
    res.send(message);
});

app.put ('/api/isPalindromText/:id', (req, res) => {
    const message = isPalindromText.find(c => c.id === parseInt(req.params.id))
    if (!message) res.status(404).send('error 404. the asked id is not exist');
    if (!req.body.text && req.body.text != "")
        return res.status(400).send("error 400. missing text");
    message.text = req.body.text;
    message.palindrom = isPalindrom(req.body.text)        
    res.send(message);
})

app.delete('/api/isPalindromText/:id', (req, res) => {
    const message = isPalindromText.find(c => c.id === parseInt(req.params.id));
    if (!message) return res.status(404).send('error 404. the asked id is not exist.');
    const index = isPalindromText.indexOf(message);
    isPalindromText.splice(index, 1);
    res.send(message);
})

function isPalindrom (checkTexst) {
    for (let i = 0; i<checkTexst.length-1-i; i++)
        if (checkTexst.charAt(i)!=checkTexst.charAt(checkTexst.length-1-i)) return false;
    return true;
}

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
