<template>
  <div class="main">
    <div class="content">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
    <Navs></Navs>
  </div>
</template>
<script>
import Navs from '@/components/Navs.vue'
import '@/assets/less/site.less'
export default {
  components: { Navs }
}
</script>
