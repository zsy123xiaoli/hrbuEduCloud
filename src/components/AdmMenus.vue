<template>
<div class="AdmMenus">
  <Admheader />
      <!-- 管理员首页 -->
      <router-view></router-view>
</div>
</template>

<script>
import Admheader from "../components/Admheader"

export default {

    components:{
    Admheader,
  }
}
</script>

<style>

</style>