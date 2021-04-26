import { Application } from 'express';
import HomeHandler from './handlers/home.handler';

function useRoutes(app: Application) {
    app.use(HomeHandler);
}

export default useRoutes;
