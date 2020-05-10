<template>
  <div>
    <div class="show-body">
      <!-- <div class="blog-left"></div> -->
      <div class="show-blog">
        <h1>{{blogs.title}}</h1>
        <h5>{{new Date( blogs.date ) | date}}</h5>
        <h3>{{blogs.name}}</h3>
        <hr />
        <p>{{blogs.body}}</p>
        <div class="word">
          <Input v-model="names" placeholder="昵称(必填)......" style="width: 95%" />
          <Input v-model="bodys" placeholder="内容(必填)......" style="width: 95%" />
          <Button type="success" v-on:click="posts">提交</Button>
        </div>
        <div class="show-word" v-for="(word,index) in words" :key="index">
          <h3>{{ word.name }}</h3>
          <h5>{{new Date (word.date) | date}}</h5>
          <p>{{word.body}}</p>
        </div>
      </div>
      <div></div>
      <!-- <div class="blog-right"></div> -->
    </div>
    <Footer />
  </div>
</template>


<style scopd>
* {
  color: #000;
  /* margin: 10px 0; */
}
p {
  font-size: 18px;
  line-height: 40px;
}
h5 {
  line-height: 55px;
}
.show-blog {
  width: 60%;
  margin: 50px auto;
}
@media all and (max-width: 800px) {
  .show-blog {
    width: 77%;
  }
}
hr {
  margin: 10px 0;
}
.word,
.show-word {
  background-color: rgba(97, 96, 96, 0.048);
  padding: 15px;
  border-radius: 10px;
  margin: 30px 0 0 0;
}
.word {
  height: 140px;
  text-align: center;
  position: relative;
}
button {
  margin-top: 10px;
  position: absolute;
  bottom: 15px;
  right: 30px;
}
</style>

<script>
import Footer from "./footers";

export default {
  name: "showblog",
  data() {
    return {
      id: this.$route.params.id,
      blogs: {},
      names: "",
      bodys: "",
      words: {}
    };
  },
  components: {
    Footer
  },
  mounted() {
    this.axios
      .get("http://47.100.137.147:25800/api/blog/article/get/" + this.id)
      .then(res => {
        this.blogs = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    this.axios
      .get("http://47.100.137.147:25800/api/blog/comment/get/" + this.id)
      .then(res => {
        this.words = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    gets() {
      this.axios
        .get("http://47.100.137.147t:25800/api/blog/comment/get/" + this.id)
        .then(res => {
          this.words = res.data;
        });
    },
    posts() {
      if (!this.names == "") {
        this.axios
          .post("http://47.100.137.147:25800/api/blog/comment/post", {
            name: this.names,
            body: this.bodys,
            article: this.id
          })
          .then(res => {
            this.names = "";
            this.bodys = "";
            this.gets();
          });
      } else {
        alert("请输入姓名");
      }
    }
  },
  // created() {
  //   this.id = this.$route.params.id;
  // },
  filters: {
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


