<template>
    <div class="loan_whole">
        <van-nav-bar title="全部产品"/>
        <van-row class="header_title">
            <van-col span="8">贷款金额</van-col>
            <van-col span="8">贷款期限</van-col>
            <van-col span="8">职业身份</van-col>
        </van-row>
        <van-list>
            <sub-child></sub-child>
            <sub-child></sub-child>
            <sub-child></sub-child>
            <sub-child></sub-child>
            <sub-child></sub-child>
            <sub-child></sub-child>
        </van-list>
    </div>
</template>
<script>
import SubChild from '../child/subChild';
export default {
    data(){
        return{

        }
    },
    components:{
        SubChild
    }
}
</script>
<style scoped>
    .header_title{
        background-color: #fff;
        width: 100%;
        padding: 10px 0;
        font-size: 14px;
        color: #666;
        line-height:32px;
        text-align: center
    }
</style>

