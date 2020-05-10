<template>
  <div class="home">
    <Headers />
    <Mains />
    <Footers />
  </div>
</template>

<style scopd>
</style>
<script>
// @ is an alias to /src
import Mains from "@/components/home-blog/mains.vue";
import Headers from "@/components/home-blog/headers.vue";
import Footers from "@/components/home-blog/footers.vue";

export default {
  name: "Home",
  components: {
    Mains,
    Headers,
    Footers
  }
};
</script>
