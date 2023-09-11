<template>
  <NavigationMenu title="TestVue" />
 <div class="container">
  <div class="row">
    <div class="col-md-12">
      <div>
        <router-view>
   </router-view>
 </div>
    </div>
  </div>
 </div>

</template>

<script>
import NavigationMenu from './components/NavigationMenu.vue'
export default {
  name: 'App',
  components: {
    NavigationMenu, // Header
  }
}
</script>

