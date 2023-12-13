<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const showData = ref(false);
const pageTitle = ref("infor Page");
const pageDescription = ref("This is the infor page description.");

onMounted(() => {
  console.log("Page Name:", pageTitle.value);
  setTimeout(() => {
    showData.value = true;
  }, 15000);
});

const router = useRouter();
const redirectToHome = () => {
  router.push("/");
  nhấn;
  setTimeout(() => {
    console.log("exit page");
  }, 2000);
};
</script>

<template>
  <div class="body">
    <div class="container" v-if="showData">
      <h1>{{ pageTitle }}</h1>
      <p>{{ pageDescription }}</p>
      <button @click="redirectToHome">Home</button>
    </div>
  </div>
</template>

<style scoped>
.body {
  margin: 0 auto;
  padding: 0;
  width: 310px;
  border: 1px solid black;
  padding: 50px;
}
.container {
  width: 100%;
  display: flex;
  font-weight: bold;
}
</style>
