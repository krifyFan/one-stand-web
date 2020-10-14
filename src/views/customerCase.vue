<template>
    <div>
        <section class="case-banner">
            <img :src="caseBanner" alt="客户案例">
        </section>
        <section class="case-section-wrap">
            <Row>
                <Col 
                    :xs="24" 
                    :sm="24" 
                    :md="24" 
                    :lg="24" 
                    :xl="8" 
                    class="case"
                    v-for="(item, index) in caseList"
                    :key="`caseList-${index}`"
                >
                    <Case :caseInfo="item" style="margin: 20px"/>
                </Col>
            </Row>
        </section>
        <Footer></Footer>
    </div>
</template>
<script>
import Case from '../components/case.vue'
import Footer from '../components/footer.vue'
export default {
    components: { Case, Footer },
    data() {
        return {
            caseBanner: require('../assets/case-banner.png'),
            caseGif: require('../assets/product.gif'),
            caseList: [
                {
                    caseImg: require('../assets/anli1.png'),
                    logo: require('../assets/anLogo1.png'),
                    title: '房企行业解决案例',
                    subTitle: '行业：房地产',
                    dec: '花费几万请大微推文为产品推广，几万阅读量最多能有100个意向客户，主动联系的只有1个，其余99个客户流失，使用壹脉AI智能名片，瞬间抓取所有意向客户，并可以主动沟通。'
                },
                {
                    caseImg: require('../assets/anli2.png'),
                    logo: require('../assets/anLogo2.png'),
                    title: '教育培训行业案例',
                    subTitle: '行业：教育',
                    dec: '优秀案例数不胜数，不知道把哪个告诉客户？轻松搭建企业官网，详细展示优秀教育案例、名校风采，推广复杂、招生困难问题轻松解决。'
                },
                {
                    caseImg: require('../assets/anli3.png'),
                    logo: require('../assets/anLogo3.png'),
                    title: '餐饮行业解决案例',
                    subTitle: '行业：餐饮',
                    dec: '品牌统一输出，商品轻松添加，客户随时下单，无需关注公众号，不必添加微信，轻松实现提升销量及服务效率。'
                },
                {
                    caseImg: require('../assets/anli4.png'),
                    logo: require('../assets/anLogo4.png'),
                    title: '婚纱摄影行业案例',
                    subTitle: '行业：婚纱摄影',
                    dec: '投5000元朋友圈广告，10W+曝光量及900+点击量，最后“立即咨询”实现转化不足10人，不了解客户需求，损失惨重，壹脉AI智能名片，实时追踪客户行为，知己知彼百战不殆。'
                },
                {
                    caseImg: require('../assets/anli5.png'),
                    logo: require('../assets/anlogo5.png'),
                    title: '医美机构行业案例',
                    subTitle: '行业：医美',
                    dec: '销售团队主力军年轻富有个性，也伴随着极高的人员流动率，员工离职便带走客户，给企业造成极大损失。壹脉AI智能名片，所有资源全部由公司掌握，人事变动一键切换，资产永不流失。'
                },
                {
                    caseImg: require('../assets/anli6.png'),
                    logo: require('../assets/anlogo6.png'),
                    title: '家装行业解决案例',
                    subTitle: '行业：家装',
                    dec: '市场装修风格琳琅满目，装修是买房者亘古的难题，借助壹脉AI智能名片，家装公司可大量展示设计稿和实际装修效果图，助于吸引客户，营造信任感。'
                },
                {
                    caseImg: require('../assets/anli7.png'),
                    logo: require('../assets/anlogo7.png'),
                    title: '金融行业服务案例',
                    subTitle: '行业：金融',
                    dec: '壹脉AI智能名片可一键转发微信群、朋友圈，借力微信10亿活跃流量，迅速裂变获客。多种转发形式结合多维度的传播方式，轻松解决获取难题。'
                },
                {
                    caseImg: require('../assets/anli8.png'),
                    logo: require('../assets/anlogo8.png'),
                    title: '保险行业解决案例',
                    subTitle: '行业：保险',
                    dec: '保险涉及千万家，每一个人都有可能成为客户，但是不一定每一个人都愿意添加你的微信。壹脉AI智能名片，自带IM聊天功能，无须添加好友也能实时聊天。'
                },
                {
                    caseImg: require('../assets/anli9.png'),
                    logo: require('../assets/anlogo9.png'),
                    title: '汽车行业服务案例',
                    subTitle: '行业：汽车',
                    dec: '对于boss而言，了解销售员们每天的工作情况，他们跟进了多少客户，是团队管理的核心工作，壹脉AI智能名片，打造数字化管理平台，以图表的形式呈现所有管理数据。'
                },
            ]
        }
    }
}
</script>
<style scoped>
.case-banner {
    width: 100%;
    height: 575px;
} 
.case-banner img {
    width: 100%;
    height: 100%;
}
.case {
   background-color: rgb(248, 248, 248);
}
.case-section-wrap {
    margin-top: 2rem;
}
@media screen and (max-width: 700px) {
    .case-banner {
        height: auto;
    }
    .case-section-wrap {
        margin-top: 0;
    }
}
</style>