<template>
 <div class="container-contain">
  <div class="container-header">
    <div class="header">
      <!-- logo 图标 -->
      <div :class="['logo',{'isLogo': isCollapse}]">
        <img src="/static/image/logo-cmdb.png" />
        <span class="logo-text">CMDB</span>
      </div>
      <!-- 添加刷新，折叠按钮 -->
      <div :class="['menu-oprate',{'isMenu':isCollapse}]">
        <span class="shrink" @click="panelCollapse">
          <i class="iconfont icon-caidanyouchu" v-if="!isCollapse"></i>
          <i class="iconfont icon-caidanzuochu" v-else></i>
        </span>
        <span class="fresh">
          <i class="iconfont icon-fresh" @click="fresh"></i>
        </span>
      </div>
      <!-- 全局搜索 -->
      <div class="input-search">
        <el-input
          placeholder="请输入搜索内容"
          suffix-icon="el-icon-search"
          v-model="searchAll">
        </el-input>
      </div>
      <!-- 右侧 -->
      <div class="list">
        <ul>
          <li><p>CMDB</p></li>
          <li><p>持续交付</p></li>
          <li><p>智能监控</p></li>
          <li><p>IT运营分析</p></li>
        </ul>
      </div>
      <!-- 消息通知 -->
      <div class="bell-notica">
        <i class="el-icon-bell"></i>
      </div>
      <!-- 操作员登录 -->
      <div class="operate-menu">
        <el-dropdown class="down-menu">
          <span class="el-dropdown-link">
            <span style="margin-right:5px;cursor:pointer;">root</span><i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>基本资料</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item divided @click.native="doLogout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
  <!-- 菜单 -->
  <div class="container-sidebar" id="container-sidebar">
    <div class="container-sidebar-scroll">
    <el-menu :default-active="this.$route.path" class="el-menu-vertical-demo"
      router 
      :collapse="isCollapse"
      background-color="#20222a"
      text-color="#fff"
      :unique-opened="unique"
      >
      <!-- <el-submenu index="">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/">选项1</el-menu-item>
          <el-menu-item index="">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/sale">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="/manage">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
      <template v-for="(item,index) in menuData">
        <el-menu-item v-if="!item.children" :index="item.path">
          <i class="iconfont" :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
        <el-submenu :index="`${index}`" v-else>
          <template slot="title">
            <i class="iconfont" :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <el-menu-item-group>
            <template v-for="(items,index) in item.children">
              <el-menu-item :index="items.path">{{items.name}}</el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
    </div>
  </div>
  <!-- 路由跳转 -->
  <div class="container-main" :class="{isActive:isCollapse}">
    <div class="main-body">
      <div class="main-box" id="main-box"> <router-view></router-view></div>
    </div>
  </div>
 </div> 
</template>
<script>
 import { mapMutations,mapGetters, mapState} from 'vuex'
 export default {
  data(){
    return {
      unique: true,
      searchAll: '',
      isCollapse: false,
      menuData:[
        {
          name:'工作台',
          path:'/layout',
          icon: 'icon-global',
        },
        {
          name:'导航一',
          path: '',
          icon: 'icon-global',
          children:[
            {
              name:'选项1',
              path: '/'
            }
          ]
        },
        {
          name:'导航二',
          path: '/sale',
          icon: 'icon-wendang1'
        },
        {
          name:'导航四',
          path: '/manage',
          icon: 'icon-zhishiku'
        },
        {
          name: 'demo',
          path: '/demo',
          icon: 'icon-kehufenqun'
        }
      ]
    }
  },
  components: {
   
  },
  methods:{
    ...mapMutations({
        intoLogin:'intoLogin'
    }),
    /*刷新*/
    fresh() {
      window.location.reload();
      // this.$router.push('/');
    },
    /*折叠效果*/
    panelCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    // 退出
    doLogout() {
      let logout = {
        pass: '',
        userName: ''
      };
      this.intoLogin(logout);
      this.$router.push('/login');
    }
  },
  mounted() {
    // 设置主内容区域 高度
    document.getElementById('main-box').style.height = (document.body.clientHeight-100)+'px';
  }
 } 
</script>
<style lang="scss" scoped>
@import '../style/primary.scss';
.container-contain {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #f8f8f8;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height:100%;
  }
a{
  color: #fff;
  text-decoration: none;
}
.container-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .header {
    width: 100%;
    height: 50px;
    background-color: #20222a;
    position: relative;
    &:after {
      content: " ";
      height: 0;
      clear: both;
      display: block;
    }
    .logo {
      padding-left: 24px;
      img {
        width: 48px;
      }
      .logo-text {
        color: #fff;
        font-size: 22px;
        margin-left: 20px;
        line-height: 50px;
      }
      display: inline-block;
      &.isLogo {
        padding-left: 16px;
        .logo-text {
          display: none;
        }
        img {
          width: 30px;
          padding-top: 12px;
        }
      }
    }
    .input-search {
      display: inline-block;
      margin-left: 320px;
      vertical-align: top;
      margin-top: 10px;
    }
    .list {
      color: #fff;
      font-size: 14px;
      position: absolute;
      top: 0;
      right:180px;
      ul{
        &:after {
          content: " ";
          height: 0;
          clear: both;
          display: block;
        }
        li {
          float: left;
          p {
            padding:0 20px;
            height: 50px;
            line-height:50px;
            cursor: pointer;
            border-bottom: 5px solid #20222a;
            &:hover {
              border-bottom: 5px solid $color;
            }
          }
        }
      }
    }
    .bell-notica {
      position: absolute;
      top: 16px;
      right: 110px;
      i{
        color: #fff;
        font-size: 18px;
        cursor: pointer;
      }
    }
    .operate-menu {
      position: absolute;
      top: 16px;
      right: 20px;
      .el-dropdown-link {
        display: inline-block;
        height: 30px;
      }
      .down-menu {
        color: #fff;
      }
    }
    .menu-oprate {
      position: absolute;
      top: 16px;
      left: 200px;
      i{
        color: #fff;
        font-size: 14px;
        cursor: pointer;
      }
      .shrink {
        margin-right: 16px;
      }
      &.isMenu {
        left: 66px;
      }
    }
  }
}
.container-sidebar {
  width:200px;
  position: fixed;
  top: 50px;
  left: 0;
  bottom:0;
  overflow-x: hidden;
  z-index:100;
  height: 100%;
}

.container-sidebar-scroll{
  width: 220px;
  position:relative;
  height:100%;
  overflow-x:hidden;
}

.container-sidebar>ul {
  width:200px;
  position:relative;
  padding-top: 5px;
  // overflow-x: hidden;
  font-size:0;
  box-sizing:border-box;
  height: 100%;
}
.container-main {
  padding:15px 10px 0;
  margin: 50px 0 0 200px;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  height: 100%;
  overflow: hidden;
  .main-body {
    background: #fff;
    padding: 10px 8px 10px 10px;
  }
  .main-box{
    overflow-y: auto;
    overflow-x: hidden;
  }
  
}
.el-menu--collapse {
  height:100%;
}
.container-main.isActive {
  margin-left: 64px;
}

.el-menu-item i.iconfont ,.el-submenu__title i.iconfont{
  font-size: 20px;
  margin-right: 8px;
}
</style>