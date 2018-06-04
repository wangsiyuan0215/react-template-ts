/*
 * @Author: SiYuan Wang 
 * @Date: 2018-06-04 10:33:54 
 * @Last Modified by: SiYuan Wang
 * @Last Modified time: 2018-06-04 12:05:48
 */
import 'languages';
import dva from 'dva';
import models from 'models';
import createHistory from 'history/createBrowserHistory';

import './assets/css/index.css';
import registerServiceWorker from './registerServiceWorker';

const createLoading = require('dva-loading').default;

// 1. Initialize
const app = dva({
    ...createLoading({ effects: true }),
    history: createHistory()
});

// 2. Model
// models.map(item => app.model(item));

// 3. Router
app.router(require('./router').default);

// 4. Start§
app.start('#root');
// registerServiceWorker();
