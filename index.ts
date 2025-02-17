import express from 'express';
import router from './Routes/Route';

const app = express();

app.use(express.json());
app.use('/api/ai', router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 