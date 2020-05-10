<template>
  <div class="home">
    <input type="text" name="title" />
    <input type="text" name="name" />
    <input type="text" name="body" />
    <button @click="sub"></button>
    <div>
      <h1></h1>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    axios
      .get("http://localhost:25800/api/blog/article/get")
      .then(req => {
        console.log(req);
      })
      .catch(err => {});
  }
};
</script>