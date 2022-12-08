import config from '~/config';

// Layouts
import { HeaderProduct } from '~/layouts';

// Pages
import Home from '~/pages/Home';
// import Iphone from '~/pages/ItemsProduct/Iphone';
// import Ipad from '~/pages/ItemsProduct/Ipad';
import ItemsProduct from '~/pages/ItemsProduct/ItemsProduct';

// Single Page
import SingleProduct from '~/pages/SingleProduct';

// CheckOut
import CheckOut from '~/pages/Cart/CheckOut';

// Not Found
import NotFound from '~/pages/NotFound';



// Data

// Public routes
const publicRoutes = [
    // Page client
    { path: config.routes.home, component: Home, layout: HeaderProduct },
    { path: config.routes.iphone, component: ItemsProduct, layout: HeaderProduct },
    { path: config.routes.ipad, component: ItemsProduct, layout: HeaderProduct },
    { path: config.routes.mac, component: ItemsProduct, layout: HeaderProduct },
    { path: config.routes.watch, component: ItemsProduct, layout: HeaderProduct },
    { path: config.routes.loudspeaker, component: ItemsProduct, layout: HeaderProduct },

    { path: config.routes.checkout, component: CheckOut, layout: HeaderProduct },

    
    
    //Not Found
    { path: config.routes.notfound, component: NotFound, layout: HeaderProduct },


    // Single Page
    { path: config.routes.iphones, component: SingleProduct, layout: HeaderProduct},
    { path: config.routes.ipads, component: SingleProduct, layout: HeaderProduct},
    { path: config.routes.macs, component: SingleProduct, layout: HeaderProduct},
    { path: config.routes.watchs, component: SingleProduct, layout: HeaderProduct},
    { path: config.routes.loudspeakers, component: SingleProduct, layout: HeaderProduct},



];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
