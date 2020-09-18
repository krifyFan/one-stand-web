<template>
    <div>
        <section class="about-main-wrap">
            <div class="title">固安云科智能，打造社交新模式</div>
            <div class="dec">截止现在</div>
            <div class="number-wrap">
                <div v-for="(item, index) in numberList" :key="index" class="number-list">
                    <div class="number-text">{{item.text}}</div>
                    <div class="number">{{item.number}}</div>
                    <div class="text-inEN">{{item.en}}</div>
                </div>
            </div>
            <img :src="aboutBanner" alt="关于我们" class="img">
        </section>
        <section class="sys-card">
            <div class="info">
                <div class="infoTitle">{{info.infoTitle}}</div>
                <div class="infoDec">{{info.infoDec}}</div>
            </div>
            <img :src="info.infoImg">
        </section>
        <section class="loc-contact">
            <div class="loc-map">
                <img :src="locMap" />
            </div>
            <div class="contact">
                <div class="contact-title">联系我们</div>
                <div class="contact-content">
                    <Form ref="personInfo" :model="personInfo" :rules="rulesValidate" label-position="top">
                        <Row>
                            <Col span="11">
                                <FormItem label="姓名" prop="name">
                                    <Input type="text" placeholder="请输入姓名" v-model="personInfo.name"/>
                                </FormItem>
                            </Col>
                            <Col span="11" offset="2">
                                <FormItem label="电话" prop="tel">
                                    <Input placeholder="请输入您的电话号码" v-model="personInfo.tel"/>
                                </FormItem>
                            </Col>
                            <Col span="24">
                                <FormItem label="邮箱" prop="email">
                                    <Input v-model="personInfo.email"/>
                                </FormItem>
                            </Col>
                            <Col span="24">
                                <FormItem label="需求或意见">
                                    <Input v-model="personInfo.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                    <!-- <div class="name-tel-wrap">
                        <div class="name">
                            <div>姓名</div>
                            <input type="text" placeholder="请输入姓名" />
                        </div>
                        <div class="tel">
                            <div>电话</div>
                            <input placeholder="请输入您的电话号码" type="number"/>
                        </div>
                    </div>
                    <div class="email">
                        <div>邮箱</div>
                        <input type="text">
                    </div>
                    <div class="remark">
                        <div>需求或意见</div>
                        <textarea></textarea>
                    </div> -->
                </div>
                <div class="submit-btn-wrap">
                    <button class="submit-btn" @click="submit('personInfo')">提交</button>
                </div>
            </div>
        </section>
        <section class="contract-wrap">
            <div class="tel-wrap">
                    <img :src="telImg">
                <div class="info-wrap">
                    <p>13718469919</p>
                    <br/>
                    <p>13718469919&nbsp;&nbsp;&nbsp;&nbsp;13801204491</p>
                </div>
            </div>
            <div class="email-wrap">
                <img :src="emailImg">
                <div class="info-wrap">
                    <p>邮箱地址</p>
                    <br/>
                    <p>1044085031@qq.com</p>
                </div>
            </div>
            <div class="local-wrap">
                    <img :src="localImg">
                <div class="info-img">
                    <p>河北省廊坊市固安县固安镇</p>
                    <br/>
                    <p>永定北路156-4号</p>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../components/footer.vue'
