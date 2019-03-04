<template>
 <div class="main">
  <p class="slogan">Now!The one thing is</p>
  <div class="item" v-if="firstHigh">
    <i class="fa fa-play high" aria-hidden="true"></i>
    <p class="content">
      {{firstHigh.content}}
    </p>
  </div>
 </div>
</template>

<script>
export default {
  methods:{},
  computed:{
    firstHigh(){
      let todoData=this.$store.state.todoData;
      for(let item of todoData){
        if(item.prior==='0' && item.status === '0'){
          return item;
        }
      }
      return undefined;
    }
  },
  created() {
    this.$store.commit('changeOptions', {
          select: 'onething',
          btnName: 'Add',
          btnClass: 'add',
          setCancel: false,
          setBar: false
        })
  },
}
</script>

<style scoped>
@import "../static/common.scss";
.slogan{
  padding:10px;
  text-align: left;
  font-size: 25px;
}
</style>
