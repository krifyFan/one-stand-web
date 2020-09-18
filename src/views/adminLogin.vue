<template>
    <div class="admin-login-page-wrap">
        <div class="top">
            <div class="sys">
                <img :src="logo" alt="logo">
                宜脉智能CMR
            </div>
            <div class="tel">
                服务电话&nbsp;&nbsp;17721872191
            </div>
        </div>
        <div class="login-wrap">
            <div class="title">
                <div class="account" :class="{'active': current === 1}" @click="account()">账号登录</div>
                <div class="wx" :class="{'active': current === 2}" @click="wxLogin()">微信扫码</div>
            </div>
            <div class="account-login-wrap" v-show="current === 1">
                <Form ref="accountForm" :model="accountForm" :rules="rulesValidate">
                    <FormItem prop="tel">
                        <Input placeholder="请输入手机号" v-model="accountForm.tel"/>
                    </FormItem>
                    <FormItem prop="companyId">
                        <Select v-model="accountForm.companyId">
                            <Option v-for="(item, index) in companys" :key="index" :value="item.id">{{item.name}}</Option>
                        </Select>
                    </FormItem>
                    <FormItem prop="verCode">
                        <Input v-model="accountForm.verCode" style="width: 55%; margin-right: 8%"/>
                        <Button type="info" class="btn">获取验证码</Button>
                    </FormItem>
                    <FormItem>
                        <Button type="info" class="btn" style="width: 100%" @click="submit('accountForm')">登录</Button>
                    </FormItem>
                </Form>
            </div>
            <div class="wx-login-wrap" v-show="current === 2">
                <div>
                    <p>微信登录</p>
                    <img :src="wxPic" alt="wxPic">
                </div>
            </div>
        </div>
        <div class="bottom-text">
            <img :src="bottomImg">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            logo: require('../assets/one-stand-logo.png'),
            current: 1,
            companys: [
                { id: 1, name: '公司一' },
                { id: 2, name: '公司二' }
            ],
            accountForm: {
                tel: null,
                companyId: null,
                verCode: null
            },
            rulesValidate: {
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
                companyId: [
                    { required: true, message: '公司不能为空', type: 'number', trigger: 'change' }
                ],
                verCode: [
                    { required: true, message: '验证码不能为空', trigger: 'blur' }
                ]
            },
            wxPic: require('../assets/wx-login.jpg'),
            bottomImg: require('../assets/text.png')
        }
    },
    methods: {
        account() {
            this.current = 1
        },
        wxLogin() {
            this.current = 2
        },
        submit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('登录成功')
                } else {
                    this.$Message.error('请输入正确的信息');
                }
            })
        }
    }
}
</script>
<style scoped>
.admin-login-page-wrap {
    background: url('../assets/admin-login-bg.png');
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.top {
    position: relative;
    height: 65px;
}
.top .sys,
.top .tel {
    position: absolute;
    font-weight: bold;
    bottom: 0px;
    font-size: 18px;
}
.top .sys {
    left: 50px;
    color: #51CDCB;
}
.top .tel {
    right: 50px;
    color: #E4E9EA;
}
.sys img {
    width: 30px;
    height: 18px;
    vertical-align: middle;
    margin-right: 5px;
}
.login-wrap {
    width: 400px;
    margin: 10px auto;
    background: #ffffff;
    padding-top: 50px;
    box-shadow: 1px 0px 5px #ccc;
}
.title div {
    display: inline-block;
    width: 100px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    background: #fff;
    padding: 10px 0px;
    margin-left: 67px;
    border-bottom: 2px solid #ffffff;
}
.active {
    border-bottom: 2px solid #51CDCB !important;
}
.account-login-wrap,
.wx-login-wrap {
    padding: 30px 60px;
}
.btn {
    background: #51CDCB;
    border: 1px solid #51CDCB;
}
.wx-login-wrap div {
    text-align: center;
}
.wx-login-wrap div p {
    font-size: 20px;
}
.wx-login-wrap div img {
    width: 300px;
}
.bottom-text {
    position: absolute;
    bottom: 10px;
    left: 38%;
}
</style>