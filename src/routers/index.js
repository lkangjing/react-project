import Login from '../pages/Login'
import Index from '../pages/admin/dashboard/index'
import List from '../pages/admin/products/List'
import Edit from '../pages/admin/products/Edit'
import PageNotFound from '../pages/PageNotFound'

export const mainRoutes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/404',
    component: PageNotFound,
  },
]

export const adminRoutes = [
  {
    path: '/admin/dashboard',
    component: Index,
    isShow: true,
    title: '看板',
  },
  {
    path: '/admin/products',
    component: List,
    isShow: true,
    exact: true,
    title: '商品管理',
  },
  {
    path: '/admin/products/edit/:id',
    component: Edit,
    isShow: false,
  },
]
