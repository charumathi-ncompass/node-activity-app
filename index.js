const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;


async function getActivity() {
  try {
    const response = await axios.get(
      `https://www.boredapi.com/api/activity`
    );

    const activity = response.data;
    return activity;
  } catch (error) {
    console.error('Error fetching activity data:', error.message);
    throw error;
  }
}

app.get('/',async (req, res) => {
    res.json({
      "hey" : "NodeJS"
    })
  })

app.get('/activity', async (req, res) => {
 
  try {
    const activityData = await getActivity();
    res.json(activityData);
  } catch (error) {
    console.error('An error occurred:', error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
