<template>
  <div id="app">
    <app-header></app-header>
    <app-slider></app-slider>
    <!-- <app-list></app-list> -->
    <transition>
      <router-view class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"></router-view>
    </transition>
  </div>
</template>

<script>
  import appHeader from './components/app-header'
  import appSlider from "./components//app-slider"
  // import appList from './app-list'
  export default {
    data() {
      return {

      }
    },
    components: {
      "app-header": appHeader,
      'app-slider': appSlider,
      // 'app-list': appList
    }
  }
</script>

<style>
  .v-enter {
    opacity: 0;
  }

  .v-enter-active {
    transition: all 2s
  }
</style>