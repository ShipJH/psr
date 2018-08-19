
<template>
  <div id="app">
    <router-link to="/">Path'/'</router-link>
    <div>----------------</div>
    <router-link to="/test">Path'/test'</router-link>
    <div>----------------</div>
    <router-link to="/board">Path'/board'</router-link>
    <mainHeader msg="해더입니다." />
    <mainLeft msg="레프트입니다." />
    <HelloWorld msg="테스트 입니다."/>
    <div>----------------</div>
    <router-view></router-view> 
    <div>----------------</div>
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
</style>
