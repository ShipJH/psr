<template>
  <div class="sidenav">
    <ul class="sidenav-list">
      <li>
        <button :class="{ 'on' : menuActive }" @click="menuActive = !menuActive" >대메뉴</button>
        <ul class="sidenav-submenu-list" :style="{'display': menuActive ? 'block' : 'none' }">
          <li>
            <router-link to="/menu1" active-class="on">- 소메뉴1</router-link>
          </li>
          <li>
            <router-link to="/menu2" active-class="on">- 소메뉴2</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "main-left",
  props: {
    msg: String
  },
  data() {
    return {
      menuActive: false
    };
  },
  created() {
    // 초기 접근시 대메뉴 활성화
    this.menuActive = true;
  }
};
</script>

<style>
.sidenav {
  height: 100%;
  width: 240px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #000000;
  overflow-x: hidden;
  margin-top: 50px;
}

.sidenav .sidenav-list > li {
  border-top: 1px solid #0f1417;
  border-bottom: 1px solid #4b5961;
}

.sidenav .sidenav-list > li .sidenav-submenu-list {
  display: none;
  background-color: #1a1c1c;
  padding: 17px 0 17px 30px;
  text-decoration: none;
}

.sidenav .sidenav-list > li .sidenav-submenu-list > li {
  margin-top: 16px;
}

.sidenav .sidenav-list > li .sidenav-submenu-list > li:first-child {
  margin-top: 0;
}

.sidenav .sidenav-list > li .sidenav-submenu-list > li > a {
  color: #fff;
  font-size: 12px;
  font-weight: 400;
}

.sidenav .sidenav-list > li .sidenav-submenu-list > li > a:hover {
  color: #74797a;
  font-weight: 600;
}
.sidenav .sidenav-list > li .sidenav-submenu-list > li > a.on {
  color: #74797a;
  font-weight: 600;
}

.sidenav .sidenav-list > li > button {
  font-size: 12px;
  color: #fff;
  font-weight: 600;
  box-sizing: border-box;
  width: 100%;
  height: 41px;
  line-height: 41px;
  padding: 0 25px;
  text-align: left;
  outline: 0;
  background-image: url("../assets/images/ico_menu.png"),
    url("../assets/images/ico_down.png");
  background-repeat: no-repeat, no-repeat;
  background-position: 15px center, right 15px center;
  text-indent: 20px;
}

.sidenav .sidenav-list > li > button:hover {
  background-color: #74797a;
  background-image: url("../assets/images/ico_menu.png"),
    url("../assets/images/ico_down_active.png");
  background-repeat: no-repeat, no-repeat;
  background-position: 15px center, right 15px center;
}

.sidenav .sidenav-list > li > button.on {
  background-color: #74797a;
  background-image: url("../assets/images/ico_menu.png"),
    url("../assets/images/ico_up.png");
  background-repeat: no-repeat, no-repeat;
  background-position: 15px center, right 15px center;
}
</style>
