<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
 data() {
      return {
        
      };
    },
  methods: {

  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir','Microsoft YaHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #615f5f;
  font-size: 14px;
  height: 100%;
  background: #f4f8f9;
}
section,article,aside,header,footer,nav,figure{display:block;}
body,h1,h2,h3,h4,h5,h6,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td,figure{margin:0;padding:0;}
h1,h2,h3,h4,h5,h6,button,input,select,textarea{font-size:100%;}
address,cite,dfn,em,var{font-style:normal;}
body{background:#fff;}
code,kbd,pre,samp{font-family:courier new,courier,monospace;}
small{font-size:12px;}
ul,ol{list-style:none;}
/*a{color:#0b97d4;text-decoration:none;}*/
a:hover{color:#ed1b23;}
sup{vertical-align:text-top;}
sub{vertical-align:text-bottom;}
legend{color:#000;}
fieldset,img{border:0;vertical-align:top;}
table{border-collapse:collapse;border-spacing:0;}
*:focus{outline:none;}textarea{resize:none;}
body,button,input,select,textarea{*font-family:Microsoft YaHei; font-size:14px;color:#615f5f;}
</style>
