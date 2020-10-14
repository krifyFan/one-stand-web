<template>
    <div>
        <section class="product-banner">
            <img :src="pb" />
        </section>
        <section class="pro-list-wrap">
            <div class="list" 
                v-for="(item, index) in proList" 
                :key="index" 
                @mouseenter="getActive(index)" 
                :class="{'active': currentIndex === index}"
            >
                <img v-if="currentIndex === index" :src="item.activeImg" :alt="item.title"/>
                <img v-else :src="item.img" :alt="item.title"/>
                <p>{{item.title}}</p>

            </div>
        </section>
        <section class="products-list-wrap">
            <Product 
                v-for="(item, index) in proInfoList" 
                :key="index" 
                v-show="currentProduct === index"
                :productInfo="item" />
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
            <div class="container">
                <Row>
                    <Col 
                        :xs="24" 
                        :sm="24" 
                        :md="24" 
                        :lg="24" 
                        :xl="{ span: 5, offset: 1 }" 
                        v-for="(item, index) in ssInfo"
                        :key="`ServiceSupport${index}`"
                    >
                       <ServiceSupport :ssInfo="item"/> 
                    </Col>
                </Row>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>
<script>
import Product from '../components/product.vue'
import ServiceSupport from '../components/serviceSupport.vue'
import Footer from '../components/footer.vue'
export default {
    components: { Product, ServiceSupport, Footer },
    data() {
        return {
            pb: require('../assets/product-banner.png'),
            proList: [
                {
                    img: require('../assets/icon-card.png'),
                    title: '智能名片',
                    activeImg: require('../assets/icon-card-selected.png')
                },
                {
                    img: require('../assets/icon-product.png'),
                    title: '产品商城',
                    activeImg: require('../assets/icon-product-selected.png')
                },
                {
                    img: require('../assets/icon-website.png'),
                    title: '企业官网',
                    activeImg: require('../assets/icon-website-selected.png')
                },
                {
                    img: require('../assets/icon-im.png'),
                    title: 'IM聊天',
                    activeImg: require('../assets/icon-im-selected.png')
                },
                {
                    img: require('../assets/icon-radar.png'),
                    title: '雷达系统',
                    activeImg: require('../assets/icon-radar-selected.png')
                },
                {
                    img: require('../assets/icon-marketing.png'),
                    title: '互动营销',
                    activeImg: require('../assets/icon-marketing-selected.png')
                },
                {
                    img: require('../assets/icon-ai.png'),
                    title: 'AI分析',
                    activeImg: require('../assets/icon-ai-selected.png')
                },
                {
                    img: require('../assets/icon-share.png'),
                    title: '分享裂变',
                    activeImg: require('../assets/icon-share-selected.png')
                }
            ],
            currentIndex: 0,
            currentProduct: 0,
            proInfoList: [
                {
                    title: 'AI+小程序，移动互联网营销利器',
                    product: [
                        {
                            pt: '个性化名片智能创建，迅速打造形象门户',
                            list: [
                                { dec: '融汇名片、官网、商城、动态全方位信息' },
                                { dec: '以文字、图片或视频形式实现多维度曝光' },
                                { dec: '客户只需要扫一个小程序码' },
                                { dec: '即可全面了解一切官方产品服务信息' },
                            ],
                            img: require('../assets/prod-1-1.png')
                        },
                        {
                            pt: '基于微信社交生态体系，分销裂变轻松获客',
                            list: [
                                { dec: '解决“流量贵、获客难”等行业通病' },
                                { dec: '自带微信庞大生态体系，多级分销裂变' },
                                { dec: '转发至微信群或朋友圈，发展下级分销轻松拓客' },
                                { dec: '打通线上线下营销模式，为企业带来新的机遇' }
                            ],
                            img: require('../assets/prod-1-2.png')
                        },
                        {
                            pt: '颠覆传统营销社交模式，撩客户无处不在',
                            list: [
                                { dec: '打破工作时间和地域的限定，以小程序为入口' },
                                { dec: '销售人员可随时随地了解自己掌握的所有客户' },
                                { dec: '随时与客户沟通联系，撩客户乘胜追击' },
                                { dec: '随时接受客户问题咨询，为成单助力' }
                            ],
                            img: require('../assets/prod-1-3.png')
                        }
                    ]
                },
                {
                    title: '把产品装进名片，轻松搭建移动电商平台',
                    product: [
                        {
                            pt: '线上专属商城轻松打造，电商模式瞬间开启',
                            list: [
                                { dec: '一张会营销的名片，把产品统统纳入其中' },
                                { dec: '任意商品手动添加、自主排序，秒级触达客户' },
                                { dec: '同时解决传统电商平台流量无法变现的问题' },
                                { dec: '同时解决传统电商平台流量无法变现的问题' }
                            ],
                            img: require('../assets/prod-2-1.png')
                        },
                        {
                            pt: '预约系统，打造VIP服务体验',
                            list: [
                                { dec: '为实体服务打造线上预约系统' },
                                { dec: '用户线上提前预定，线下完成体验' },
                                { dec: '客户结合自身情况合理安排行程' },
                                { dec: '商家也可根据客户预定提前安排' }
                            ],
                            img: require('../assets/prod-2-2.png')
                        },
                        {
                            pt: '线上支付打通营销链，节省更多交易成本',
                            list: [
                                { dec: '支持线上支付，满足客户在线下单需求' },
                                { dec: '同时节省企业电商推广及平台抽成成本' },
                                { dec: '人性化产品设计，一面功能多方受益' },
                                { dec: '互联网时代每个企业必备的智能营销利器' }
                            ],
                            img: require('../assets/prod-2-3.png')
                        }
                    ]
                },
                {
                    title: '颠覆传统官网，富媒体塑造品牌形象',
                    product: [
                        {
                            pt: '企业信息全面展现，品牌形象统一输出',
                            list: [
                                { dec: '公司历程、新闻动态、招聘信息一键发出' },
                                { dec: '企业实力及荣誉，发展动向及动态全面了解' },
                                { dec: '所有客户皆可在第一时间获取最新信息' },
                                { dec: '只有企业想不到的，没有客户看不到的' }
                            ],
                            img: require('../assets/prod-3-1.png')
                        },
                        {
                            pt: '现成模板操作方便，微官网迅速搭建',
                            list: [
                                { dec: '解决官网设计、模块搭建的烦恼' },
                                { dec: '文字自由编辑、图片随意上传' },
                                { dec: '无难度不耗时，微官网轻松迅速搭建' },
                                { dec: '管理者统一编辑，官方发布统一口径' }
                            ],
                            img: require('../assets/prod-3-2.png')
                        },
                        {
                            pt: '微信社交轻松裂变，推广成本无限降低',
                            list: [
                                { dec: '基于微信超10亿活跃用户流量' },
                                { dec: '员工分享即可无限裂变，传播推广' },
                                { dec: '直接降低企业搜索、付费推广成本' },
                                { dec: '每一个微信用户都是潜在客户' }
                            ],
                            img: require('../assets/prod-3-3.png')
                        }
                    ]
                },
                {
                    title: '不加微信也能实时聊天，让沟通无界限',
                    product: [
                        {
                            pt: 'IM聊天在线沟通，不加微信也能随时撩客',
                            list: [
                                { dec: '壹脉黑科技让访客瞬间变客户' },
                                { dec: '在小程序内就可以主动和访客实时聊天' },
                                { dec: '客户离线时消息便以“服务通知”触达客户' },
                                { dec: '不加微信也能建立起随时沟通及跟进的渠道' }
                            ],
                            img: require('../assets/prod-4-1.png')
                        },
                        {
                            pt: '消息阅览情况及时掌握，客户意向即可了解',
                            list: [
                                { dec: '·  发出消息根据被查阅状况详细呈现' },
                                { dec: '·  “已读”或“未读”，实时反馈客户情况' },
                                { dec: '·  确保客户跟进质量，意向程度及时了解' },
                                { dec: '·  根据反馈分析，销售及时跟进提供服务' }
                            ],
                            img: require('../assets/prod-4-2.png')
                        },
                        {
                            pt: '常用语库内容自定义，为营销立准则',
                            list: [
                                { dec: '企业可根据营销情况添加回复常用语' },
                                { dec: '点击即可快速回复，提供工作效率' },
                                { dec: '快速与客户建立联系，为成单助力' },
                                { dec: '且有效缩短新人培训时间，省时省力' }
                            ],
                            img: require('../assets/prod-4-3.png')
                        }
                    ]
                },
                {
                    title: '24h追踪用户行为，为精准营销提供方向',
                    product: [
                        {
                            pt: '24小时不间断客户追踪，快速锁定意向客户',
                            list: [
                                { dec: '·  追踪用户行为轨迹，根据客户画像自动化分析' },
                                { dec: '·  标签化管理客户，为销售提供精准的营销方向' },
                                { dec: '·  强大AI统计分析打通销售各个环节' },
                                { dec: '·  科学分类客户，全面满足销售需求' }
                            ],
                            img: require('../assets/prod-5-1.png')
                        },
                        {
                            pt: 'BOSS雷达，打造数字化管理平台',
                            list: [
                                { dec: 'SaaS级CRM客户关系管理平台' },
                                { dec: '客户、销售数据智能生成数据报表' },
                                { dec: '图表形式呈现企业营销数据' },
                                { dec: '操作便捷，适用于各个行业' }
                            ],
                            img: require('../assets/prod-5-2.png')
                        },
                        {
                            pt: '营销数据一目了然，全面提升运营效率',
                            list: [
                                { dec: '所有数据实时更新，一键获取' },
                                { dec: '企业管理者及时掌握营销情况' },
                                { dec: '并随时根据数据调整营销战略' }
                            ],
                            img: require('../assets/prod-5-3.png')
                        }
                    ]
                },
                {
                    title: '多级分销无限裂变，打造超强营销链',
                    product: [
                        {
                            pt: '多级分销，人人营销打造超强战队',
                            list: [
                                { dec: '分享返佣，真正实现人人皆营销' },
                                { dec: '支持多种分享模式发展、巩固分销链' },
                                { dec: '以分销佣金吸引用户转发分享' },
                                { dec: '让人脉变钱脉，真正实现全员营销' }
                            ],
                            img: require('../assets/prod-6-1.png')
                        },
                        {
                            pt: '集成多种市场主流营销方案，加速互动扩散',
                            list: [
                                { dec: '支持拼团、秒杀、红包等多元营销活动' },
                                { dec: '裂变成交迅速提升店铺人气' },
                                { dec: '老带新口碑式营销，高转化高扩散' },
                                { dec: '提供实现流量共享和裂变传播能力' }
                            ],
                            img: require('../assets/prod-6-2.png')
                        },
                        {
                            pt: '专业技术团队，为所有行业保驾护航',
                            list: [
                                { dec: '·  系统独立开发，版权独立，适用各行各业' },
                                { dec: '·  优质的技术团队提供专业技术保障' },
                                { dec: '·  定制一系列当下最热门营销活动' },
                                { dec: '·  为商家提供一站式活动解决方案' }
                            ],
                            img: require('../assets/prod-6-3.png')
                        },
                        {
                            pt: '多级分销，人人营销打造超强战队',
                            list: [
                                { dec: '分享返佣，真正实现人人皆营销' },
                                { dec: '支持多种分享模式发展、巩固分销链' },
                                { dec: '以分销佣金吸引用户转发分享' },
                                { dec: '让人脉变钱脉，真正实现全员营销' }
                            ],
                            img: require('../assets/prod-6-1.png')    
                        }
                    ]
                },
                {
                    title: '精准数据分析，智能化测算成交概率',
                    product: [
                        {
                            pt: '标签化管理客户，撩客稳准狠',
                            list: [
                                { dec: '·  根据用户访问轨迹，科学分类客户' },
                                { dec: '·  并有效判定客户的喜好与被吸引点' },
                                { dec: '·  根据其访问频率与模块区域有效跟进' },
                                { dec: '·  撩客稳、准、狠，成单快、易、猛！' }
                            ],
                            img: require('../assets/prod-7-1.png')
                        },
                        {
                            pt: '智能测算成交率，重点客户大力跟进',
                            list: [
                                { dec: 'AI强大数据分析智能测算成交率' },
                                { dec: '准确评估客户，制作销售漏斗' },
                                { dec: '筛选重点客户，持续跟进加速成交' },
                                { dec: '及时摒弃无意向客户，科学营销' }
                            ],
                            img: require('../assets/prod-7-2.png')
                        },
                        {
                            pt: '精准营销高效成单，业绩节节高升',
                            list: [
                                { dec: 'AI数据为营销提供准确的方向' },
                                { dec: '标签化管理，明确客户轻重缓急 ' },
                                { dec: '数据智能处理，图表式呈现意向侧重' },
                                { dec: '更准确的营销方向为企业带来更显著的成绩' }
                            ],
                            img: require('../assets/prod-7-3.png')
                        }
                    ]
                },
                {
                    title: '个性化分享，多维度加持裂变可能',
                    product: [
                        {
                            pt: '基于超10亿用户池，实现病毒式裂变',
                            list: [
                                { dec: '以小程序为入口，基于微信超10亿活跃用户量' },
                                { dec: '名片可通过转发好友、微信群、朋友圈' },
                                { dec: '以及好友的转发，一传十、十传百' },
                                { dec: '多种形式引发病毒式裂变，实现用户疾速增长' }
                            ],
                            img: require('../assets/prod-8-1.png')
                        },
                        {
                            pt: '自定义编辑分享语，打造个性化专属名片',
                            list: [
                                { dec: '提供多种名片模板，供用户自定义选择' },
                                { dec: '分享名片时，还可以自定义编辑名片分享导语' },
                                { dec: '同一张名片，不同展现形式' },
                                { dec: '总有一次转发，能吸引到某群客户' }
                            ],
                            img: require('../assets/prod-8-2.png')
                        },
                        {
                            pt: '转发营销拒绝单一，商城产品也能生成海报',
                            list: [
                                { dec: '除了名片能转发分享或生成海报分享以外' },
                                { dec: '更支持商城里的单个产品生成海报宣传' },
                                { dec: '帮助商家快速打造“爆款”产品' },
                                { dec: '多渠道发力，实现商城快速引流' }
                            ],
                            img: require('../assets/prod-8-3.png')
                        }
                    ]
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
        getActive(index) {
            this.currentIndex = index
            this.currentProduct = index
        }
    }
}
</script>
<style scoped>
.product-banner {
    width: 100%;
    height: 575px;
    margin-top: 73px;
}
.product-banner img {
    width: 100%;
    height: 100%;
}
.pro-list-wrap {
    text-align: center;   
}

.list {
    display: inline-block;
    vertical-align: middle;
    border-bottom: 3px solid #ffffff;
}
.list img {
    margin: 30px 30px 20px;
    max-width: 81px;
    max-height: 86px;
}
.active {
    color: #51CDCB;
    font-weight: 500;
    border-bottom: 3px solid #51CDCB;
    transition: 0.5s;
}
.products-list-wrap {
    background: #f8f8f8;
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
.service-title {
    /* margin-top: 100px; */
    text-align: center;
}
.service-title .dec {
    color: grey;
    cursor: pointer;
}
.service-support-wrap .container {
    text-align: center;
}
.service-section-wrap .container .service {
    width: 30%;
    margin: 1%;
    text-align: center;
}
.service-support-wrap {
    background: url('../assets/server-bg.png')  center center;
}
@media screen and (max-width: 900px){
    .product-banner {
        height: auto;
        margin-top: 0px;
    }
}
</style>