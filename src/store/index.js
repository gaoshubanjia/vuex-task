//导入了vue这个包
import Vue from 'vue'
//vuex的基本使用 -1.导入vuex依赖包
import Vuex from 'vuex'


Vue.use(Vuex)
//-2.把包安装到Vuex项目中，开始使用

//-3.通过new创建store对象，构造函数实例对象，并将它暴露出去
export default new Vuex.Store({
  //state中存放的就是全局共享的数据
 
  state: {
    strict:true,
    count:""//清空
  },
  //---传入state和value两个参数
  mutations: {
    updateCount(state,value){
      state.count = value
    }
  },
  actions: {
  },
  modules: {
  }
})
