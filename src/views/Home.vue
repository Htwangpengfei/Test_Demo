<template>
  <div class="home">

    <!-- header组件 -->
    <div class="header">
      <div>主页</div>
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            全览<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><router-link to="/add">添加</router-link></el-dropdown-item>
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item><span @click="changeCss()">切换</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <!-- 搜索组件 -->
    <div class="search">
      <Search id="search-view" />
    </div>

    <!-- 卡片组件 -->
    <Card class="card" :list="list" />
  </div>
</template>

<script>
import Card from './Card.vue';
import Search from './Search.vue';
export default {
  name: "home",
  components: { Card, Search },
  data() {
    return {
      item1: 'item',
      list: [
        {
          name: '我的收藏',
          list: [
            {
              id: 0,
              logo: '111',
              name: '111',
              adtvister: '111'
            },
            {
              id: 1,
              logo: '111',
              name: '111',
              adtvister: '111'
            }
          ]
        },
        {
          name: '我的收藏',
          list: [
            {
              id: 0,
              logo: '111',
              name: '111',
              adtvister: '111'
            },
            {
              id: 1,
              logo: '111',
              name: '111',
              adtvister: '111'
            }
          ]
        }
      ]
    }
  },
  created() {},
  methods: {
     clickChoose(str) {
       this.item1 = ''
       this.item2 = ''
       this.item3 = ''
       if(str === 'hot'){
        this.item1 = 'item'
       }else if(str === 'cinema') {
        this.item2 = 'item'
       }else if(str === 'will') {
        this.item3 = 'item'
       }
     },
     changeCss() {
      this.$store.commit('setCss');
      console.log(this.$store.state.changeCss);
     }
  }
};
</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
  color: black;
  font-size: 20px;
}
.header {
  width: 100%;
  height: 80px;
  margin-bottom: 2%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
.search {
  width: 80%;
  height: 80px;
  margin-left: 10%;
  margin-bottom: 2%;
  // background-color: white;
  // border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  #search-view {
    width: 80%;
    height: 80px !important;
    border-radius: 40px !important;
  }
}
.home {
  background-image: url('https://img2.baidu.com/it/u=208352846,2220010711&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=312');
  background-size:cover;
  width: 100%;
}
</style>
