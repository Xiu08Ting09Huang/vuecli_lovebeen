<template>
    <div class="numbox-cms">
        <span class="btn btn-numbox-minus-cms"  @click="minus" v-show="isShow"  >-</span>
        <input class="input-numbox-cms" v-show="isShow" v-model="num" />
        <span class="btn btn-numbox-plus-cms"  @click="plus">+</span>
    </div>
</template>
<script>
export default {
  data(){
      return{
          num:0,
          isShow:false,
          id:this.value
      }
  },
  created(){
    //   console.count(this.id)
      this.$store.state.carts.forEach(v => {
           
         if(v.id == this.id){
            this.num = v.count 
            // console.log(v.id == this.id)
           
              if(this.num > 0 ){
                    this.isShow=true
                }else{
                    this.isShow=false
                }
         }

         
      });

    //    this.$store.state.carts.forEach(v=>{
    //     if(v.count > 0){
    //          this.isShow=true
    //     }else{
    //         this.isShow=false
    //     }
    // })
      if(this.num > 0 ){
              this.isShow=true
          }else{
              this.isShow=false
          }
  },
  
  methods:{
      minus(){
          if(this.num >= (this.min + this.step)){
              this.num -=this.step;
          }
          if(this.num > 0 ){
              this.isShow=true
          }else{
              this.isShow=false
          }
        

        this.$store.commit('addTocart',{
              id:this.id,
              count:this.num,
              isCheck:true
          })


   
      },
      plus(){
          if(this.num <= (this.max - this.step)){
              this.num +=this.step;
          } 
          if(this.num > 0 ){
              this.isShow=true
          }else{
              this.isShow=false
          }
          this.$store.commit('addTocart',{
              id:this.id,
              count:this.num,
              isCheck:true
          })
      }
  },
  props:['min','max','step','value'],

}
</script>
<style scoped>
    .numbox-cms{
        text-align: center;
    }
    .numbox-cms .btn{
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 1px solid #ff4300;
        border-radius: 50%;
        text-align: center;
        color:#ff4300;
        font-weight: 700;
        line-height: 20px;
    }
    .input-numbox-cms{
        color: #333;
        width: 20px;
        height: 20px;
        border: none;
        outline: none;
        text-align: center;
    }
</style>
