import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dataOverview',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'shouye' }
    },{
      path: 'dataOverview',
      name: 'dataOverview',
      component: () => import('@/views/pages/DataOverview/index.vue'),
      meta: { title: '数据总览', icon: 'dataOverview' }
    },
    {
      path: 'productFocus',
      name: 'productFocus',
      component: () => import('@/views/pages/xonsultingBusinessLineAnalysis/productFocus/index.vue'),
      meta: { title: '产品关注', icon: 'productFocus' }
    },
    {
      path: 'marketingFocus',
      name: 'marketingFocus',
      component: () => import('@/views/pages/xonsultingBusinessLineAnalysis/marketingFocus/index.vue'),
      meta: { title: '营销关注', icon: 'marketingFocus' }
    },
    {
      path: 'activityInterest',
      name: 'activityInterest',
      component: () => import('@/views/pages/xonsultingBusinessLineAnalysis/activityInterest/index.vue'),
      meta: { title: '活动兴趣', icon: 'activityInterest' }
    },
    {
      path: 'serviceFocus',
      name: 'serviceFocus',
      component: () => import('@/views/pages/xonsultingBusinessLineAnalysis/serviceFocus/index.vue'),
      meta: { title: '服务焦点', icon: 'serviceFocus' }
    },
    {
      path: 'productProblem',
      name: 'productProblem',
      component: () => import('@/views/pages/complaintBusinessLineAnalysis/productProblem/index.vue'),
      meta: { title: '产品问题', icon: 'productProblem' }
    },
    {
      path: 'dealerProblem',
      name: 'dealerProblem',
      component: () => import('@/views/pages/complaintBusinessLineAnalysis/dealerProblem/index.vue'),
      meta: { title: '经销商问题', icon: 'dealerProblem' }
    },
    {
      path: 'indexAnalysis',
      name: 'indexAnalysis',
      component: () => import('@/views/pages/indexAnalysis/index.vue'),
      meta: { title: '指标分析', icon: 'indexAnalysis' }
    },
    {
      path: 'excel',
      name: 'excel',
      component: () => import('@/views/pages/excel/index.vue'),
      meta: { title: 'excel', icon: 'excel' }
    },
    
    
    {
      path: 'customer',
      name: 'customer',
      component: () => import('@/views/pages/customer.vue'),
      meta: { title: '客户', icon: 'customer' }
    },{
      path: 'management',
      name: 'management',
      component: () => import('@/views/pages/management.vue'),
      meta: { title: '管理', icon: 'management' }
    },{
      path: 'consult',
      name: 'consult',
      component: () => import('@/views/pages/crm/consult.vue'),
      meta: { title: '咨询', icon: 'consult' }
    },{
      path: 'warning',
      name: 'warning',
      component: () => import('@/views/pages/crm/warning.vue'),
      meta: { title: '预警', icon: 'warning' }
    },{
      path: 'complaint',
      name: 'complaint',
      component: () => import('@/views/pages/crm/complaint.vue'),
      meta: { title: '投诉', icon: '投诉' }
    },{
      path: 'productDepartment',
      name: 'productDepartment',
      component: () => import('@/views/pages/department/productDepartment.vue'),
      meta: { title: '投诉', icon: '投诉' }
    }]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '客户', icon: 'kehu' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'shouye' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '管理', icon: 'guanli' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '部门',
      icon: 'bumen'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    meta: {
      title: '数据类型',
      icon: 'shujuleixing'
    },
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
