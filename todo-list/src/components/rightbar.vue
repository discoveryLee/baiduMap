<template>
  <div class="right-bar">
    <v-touch class="left-bar" @tap="editItem">编辑</v-touch>
    <v-touch class="left-bar" @tap="deleteItem">删除</v-touch>
  </div>  
</template>

<script>
export default {
  props:['index'],
  methods:{
    editItem(){
      this.$router.push(`/edit/edit?index=${this.index}`);
      this.$emit('enable-pan');
    },
    deleteItem(){
      console.log(this);
      this.$store.commit('deleteItem',{index:this.index})
      this.$emit('enable-pan');
    }
  }
}
</script>


<style scoped>
.right-bar{
  display: flex;
  justify-content: space-around;
  background-color: #bbb;
  height:50px;
}
</style>
