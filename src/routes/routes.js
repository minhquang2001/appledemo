import config from '~/config';

// Layouts
import { HeaderProduct } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Iphone from '~/pages/ItemsProduct/Iphone';
import Ipad from '~/pages/ItemsProduct/Ipad';

// import Profile from '~/pages/Profile';
// import Upload from '~/pages/Upload';
// import Search from '~/pages/Search';
// import Live from '~/pages/Live';

// Data

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.iphone, component: Iphone, layout: HeaderProduct},
    { path: config.routes.ipad, component: Ipad, layout: HeaderProduct},

    // { path: config.routes.live, component: Live },
    // { path: config.routes.profile, component: Profile },
    // { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    // { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };