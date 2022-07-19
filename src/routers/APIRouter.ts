import {RouterManager} from '../manager/router';
import {IndexRouter} from './api';

export const apiRouter = new RouterManager('/api');
apiRouter.push(new IndexRouter());
