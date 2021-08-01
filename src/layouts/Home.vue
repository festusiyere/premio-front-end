<template>
  <div class="main-wrapper">
    <!-- Side Nav Bar -->
    <NavMenu />
    <div class="page-wrapper">
      <!-- Top Nav Bar -->
      <NavHeader />
      <div class="page-content">
        <!-- Page Content View -->
        <router-view />
        <!-- <transition name="fade" mode="out-in">
        </transition> -->
      </div>
    </div>
    <Loading />
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
import NavMenu from "@/components/NavMenu.vue";
import Loading from "@/components/Loading.vue";
export default {
  components: {
    NavMenu,
    NavHeader,
    Loading,
  },
  mounted() {
    // Get all popup
    this.$store.dispatch("global/getPopups");
  },
};
</script>
