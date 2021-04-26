import { Request, Response, Router } from 'express';
import { render } from '../core/render';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    render(res, 'Index');
    return;
})

router.get('/404', (req: Request, res: Response) => {
    render(res, 'NotFound');
    return;
})


router.get('/about', (req: Request, res: Response) => {
    render(res, 'About');
    return;
})

export default router;
