<template>
  <div class="main">
    <header-common></header-common>
    <router-view></router-view>
    <footer-common></footer-common>
  </div>  
</template>
<script>
  import HeaderCommon from "../components/header.vue";
  import FooterCommon from "../components/footer.vue";
  export default {
  components:{
    HeaderCommon,
    FooterCommon,
  }
}
</script>
<style scoped>
.main{
  height:100%;
}
</style>


