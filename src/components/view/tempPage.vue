<template>
  <div class="content-wrap">
    <header class="content-header">
      <ul class="header-breadcrumbs-wrap">
        <li>
          <a>대메뉴</a>
        </li>
        <li>
          <a>중메뉴</a>
        </li>
        <li>
          <a>소메뉴</a>
        </li>
      </ul>
      <h2 class="header-title">
        제목 : [강남] 저희집 앞 주차장 평일 pm 1:00 ~ 5:00 공간 판매
      </h2>
    </header>
    <section class="content-body">
      <div class="content-slide">
        <div class="main-image-wrap">
          <img src="http://placehold.it/1200X300" alt="">
        </div>
        <ul class="image-list-wrap">
          <li>
            <img src="http://placehold.it/80X80" alt="">
          </li>
          <li>
            <img src="http://placehold.it/80X80" alt="">
          </li>
          <li>
            <img src="http://placehold.it/80X80" alt="">
          </li>
          <li>
            <img src="http://placehold.it/80X80" alt="">
          </li>
          <li>
            <img src="http://placehold.it/80X80" alt="">
          </li>
        </ul>
      </div>

      <div class="content-select-wrap">
        <h3>주차장 크기</h3>
        <ul class="park-select-list">
          <li>
            <input type="checkbox" id="park-size-s" name="park-size">
            <label for="park-size-s">소형</label>
          </li>
          <li>
            <input type="checkbox" id="park-size-m" name="park-size">
            <label for="park-size-m">준중형</label>
          </li>
          <li>
            <input type="checkbox" id="park-size-l" name="park-size">
            <label for="park-size-l">중형</label>
          </li>
          <li>
            <input type="checkbox" id="park-size-xl" name="park-size">
            <label for="park-size-xl">대형</label>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "tempPage",
  data() {
    return {};
  }
};
</script>
<style>
.content-wrap {
  padding: 20px;
}
.content-wrap .header-breadcrumbs-wrap:after {
  content: "";
  display: block;
  clear: both;
}
.content-wrap .header-breadcrumbs-wrap {
}
.content-wrap .header-breadcrumbs-wrap > li {
  float: left;
}
.content-wrap .header-breadcrumbs-wrap > li > a {
  cursor: pointer;
}
.content-wrap .header-breadcrumbs-wrap > li:not(:last-of-type):after {
  content: ">";
  margin: 0px 5px;
}
.content-wrap .header-title {
  margin: 15px 0px 35px 5px;
  font-size: 20px;
  font-weight: bold;
}

.content-wrap .content-body {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}

.content-wrap .content-slide {
  width: 100%;
}
.content-wrap .image-list-wrap:after {
  content: "";
  display: block;
  clear: both;
}
.content-wrap .image-list-wrap {
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  margin: 30px 0px;
  background-color: black;
}

.content-wrap .image-list-wrap > li {
  display: inline-block;
  margin-right: 10px;
}

.content-wrap .image-list-wrap > li:last-of-type {
  margin-right: 0px;
}

.content-wrap .content-select-wrap > h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.park-select-list{
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.park-select-list:after {
  content: "";
  display: block;
  clear: both;
}

.park-select-list>li{
  float: left;
  margin-right: 50px;
}

</style>