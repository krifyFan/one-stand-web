<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img class="logo" :src="logoImg">
            <div class="company-name">壹脉</div>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item"
                v-for="(item, index) in menuData" 
                :key="index" 
                @click="goToModule(index, item.pathName)"
                :class="{active: index === currentIndex}"
            >
                <a class="nav-link" 
                    href="#">
                    {{item.name}}
                    <span class="sr-only">(current)</span>
                </a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                其他
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a 
                    class="dropdown-item" 
                    href="#"
                    v-for="(item, index) in otherMenu" 
                    :key="index" 
                    @click="goToModule(index, item.pathName)"
                >{{item.name}}</a>
                </div>
            </li>
            </ul>
        </div>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            logoImg: require('../assets/one-stand-logo.png'),
            menuData: [
                { name: '首页', pathName: '/home' },
                { name: '产品案例', pathName: '/product' },
                { name: '客户案例', pathName: '/case' },
                // { name: '新闻动态', pathName: '/news' },
                { name: '关于我们', pathName: '/about' }
            ],
            otherMenu: [
                { name: '登录', pathName: 'adminLogin' },
                { name: '申请加入', pathName: 'apply' }
            ],
            currentIndex: -1
        }
    },
    watch:{
        '$route.path':function(newVal,oldVal){
            this.menuData.forEach((item, index) => {
                if (item.pathName.indexOf(newVal) > -1) {
                    this.currentIndex = index
                }
            })
        }
    },
    methods: {
        goToModule(index, path) {
            this.currentIndex = index
            this.$router.push(path)
        },
        goToAdminSys() {
            this.currentIndex = this.menuData.length
            this.$router.push({name: 'adminLogin'})
        },
        apply() {
            this.$router.push({name: 'apply'})
        }
    }
}
</script>
<style scoped>
.navbar-wrap {
    position: fixed;
    z-index: 1000;
    top: 0;
    width: 100%;
    background: white;
    height: 73px;
    line-height: 70px;
    left: 0;
}

.logo-wrap, .navbar-container-wrap {
    display: inline-block;
    vertical-align: top;
} 

.logo, 
.company-name, 
.main-navbar-wrap li
{
    display: inline-block;
    vertical-align: middle;
}

.logo-wrap {
    width: 29%;
    padding-left: 10%;
}

.logo {
    width: 55px;
} 

.company-name {
    font-size: 42px;
    font-weight: 500;
    margin-left: 15px;
    color: #51CDCB;
}

.navbar-container-wrap {
    width: 60%;
}

.main-navbar-wrap {
    margin: 0;
    padding: 0;
    vertical-align: top;
}
.main-navbar-wrap li {
    padding: 0 14px;
    cursor: pointer;
    font-size: 16px;
}
.main-navbar-wrap li div {
    border-bottom: 2px solid #ffffff;
}
.main-navbar-wrap .menu div:hover {
    border-bottom: 2px solid #51CDCB;
}
.main-navbar-wrap li .line{
    border-left: 1px solid #ccc;
    height: 15px;
}
.main-navbar-wrap li .apply-btn {
    height: 40px;
    background: #51CDCB;
    line-height: 40px;
    padding: 0 20px;
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;
}
.active {
    color: #51CDCB;
    border-bottom: 2px solid #51CDCB !important;
}
</style>