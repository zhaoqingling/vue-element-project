<template>
  <div>
    <p>我是管理   哈哈</p>
    <p>store里的数据：{{count}}</p>
    <ul>
      <li v-for="(item,index) in list" @click="jump(item)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
     list:[{name:'xiaoming'},{name:'xiaolang'},{name:'xiaohong'}]
    }
  },
  methods:{
    jump({name}) {
      this.$router.push({
        path: '/demo',
        query:{
          name: name
        }
      })
    }
  },
  computed: {
    count() {
      let count = this.$store.state.count;
      return count
    }
  },
  created() {
    
  }
}  
</script>
<style lang="scss" scoped>
  ul {
    li {
      cursor: pointer;
      line-height: 30px;
    }
  }
</style>