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
      menuList: [{
        path: '/',
        meta: { title: '首页', icon: 'shouye' }
      },
      {
        path: '/dataOverview',
        meta: { title: '数据总览', icon: 'dataOverview' }
      },
      {
        path: '/kehu',
        meta: { title: '客户', icon: 'kehu' }
      },{
        path: '/guanli',
        meta: { title: '管理', icon: 'guanli' }
      }, {
        path: '/bumen',
        name: 'bumen',
        meta: { title: '部门', icon: 'bumen' },
        children: [
          {
            path: 'xiaoshoubumen',
            name: 'xiaoshoubumen',
            meta: { title: '销售部门', icon: 'xiaoshoubumen' }
          },
          {
            path: 'shichangbumen',
            name: 'shichangbumen',
            meta: { title: '市场部门', icon: 'shichangbumen' }
          },
          {
            path: 'chanpin',
            name: 'chanpinbumen',
            meta: { title: '产品部门', icon: 'chanpinbumen' }
          }
        ]
      }, {
        path: '/数据类型',
        name: 'shujuleixing',
        meta: { title: '数据类型', icon: 'shujuleixing' },
        children: [
          {
            path: 'zixunlei',
            name: 'zixunlei',
            meta: { title: '咨询类', icon: 'zixunlei' }
          },
          {
            path: 'baojinglei',
            name: 'baojinglei',
            meta: { title: '报警类', icon: 'baojinglei' }
          },
          {
            path: 'tousulei',
            name: 'tousulei',
            meta: { title: '投诉类', icon: 'tousulei' }
          }
        ]
      },{
        path: '/shezhi',
        meta: { title: '设置', icon: 'shezhi' }
      }]
    }
  },
  mounted () {

  }
}
</script>
