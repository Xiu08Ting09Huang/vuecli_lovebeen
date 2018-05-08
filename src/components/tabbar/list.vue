
<template>
    <div class="beeList">
        <!-- 头部组件 -->
      <beeheader/>
    <div class="list-content">
        <!-- <div class="mui-scroll-wrapper">
            <div class="mui-scroll"> -->
                <div class="list-nav">
                    <ul>
                        <li class="" v-for="(v,i) in categoryList" :key="i" @click="getProList(v.id)">
                            <router-link to='' :class="v.icon=='' ? 'new' : ''">{{v.name}}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="list-info">
                    <div class= "title-nav">
                        <span>全部分类</span>
                        <span>综合排序</span>
                    </div>
                    <div class="prcList">
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell mui-media" v-for="v in productList" :key="v.id">
                                <a href="javascript:;">
                                    <img class="mui-media-object mui-pull-left" :src="v.img">
                                    <div class="mui-media-body">
                                       {{v.name}}
                                        <p class="mui-ellipsis format">
                                           <span class="">{{v.specifics}}</span>
                                          
                                        </p>
                                        <div class="mui-ellipsis"> 
                                            <div class="mui-pull-left">
                                                <span class="sell_price">￥{{v.partner_price}}</span>
                                                <span class="price"><del>￥{{v.price}}</del></span>
                                            </div>
                                            <div class="mui-pull-right zujian">
                                                <numberbox :min='-2' :max='v.number' :step='1' v-model="v.id"/>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </a>
                            </li>
                       
                        </ul>
                    </div>
                </div>
            <!-- </div>
        </div> -->
     
    </div>
      <!-- 底部组件 -->
      <beefooter/>
    </div>

  
</template>

<script>
import beefooter from "../common/footer";
import beeheader from "../common/header.vue";
import mui from "../../assets/mui/js/mui"
import numberbox from "../common/numberbox.vue"
export default {
  data() {
    return {
      productList: [],
      categoryList:[],
      
    };
  },
  components: {
    beefooter,
    beeheader,
    numberbox,
    
  },
  created() {
    this.$http.jsonp("http://localhost:3008/list").then(res => {
      this.categoryList = res.data.data.categories;
      //   console.log(this.productList);
    });
    this.getProList(104751)
  },
  methods: {
    getProList(id) {
      this.$http.jsonp("http://localhost:3008/list").then(res => {
        //  console.log(res.data.data.products) 
        if(res.data.errmsg == 'ok'){
            var obj = res.data.data.products
                for(var k in obj ){
                if( k == id ){
                    this.productList = obj[k]
                }
            }
        }
        
        // console.log(this.productList)
      });
    }
  },
  mounted(){
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
<style>

.beeList {
  position: absolute;
  top: 55px;
  right: 0;
  bottom: 60px;
  left: 0;
  /* background-color: #fff; */
}
.list-content{
    height: 100%;
}
.list-nav {
  /* background-color: #ccc; */
  position: absolute;
  top: 0;
  float: left;
  width: 80px;
  text-align: center;
  line-height: 54px;
  overflow-y: scroll;
  height: 100%;
}
/* 隐藏滚动条 */
.list-nav::-webkit-scrollbar{display: none}
.list-nav ul{
overflow-y: scroll;
}
.list-nav li {
  border-bottom: 1px solid #ccc;
}
.list-nav li a {
  font-size: 14px;
  display: block;
 
}
.list-nav li a.new{
  background: url('../../assets/images/new.jpg') no-repeat right top;
  background-size: 35px;
}
.list-nav li.active {
  border-left: 4px solid #ffd600;
}
.list-info {
  margin-left: 80px;
  overflow: hidden;
  height: 100%;
}
.title-nav{
    position:fixed;
    top: 55px;
    left: 80px;
    width: 100%;
    z-index: 666;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
}
.title-nav span{
    color: #666;
    font-size: 14px;
    display: inline-block;
    height: 38px;
    line-height: 38px;
    width: 40%;
    text-align: center
}
.prcList{
    padding-top:38px;
        overflow-y: scroll;
    height: 100%;
    
}
.prcList::-webkit-scrollbar{display: none}
.format{
    padding-top: 8px;
}
.sell_price{
    color:red;
    font-weight: 700;
    font-size: 16px
}
.price{
    color: #666;
    font-size: 14px;
}
/* .zujian{
    width: 80px;
    height: 30px;
    background-color:pink;
} */
</style>



