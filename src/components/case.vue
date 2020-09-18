<template>
    <div class="case-wrap">
        <img :src="caseInfo.caseImg" :alt="caseInfo.title" />
        <div class="case-cont">
            <img :src="caseInfo.logo" />
            <p class="title">{{caseInfo.title}}</p>
            <p class="subTitle">{{caseInfo.subTitle}}</p>
            <p class="dec">{{caseInfo.dec}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        caseInfo : {
            type: Object,
            caseImg: null,
            logo: null,
            title: '',
            subTitle: '',
            dec: ''

        }
    }
}
</script>
<style scoped>
.case-wrap {
    background: #fff;
    padding-bottom: 1rem;
    height: 310px;
    position: relative;
    overflow: hidden;
}
.case-cont {
    display: block;
    width: 100%;
    position: absolute;
    top: 9rem;
    background: #fff;
    padding-bottom: 50px;
    z-index: 100;
    transition: 0.5s;
    text-align: center;
}
.case-cont img {
    width: 4rem;
    height: 4rem;
    margin: 1rem auto 0.5rem;
}
.case-cont .title {
    font-size: 1.25rem;
    font-weight: 400;
    color: rgba(53, 55, 61, 1);
    margin-bottom: 0px;
}
.case-cont .subTitle {
    font-weight: 400;
    color: rgba(174, 175, 180, 1);
    margin-top: 0;
    font-size: 14px;
}
.case-cont .dec {
    padding: 2.5rem 2rem;
    font-weight: 400;
    color: rgba(174, 175, 180, 1);
    margin-top: 0;
    font-size: 12px;
}
.case-wrap:hover .case-cont {
    top: 0;
    transition: 0.5s;
}
</style>