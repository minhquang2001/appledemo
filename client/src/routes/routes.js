import config from '~/config';

// Layouts
import { HeaderProduct, LayoutManager } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Iphone from '~/pages/ItemsProduct/Iphone';
import Ipad from '~/pages/ItemsProduct/Ipad';
import Mac from '~/pages/ItemsProduct/Mac';

// Single Page
import SingleProduct from '~/pages/SingleProduct';


//Manager
import { HomeManager } from '~/pages/Manager/pages/Home';
import Single from '~/pages/Manager/pages/Single';
import Write from '~/pages/Manager/pages/Write';
import { Register, Login } from '~/pages/Manager/pages/Register';
// import Profile from '~/pages/Profile';
// import Upload from '~/pages/Upload';
// import Search from '~/pages/Search';
// import Live from '~/pages/Live';

// Data

// Public routes
const publicRoutes = [
    // Page client
    { path: config.routes.home, component: Home },
    { path: config.routes.iphone, component: Iphone, layout: HeaderProduct },
    { path: config.routes.ipad, component: Ipad, layout: HeaderProduct },
    { path: config.routes.mac, component: Mac, layout: HeaderProduct },

    // Single Page
    { path: config.routes.profile, component: SingleProduct, layout: HeaderProduct},

    //Manager
    { path: config.routes.manager, component: HomeManager, layout: LayoutManager },
    { path: config.routes.single, component: Single, layout: LayoutManager },
    { path: config.routes.write, component: Write, layout: LayoutManager },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.login, component: Login, layout: null },


];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
