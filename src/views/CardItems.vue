<template>
    <div class="card-items">
        <div class="card-items" v-if="$store.state.changeCss === true">
            <el-card class="box-card" v-for="item in items" :key="item.id">
                <div slot="header" class="clearfix">
                    <div class="card-header">
                        <div class="icon-transfrom"><i class="el-icon-discount"></i></div>
                        {{ item.name }}
                        <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
                    </div>
                </div>
                <div class="text item">
                    {{item.adtvister}}
                </div>
            </el-card>
        </div>
        <div class="card-items" v-else>
            <el-card class="box-card box-text" v-for="item in items" :key="item.id">
                <div class="card-header">
                    <div class="icon-transfrom"><i class="el-icon-discount"></i></div>
                        {{ item.name }}
                    </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: []
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
.card-items {
    display: flex;
    width: 100%;
    justify-content: left;
    // background-color: aqua;
    .box-card {
        width: 20%;
        margin-right: 1%;
    }
    .box-text {
        height: 80px;
    }
    .icon-transfrom {
        display: inline-block;
    }
}
</style>