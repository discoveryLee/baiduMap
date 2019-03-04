<template>
  <v-touch class="left-bar" @tap="enableTouch">
    <div class="opt complete">已完成</div>
    <div class="opt wait">待办</div>
    <div class="opt now">进行中</div>
  </v-touch>
</template>

<script>
export default {
  name: 'FooterBar',
  props: ['index'],
  data(){
    return {
      
    }
  },
  methods:{
    //点击修改item的status
    enableTouch(e){
      let todoData = this.$store.state.todoData[this.index];
      let targetClass = e.target.classList;
      if(targetClass.contains('complete')) {
        todoData.status = '2';
      } else if(targetClass.contains('wait')) {
        todoData.status = '1';
      } else {
        todoData.status = '0';
      }
      this.$store.commit('editItem', {todoData: todoData, index: this.index});
      this.$emit('enable-pan');
    }
  }
}
</script>


<style scoped>
.left-bar{
  display: flex;
  justify-content: space-around;
  background-color: #bbb;
  height: 50px;
}
</style>
