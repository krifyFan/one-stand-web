<template>
    <div class="service-wrap">
        <img :src="serviceInfo.logo" :alt="serviceInfo.title">
        <div>{{serviceInfo.title}}</div>
    </div>
</template>
<script>
export default {
    props: {
        serviceInfo : {
            type: Object,
            logo: null,
            title: ''
        }
    }
}
</script>
<style scoped>
.service-wrap {
    /* display: inline-block;
    width: 80%; */
    padding: 20px 40px;
    text-align: center;
    border: 1px solid #ccc;
}
.service-wrap div {
    font-size: 16px;
    margin: 20px 0 0;
}
</style>