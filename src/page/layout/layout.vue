<template>
  <div class="layout-wrapper">
  <div class="layout-tit clear">
    <div class="design-flex" v-if="seen" @click="designFlex"><i class="iconfont">&#xe627;</i><span>设计布局</span></div>
   <div class="design-flex-btn" v-else>
     <el-button size="mini" icon="el-icon-plus">添加卡片</el-button>
     <div class="top-bar-divide-line"></div>
     <el-button size="mini" @click="cancelFlex">取消</el-button>
     <el-button size="mini" type="primary" @click="saveCard">保存</el-button>
   </div>
  </div>  

      <grid-layout
            :layout.sync="layout"
            :col-num="12"
            :row-height="85"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
    >

        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i" :minW=4 :minH=2 :static="item.static">
            <!-- 放入卡片内容-->
          <div class="card-top-titles">
            <div class="card-title">{{item.title}}</div>
            <div class="card-sub-title">{{item.subtitle}}</div>
          </div>
          <!-- 图标 -->
          <div class="card-icon">
            <div class="icon-box" v-if="item.static">
              <!-- 静态不可编辑 -->
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <span class="icon"><i class="iconfont">&#xe67c;</i></span>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>刷新数据</el-dropdown-item>
                  <el-dropdown-item>编辑卡片</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="icon-box" v-else>
              <!-- 非静态可编辑 -->
              <span class="icon"><i class="iconfont">&#xe655;</i></span>
              <span class="icon"><i class="iconfont">&#xe615;</i></span>
            </div>
          </div>
          <div class="card-content" :style="{height:(item.h*85-75)+'px'}">
            暂无内容
          </div>
        </grid-item>
    </grid-layout>
  </div>
</template>
<script>
  import VueGridLayout from 'vue-grid-layout';
  var testLayout = [
      {"x":0,"y":0,"w":4,"h":2,"i":"0",static:true,title:'我负责的工作项',subtitle:'共0个工作项'},
      {"x":4,"y":0,"w":4,"h":2,"i":"1",static:true,
      title:'我关注的工作项',
      subtitle:'共1个工作项'
      },
      {"x":8,"y":0,"w":4,"h":2,"i":"2",static:true,
      title:'进行中的项目',
      subtitle:'共0个工作项'
      }
  ];
  export default {
    data(){
      return {
      layout:testLayout,
        seen:true
      }
    },
    methods:{
      designFlex(){
        this.seen = !this.seen;
        // 可编辑
        _.forEach(this.layout,function(item,index){
          item.static = false;
        })
      },
      cancelFlex(){
        this.$confirm('离开当前界面,此界面的布局信息会被丢弃，是否继续?', '确认退出', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.seen = !this.seen
           //不可编辑
          _.forEach(this.layout,function(item,index){
            item.static = true;
          })
        }).catch(() => {
            
        });
      },
      saveCard(){
        this.$message({
          message: '保存成功！',
          type: 'success',
          duration:1000
        });
        this.seen = !this.seen;
        //不可编辑
        _.forEach(this.layout,function(item,index){
          item.static = true;
        })
        //保存需要传入的参数
        console.log('save',this.layout);
      },
      heightContent(h){
        return h*85-50;
     }
    },
    components: {
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem
    },
    created() {
      
    },
    computed: {
    }
  }
</script>
<style lang="scss" >
@import '../../style/primary.scss';
.layout-wrapper {
  .vue-grid-item {
    position:relative;
    padding:20px;
    background:#fff;
    border-radius:4px;
    border:1px solid #ebeef5;
    box-shadow:0 2px 12px 0 rgba(0,0,0,.1);
    transition:box-shadow 0.2s ease;
  }
  .vue-grid-item:hover{
    box-shadow:0 12px 10px 0 rgba(31,31,31,0.1), 0 0 2px 0 rgba(31,31,31,0.2);
  }
  .vue-grid-item.static{
    box-shadow:0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
  }
  .layout-tit{
    padding-right:10px;
    height:45px;
    line-height:45px;
    border-bottom:1px solid #ebeef5;
  }
  .design-flex {
    color:#303030;
    display:inline-block;
    cursor:pointer;
    padding:0 5px;
    float:right;
    i{
      font-size:20px;
      vertical-align:middle;
    }
    span{
      display:inline-block;
      height:22px;
      line-height:22px;
      margin-left:5px
    }
    &:hover {
      color:$color;
    }
  }
  .design-flex-btn{
    display:flex;
    flex-direction:row;
    align-items:center;
    padding-top:8px;
    float:right;
  }
  .top-bar-divide-line{
    width:1px;
    height:20px;
    background:#dedede;
    margin:0 20px;
    display:inline-block;
  }
  //卡片内容部分
  .card-top-titles{
    padding-right:50px;
    .card-title{
      font-size:14px;
      color:#303030;
      font-weight:500;
      height:22px;
      line-height:22px;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    .card-sub-title{
      font-size:12px;
      color:#909090;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      height:18px;
      line-height:18px;
    }
  }
  .card-content {
    padding-top:10px;
    display: flex;
    justify-content: center;
    align-items:center;
  }
  .icon-box {
    position:absolute;
    top:25px;
    right:15px;
    z-index:10;
    cursor:pointer;
    span.icon{
      padding:5px 3px;
      i{
        color:#303030;
        font-size:20px;
        font-weight:bold;
      }
      &:hover{
        i{
          color:$color;
        }
      }
    }
  }

}  
</style>