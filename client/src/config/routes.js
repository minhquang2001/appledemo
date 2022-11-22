const routes = {
    home: '/',
    iphone: '/iphones',
    ipad: '/ipads',
    mac: '/macs',
    checkout: '/checkout',
    notfound: '*',

    //Single Page
    iphones: '/iphones/:id',
    ipads: '/ipads/:id',
    macs: '/macs/:id',



    // Manager Page
    manager: '/manager',
    register: '/manager/register',
    login: '/manager/login',
    single: '/manager/post/:id',
    write: '/manager/write',
};

export default routes;
