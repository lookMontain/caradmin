<template>
    <el-container>
        <el-header class="header-box">
            <div>
                产品:共18071条有效数据,包含6个二级指标，44个三级指标
            </div>
            <div style="margin-top: 5px;">
                产品重点的三级指标分别为车钥匙和锁、车联网相关和警示灯
            </div>
        </el-header>
        <el-main>

            <div>
                <div class="l2-box">
                    <div class="l2-item" v-for="(item,index) in list" :key="index">
                        {{ item.name }}
                    </div>
                </div>
                <div>

                </div>
            </div>

        </el-main>
    </el-container>
</template>
<script>
import { list } from './mock'
export default {
    data () {
        return {
            list: list
        }
    },
    methods: {

    }
}
</script>
<style>
.header-box {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: aliceblue;
}
.l2-box{
    width:200px;
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
}
.l2-item{
    width: 100%;
    height: 30px;
    background-color: antiquewhite;
}
</style>