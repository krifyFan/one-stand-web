<template>
    <div class="ss-wrap">
        <div class="info-wrap">
            <div class="title">{{ssInfo.title}}</div>
            <div class="sjx">▼</div>
            <p class="dec">{{ssInfo.dec}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        ssInfo: {
            type: Array,
            title: '',
            dec: ''
        }
    }
}
</script>
<style scoped>
.ss-wrap {
    height: 245px;
    padding: 20px;
    background: white;
    border: 100%;
    border-radius: 100%;
}
.info-wrap {
    border: 1px solid gray;
    border-radius: 100%;
    height: 100%;
}
.title {
    font-size: 18px;
    color: #51CBCD;
    padding-top: 60px;
}
.sjx {
    color: gray;
    margin-top: 5px;
}
.dec {
    font-size: 12px;
    color: #707070;
    padding: 0 2.5rem;
}
</style>