<template>
    <div class="card-items">
      <div class="card-items" v-if="$store.state.changeCss === true">
        <el-card
          shadow="hover"
          class="box-card"
          v-for="item in items"
          :key="item.id"
        >
          <div slot="header" class="clearfix">
            <div class="card-header">
              <!-- <div class="icon-transfrom"><i class="el-icon-discount"></i></div> -->
              <div>
                <img class="icon-image" :src="`${item.logo}`" />
                <span>{{ item.name }}</span>
              </div>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                @click="onClickDraw(item)"
                >查看详情</el-button
              >
            </div>
          </div>
          <div class="text item">
            {{ item.info }}
          </div>
        </el-card>
      </div>
      <div class="card-items" v-else>
        <el-card class="box-card box-text" v-for="item in items" :key="item.id">
          <div class="card-header">
            <el-image :src="`${item.logo}`"></el-image>
            {{ item.name }}
          </div>
        </el-card>
      </div>
      <!-- <CardDraw :visible="visible" :closeDraw="onClose()" /> -->
      <div>
      <a-drawer
      title="查看详情"
      :width="500"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <!-- <a-form :form="form" layout="vertical" hide-required-mark>
      </a-form> -->
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          确定
        </a-button>
        <a-button type="primary" @click="onClose()">
          取消
        </a-button>
      </div>
    </a-drawer>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        default: [],
      },
    },
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      onClickDraw(record) {
        console.log("record:", record)
        this.visible = true;
        console.log("visible:", this.visible)
      },
      onClose() {
        this.visible = false;
      },
    },
  };
  </script>
  
  <style lang="less" scoped>
  .card-items {
    display: flex;
    width: 100%;
    justify-content: left;
    // background-color: aqua;
    .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            width: 25px;
            height: 25px;
        }
        span {
            font-size: 15px;
        }
    }
    .box-card {
      width: 30%;
      margin-right: 1%;
    }
    .box-text {
      height: 80px;
    }
    .icon-transfrom {
      display: inline-block;
    }
    .item {
        font-size: 15px;
    }
  }
  </style>