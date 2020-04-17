<template>
<!-- 子组件的注册和使用 --1.创建子组件 -->
    <div>
        <input type="text" placeholder="请输入" class="ipt"  @input="updateMessage" v-model="count">
    </div>
</template>

<script>
export default {
    data(){
        return {};
    },
    //vue文档库表单的最后一种方法
    methods: {
     updateMessage(e){
      const value =e.target.value;
      //console.log(value);
      //调用store里的mutations函数
      this.$store.commit("updateCount",value)
     }
    },
    computed: {
     count:{
      get(){
        return this.$store.state.count;
      },
      set(value){
        this.$store.commit("updateCount",value)
      }
    }
  }  

}
</script>

<style scoped>
.ipt {
    margin-right: 10px;
    box-sizing: border-box;
    margin: 10px;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    width: 100%;
    height: 32px;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s;
}
</style>