export default {
    components: { Footer },
    data() {
        return {
            numberList: [
                {
                    text: '服务企业',
                    number: '2000+',
                    en: 'Enterprise'
                },
                {
                    text: '服务客户',
                    number: '10万+',
                    en: 'Client'
                },
                {
                    text: '带来流量',
                    number: '100万+',
                    en: 'traffic'
                }
            ],
            aboutBanner: require('../assets/about-img.png'),
            info: {
                infoTitle: '壹脉智能名片',
                infoDec: '壹脉智能名片是成都壹立科技有限公司旗下的一套智能商务营销工具；为企业打造一套智能化的商务体系，重新定义销售，帮助您的企业获客；基于小程序+AI技术开发的人工智能名片和AI雷达系统；通过微信的连接能力和开放能力将公司微官网、公司产品、客户雷达系统、智能CRM客服系统有机组合，打造成新时代智能营销利器。',
                infoImg: require('../assets/aboutyili.png')
            },
            locMap: require('../assets/map.png'),
            telImg: require('../assets/tel.png'),
            emailImg: require('../assets/email.png'),
            localImg: require('../assets/local.png'),
            personInfo: {
                name: null,
                tel: null,
                email: null,
                remark: null
            },
            rulesValidate: {
                name: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                tel: [
                    { required: true, message: '手机号不能为空', trigger: 'blur' },
                    {
                        validator: (rule, value, callback)=>{
                            if (!value) {
                                return callback(new Error('手机号不能为空'));
                            } else if (!/^1[34578]\d{9}$/.test(value)) {
                                callback('手机号格式不正确');
                            } else {
                                callback();
                            }
                        }, trigger: 'blur'
                    }
                ],
                email: [
                    { required: true, message: '邮箱不能为空', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功！')
                } else {
                    this.$Message.error('请填写正确的信息！')
                }
            })
        }
    }
}
</script>
<style scoped>
.about-main-wrap {
    width: 100%;
    height: 600px;
    margin-top: 73px;
    background: #51CDCB;
    color: #ffffff;
    padding-top: 150px;
}
.title {
    font-size: 36px;
    font-weight: bold;
    margin-left: 50px;
}
.dec {
    margin-left: 50px;
    font-size: 18px;
    margin-top: 10px;
}
.img {
    margin: 50px;
}
.number-wrap {
    float: right;
}
.number-wrap .number-list{
    display: inline-block;
    display: inline-block;
    width: 175px;
    border-right: 1px solid #fff;
    text-align: center;
    padding: 0px 20px;
}
.number-list .number {
    font-size: 36px;
    font-weight: bold;
    line-height: 55px;
}
.number-wrap .number-list:last-child {
    border: none;
}
/* 智能名片部分 */
.sys-card {
    background: #f8f8f8;
    padding: 100px 0;
} 
.sys-card .info, .sys-card img {
    display: inline-block;
    vertical-align: middle;
}
.sys-card .info {
    width: 50%;
    padding: 0 5% 0 3%;
}
.sys-card .info .infoTitle {
    font-size: 40px;
}
.sys-card .info .infoDec {
    margin-top: 70px;
    color: gray;
    font-size: 14px;
}
/* 地图以及提交部分 */
.loc-contact {
    padding: 80px 10px;
} 
.loc-contact .loc-map, .loc-contact .contact {
    display: inline-block;
    vertical-align: middle;
    width: 49%;
}
.loc-contact .loc-map img {
    width: 100%;
}
.contact .contact-title {
    font-size: 36px;
    margin-left: 15%;
}
.contact .contact-content {
    margin: 7% 15% 5% 15%;
}
.contact-content .name-tel-wrap .name, 
.contact-content .name-tel-wrap .tel {
    display: inline-block;
    margin: 10px;
}
.contact-content .name-tel-wrap .name input, 
.contact-content .name-tel-wrap .tel input,
.email input, 
.remark textarea {
    height: 25px;
    margin-top: 10px;
    width: 100%;
}
.email, .remark {
    margin: 10px;
}
.email input {
    width: 84%;
}
.remark textarea {
    width: 84%;
    height: 100px;
}
.submit-btn-wrap {
    margin-left: 15%;
}
.submit-btn {
    padding: 9px 40px;
    background: #51cdcb;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-left: 10px;
}
/** 联系方式 邮箱 地址 */
.contract-wrap {
    padding: 10px;
    margin-bottom: 80px;
}
.contract-wrap .tel-wrap,
.contract-wrap .email-wrap, 
.contract-wrap .local-wrap {
    border: 1px solid #ccc;
    height: 100px;
    width: 30%;
    display: inline-flex;
    padding: 15px 0;
}
.contract-wrap .email-wrap {
    margin: 0 4%;
}
.contract-wrap img {
    width: 60px;
    height: 60px;
    margin-left: 50px;
    margin-right: 10px;
}
.contract-wrap .email-wrap img {
    margin-left: 95px;
}
</style>