const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '권지용',
            'birthday': '961222',
            'gender': '남자',
            'job': '대학생'
        },
        {

            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '박서준',
            'birthday': '961023',
            'gender': '남자',
            'job': '가수'
        },
        {

            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '왕정든',
            'birthday': '961112',
            'gender': '남자',
            'job': '배우'
        }

    ]);
});
app.listen(port, () => console.log(`Listening on port ${port}`));
