<template>
    <div class="news-list-wrap">
        <ul>
            <li v-for="(item, index) in newsList" :key="index" @click="goToModule('newsDetail', item.id)">
                <div class="time">
                    <div class="time-day">{{item.timeDay}}</div>
                    <div class="time-year">{{item.timeYear}}</div>
                </div>
                <div class="pic">
                    <img :src="item.pic">
                </div>
                <div class="content">
                    <div class="news-title">{{item.title}}</div>
                    <div class="news-dec">{{item.dec}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        newsList: {
            type: Array
        }
    },
    methods: {
        goToModule(path, id) {
            this.$router.push({
                path: path+'/'+id
            })
        }
    }
}
</script>
<style scoped>
ul {
    padding: 0;
}
ul li {
    list-style: none;
    position: relative;    
    padding: 50px 30px;
    cursor: pointer;
}

.time, .pic, .content {
    display: inline-block;
    vertical-align: middle;

}
.pic img {
    width: 23.75vw!important;
    height: 13.33vw!important;
    margin: auto 30px;
}

ul li:nth-child(odd) {
    background: #f8f8f8;
}
ul li:nth-child(even) .time {
    float: right;
    margin-top: 40px;
}
ul li:nth-child(even) .content {
    float: left;
}
ul li:nth-child(odd) .time {
    float: left;
    margin-top: 40px;
}
ul li:nth-child(odd) .content {
    float: right;
}
.time {
    width: 200px;
    text-align: center;
}
.time .time-day, .content .news-title {
    font-size: 36px;
    color: rgba(53, 55, 61, 1);
}
.time .time-year, .content .news-dec {
    font-size: 26px;
    margin-top: 10px;
    color: rgba(174, 175, 180, 1);
}
.content {
    width: 600px;
}
.content .news-dec {
    font-size: 16px;
}
ul li:hover {
    background: #51CDCB;
}
ul li:hover .time .time-day, 
ul li:hover .content .news-title,
ul li:hover .time .time-year,
ul li:hover .content .news-dec {
    color: rgb(255, 255, 255);
    transition: all .2s
}
</style>