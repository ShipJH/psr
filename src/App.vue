
<template>
  <div id="app">
    <mainHeader/>
    <mainLeft/>
    <div class="global-wrap">
      <router-view></router-view> 
    </div>
    
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import mainHeader from "./components/main-header";
import mainLeft from "./components/main-left";

export default {
  name: "app",
  components: {
    HelloWorld,
    mainHeader,
    mainLeft
  }
};
</script>

<style>
#app {
  position: relative;
  height: 100%;
}
.global-wrap {
  position: relative;
  min-height: 100%;
  padding-top: 50px;
  margin-left: 240px;
}
</style>
