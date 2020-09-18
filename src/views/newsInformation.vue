<template>
    <div>
        <section class="news-banner">
            <img :src="newBanner" alt="新闻动态">
            <NewsList :newsList="newsList" />
        </section>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../components/footer.vue'
import NewsList from '../components/newsList.vue'
export default {
    components: { NewsList, Footer },
    data() {
        return {
            newBanner: require('../assets/news-banner.png'),
            newsList: [
                {
                    id: 1,
                    timeDay: '04-01/',
                    timeYear: '2020',
                    pic: require('../assets/news-1.jpg'),
                    title: '如何成功打造企业线上营销？这4点一定不能少',
                    dec: '壹脉销客智能名片了，一张小小的名片里面，不仅包含了官网、企业信息，还有商城系统以及各种营销功能'
                },
                {
                    id: 2,
                    timeDay: '03-28/',
                    timeYear: '2020',
                    pic: require('../assets/news-2.png'),
                    title: '颠覆了规则的智能名片，留给你上车的时间不多了！',
                    dec: '智能名片，打造企业不见面营销！'
                },
                {
                    id: 3,
                    timeDay: '03-25/',
                    timeYear: '2020',
                    pic: require('../assets/news-3.jpg'),
                    title: '商务营销利器，推荐给涉及互联网营销的众企业',
                    dec: '商务营销利器，推荐给涉及互联网营销的众企业'
                },
                {
                    id: 4,
                    timeDay: '03-19/',
                    timeYear: '2020',
                    pic: require('../assets/news-4.jpg'),
                    title: 'AI智能名片发展前景如何？源码该如何选择？',
                    dec: '当下正是智能名片的发展期，此时入场时机再好不过了！'
                }
            ]
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
</style>