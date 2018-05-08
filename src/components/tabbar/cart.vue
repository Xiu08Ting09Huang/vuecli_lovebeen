<template>
  <div>
      <beeheader/>
        <div class="scoll">
            <div class="block">
                <table>
                  <tbody>
                    <tr>
                    <th width="28%">
                        收<span class="ui-hidden">a</span>
                        货<span class="ui-hidden">a</span>
                        人
                    </th>
                    <td>刘玺&nbsp;先生</td>
                    <td  width="17%" rowspan="3" class="more">修改</td>
                    </tr>
                    <tr>
                      <th width="28%">
                      电<span class="ui-hidden">中 中</span>
                      话
                      </th> 
                      <td>153********</td>
                    </tr>
                    <tr>
                      <th width="28%">收货 地址</th> 
                      <td style="font-weight: 700;">上海市浦东新区航头镇航都路18号-黑马程序员</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div class="main-container">
              <div class="fast_cart">
                <span class="fast-super">闪送超市</span> 
                <span class="addBtn">凑单专区</span>
              </div>
              <p class="group-proptext theme-border">￥0起送，22点后满￥69运费5元起，不满￥69运10元起</p>
              <p class="group-receive theme-border">收货时间&nbsp;&nbsp; 
                <span class="ugroup-receive-ext mui-pull-right">&nbsp;可预定</span>
                <span class="theme-redfont">08:00-09:00</span>
              </p>
              <div class="group-comment theme-border">
               收货备注
                <div class="input">
                   <input  type="text" maxlength="100" value="" placeholder="可输入100字以内特殊要求内容">
                </div>
               
              </div>
              <div class="group-list ">
                <ul>
                  <li class="theme-border" v-for="(v,i) in list" :key="i"  >
                    <div class="checked  mui-pull-left" :class="{'active':v.active }" @click='togglePay(v,i)'></div>
                    <a href="javascript:;" >
                      <img class="mui-pull-left" :src="v.img" alt="">
                      <div class="prcinfo"> 
                          <p class="word">{{v.name}}</p>
                          <div class="prcinfo-word">
                            <div class="mui-pull-left">
                                <span>￥{{v.partner_price}}</span>
                            </div>
                            <div class="mui-pull-right zujian">
                                <numberbox :min='0' :max='v.number' :step='1' v-model="v.id"/>
                            </div>
                          </div>
                      </div>
                      
                    </a>
                  </li>
                </ul>
               
              </div>
               <div class="settlement theme-border ">
                 <span class=" allChecked checked" :class="{'active':isChoose}" @click="isAllChecked" ></span>
                 <span class="all"> 全选
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共:
                    <span class="theme-redfont">￥{{totalPrice}}</span> 
                   </span> 
                 
                  <div class="chooseOk">选好了</div>
                  </div>
            </div>
            <img src="" alt="">
        </div>
      <beefooter/>
  </div>
</template>
<script>
import beeheader from "../common/header.vue"
import beefooter from "../common/footer.vue"
import numberbox from "../common/numberbox.vue"
import Vue from 'vue'
 Vue.nextTick(function () {
  // DOM 更新了

})

export default {
  data(){
    return{
      list:[],
      isShow:true,
      isChoose : false  ,
      lists:""
    }
  },
 nextTicks(){
   this.getdata()
 },
  components:{
      beeheader,
      beefooter,
      numberbox
  },
  created(){
   this.getdata()
  },
  methods:{  
    getdata(){
       this.$http
    .jsonp('http://localhost:3008/list')
    .then(res=>{
      var obj = res.data.data.products
      var cart = this.$store.state.carts
      for(var k in obj){
        obj[k].forEach(e => {
            cart.forEach(v=>{
          if(e.id == v.id){
            this.list.push(e)
            }  
           })
        })            
      }
      // 返回出来的值是双倍的，不知道怎么解决，先这样做
     this.list=this.list.slice(0,this.list.length/2);  
});
    },
    // 全选判断
      isAllChecked:function(){
          var allChecked = [];
          this.list.forEach(v=>{
            allChecked.push(v.active);
          })
          // console.log(allChecked);

          allChecked.forEach(v=>{
            if(v!=true){
               this.isChoose=false
            }else{
              this.isChoose=true
            }
           
          })
            // this. isChoose =  !this.isChoose
      },
      // 多个选项
      togglePay:function(item,index){   
        if(item.active){  
            Vue.set(item,'active',false);//为item添加不存在的属性，需要使用vue提供的Vue.set( object, key, value )方法。   
        }else{  
            Vue.set(item,'active',true);  
        }  

        var allChecked = [];
          this.list.forEach(v=>{
            allChecked.push(v.active);
          })
          // console.log(allChecked);
          var str=allChecked.join(',')
          // console.log(str)
          if(str.indexOf('false')!=-1 || str.indexOf('')!=-1){
            this.isChoose = false
          }else{
             this.isChoose = true
          }    
      }
      
    }  ,
  computed:{
    // 计算总价
    totalPrice(){
          var sum = 0;
          this.list.forEach(v => {
              if(v.active){
                this.$store.state.carts.forEach(e=>{
                  if(e.id == v.id ){
                    sum += e.count * v.partner_price
                  }
                })
              }
          })
          return sum;
      }
  },

  }

