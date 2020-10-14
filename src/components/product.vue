<template>
    <div class="product-list-wrap">
        <div class="title">{{productInfo.title}}</div>
        <div 
            v-for="(item, index) in productInfo.product" 
            :key="index" class="productInfo-wrap"
        >
            <Row v-if="index % 2 == 0">
                <Col 
                    :xs="24" 
                    :sm="24" 
                    :md="24" 
                    :lg="24" 
                    :xl="12" 
                    class="even"
                    style="position: relative"
                >
                    <div class="dec">
                        <div class="pt">{{item.pt}}</div>
                        <ul>
                            <li v-for="(ele, idx) in item.list" :key="idx">{{ele.dec}}</li>
                        </ul>
                    </div>
                </Col>
                <Col 
                    :xs="24" 
                    :sm="24" 
                    :md="24" 
                    :lg="24" 
                    :xl="12" 
                    class="even"
                >
                    <div class="dep">
                        <img  :src="item.img" />
                    </div>
                </Col>
            </Row>
            <Row v-else>
                <Col 
                    :xs="24" 
                    :sm="24" 
                    :md="24" 
                    :lg="24" 
                    :xl="12" 
                    class="odd"
                >
                    <div class="dep">
                        <img :src="item.img" />
                    </div>
                </Col>
                <Col 
                    :xs="24" 
                    :sm="24" 
                    :md="24" 
                    :lg="24" 
                    :xl="12" 
                    class="odd"
                >
                    <div class="dec">
                        <div class="pt">{{item.pt}}</div>
                        <ul>
                            <li v-for="(ele, idx) in item.list" :key="idx">{{ele.dec}}</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        productInfo: {
            title: '',
            product: []
        }
    }
}
</script>
<style scoped>
.title {
    font-size: 36px;
    color: rgba(56,56,56,1);
    margin: 0;
    font-weight: bold;
    text-align: center;
}
.dep {
    display: inline;
}

.dec .pt {
    font-size: 28px;
    margin-bottom: 30px;
    font-weight: bold;
    color: #4F4F4F;
}
.dec ul li {
    font-size: 18px;
    color: #707070;
    line-height: 26px;
    list-style: none;
}
img {
    text-align: left;
}

/* 移动端 */
@media screen and (max-width: 900px){
    .productInfo-wrap {
        position: relative;
        height: 800px;
    }
    .dec .pt {
        text-align: center;
        margin-top: 20px;
    }
    .dec ul li { 
        text-align: center;
    }
    .odd:first-child {
        margin-top: 270px;
    }
    .odd:nth-child(2) {
        position: absolute;
    }
    /* .odd-img .dep, .odd .dec {
        position: absolute;
    }
    .odd-img{
        top: 100%;
    } */
}

/* pc端 */
@media screen and (min-width: 960px){
    .productInfo-wrap {
        position: relative;
        /* height: 530px; */
    }
    .title {
        line-height: 200px;
    }
    .dec .pt {
        text-align: right;
    }
    .dec ul li {
        text-align: right;
    }
    .odd {
        text-align: right;
    }
    .odd .dec .pt {
        text-align: left;
    }
    .odd .dec ul li {
        text-align: left;
    }
    .productInfo-wrap:nth-child(odd) .dec{
        right: 20px;
    }
    .productInfo-wrap:nth-child(odd) img{
        left: 20px;
    }
    .productInfo-wrap:nth-child(even) .dec{
        left: 20px;
    }
    .productInfo-wrap:nth-child(even) img{
        right: 20px;
    }
}

</style>