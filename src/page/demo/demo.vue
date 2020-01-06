<template>
  <div class="sale-wrapper">
    <h2>样例</h2>
    <p :id="demoId">我是小样，我就这样</p>
    <div>
      <p v-if="show.showFir">
        <span v-if="show.showSec"> 真中真</span>
        <span v-else> 真中假</span>
      </p>
      <p v-else>你能看见我，是假的</p>
    </div>
    <div>
      <ul>
        <li v-for="(item,index) in list" :id="item.id">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div>
      <button @click="testClick">123</button>
      <input type="text" @keyup.enter="submit"/>
    </div>
    <div style="margin-top: 20px;">
      <p><input type="text" v-model="message"/></p>
      <p>text is: {{message}}</p>
    </div>
    <h2>父子组件传递</h2>
    <div>
      <button @click="showModal">点我调用子组件</button>
      <p>{{text}}</p>
    </div>
    <modal @has-close="close" ref="modal" :text="message"></modal>
    <div>
      <p>list的长度{{lengths}}</p>
    </div>
    <div>
      {{info}}
    </div>
    <p>
      <img src="/static/image/logo.png" />
    </p>
    <p>
      <img src="/static/image/logo.png" />
    </p>
    <p>
      <img src="/static/image/logo.png" />
    </p>
    <p>
      <img src="/static/image/logo.png" />
    </p>
    <p>
      <img src="/static/image/logo.png" />
    </p>
    <p>
      <img src="/static/image/logo.png" />
    </p>
    <p>
      <img src="/static/image/logo.png" />
    </p>
    <p>
      <img src="/static/image/logo.png" />
    </p>
  </div>
</template>
<script>
  import modal from './components/group.vue'
  export default {
    data(){
      return {
        src: require('../../../static/image/logo.png'),
        info: this.$route.query,
        demoId: 'temp-id',
        show: {
          showFir: true,
          showSec: true
        },
        list:[
          {
            name: '123',
            id: '1'
          },
          {
            name: '234',
            id: '2'
          },
          {
            name: '345',
            id: '3'
          },
          {
            name: '345',
            id: '3'
          }
        ],
        message: '',
        shows: false,
        text: ''
      }
    },
    methods:{
      testClick() {
        alert('1234');
      },
      submit() {
        alert('提交')
      },
      showModal() {
        // this.shows = true
        this.$refs.modal.openModal();
      },
      close(num) {
        // this.shows = false;
        this.text = num;
       
      },
      length() {
        return this.list.length
      }
    },
    components: {
      modal
    },
    created() {
      // console.log('demo',this.$route.query)
      _.forEach(this.list,function(item,index){
        // console.log(index,item.id)
      })

      this.list.forEach((item,index)=>{
        // console.log(index,item.name)
      })

      // obj assign 方法用于对象的合并
      let obj1 = {a:2, b:3}, obj2 = {c:4, b:5,a:9};
      let obj = Object.assign({}, obj1, obj2);
      console.log('12',obj)
    },
    computed: {
      lengths(){
        return this.list.length
      }
    }
  }
</script>
<style lang="scss" scoped>
.sale-wrapper {

}  
</style>