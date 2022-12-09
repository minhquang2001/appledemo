const routes = {
    home: '/',
    iphone: '/iphones',
    ipad: '/ipads',
    mac: '/macs',
    watch: '/watchs',
    loudspeaker: '/loudspeakers',
    checkout: '/checkout',
    notfound: '*',

    //Single Page
    iphones: '/iphones/:id',
    ipads: '/ipads/:id',
    macs: '/macs/:id',
    watchs: '/watchs/:id',
    loudspeakers: '/loudspeakers/:id',
    search: '/search/:id',
    cart: '/cart/:id',
};

export default routes;
