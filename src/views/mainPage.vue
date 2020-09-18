<template>
    <div class="main-page-wrap">
        <nav-bar></nav-bar>
        <router-view />
    </div>
</template>
<script>
import navBar from '../components/navBar.vue'
export default {
    components: { navBar }
}
</script>
<style>
body {
    color: #333;
}
.main-page-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>