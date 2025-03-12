import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 5000;

// ✅ Allow all origins (for development only)
app.use(cors());

// ✅ OR (More Secure) Allow only React app
// app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/api/albums', async (req, res) => {
  try {
    const response = await axios.get('https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv', {
      headers: {
        'X-RapidAPI-Key': 'df4d46d554mshe3d9e770cb00891p11f158jsn17ae7fc3e',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
      },
    });

    res.setHeader('Access-Control-Allow-Origin', '*'); // ✅ Manually set CORS header
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch albums', error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
