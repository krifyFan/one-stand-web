<template>
    <div class="item">
        <Row>
            <Col
                :xs="24" 
                :sm="24" 
                :md="24" 
                :lg="24" 
                :xl="12" 
            >
                <div class="u-function-list">
                    <div 
                        class="u-function-item" 
                        v-for="(item, index) in programBody" 
                        :key="index" 
                        :class="{active: currenItem === index}"
                    >
                        <h3>
                            <div></div>
                            {{item.title}}
                        </h3>
                        <p>{{item.subTitle1}}</p>
                        <p>{{item.subTitle2}}</p>
                    </div>
                    <button class="details-btn">
                        查看详情&nbsp;&nbsp;+
                    </button>
                </div>
            </Col>
            <Col
                :xs="24" 
                :sm="24" 
                :md="24" 
                :lg="24" 
                :xl="12" 
            >
                <div class="u-img-list">
                    <img :src="programBodyImgs[currenItem].src" />
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    props: {
        programBody: {
            type: Array,
            default: []
        },
        programBodyImgs: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            currenItem: 0
        }
    },
    mounted() {
        this.runIv()
    },
    methods: {
        goto(index){
            this.isShow=false;
            setTimeout(()=>{
                this.isShow=true
                this.currenItem=index;
            },1000)
            
        },
        runIv(){
            this.inId=setInterval(()=>{
                this.goto(this.next)
            },5000)
        },
    },
    computed:{
        prev(){
            if(this.currenItem===0){
                return this.programBody.length-1
            }else{
                return this.currenItem-1
            }
        },
        next(){
            if(this.currenItem===this.programBody.length-1){
                return 0
            }else{
                return this.currenItem+1
            }
        }
    }
}
</script>
<style scoped>
.item {
    max-width: 1180px;
    box-sizing: border-box;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
}
.u-function-list {
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    margin-right: 5%;
}
.u-function-list .u-function-item {
    padding: 20px 0;
    width: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-bottom: 0 !important;
}
.u-function-list .u-function-item {
    padding: 20px 0;
    width: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-bottom: 0 !important;
}
.u-function-list .u-function-item:first-child {
    padding-top: 0;
}
.u-function-list .u-function-item:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 1px;
    background: #51CDCB;
}
.u-function-list .u-function-item.active:before {
    transition: all 3s ease-in-out;
    width: 100%;
}

.u-function-list .u-function-item h3 {
    font-weight: 400;
    font-size: 24px;
    color: #4F4F4F;
    height: 60px;
    line-height: 60px;
    position: relative;
}

.u-function-list .u-function-item.active h3 {
    background: url(../assets/title-bg.png) no-repeat;
    background-size: contain;
    color: #fff;
    padding-left: 70px;
}
.u-function-list .u-function-item.active h3 div {
    position: absolute;
    left: 35px;
    top: 50%;
    transform: translateY(-50%);
    height: 28px;
    width: 29px;
    background: url(../assets/icon-hook.png) no-repeat;
    background-size: contain;
}
.u-function-list .u-function-item.active:before {
    transition: all 3s ease-in-out;
    width: 100%;
}
.u-img-list {
    display: flex;
    align-items: center;
}
.u-img-list img{
    vertical-align: middle;
}
.details-btn {
    margin-top: 25px;
    border: 1px solid #51CDCB;
    color: #51CDCB;
    line-height: 30px;
    padding: 0 20px;
}
.details-btn:hover {
    background: #51CDCB;
    color: #fff;
}
</style>