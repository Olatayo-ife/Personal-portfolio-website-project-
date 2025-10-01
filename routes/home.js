import { name } from 'ejs';
import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.render('home', {title: 'Home', name: 'Oluwatobi Adelabu'});
});

export default router