<template>
 <div class="main">
   <v-touch @tap="choosePrior">
     <ul class="prior">
       <li class="prior-opt" tag="0" :class="{sel:todoData.prior==='0'}">
         <i class="high fa fa-circle" aria-hidden="true"></i>
         <span>高优</span>
       </li>
        <li class="prior-opt" tag="1" :class="{sel:todoData.prior==='1'}">
          <i class="medium fa fa-circle" aria-hidden="true"></i>
          <span>中优</span>
       </li>
        <li class="prior-opt" tag="2" :class="{sel:todoData.prior==='2'}">
         <i class="low fa fa-circle" aria-hidden="true"></i>
          <span>低优</span>
       </li>
     </ul>
   </v-touch>
   <v-touch  @tap="chooseStatus">
     <ul class="status">
        <li class="status-opt" tag="0" :class="{sel:todoData.status==='0'}">
          <i class="fa fa-play" aria-hidden="true"></i>
          <span>进行中</span>
        </li>
        <li class="status-opt" tag="1" :class="{sel:todoData.status==='1'}">
          <i class="fa fa-pause" aria-hidden="true"></i>
          <span>待办</span>
        </li>
        <li class="status-opt" tag="2" :class="{sel:todoData.status==='2'}">
          <i class="fa fa-stop" aria-hidden="true"></i>
           <span>已完成</span>
        </li>
      </ul>
   </v-touch>
   <div class="input">
      <textarea name="content" id="content" v-model="todoData.content"></textarea>
   </div>
 
 </div>
</template>

<script>

export default {
  data(){
    return {
      todoData:{
        prior:'-1',
        status:'-1',
        content:''
      },
      index:this.$route.query.index//根据是否有index来判断是修改现有条目还是添加新的条目
    };
  },
  methods:{
    choosePrior(e){
      // console.log("点击");
      let target;
      if(e.target.className==='prior-opt'){
        target=e.target;
      }
      if(e.target.parentNode.className==='prior-opt'){
        target=e.target.parentNode;
      }
      if(target){
        // this.todoData.prior=target.tag;//这是自定义属性??没有找到相关的vue官方文档
        this.todoData.prior=target.getAttribute('tag');
      }      
    },
    chooseStatus(e){
      let target;
      if(e.target.className==='status-opt'){
        target=e.target;
      }
      if(e.target.parentNode.className==='status-opt'){
        target=e.target.parentNode;
      }
      if(target){
        this.todoData.status=target.getAttribute('tag');
      }     
    }
  },
   created(){
    if(this.index){//修改
      let temp=this.$store.state.todoData[this.index];
      this.todoData.prior=temp.prior;
      this.todoData.status=temp.status;
      this.todoData.content=temp.content;
    }
    this.$store.commit('changeOptions',{
        // select: '',
        btnName: 'Done',
        btnClass: 'done',
        setCancel: true,
        setBar: false               
    })
  },
  destroyed(){
    let pattern=this.$route.params.pattern;
    if(pattern==='added'){
      // console.log("edit/added");
      this.$store.commit('addItem',this.todoData);
    }else{
      // console.log("this.$route.params.pattern:",pattern);
      this.$store.commit('editItem',{todoData:this.todoData,index:this.index})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../static/common.scss';

@include bar;
#content{
  min-width:90%;
  height:130px;
  margin:5px;
}

#content{
  border:solid 2px #bbb;
}
.status-opt>i{
  color:#bbb;
}
.sel {
  border: 1px solid #a00;
}
</style>
