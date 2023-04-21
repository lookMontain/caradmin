<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu" :collapse="isCollapse" :background-color="variables.menuBg"
        :text-color="variables.menuText" :unique-opened="false" :active-text-color="variables.menuActiveText"
        :collapse-transition="false" mode="vertical">
        <sidebar-item v-for="route in menuList" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes () {
      return this.$router.options.routes
    },
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo () {
      return this.$store.state.settings.sidebarLogo
    },
    variables () {
      return variables
    },
    isCollapse () {
      return !this.sidebar.opened
    }
  },
  data () {
    return {
      menuList1: [{
        path: '/',
        meta: { title: '首页', icon: 'shouye' }
      },
      {
        path: '/dataOverview',
        meta: { title: '数据总览', icon: 'dataOverview' }
      },
      {
        path: '/customer',
        meta: { title: '客户', icon: 'customer' }
      },{
        path: '/management',
        meta: { title: '管理', icon: 'management' }
      }, {
        path: '/crm',
        name: 'crm',
        meta: { title: 'CRM', icon: 'crm' },
        children: [
          {
            path: '/consult',
            name: 'consult',
            meta: { title: '咨询', icon: 'consult' }
          },
          {
            path: '/warning',
            name: 'warning',
            meta: { title: '预警', icon: 'warning' }
          },
          {
            path: '/complaint',
            name: 'complaint',
            meta: { title: '投诉', icon: 'complaint' }
          }
        ]
      }, {
        path: '/department',
        name: 'department',
        meta: { title: '部门', icon: 'department' },
        children: [
          {
            path: '/marketingDepartment',
            name: 'marketingDepartment',
            meta: { title: '市场部门', icon: 'marketingDepartment' }
          },
          {
            path: '/salesDepartment',
            name: 'salesDepartment',
            meta: { title: '销售部门', icon: 'salesDepartment' }
          },
          {
            path: '/productDepartment',
            name: 'productDepartment',
            meta: { title: '产品部门', icon: 'productDepartment' }
          }
        ]
      }, {
        path: '/dataType',
        name: 'dataType',
        meta: { title: '数据类型', icon: 'dataType' },
        children: [
          {
            path: 'consultType',
            name: 'consultType',
            meta: { title: '咨询类', icon: 'consultType' }
          },
          {
            path: 'warningType',
            name: 'warningType',
            meta: { title: '报警类', icon: 'warningType' }
          },
          {
            path: 'complaintType',
            name: 'complaintType',
            meta: { title: '投诉类', icon: 'complaintType' }
          }
        ]
      },{
        path: '/set',
        meta: { title: '设置', icon: 'set' }
      }],
      menuList: [
      //   {
      //   path: '/',
      //   meta: { title: '首页', icon: 'shouye' }
      // },
      {
        path: '/dataOverview',
        meta: { title: '数据总览', icon: 'dataOverview' }
      }, {
        path: '/xonsultingBusinessLineAnalysis',
        name: 'xonsultingBusinessLineAnalysis',
        meta: { title: '咨询业务线分析', icon: 'crm' },
        children: [
          {
            path: '/productFocus',
            name: 'productFocus',
            meta: { title: '产品关注', icon: 'consult' }
          },
          {
            path: '/marketingFocus',
            name: 'marketingFocus',
            meta: { title: '营销关注', icon: 'warning' }
          },
          {
            path: '/activityInterest',
            name: 'activityInterest',
            meta: { title: '活动兴趣', icon: 'complaint' }
          },
          {
            path: '/serviceFocus',
            name: 'serviceFocus',
            meta: { title: '服务焦点', icon: 'complaint' }
          },
          
        ]
      }, {
        path: '/complaintBusinessLineAnalysis',
        name: 'complaintBusinessLineAnalysis',
        meta: { title: '投诉业务线分析', icon: 'crm' },
        children: [
          {
            path: '/productProblem',
            name: 'productProblem',
            meta: { title: '产品问题', icon: 'consult' }
          },
          {
            path: '/dealerProblem',
            name: 'dealerProblem',
            meta: { title: '经销商问题', icon: 'warning' }
          },
          {
            path: '/headquartersProblem',
            name: 'headquartersProblem',
            meta: { title: '总部问题', icon: 'complaint' }
          } 
        ]
      },{
        path: '/bu',
        name: 'bu',
        meta: { title: 'BU', icon: 'crm' },
        children: [
          {
            path: '/productDepartment',
            name: 'productDepartment',
            meta: { title: '产品部门', icon: 'consult' }
          },
          {
            path: '/salesDepartment',
            name: 'salesDepartment',
            meta: { title: '销售部门', icon: 'warning' }
          },
          {
            path: '/marketDepartment',
            name: 'marketDepartment',
            meta: { title: '市场部门', icon: 'complaint' }
          },
          {
            path: '/networktDepartment',
            name: 'networkDepartment',
            meta: { title: '网络部门', icon: 'complaint' }
          },
          {
            path: '/serviceDepartment',
            name: 'serviceDepartment',
            meta: { title: '服务部门', icon: 'complaint' }
          }
        ]
      },{
        path: '/set',
        meta: { title: '设置', icon: 'set' }
      },{
        path: '/management',
        meta: { title: '管理', icon: 'set' }
      }]
    }
  },
  mounted () {

  }
}
</script>
