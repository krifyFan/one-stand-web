<template>
    <div>
        <section>
            <Carousel :slides="slides" />
        </section>
        <section class="ai-crm-smPro-wrap">
            <div class="title">
                <div class="main-title">AI+CRM+小程序</div>
                <div class="line"></div>
                <div class="sub-title">流量从获取到传递到变现</div>
                <div class="sub-title">打通营销路径，形成营销闭环</div>
            </div>
            <Row>
                <Col 
                    :xs="24" 
                    :sm="24" 
                    :md="24" 
                    :lg="24" 
                    :xl="{ span: 5, offset: 1 }" 
                    v-for="(item, index) in charactTitle"
                    :key="`charact-${index}`"
                    class="charact"
                >
                    <div style="width: 100%; text-align: center">
                        <img :src="iconCheck" />
                        <div>{{item.name}}</div>
                    </div>
                </Col>
            </Row>
        </section>
        <!-- 智能名片小程序等 -->
        <section class="m-program-tabs-wrap">
                <div class="m-program-titles-content">
            <div class="m-program-titles" ref="programTitle">
                    <div 
                        
                        class="item" 
                        :class="{active: currentPT === index}" 
                        v-for="(item, index) in programTabs" 
                        :key="index"
                        @mouseenter="enterPT(index)"
                    >
                        <img :src="currentPT === index ? item.activeSrc : item.src" />
                        <strong>{{item.name}}</strong>
                    </div>
                </div>
            </div>
            <div class="m-program-body">
                <div v-for="(item, index) in programBody" :key="index" style="display: inline-block; overflow-x: hidden;">
                    <ProgramBody 
                        v-if="currentPT === index"
                        :programBody="item.dec" 
                        :programBodyImgs="item.img"
                    />
                </div>
            </div>
        </section>
        <section class="container">
            <Slider :sliderArr="sliderArr" />
        </section>
        <!-- 案例 -->
        <section class="case-section-wrap">
            <div class="case-title">
                <div class="main-title">客户案例</div>
                <div class="line"></div>
                <p class="more" @click="goToModule(2, 'case')">More ></p>
            </div>
            <Row class="container" offset="24">
                <Col 
                    :xs="24" 
                    :sm="24" 
                    :md="24" 
                    :lg="24" 
                    :xl="{ span: 6, offset: 2 }" 
                    class="case"
                    v-for="(item, index) in caseInfo"
                    :key="`caseInfo-${index}`"
                >
                    <Case :caseInfo="item"/>
                </Col>
            </Row>
        </section>
        <!-- 我们服务的行业 -->
        <section class="service-section-wrap">
            <div class="service-title">
                <div class="main-title">我们服务的行业</div>
                <div class="line"></div>
                <p class="dec">
                    金融业、通讯业、互联网、制造业、保险业、房地产等20余个行业服务
                </p>
            </div>
            <Row class="container" offset="24">
                <Col 
                    :xs="24" 
                    :sm="24" 
                    :md="24" 
                    :lg="24" 
                    :xl="{ span: 6, offset: 2 }"
                    v-for="(item, index) in serInfo"
                    :key="`serInfo-${index}`"
                >
                    <Service :serviceInfo="item" />
                </Col>
            </Row>
        </section>
        <!-- 服务支持 -->
        <section class="service-support-wrap">
            <div class="service-title">
                <div class="main-title">服务支持</div>
                <div class="line"></div>
                <p class="dec">
                    Service Support
                </p>
            </div>
            <Row class="container" offset="24">
                <Col 
                    :xs="24" 
                    :sm="24" 
                    :md="24" 
                    :lg="24" 
                    :xl="{ span: 6, offset: 2 }"
                    v-for="(item, index) in ssInfo"
                    :key="`ssInfo-${index}`"
                >
                    <ServiceSupport :ssInfo="item" />
                </Col>
            </Row>
        </section>
        <Footer></Footer>
    </div>
