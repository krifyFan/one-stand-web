<template>
    <div>
        <div class="apply-page-wrap">
            <div class="apply-wrap">
                <p class="title">申请试用</p>
                <Form class="apply-form" ref="applyForm" :model="applyForm" label-position="left" :rules="rulesValidate">
                    <FormItem label="联系人" prop="name">
                        <Input type="text" v-model="applyForm.name" placeholder="请输入您的姓名" />
                    </FormItem>
                    <FormItem label="意向" prop="intention">
                        <Select placeholder="请选择" v-model="applyForm.intention">
                            <Option v-for="(item, index) in intentions" :key="index" :value="item.id">{{item.name}}</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="手机号码" prop="tel">
                        <Input placeholder="请填写您的手机号码" v-model="applyForm.tel"/>
                    </FormItem>
                    <FormItem label="微信" prop="wx">
                        <Input placeholder="请填写微信号码" v-model="applyForm.wx"/>
                    </FormItem>
                </Form>
                <Button type="primary" long style="height: 50px" @click="submit('applyForm')">立即申请</Button>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../components/footer.vue'
export default {
    components: { Footer },
    data() {
        return{
            intentions: [
                { id: 1, name: '代理' },
                { id: 2, name: '租用' },
                { id: 3, name: '源码' },
                { id: 4, name: '定制' },
                { id: 5, name: '其他' }
            ],
            applyForm: {
                name: null,
                intention: null,
                tel: null,
                wx: null
            },
            rulesValidate: {
                name: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' },
                    { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                ],
                intention: [
                    { required: true, type: 'number', message: '意向不能为空', trigger: 'change' }
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
                wx: [
                    { required: true, message: '微信不能为空', trigger: 'blur' }
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
.apply-page-wrap {
    background: url(../assets/banner7.png) no-repeat;
    background-size: auto;
    width: 100%;
    padding: 50px;
}
.apply-wrap {
    background: #fff;
    width: 600px;
    margin: 100px auto;
    padding: 60px;
}
.apply-wrap .title {
    font-size: 22px;
    font-weight: bold;
}
.apply-form {
    margin-top: 20px;
}
.ivu-form-item {
    margin-bottom: 24px;
    vertical-align: top;
    zoom: 1;
    border-bottom: 1px solid #ccc;
    padding-bottom: 24px;
}
.ivu-input-wrapper >>> .ivu-input,
.ivu-select >>> .ivu-select-selection {
    border: none;
    outline: none;
}
.apply-form .ivu-form-item >>> .ivu-form-item-label {
        width: 100px !important;
}
@media screen and (max-width: 700px){
    .apply-page-wrap {
        padding: 10px;
    }
    .apply-wrap {
        width: 100%;
        margin: 100px auto;
        padding: 10px;
    }
    .apply-form .ivu-form-item >>> .ivu-form-item-label {
        width: 100px !important;
    }
}
</style>