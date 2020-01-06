<template>
  <div>
    <p>我是sale  啦啦</p>
    <p><span>sale 里的store数据</span>:{{num}}</p>
    <el-row>
      <el-button type="primary" size="small" @click="test">点击请求</el-button>
    </el-row>
    <ul>
      <li v-for="item in data">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex"
export default {
  data() {
    return {
      num: 0,
      data:[]
    }
  },
  methods: {
    ...mapActions("sale", {
      testDemo: "testDemo"
    }),
    async test() {
      let data = {'name':'xiaoming'};
      let result = await this.testDemo(data)
      if(result.code == 0){
        this.data = result.data;
      }
    },
    tests(){
      // this.$http.get('/user?Id=12345').then(res=>{

      // }).catch(res=>{

      // })
    }
  },
  computed: {
    ...mapState('sale',[
      'list',
    ])
  },
  created() {
    this.num = this.list;
  }
}  
</script>
<style lang="scss" scoped>
  
</style>