</template>
<script>
import Carousel from '../components/carousel.vue'
import ProgramBody from '../components/progromBody.vue'
import Slider from '../components/slider.vue'
import Case from '../components/case.vue'
import Service from '../components/service.vue'
import ServiceSupport from '../components/serviceSupport.vue'
import Footer from '../components/footer.vue'
export default {
    components: { Carousel, ProgramBody, Slider, Case, Service, ServiceSupport, Footer },
    data() {
        return {
            slides: [
                // { src: require('../assets/banner1.png') },
                { src: require('../assets/banner2.png') },
                { src: require('../assets/banner3.png') }
            ],
            iconCheck: require('../assets/icon-checked.png'),
            charactTitle: [
                { name: '快速引流' },
                { name: '高效获客' },
                { name: '只能捕捉' },
                { name: '有效跟进' },
                { name: '精准成交' },
                { name: '全员营销' },
                { name: '数字化管理' },
                { name: '永久锁客' }
            ],
            programTabs: [
                {
                    src: require('../assets/icon-index-card.png'),
                    activeSrc: require('../assets/icon-index-card-selected.png'),
                    name: '智能名片小程序'
                },
                {
                    src: require('../assets/icon-index-crm.png'),
                    activeSrc: require('../assets/icon-index-crm-selected.png'),
                    name: 'CRM小程序'
                },
                {
                    src: require('../assets/icon-index-boss-back.png'),
                    activeSrc: require('../assets/icon-index-boss-back-selected.png'),
                    name: 'BOSS管理后台'
                },
                {
                    src: require('../assets/icon-index-back.png'),
                    activeSrc: require('../assets/icon-index-back-selected.png'),
                    name: '总后台'
                }
            ],
            currentPT: 0,
            programBody: [
                {
                    dec: [
                        {
                            title: '会说话名片',
                            subTitle1: '个人信息|企业官网|产品商城|客户案例|新闻动态',
                            subTitle2: '一样的发放名片，不一样的信息空间'
                        },
                        {
                            title: '懂分销的名片',
                            subTitle1: '全员营销，打造超强分销战队',
                            subTitle2: '基于微信超10亿用户池精准裂变拓客'
                        },
                        {
                            title: '会预约的名片',
                            subTitle1: '产品商城内支持预约功能',
                            subTitle2: ''
                        },
                        {
                            title: '会聊天的名片',
                            subTitle1: 'IM聊天系统，不加微信随时沟通',
                            subTitle2: '一对一聊天，消息及时触达用户'
                        }
                    ],
                    img: [
                        { src: require('../assets/img-prog-card-1.png') },
                        { src: require('../assets/img-prog-card-2.png') },
                        { src: require('../assets/img-prog-card-3.png') },
                        { src: require('../assets/img-prog-card-4.png') }
                    ]
                },
                {
                    dec: [
                        {
                            title: '会追逐的系统',
                            subTitle1: '24h实时追踪用户行为，为营销提供精准方向',
                            subTitle2: '标签化管理客户，客户逼单稳、准、狠！'
                        },
                        {
                            title: '懂数据的系统',
                            subTitle1: 'AI精准数据分析，打通销售各个环节',
                            subTitle2: '科学分类客户并测算成交率，制作销售漏斗'
                        },
                        {
                            title: '带雷达的系统',
                            subTitle1: '通过大数据、云计算、人工智能删选客户',
                            subTitle2: '自动记录客户数据，提高企业运营效率！'
                        }
                    ],
                    img: [
                        { src: require('../assets/icon-prog-crm-1.png') },
                        { src: require('../assets/icon-prog-crm-2.png') },
                        { src: require('../assets/icon-prog-crm-3.png') }
                    ]
                },
                {
                    dec: [
                        {
                            title: '懂管理的助手',
                            subTitle1: '打造数字化管理平台，随时更新一键获取',
                            subTitle2: '以图表形式呈现数据，团队销售情况一目了然'
                        },
                        {
                            title: '会锁客的助手',
                            subTitle1: '员工离职一键替换，新人也能快速上手',
                            subTitle2: '所有资源公司掌握，企业资产永不流失'
                        }
                    ],
                    img: [
                        { src: require('../assets/icon-prog-boss-1.png') },
                        { src: require('../assets/icon-prog-boss-2.png') }
                    ]
                },
                {
                    dec: [
                        {
                            title: '懂掌控的系统',
                            subTitle1: '多企业（团队）管理、多客户管理',
                            subTitle2: '以一个强大的生态系统，管理客户数据'
                        }
                    ],
                    img: [

                        { src: require('../assets/icon-prog-admin-1.png') }
                    ]
                }
            ],
            sliderArr: [
                {
                    src: require('../assets/slider1.png'),
                    srcIcon: require('../assets/icon-1.png'),
                    text: '互动营销裂变',
                    cent: '通过分销、拼团、秒杀、红包等功能，刺激用户分享裂变，实现全员推广'
                },
                {
                    src: require('../assets/slider2.png'),
                    srcIcon: require('../assets/icon-2.png'),
                    text: '访客数据看板',
                    cent: '实时追踪客户轨迹，标签化管理客户，依托AI数据分析生成成交漏斗，预测成交率'
                            
                },
                {
                    src: require('../assets/slider3.png'),
                    srcIcon: require('../assets/icon-3.png'),
                    text: '商城预约服务',
                    cent: '用户商城在线预约，线上提前安排行程，线下体验完成营销闭环'
                },
                {
                    src: require('../assets/slider4.png'),
                    srcIcon: require('../assets/icon-4.png'),
                    text: '系统自动发布',
                    cent: '摒弃传统手动发布的繁琐，系统更新迭代一键自动发布，高效省时'
                },
                {
                    src: require('../assets/slider5.png'),
                    srcIcon: require('../assets/icon-5.png'),
                    text: '小程序授权托管',
                    cent: '租用、定制客户授权托管，免费提供系统维护、更新等服务，让运营更高效'
                            
                },
                {
                    src: require('../assets/slider3.png'),
                    srcIcon: require('../assets/icon-6.png'),
                    text: '名片个性化分享',
                    cent: '支持微信好友、微信群、朋友圈多渠道分享，个性化分享语可自定义编辑'
                            
                },
                {
                    src: require('../assets/slider4.png'),
                    srcIcon: require('../assets/icon-7.png'),
                    text: '数字化管理平台',
                    cent: 'Boss端图表式呈现销售团队及客户数据信息，资源锁定高效管理'
                            
                },
                {
                    src: require('../assets/slider5.png'),
                    srcIcon: require('../assets/icon-8.png'),
                    text: '多维度推广',
                    cent: '全方位展示个人、公司、产品信息，多维度加持企业信任感'
                }
            ],
            caseInfo: [
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
            ],
            serInfo: [
                {  
                    logo: require('../assets/ser-logo-1.png'),
                    title: '金融业'
                },
                {
                    logo: require('../assets/ser-logo-2.png'),
                    title: '通讯业'
                },
                {
                    logo: require('../assets/ser-logo-3.png'),
                    title: '互联网'
                },
                {
                    logo: require('../assets/ser-logo-4.png'),
                    title: '制造业'
                },
                {
                    logo: require('../assets/ser-logo-5.png'),
                    title: '保险业'
                },
                {
                    logo: require('../assets/ser-logo-6.png'),
                    title: '房地产'
                }
            ],
            ssInfo: [
                {
                    title: '专业客服解惑',
                    dec: '实时在线服务每一个客户，耐心解惑每一个问题，悉心处理客户诉求'
                },
                {
                    title: '运营指导',
                    dec: '提供给商家包括产品功能和后台设置的指导和咨询'
                },
                {
                    title: '解决方案提供',
                    dec: '结合行业属性，提供客户具有针对性的解决方案'
                },
                {
                    title: '技术支持',
                    dec: '提供专业技术服务保障，确保客户安全、顺畅的使用'
                }
            ]
        }
    },
    methods: {
        enterPT(index) {
            this.currentPT = index
            if (index !== 0 && document.body.offsetWidth < 700) {
                let ref = this.$refs.programTitle
                ref.style.transform = `translateX(-${250*index}px)`
            }
        },
        goToModule(index, pathName) {
            this.currentIndex = index
            this.$router.push({
                name: pathName
            })
        }
    }
}
</script>
<style scoped>
.ai-crm-smPro-wrap {
    font-size: 22px;
    text-align: center;
}
.main-title {
    font-size: 36px;
    color: rgba(56,56,56,1);
    line-height: 60px;
    margin: 0;
}
.line {
    display: inline-block;
    position: relative;
    width: 310px;
    height: 1px;
    background: #E8E8E8;
    margin-top: 10px;
}
.line::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 20%;
    height: 4px;
    background: #51CDCB;
}
.ai-crm-smPro-wrap .title .sub-title {
    margin: 0;
    color: #A8A8A8;
    font-size: 18px;
    margin-bottom: 5px;
}


