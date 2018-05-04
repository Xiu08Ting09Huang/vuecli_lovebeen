
<template>
    <div class="beeList">
      <beeheader/>

       <beefooter/>
    </div>

  
</template>

<script>
import beefooter from "../common/footer";
import beeheader from "../common/header.vue";
export default {
  components: {
    beefooter,
    beeheader
  },
  
};
</script>
<style>
.beeList {
  height: 100%;
}
</style>



