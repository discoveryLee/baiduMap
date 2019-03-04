<template>
    <header>
      <v-touch class="btn cancel" @tap="cancelEdit" v-if="isCancelShow">cancel</v-touch>
      <button class="btn hide" v-else>cancel</button><!--为了使用flex布局-->
      <h2 class="title">TODO</h2>
      <v-touch class="btn" :class="btnClass" @tap="addItem">{{btnName}}</v-touch>      
    </header>    
</template>

<script>
import BUS from '../BUS.js'
export default {
    data(){
    return {
     
    };
    
  },
  methods:{    
    addItem(){
      if (this.btnClass === 'add') {
        this.$router.push('/edit/add');
      }else{//done
          //console.log('this.$route.params',this.$route.params);//$route和$router不一样！！！
          let pattern=this.$route.params.pattern;
          if(pattern==='add'){
              this.$router.push('/all/added');
          }else{
            this.$router.push('/all/edited');
          }
      }
    },
    cancelEdit(){
      if(!this.isControlBar){//添加条目时的cancel
          this.$router.push('/all/list');
      }else{//有leftBar 或 rightBar时的cancel
        // console.log("有 bar",this.$emit);
          // this.$emit('enable-pan');
          BUS.$emit('enable-pan');
      }
    }
  },
  computed:{
    btnClass() {
      return this.$store.state.option.btnClass;
    },
    btnName(){
      return this.$store.state.option.btnName;
    },
    isCancelShow(){
      return this.$store.state.option.cancelShow;
    },
    isControlBar(){
      return this.$store.state.option.controlBar;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../static/common.scss';

header{
  @include flex(space-around);
  height:10%;
  border:solid 1px #bbb;
  background-color: #eee;
  @include fixed(top);
}

.btn{ 
  width:70px;
}
.hide{
  visibility: hidden;
}
</style>
