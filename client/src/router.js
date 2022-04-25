import { ADMIN_ROUTE, CART_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"
import Admin from "./pages/AdminPanel"
import Cart from "./pages/Cart"
import Auth from "./pages/Auth"
import Shop from "./pages/Shop"
import DevicePage from "./pages/DevicePage"

export const authRouter = [ // марщруты на которые может перейти лишь авторизованный пользователь

  {
    path: ADMIN_ROUTE,
    Component: Admin
  },

  {
    path: CART_ROUTE,
    Component: Cart
  },

]

export const publicRouter = [ // маршруты на которые может перейти любой пользователь

  {
    path: SHOP_ROUTE,
    Component: Shop
  },

  {
    path: LOGIN_ROUTE,
    Component: Auth
  },

  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },

  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage
  },

]
