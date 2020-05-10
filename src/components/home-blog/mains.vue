<template>
  <div class="home-blog">
    <div v-for="(item, index) in blogs" :key="index" class="home-item">
      <hr />
      <router-link tag="a" :to="'/blog/' + item._id">{{ item.title }}</router-link>
      <h3>{{ item.name }}</h3>
      <h5>{{ new Date( item.date ) | date}}</h5>
      <p>{{ item.body | snipet }}</p>
    </div>
  </div>
</template>


<style scopd>
.home-blog {
  width: 65%;
  margin: 0 auto;
}
@media all and (max-width: 800px) {
  .home-blog {
    width: 77%;
  }
}
.home-item {
  padding: 20px 0;
}
.home-item > p {
  margin: 20px 0;
  font-size: 19px;
}
.home-item > h3 {
  margin: 20px 0;
  font-size: 16px;
}
a {
  color: rgb(54, 101, 230);
  margin: 20px 0;
  font-size: 22px;
}
</style>


<script>
export default {
  data() {
    return {
      blogs: [],
      dates: []
    };
  },
  mounted() {
    this.axios
      .get("http://47.100.137.147:25800/api/blog/article/get")
      .then(res => {
        this.blogs = res.data;
      });
  },
  filters: {
    snipet: value => {
      return value.slice(0, 30) + "....";
    },
    date: value => {
      const date_value =
        value.getFullYear() +
        "-" +
        (value.getMonth() + 1) +
        "-" +
        value.getDate();
      return date_value;
    }
  }
};
</script>