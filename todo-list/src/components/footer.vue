<template>
    <footer>
      <v-touch class="one" :class="{active:select==='onething'}" @tap="toOnething">OneThing</v-touch>
      <v-touch class="all" :class="{active:select==='all'}" @tap="toAll">All</v-touch>
    </footer>
</template>

<script>
export default { 
 methods:{
  toOnething(){
    this.$router.push('/');
  },
  toAll(){
    this.$router.push('/all/list');
  }
 },
  computed:{
    select(){
     return this.$store.state.option.select;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../static/common';
footer{
  @include flex(space-around);
  width: 100%;
  height:10%;
  border:solid 1px #bbb;
  background-color: #eee;
  @include fixed(bottom); 
}
.one,.all{
  border:none;
  background-color: transparent;
  outline:none;
}
.active{
  font-weight: 700;
}
</style>
