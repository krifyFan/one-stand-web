<template>
    <div class="carousel-wrap" @mouseenter="enter()" @mouseleave="leave()">
        <transition name="slide-trans">  // 使用动画
            <img class="banner" v-if="isShow" :src="slides[currentIndex].src">
        </transition>
        <transition name="slide-trans-old">
            <img class="banner" v-if="!isShow" :src="slides[currentIndex].src">
        </transition>
        <!-- 向左按钮 -->
        <img v-show="isShowIocn" class="icon icon-left" :src="leftIcon" @click="handlePre()"/>
        <!-- 向右按钮 -->
        <img v-show="isShowIocn" class="icon icon-right" :src="rightIcon" @click="handleNext()"/>
        <!-- 底下的白线 -->
        <div class="block-wrap">
            <div @click="choosed(index)" v-for="(item, index) in slides" :key="index" :class="{active: index === currentIndex}">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        // 要从父组件接收的传值
        slides: {
            type: Array,
            default: []
        },
        inv:{
            type:Number,
            default: 3000
        }
    },
    data() {
        return {
            currentIndex: 0,
            isShow: true,
            leftIcon: require('../assets/left-f.png'),
            rightIcon: require('../assets/right-r.png'),
            isShowIocn: false
        }
    },
    mounted(){
        this.runIv();
    },
    methods: {
        // 定时器，没隔1s滚动一次
        goto(index){
            this.isShow=false;
            setTimeout(()=>{
                this.isShow=true
                this.currentIndex=index;
            },1000)
            
        },
        runIv(){
            this.inId=setInterval(()=>{
                this.goto(this.next)
            },this.inv)
        },
        clearIv(){
            clearInterval(this.inId)
        },
        choosed(index) {
            this.currentIndex = index
        },
        handlePre() {
            if(this.currentIndex===0){
                this.currentIndex = this.slides.length-1
            }else{
                this.currentIndex -= 1
            }
        },
        handleNext() {
            if(this.currentIndex === this.slides.length-1){
                this.currentIndex = 0
            }else{
                this.currentIndex += 1
            }
        },
        enter() {
            this.isShowIocn = true
        },
        leave() {
            this.isShowIocn = false
        }
    },
    computed:{
        // 向左移动，如果当前是数组的第一张图片，即index为0，
        // 就强制让index变成数组的最后一张图片
        // 假设数组长度为3，目前显示第一张图片，currentIndex为0，点击向左的按钮的时候，
        // currentIndex强制变成2，即最后一张
        prev(){
            if(this.currentIndex===0){
                return this.slides.length-1
            }else{
                return this.currentIndex-1
            }
        },
        next(){
            if(this.currentIndex===this.slides.length-1){
                return 0
            }else{
                return this.currentIndex+1
            }
        }
    }
}
</script>
<style scoped>
.carousel-wrap {
    position: relative;
    width: 100%;
    height: 550px;
    background: #51CDCB;
    overflow: hidden;
}

.banner {
    width: 100%;
}

.slide-trans-enter-active {
  transition: all .5s
}
.slide-trans-enter {
  transform: translateX(-100%);
}
.slide-trans-old-leave-active {
  transition: all .10s;
  transform: translateX(100%);
}

.icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
}
.icon.icon-left{
    left: 10px;
}

.icon.icon-right {
    right: 10px;
}

.block-wrap {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}
.block-wrap div {
    height: 1px;
    width: 40px;
    border: 1px solid #ccc;
    background: #ccc;
    display: inline-block;
    margin-left: 5px;
    border-radius: 2px;
    cursor: pointer;
}
.block-wrap .active {
    border: 1px solid #fff;
    background: #fff;
}
</style>