.charact img, 
.charact div {
    display: inline-block;
    vertical-align: middle;
}
.charact img {
    width: 24px;
    height: 24px;
}
.charact div {
    width: 10em;
    padding-left: 10px;
    text-align: left;
}
.m-program-tabs-wrap .m-program-titles {
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    box-sizing: border-box;
    flex-wrap: wrap;
}
@media screen and (min-width: 960px){
    .m-program-tabs-wrap .m-program-titles {
        width: 1200px
    }
}
@media screen and (max-width: 700px){
    .m-program-tabs-wrap .m-program-titles {
        width: 700px
    }
    .m-program-tabs-wrap .m-program-titles .item {
        min-width: 200px;
    }
}
.m-program-tabs-wrap .m-program-titles-content {
    width: initial;
    height: 100px;
    border: 1px solid red;
    overflow: hidden;
}
.m-program-tabs-wrap .m-program-titles .item {
    color: #A8E6E5;
    font-size: 26px;
    padding: 37px 0;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    margin: 0 auto;
}
.m-program-tabs-wrap .m-program-titles .item.active {
    color: #51CDCB;
    border-bottom: 4px solid #51CDCB;
}
/* .m-program-tabs-wrap .m-program-titles .item.active + .item{
    transform: translate(-50%);
} */
.m-program-tabs-wrap .m-program-titles .item img {
    width: 36px;
    height: 36px;
    vertical-align: middle;
}
.m-program-tabs-wrap .m-program-titles .item strong {
    font-weight: 700;
}
.container {
    overflow: hidden;
}
.case {
   background-color: rgb(248, 248, 248);
}
.case-title, .service-title {
    margin-top: 100px;
    text-align: center;
}
.case-title .more, .service-title .dec {
    color: grey;
    cursor: pointer;
}
/* .service-section-wrap .container .service, */
.service-support-wrap .container .ss {
    display: inline-block;
    vertical-align: middle;
}
.service-section-wrap .container,
.service-support-wrap .container {
    text-align: center;
}

.service-support-wrap {
    background: url('../assets/server-bg.png')  center center;
}
.service-support-wrap .container .ss {
    width: 20%;
    padding: 1%;
}

.ivu-col-span-xs-24,
.ivu-col-span-lg-6 {
    margin-bottom: 1rem;
}
</style>