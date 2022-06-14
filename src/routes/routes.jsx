import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Accessories from '../Pages/Accessories'
import Catalog from '../Pages/Catalog'
import Product from '../Pages/Product'
import Contact from '../Pages/Contact'
import Policy from '../Pages/Policy'

export const publicRoutes = [
    // những page không cần đăng nhập vẫn xem được
    { path: '/', component: Home },
    { path: '/catalog', component: Catalog },
    { path: '/cart', component: Cart },
    { path: '/accessories', component: Accessories },
    { path: '/policy', component: Policy },
    { path: '/contact', component: Contact },
    { path: '//catalog/:slug', component: Product  },
];

export const privateRoutes = [
    // những page cần đăng nhập mới xem được
];
