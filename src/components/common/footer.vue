<template>
  <ul class="footer">
      <li>
          <router-link to="/list" class="home">
            <p>首页</p>
          </router-link>
      </li>
      <li>
          <router-link to="/list" class="list "  :class="$route.path == '/list' ? className :''">
            <p>闪送超市</p>
          </router-link>
      </li>
      <li>
          <router-link to="/cart" class="cart" :class="$route.path == '/cart' ? className :''">
            <p>购物车</p>
            <span class="ball">{{$store.getters.totalCount}}</span>
          </router-link>
      </li>
      <li>
          <router-link to="/list" class="member">
            <p>我的</p>
          </router-link>
      </li>
  </ul>
</template>

<script>
export default {
    data(){
        return{
            className:"active"
        }
    }
};
</script>

<style>
.footer {
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: rgba(246,246,246,0.95);
}
.footer li{
    float: left;
    width: 25%;
    height: 100%;
}
.footer li a{
    width: 100%;
    height: 100%;
    display: block;
    text-align: center;
    font-size: 14px;
    background-size: 25px;
    position: relative;
}
.footer li a.active{
     background-size: 25px;
}
.home{
    background: url("../../assets/images/menu-icon/navs-item-home.png") no-repeat  center 5px ;
}
.home.active{
    background: url("../../assets/images/menu-icon/navs-item-home-active.png") no-repeat  center 5px ;
}
.list{
    background: url("../../assets/images/menu-icon/navs-item-menu.png") no-repeat  center 5px ;
}
.list.active{
    background: url("../../assets/images/menu-icon/navs-item-menu-active.png") no-repeat  center 5px ;
}
.cart{
    background: url("../../assets/images/menu-icon/navs-item-cart.png") no-repeat  center 5px ;
}
.cart.active{
    background: url("../../assets/images/menu-icon/navs-item-cart-active.png") no-repeat  center 5px ;
}
.member{
    background: url("../../assets/images/menu-icon/navs-item-mine.png") no-repeat  center 5px ;
}
.member.active{
    background: url("../../assets/images/menu-icon/navs-item-mine-active.png") no-repeat  center 5px ;
}
.footer li img{
    width: 25px;
    margin: 5px auto
}
.footer li p{
    padding-top: 35px;
}
.ball{
    display: inline-block;
    min-width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #f40;
    position: absolute;
    top:0;
    left: 52%;
    color: #fff;
    padding: 0 3px

}
</style>
