//导入了vue安装包
import Vue from 'vue'
//导入了APP根组件
import App from './App.vue'
import router from './router'

//导入了store的js中对外暴露的store实例对象
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  //-4.将创建的store实例共享数据对象，挂载到Vue实例中
  //*所有的组件，就可以直接从store中获取并使用全局数据
  store,
  render: h => h(App)
}).$mount('#app')
