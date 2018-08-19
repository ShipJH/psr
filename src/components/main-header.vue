<template>
  <div class="main-header header">
    <router-link to="/" tag="h1" class="header-title">
      <img src="http://placehold.it/305X15" alt="logo" />
    </router-link>
    <div class="header-btn-box">
      <button type="button" class="btn-header">로그아웃</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-header"
};
</script>

<style>
.header {
  box-sizing: border-box;
  padding-left: 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  border-bottom: 1px solid #4b5961;
  background-color: #4e4a4a;
}

.header .header-title {
  text-align: center;
  font-weight: 900;
  line-height: 50px;
  height: 49px;
  font-size: 18px;
  color: #fff;
  float: left;
  cursor: pointer;
  outline: 0;
}
.header .header-title > img{
  vertical-align: middle;
}

.header .header-username {
  text-align: center;
  line-height: 49px;
  height: 49px;
  font-size: 12px;
  color: #fff;
  float: right;
  margin-right: 190px;
  font-weight: bold;
}
.header .header-username a {
  color: #fff;
  font-size: 11px;
  vertical-align: top;
}

.header .header-btn-box {
  position: absolute;
  font-size: 0;
  letter-spacing: 0;
  word-spacing: 0;
  top: 14.5px;
  right: 15px;
}

.header .header-btn-box .btn-header {
  background-color: gray;
  color: #fff;
  font-size: 12px;
  display: inline-block;
  padding: 0 10px;
  height: 22px;
  line-height: 22px;
}

.header .header-btn-box .btn-header:first-child {
  margin-right: 2px;
}
</style>
