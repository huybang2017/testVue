<script setup></script>
<template>
  <div>
    <div class="container-navigation">
      <router-link to="/" class="home">home</router-link>
      <router-link to="/about" class="about">about</router-link>
      <router-link to="/infor" class="infor">infor</router-link>
    </div>
  </div>
</template>
<style scoped>
.container-navigation {
  width: 100%;
  display: flex;
  font-weight: bold;
}
.container-navigation .home {
  width: 120px;
  height: 120px;
  background-color: #59c4f6;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.container-navigation .about {
  width: 120px;
  height: 120px;
  background-color: #f7cd47;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 128px;
  right: 895px;
  cursor: pointer;
}
.container-navigation .infor {
  width: 110px;
  height: 110px;
  background-color: #e94e3d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 60px;
  right: 820px;
  cursor: pointer;
}
</style>
