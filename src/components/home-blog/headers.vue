<template>
  <div>
    <div class="home-nav">
      <nav></nav>
      <div class="nav-footer"></div>
      <svg
        t="1586362028700"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3403"
        width="48"
        height="48"
      >
        <path
          d="M741.12 528.64L512 712.96l-228.693333-191.146667a42.666667 42.666667 0 1 0-54.613334 65.706667l256 213.333333a42.666667 42.666667 0 0 0 54.186667 0l256-206.08a42.666667 42.666667 0 0 0 6.4-60.16 42.666667 42.666667 0 0 0-60.16-5.973333z"
          p-id="3404"
          fill="#707070"
        />
        <path
          d="M484.693333 502.186667a42.666667 42.666667 0 0 0 54.186667 0l256-206.08a42.666667 42.666667 0 0 0 6.4-60.16 42.666667 42.666667 0 0 0-60.16-6.4L512 414.293333 283.306667 223.146667a42.666667 42.666667 0 0 0-54.613334 65.706666z"
          p-id="3405"
          fill="#707070"
        />
      </svg>
      <div class="nav-p">
        <p class="one">Welcome·HY</p>
        <p>生活很枯燥你需要一颗糖</p>
      </div>
    </div>
  </div>
</template>

<style scopd>
* {
  margin: 0;
  padding: 0;
}
.home-nav {
  position: relative;
  width: 100%;
}
.nav-footer {
  position: absolute;
  background-image: url("../../../public/footer-nav.png");
  bottom: 0;
  width: 100%;
  height: 50%;
  background-size: cover;
  z-index: 66;
}
.nav-p {
  position: absolute;
  bottom: 50%;
  text-align: center;
  width: 100%;
  /* height: 300px; */
  z-index: 99;
  /* color: white; */
  font-size: 20px;
}
.nav-p > p {
  color: white;
}
.one {
  font-size: 50px;
}
nav {
  width: 100%;
  height: 100vh;
  background-image: url("../../../public/nav-img1.jpg");
}
svg {
  position: absolute;
  width: 25px;
  height: 25px;
  z-index: 67;
  bottom: 10px;
  left: 49%;
}
</style>

