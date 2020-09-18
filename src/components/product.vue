<template>
    <div class="product-list-wrap">
        <div class="title">{{productInfo.title}}</div>
        <div v-for="(item, index) in productInfo.product" :key="index" class="productInfo-wrap">
            <div class="dec">
                <div class="pt">{{item.pt}}</div>
                <ul>
                    <li v-for="(ele, idx) in item.list" :key="idx">{{ele.dec}}</li>
                </ul>
            </div>
            <div class="dep">
                <img  :src="item.img" />
            </div>
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
.productInfo-wrap {
    position: relative;
    height: 530px;
}
.title {
    font-size: 36px;
    color: rgba(56,56,56,1);
    line-height: 200px;
    margin: 0;
    font-weight: bold;
    text-align: center;
}

.dec  {
    position: absolute;
    top: 50%;
    width: 40%;
    transform: translateY(-50%)

}
.dep {
    display: inline;
}


.dec .pt {
    font-size: 28px;
    margin-bottom: 30px;
    font-weight: bold;
    color: #4F4F4F;
    text-align: right;
}
.dec ul li {
    font-size: 18px;
    color: #707070;
    line-height: 26px;
    text-align: right;
    list-style: none;
}
img {
    position: absolute;
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
</style>