</script>
<style >
  .scoll{
       padding-top: 54px;
    padding-bottom: 60px;
  }
  .block{
    background-color: #fff;
    margin: 10px 0;
    display: block;
    background-image: url(../../assets/images/place.png);
    background-repeat: repeat;
    background-position: left top, left bottom;
    background-size: auto 3px;
    padding: 3px 0;
  }
  .ui-hidden {
    visibility: hidden;
  }
  .block table{
    width: 100%;
  }
  .block tbody{
    width: 100%;
    color:#333;
    font-size: 14px;
    font-weight: 400;
    background-color: #fff;
  }
  .block tbody th{
    padding: 8px 12px 8px 18px 
  }
  .block table .more {
    background-image: url(../../assets/images/more.png);
    padding-right: 25px;
    background-position: right center;
    background-repeat: no-repeat;
    background-size: auto 10px;
  }
   .main-container{
     position: relative;
     padding: 5px 0 0 0;
    background-color: #fff;
   }
  .main-container .fast-super {
    display: inline-block;
    height: 30px;
    color: #999;
    font-size: 12px;
    padding-left: 17px;
    background: 16px top no-repeat;
    background-size: 20px;
    line-height: 30px;
}
.main-container .fast-super:before {
    background-color: #ffd600;
    content: '';
    display: inline-block;
    width: 3px;
    height: 12px;
    vertical-align: -1px;
    border-radius: 2px;
    margin-right: 5px;
}
.main-container .addBtn {
    color: #e64f1a;
    position: absolute;
    right: 14px;
    top: 5px;
    font-size: 12px;
    width: 58px;
    height: 18px;
    line-height: 18px;
    border-radius: 12px;
    border-width: 1px;
    border-style: solid;
    text-align: center;
    
}
.main-container .group-proptext {
    color: #999;
    font-size: 14px;
    line-height: 30px;
    padding-left: 17px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 0;
}
.main-container .group-receive {
    position: relative;
    padding-left: 17px;
    height: 40px;
    line-height: 40px;
    padding-right: 25px;
    background-image: url(../../assets/images/more.png);
    background-position: right center;
    background-repeat: no-repeat;
    background-size: auto 10px;
    color:#3c3c3c;
    
}
.theme-redfont {
    color: #e64f1a;
}
.theme-border{
border-top: 1px solid #ccc;
}
.main-container .group-comment{
  height: 50px;
  line-height: 50px;
  padding-left: 17px ;
  font-size: 14px;
  color:#3c3c3c;
  position: relative;
}
.main-container .group-comment .input{
  /* display: inline-block;
  width: 85%; */

  position: absolute;
  left: 80px;
  top: 0;
  right: 25px;
  bottom: 0;
}
.main-container .group-comment input{
    height: 30px;
  font-size: 14px;
}
.group-list{
  background-color: #fff;
 
}
.group-list li {
  height: 80px;
  position: relative;
}
.group-list ul li a{
  overflow: hidden;
}
.checked{
  display: inline-block;
  width: 15%;
  height: 79px;
  background: url(../../assets/images/check.png) no-repeat center center;
  background-size: 20px; 
}
.checked.active{
  display: inline-block;
  width: 15%;
  height: 79px;
  background: url(../../assets/images/checked.png) no-repeat center center;
  background-size: 20px; 
}
.group-list img{
  width: 60px;
  padding-top: 10px;
}
.prcinfo {
  overflow: hidden;
 /* width: 100%; */
 padding-right: 15px;
 
}
.prcinfo .word{
  width: 100%;
  color:#3c3c3c;
  padding-top: 10px;
}
.prcinfo-word{
   padding-top: 10px;
}
.settlement{
    line-height: 40px;
    font-size: 14px;
    color:#3c3c3c;
    position: relative;
}
.all{
  position: absolute;
  top: 20px
}
.settlement .chooseOk {
    float: right;
    width: 96px;
    text-align: center;
    background-color: #ffd600;
    margin-top:10px;
}
.selectAll {
    display: inline-block;
    min-width: 50px;
    padding-left: 30px;
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: left center;
}
</style>
