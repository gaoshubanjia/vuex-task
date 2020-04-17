<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <div>
      <p>当前的count显示值：{{this.$store.state.count}}</p>
      <!-- --4.以标签形式使用子组件 -->
      <myinput1  class="my_ipt"></myinput1> 
      <myinput2  class="my_ipt"></myinput2>
    </div>
  </div>
</template>

<script>
//--2.导入子组件
import input1 from './components/input1';
import input2 from './components/input2';

export default {
  data(){
    return{};
  },
   //--3.注册为根组件App的私有子组件
  components:{
    'myinput1':input1,
    'myinput2':input2
  },
}

</script>




<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.my_ipt {
  width: 500px;
  margin-right: 10px;
  display: inline-block;
}
</style>
