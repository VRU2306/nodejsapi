const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/generate-token', async (req, res) => {
    const response = await fetch('https://dev-test.cimet.io/generate-token', {
        method: 'POST',
        headers: {
            'Api-Key': '4NKQ3-815C2-8T5Q2-16318-55301',
        },
    });
    const data = await response.json();
    res.json(data);
});

app.post('/plan-list', async (req, res) => {
    const authToken=req.headers['token']
    const requestBody = {
        session_id: 'eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9',
      };

    const response = await fetch('https://dev-test.cimet.io/plan-list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Api-Key': '4NKQ3-815C2-8T5Q2-16318-55301',
            'Auth-Token': authToken,
        },
        body: JSON.stringify(requestBody),
    });

    const responseData = await response.json();
    res.json(responseData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
