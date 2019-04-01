const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());


app.post('/', (req, res) => {
    cc.log("req firstName :", req.body.firstName);
    cc.log("req lastName : ", req.body.lastName);
    res.redirect('/test/' + req.body.firstName);
});

app.listen(port, () => {
    console.log(`app listen at the port ${port}`);
});


module.exports = router;