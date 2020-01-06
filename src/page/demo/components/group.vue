<template>
<div>
    <!-- 弹窗 -->
    <el-dialog
    title="提示"
    :visible.sync="isShow"
    width="30%"
    :before-close="cancel">
    <div><span>这是一段信息</span>
      <p><input type="text" v-model="text"/></p>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="confrim">确 定</el-button>
    </span>
  </el-dialog>

</div>  
</template>
<script>
  export default {
    props: {
      text: {
        type:String,
        default: ''
      }
    },
    data(){
      return {
        isShow: false
      }
    },
    methods: {
      openModal() {
        this.isShow = true
      },
      cancel() {
        this.isShow = false
      },
      confrim() {
        this.isShow = false
        this.$emit('has-close',this.text);
      }
    }
  }
</script>
<style scoped>
  
</style>