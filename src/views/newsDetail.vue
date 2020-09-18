<template>
        <section class="news-banner">
            <img :src="newBanner" alt="新闻动态">
            <div class="top-line"></div>
            <div class="news-detail-wrap">
                <div class="crumbs">
                    <Icon type="md-home" /> 
                    首页&nbsp;&nbsp;-&nbsp;&nbsp;
                    新闻动态&nbsp;&nbsp;-&nbsp;&nbsp;
                    新闻详情
                </div>
                <div class="news-title">{{newsInfo.title}}</div>
                <div class="publish-time">发布于{{newsInfo.publishTime}}</div>
                <div class="details-wrap" v-html="newsInfo.newsDetails"></div>
            </div>
            <div class="pre-next">
                <div class="pre">
                    上一篇：{{preTitle}}
                </div>
                <div class="next">
                    下一篇：{{nextTitle}}
                </div>
            </div>
            <div class="bottom-line"></div>
            <Footer></Footer>
        </section>
</template>
<script>
import Footer from '../components/footer.vue'
export default {
    components: {Footer},
    data() {
        return {
            newBanner: require('../assets/news-banner.png'),
            newsInfo: {
                title: '如何成功打造企业线上营销？这4点一定不能少',
                publishTime: '2020-04-01',
                newsDetails: `<p>  疫情期间，很多企业都遭受了损失，但是有的企业积极寻求突破，
                            利用壹脉销客智能名片，打造全员线上营销，不仅成功度过此次危机，还解锁营销新模式，
                            使企业销售业绩更上一层楼。</p>
                            <p>不少公司让公司全体员工都使用壹脉销客智能名片，
                            自动生成商品海报、获客文章等转发至朋友圈、用户群以及一些潜在客户群等，
                            不仅防止了老客户的流失，还挖掘了一批新用户，通过AI雷达功能，
                            对用户行为进行追踪、分析，智能获取用户的需求。</p>
                            <p>成功的抓住用户的需求痛点，从而对症下药，最终成功获得成交，
                            让线上营销变得更简单有效率。同时经过多家企的线上营销模式，
                            我们发现要具备以下4点，才能带来更好的营销效果：<p>


                            `
            },
            pic: require('../assets/news-1.jpg'),
            preTitle: '都说生意难做，你是否真正看懂未来营销趋势？',
            nextTitle: '颠覆了规则的智能名片，未来留给你的时间不多了'
        }
    }
}
</script>
<style scoped>
.news-banner {
    width: 100%;
    margin-top: 73px;
}
.news-banner img {
    height: 100%;
    width: 100%;
}
.top-line,.bottom-line {
    height: 100px;
    width: 100%;
    background: #FAFBFC;
    margin-top: -6px;
}
.news-detail-wrap {
    margin: 10px 100px;
    border-bottom: 1px solid #ccc;
}
.crumbs {
    line-height: 80px;
}
.news-title {
    padding: 0 0 40px 0;
    margin: 0;
    font-size: 28px;
    font-weight: bold;
    color: rgba(53, 55, 61, 1);
}
.publish-time {
    margin: 0;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(232, 232, 232, 1);
    font-size: 12px;
    font-weight: 300;
    color: rgba(174, 175, 180, 1);
}
.details-wrap {
    padding: 20px 0px;
    word-wrap: break-word;
    word-break :normal;
}
.pre-next {
    margin: 0 100px;
}
.pre-next div {
    display: inline-block;
    width: 50%;
    text-align: center;
    height: 80px;
    line-height: 80px;
    font-size: 14px;
    color: rgba(174, 175, 180, 1) !important;
    background: #fff;
    cursor: pointer;
}
.pre-next div:hover {
    background: #51CDCB;
    color: #fff !important;
    transition: 0.4s;
}
</style>