<template>
    <div class="list">
        <div class="topDiv">
            <div class="left_bufen">
                <div class="item_avator"></div>
                <div class="miaoshu">
                    <div style="display:flex">
                        <span class="item_title">京牛钱包</span>
                        <i class="biaoqian">低费率</i>
                    </div>
                    <p style="color:#999">可贷额度：5万-50万</p>
                </div>
            </div>
           <router-link to="/detail" class="right_btn">立即申请</router-link>
        </div>
        <div class="topDiv" style="align-items: flex-end">
            <div style="display:flex;margin-top:10px">
                <div class="neirong_box">
                    <p class="edu">额度(元)</p>
                    <p class="neirong">30000-300000</p>
                </div>
                <div>
                    <p class="edu">期限</p>
                    <p class="neirong">1月-36月</p>
                </div>
            </div>
            <p class="edu">36.86万人申请成功</p>
        </div>
    </div>
</template>
<style>
    .list{
        width: 100%;
        background-color: #fff;
        box-shadow:0px 0px 0px 0px rgba(229,229,229,1);
        border-bottom: 1px solid #E5E5E5;
         padding: 14px 20px 10px;
    }
    .topDiv{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .left_bufen{
        display: flex;
    }
    .item_avator{
        width: 40px;
        height: 40px;
        background-color: #EC592D;
        border-radius:4px;
        margin-right: 8px
    }
    .right_btn{
        display: block;
        width:77px;
        height:30px;
        background:rgba(242,113,84,1);
        box-shadow:0px 0px 4px 0px rgba(242,113,84,0.36);
        border-radius:4px;
        text-align: center;
        line-height: 30px;
        color: #fff;
    }
    .item_title{
        font-size: 14px;
        color: #484848
    }  
    .miaoshu{
        display: flex;
        flex-direction: column;
        justify-content: space-between
    } 
    .biaoqian{
        display: block;
        border:1px solid rgba(242,113,84,1);
        font-size:10px;
        color:rgba(242,113,84,1);
        font-style: normal;
        margin-left: 4px;
    }
    .neirong_box{
        margin-right: 24px;
    }
    .edu{
        color: #999;
    }
    .neirong{
        margin-top: 5px;
        color: #F27154
    }
</style>
