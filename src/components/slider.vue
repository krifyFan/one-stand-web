<template>
    <div class="slider-contaier">
        <div class="slider slider_four_in_line">
            <div class="slider-reletive" 
                v-for="(item, index) in arr" 
                :key="index"
                :class="setClass(index)"
            > 
                <div class="current-slider">
                    <img :src="item.src" :alt="item.text" class="slider-img"/>
                    <div class="slider-mask">
                        <div class="slider-mask-cont">
                            <img :src="item.srcIcon"/>
                            <div class="slider-line"></div>
                            <p class="slider-mask-text">{{item.text}}</p>
                        </div> 
                        <p class="slider-mask-cent">{{item.cent}}</p>
                    </div>
                </div>
            </div>
            <div class="next_button button" @click="handleNext"></div>
            <div class="prev_button button" @click="handlePrev"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        sliderArr: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            currentIndex: 0,
            arr: []
        }
    },
    mounted() {
        this.arr = this.sliderArr.concat(this.sliderArr)
        this.runIv()
        this.setClass()
    },
    methods: {
         goto(index){
            setTimeout(()=>{
                this.currentIndex=index;
            },3000)
            
        },
        runIv(){
            setInterval(() => {
                this.goto(this.next)
            }, 3000)
        },
        setClass(index) {
            if (this.currentIndex === index) {
                return 'active'
            }
            for (let i=1; i<5; i++) {
                if (index - this.currentIndex === i || this.currentIndex + i -index === this.arr.length) {
                    if (this.currentIndex + i === this.arr.length) {
                        index = 0
                    }
                    return 'next' + i
                } else if (this.currentIndex - index === i || index + i - this.arr.length === this.currentIndex) {
                    return 'prev' + i
                } 
            }
            return 'hidden'
        },
        handlePrev() {
            if(this.currentIndex===0){
                this.currentIndex = this.arr.length-1
            }else{
                this.currentIndex -= 1
            }
        },
        handleNext() {
            if(this.currentIndex === this.arr.length-1){
                this.currentIndex = 0
            }else{
                this.currentIndex += 1
            }
        },
    },

    computed:{
        prev(){
            if(this.currentIndex===0){
                return this.arr.length-1
            }else{
                return this.currentIndex-1
            }
        },
        next(){
            if(this.currentIndex===this.arr.length-1){
                return 0
            }else{
                return this.currentIndex + 1
            }
        }
    }
} 
</script>
<style scoped>
.slider-contaier {
    width: 100%;
    height: 100%;
    background: #3D4047;
}
.slider_four_in_line {
    width: 80vw;
    height: 19.5vw;
    position: relative;
    margin: 0 auto;
    user-select: none;
}
.slider_four_in_line > * {
    transition: ease all 1s;
    overflow: hidden;
}
.slider {
    width: 70rem;
    height: 26.5rem;
}
.slider_four_in_line .active, 
.slider_four_in_line .next1, 
.slider_four_in_line .next2, 
.slider_four_in_line .next3, 
.slider_four_in_line .next4, 
.slider_four_in_line .prev1 {
    text-align: center;
    position: absolute;
    width: 25%!important;
    height: 100%;
    top: 0px;
    left: 25%;
    z-index: 10;
    margin: 0 0.5%;
    border: none!important;
}
.slider_four_in_line .prev2, 
.slider_four_in_line .prev3, 
.slider_four_in_line .prev4 {
    position: absolute;
    width: 0%;
    height: 100%;
    top: 0px;
    left: 0%;
    z-index: 0;
    opacity: 0;
}
.slider_four_in_line .hidden {
    opacity: 0;
    z-index: 0;
    top: 0px;
    left: 50%;
}
.slider_four_in_line .next1 {
    left: 50%;
}
.slider_four_in_line .next2 {
    left: 75%;
}
.slider_four_in_line .next3, .slider_four_in_line .next4 {
    width: 0%!important;
    left: 100%;
    z-index: 0;
    opacity: 0;
}
.slider_four_in_line .prev1 {
    position: absolute;
    width: 0%;
    height: 100%;
    top: 0px;
    left: 0%;
    z-index: 10;
    opacity: 1;
}
div.slider > div:not(.nav_indicators):not(.next_button):not(.prev_button) {
    box-shadow: 0px 1px 3px #000;
    border: 1px solid #000;
    background: #fff;
    text-align: center;
    box-sizing: border-box;
    font-size: 150px;
}
/* 图标、小标题、说明的盒子 */
.slider-mask {
    width: 17.5rem;
    height: 26.5rem;
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.8;
    transition: 0.5s;
}
/* 图标、小标题的盒子 */
.slider-mask-cont {
    position: absolute;
    top: 1rem;
    text-align: center;
    padding-top: 1rem;
    width: 100%;
    transition: 0.5s;
}
/* 小标题 */
.slider-mask-text {
    font-size: 1.35rem;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(255,255,255,1);
    margin-top: -20px;
}
/* 说明 */
.slider-mask-cent {
    font-size: 0.9rem;
    color: rgba(255,255,255,1);
    padding: 0 2.5rem;
    position: absolute;
    bottom: 2rem;
    opacity: 0;
    transition: 0.5s;
}
/* 当鼠标悬浮在card上的时候，出现蓝色背景、小图标、标题、说明整体上移 */
.slider-mask:hover {
    background: #51CDCB;
}
.slider-mask:hover .slider-mask-cent {
    opacity: 1;
    bottom: 5rem;
}
.slider-mask:hover .slider-mask-cont {
    top: 0;
    padding-top: 0;
}
.button {
    position: absolute;
    width: 50px;
    opacity: 0;
    height: 26.5rem;
    top: 0;
    cursor: pointer;
}
/* next 按钮 */
.next_button {
    left: 100%;
    margin: 0 0 0 5px;
    background: rgb(51, 51, 51) url(../assets/right-ban.png) no-repeat center;
    
}
/* pre 按钮 */
.prev_button {
    left: 0%;
    margin: 0 0 0 -45px;
    background: rgb(51, 51, 51) url(../assets/left-ban.png) no-repeat center;
}
/* 当鼠标悬浮的时候，pre 和 next 按钮出现 */
.slider:hover .prev_button, .slider:hover .next_button {
    opacity: 1 !important;
    transition: 0.5s;
}
.slider-img {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 700px){
    .slider_four_in_line,
    .carousel-wrap {
        height: auto;
        width: auto;
    }
}
</style>