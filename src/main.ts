import express from 'express';
import useRoutes from './routes';

function bootstrap(port: number) {
    let app = express();
    useRoutes(app);
    app.use('/static', express.static('static'));
    app.listen(port, ()=>{console.log(`App listening on http://localhost:${port}`)})
}

bootstrap(3000);
