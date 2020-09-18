<template>
    <div class="footer-wrap">
        <div class="info-box left-box">
            <p>
                <img :src="phone" alt="phone">
                13718469919&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13801204491
            </p>
            <p>
                <img :src="email">
                1044085031@qq.com
            </p>
            <p>
                <img :src="address">
                河北省廊坊市固安县固安镇永定北路156-4号
            </p>
        </div>
        <div class="info-box">
            <p class="title">官方微信</p>
            <img :src="officialWX" style="width: 70px">
        </div>
        <!-- <div class="info-box or">
            <p class="title">关注我们</p>
            <p class="or-wrap">
                <img :src="weibo" @mouseover="mouseOver" @mouseleave="mouseLeave">
                <img :src="weiboORCode" class="or-code" v-show="isWB">
            </p>
            <p class="or-wrap">
                <img :src="toutiao" @mouseover="mouseOverTT" @mouseleave="mouseLeaveTT">
                <img :src="toutiaoORCode" class="or-code" v-show="isTT">
            </p>
        </div> -->
        <div class="info-box about">
            <p class="title">关于我们</p>
            <p @click="goToModule('/home')">关于我们</p>
            <p @click="goToModule('/apply')">加入我们</p>
        </div>
        <div class="info-box about">
            <p class="title">友情连接</p>
            <p><a href="http://bjszdm.com/" target="_blank" style="color: rgb(165, 165, 165)">北京神州达美科技装修装饰公司</a></p>
        </div>
        <!-- <div class="pro-license">
            <span>
                © 2019-2020 yimaiai.com 固安云科智能科技有限公司 
                版权所有   
                电信经营许可证：
            </span>
            <span style="color: #fff">
                川B2-20190570     
                蜀ICP备19002747号-2
            </span>
        </div> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            phone: require('../assets/phone.png'),
            email: require('../assets/email_1.png'),
            address: require('../assets/address.png'),
            officialWX: require('../assets/ma.png'),
            weibo: require('../assets/weibo.png'),
            weiboORCode: require('../assets/ma3.png'),
            toutiao: require('../assets/tou.png'),
            toutiaoORCode: require('../assets/ma2.png'),
            isWB: false,
            isTT: false
        }
    },
    methods: {
        mouseOver() {
            this.isWB = true
        },
        mouseLeave() {
            this.isWB = false
        },
        mouseOverTT() {
            this.isTT = true
        },
        mouseLeaveTT() {
            this.isTT = false
        },
        goToModule(path) {
            this.$router.push(path)
        }
    }
}
</script>
<style scoped>
.footer-wrap {
    background: #434C55;
    color: rgb(165, 165, 165);
    padding: 100px 10px;
    position: relative;
}
.footer-wrap .info-box {
    display: inline-block;
    vertical-align: middle;
    height: 100px;
    text-align: center;
    width: 10%;
}
.footer-wrap .info-box .title {
    color: #fff;
    margin-bottom: 15px;
}
.info-box.left-box {
    width: 60%;
}
.left-box img {
    vertical-align: middle;
}
.left-box p {
    margin-bottom: 10px;
    text-align: left;
}
.hotline {
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 20px;
}
.or-wrap {
    position: relative;
}
.or-code {
    width: 70px;
    position: absolute;
    top: 5px;
    margin-left: 10px;
}
.about p:not(.title) {
    cursor: pointer;
}
.pro-license {
    background: #4E565E;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 12px;
    line-height: 24px;
}
</style>