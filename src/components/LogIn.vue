<template>
  <div>
    <form class="logIn">
      <input type="text" placeholder="name" />
      <input type="password" placeholder="password" />
      <button type="button" class="btn-logIn">Log In</button>
    </form>
  </div>
</template>
<style scoped>
.logIn {
  height: 110px;
  padding: 30px;
  background-color: #59c4f6;
  border-radius: 30px;
  margin-top: 100px;
}
.logIn input {
  width: 100%;
  height: 25px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-weight: bolder;
  text-align: center;
}
.btn-logIn {
  width: 103%;
  height: 30px;
  background-color: #63c465;
  cursor: pointer;
  padding: 0;
  font-weight: bold;
}
</style>
