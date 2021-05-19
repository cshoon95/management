const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id':1,
            'image':'https://palceimg.com/64/64/1',
            'name':'조수훈',
            'birthday': '950921',
            'gender' : '남자',
            'job' : '풀스택 개발자'
        },
        {
            'id':2,
            'image':'https://palceimg.com/64/64/2',
            'name':'홍길동',
            'birthday': '001231',
            'gender' : '남자',
            'job' : '백엔드 개발자'
        },
        {
            'id':3,
            'image':'https://palceimg.com/64/64/3',
            'name':'이순신',
            'birthday': '210519',
            'gender' : '남자',
            'job' : '프론트 개발자'
        }
    ]);
})

app.listen(port, () => console.log('Listening on port ${port}'));