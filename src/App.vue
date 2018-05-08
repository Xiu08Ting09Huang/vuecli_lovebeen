<template>
  <div id="app">
    
    <router-view/>
    <!-- 底部 -->
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
*{
    padding: 0;
    margin: 0;
    list-style: none;
}

html,body{
    height: 100%;
    width: 100%;

}
#app{
  height: 100%;
    width: 100%;
}
a{
  color:#666;
  text-decoration: none;
}
</style>
    box-sizing: border-box
