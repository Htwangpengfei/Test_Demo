<template>
    <div class="card">
        <div class="items-card" v-for="(item, index) in list" :key="index">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <div class="card-header">
                        <div class="icon-transfrom">
                        <i class="el-icon-discount"></i>
                        </div>
                        {{ item.name }}
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button> -->
                    </div>
                </div>
                <!-- 小卡片数据 -->
                <CardItems :items="item.list" />
            </el-card>
        </div>
    </div>
</template>

<script>
import CardItems from './CardItems.vue';
export default {
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    components: { CardItems },
    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 100vh;
    .items-card {
        width: 80%;
        display: block;
        margin-top: 1%;
    }
    .icon-transfrom {
        transform: rotate(90deg);
        display: inline-block;
    }
}
</style>