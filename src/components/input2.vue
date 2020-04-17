<template>
    <div>
        <input type="text" placeholder="请输入" class="ipt" v-model="count">
    </div>
</template>

<script>
export default {
  data(){
    return {};
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
};
</script>

<style scoped>
.ipt{
    margin-right: 10px;
    box-sizing: border-box;
    margin: 50px;
    padding: 0;
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