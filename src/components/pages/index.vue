<template>
    <div class="loan_index">
        <van-nav-bar title="首页" fixed/>
        <div class="hot_nav">
            <div>
                <img src="../../../static/images/myloan.png" alt="">
                <p>最新口子</p>
            </div>
            <div>
                <img src="../../../static/images/enter_service.png" alt="">
                <p>门槛超低</p>
            </div>
            <div>
                <img src="../../../static/images/creditcard.png" alt="">
                <p>热门口子</p>
            </div>
            <div>
                <img src="../../../static/images/jisuanqi.png" alt="">
                <p>急速下款</p>
            </div>
        </div>
        <div class="banner">
            <img src="../../../static/images/Group 4.png" alt="">
            <div class="banner_text">
                <p class="banner_title">佩奇贷-可贷金额(元)</p>
                <p class="banner_money">3000-30000</p>
                <a href="#" class="banner_btn">立即申请</a>
            </div>
        </div>
        <div class="divider"></div>
        <div class="swipe_box">
            <van-swipe show-indicators style="width:100%" :height=90 indicator-color="#ccc">
                <van-swipe-item>
                    <div class="swipe_banner">
                        <div>
                            <p class="swipe_banner_oneP"><span style="color:#F27154">新口子</span>首次申请贷款 即送红包</p>
                            <p class="swipe_banner_twoP">
                                <span>重点推荐</span>
                                <span>99元现金红包等你来拿！</span>
                            </p>
                        </div>
                        <div style="width:58px;height:58px;background:#F27154"></div>
                    </div>
                </van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
            </van-swipe>
        </div>
        <div class="divider"></div>
        <div class="list_nav">
            <p>热门推荐</p>
            <p style="color:#999999">全部贷款</p>
        </div>
        <van-list>
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
        created(){

        },
        methods:{
        },
        components:{
            SubChild
        }
    }
</script>
<style>
    .hot_nav{
        display: flex;
        justify-content: space-around;
        margin-top: 60px;
    }
    .hot_nav>div{
        height: 74px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around  
    }
    .banner{
        text-align: center;
        margin: 20px auto;
        position: relative;
    }
    .banner_text{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 10px 0
    }
    .banner_title{color: #fff;}
    .banner_money{color: #fff;font-size: 26px}
    .banner_btn{
        width:70px;
        height:20px;
        background:rgba(255,255,255,1);
        border-radius:13px;
        border:1px solid rgba(255,255,255,1);
        color:rgba(242,113,84,1);
    }
    .swipe_box{
        width: 100%;
        height: 90px;
        background-color: #fff;
    }
    .divider{
        height: 10px;
        background: #F9F9F9;
        box-shadow: 0 5rpx 5rpx #F9F9F9 inset
    }
    .swipe_banner{
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding: 16px 38px 16px 24px
    }
    .swipe_banner_oneP{
        font-size: 16px;
        color: #333;
        font-weight:600;
    }
    .swipe_banner_twoP{display: flex; margin-top: 6px}
    .swipe_banner_twoP>span:first-child{
        display: block;
        font-size: 10px;
        text-shadow:0px 1px 1px rgba(143,107,59,0.5);
       background:linear-gradient(45deg,rgba(179,134,75,1) 0%,rgba(255,207,146,1) 100%);
        color: #fff;
        padding: 0 5px;
        margin-right: 5px;
    }
    .swipe_banner_twoP>span:last-child{font-size: 14px;color: #999}
    .list_nav{
        display: flex;
        width: 100%;
        padding: 15px 20px;
        background: #fff;
        justify-content: space-between;
        align-items: center;
        box-shadow:0px 0px 0px 0px rgba(229,229,229,1);
        border-bottom: 1px solid #E5E5E5
    }
    .list_nav>p:first-child{
        font-size: 14px;
        color:rgba(72,72,72,1);
    }
    
</style>


