const routes = {
    home: '/',
    iphone: '/iphone',
    ipad: '/ipad',
    mac: '/mac',

    //Single Page
    profile: '/iphone/:id',

    // Manager Page
    manager: '/manager',
    register: '/manager/register',
    login: '/manager/login',
    single: '/manager/post/:id',
    write: '/manager/write',
};

export default routes;
