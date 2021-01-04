import express from 'express';
import { helloWorld } from './route';

const app = express();
app.use(express.json());
app.get('/', helloWorld);

app.listen(3333, () => {
  console.log('Started');
});
