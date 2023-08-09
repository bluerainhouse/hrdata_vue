<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        進階血壓計量測分析服務
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarNav"
        :class="{ show: isNavbarOpen }"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">關於</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/record" class="nav-link">量測紀錄</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/graph-example" class="nav-link">
              範例圖表
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<style>
.container-fluid {
  width: 80%;
}
</style>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
};
</script>
