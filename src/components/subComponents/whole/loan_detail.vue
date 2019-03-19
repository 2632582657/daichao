<template>
    <div class="whole_loan_detail">
        <div class="top_title">
             <van-nav-bar title="佩奇贷"  left-arrow  @click-left="onClickLeft"/>
             <p class="e_du">额度范围</p>
             <p class="Amount">5万-50万</p>
             <div style="text-align: center;margin-top:12px;">
                 <i class="biaoqian">低费率</i>
                 <i class="biaoqian">无忧担保</i>
             </div>
             <div style="text-align: center;margin-top:31px;">
                 <i class="yuandian"></i>
                 <span class="zhixian"></span>
                <i class="yuandian"></i>
            </div>
            <div style="padding:0 58px 0 58px;margin-top:10px;" class="text_t">
                 <span style="float:left">贷款期限<br>3~36个月</span>
                 <span style="float:right">月利率<br>0.6%~0.85%</span>
            </div>
        </div>
        <div style="margin-top:10px;">
            <p class="introduce">相关介绍</p>
            <ul class="list_detail">
                <li>
                    <img src="../../../../static/images/xxxhdpi/Material.png" alt="" class="img_icon">  产品概述
                    <p  class="shuoming">
                        中银消费贷是中国银行专为拥有稳定连续性工资收入人士发放的，以其每月工资收入作为贷款金额判断依据，用于个人消费的无担保人民币贷款。
                    </p>
                </li>
                <li style="margin-top:20px;">
                     <img src="../../../../static/images/xxxhdpi/conditions.png" alt="" class="img_icon">  申请条件
                     <p class="shuoming">
                         年龄要求：22-55周岁；<br>
                         收入要求：月打卡工资2000元以上；<br>
                         限制区域：胶州地区暂不接受申请；<br>
                         工作年限：现单位连续工作满6个月以上；<br>
                         信用要求：信用良好，无90天以上逾期。
                     </p>
                </li>
                <li style="margin-top:20px;">
                     <img src="../../../../static/images/xxxhdpi/Material.png" alt="" class="img_icon">  所需材料
                     <p class="shuoming">
                         1.二代身份证 <br>
                         2.工作证明 <br>3.征信报告 <br>4.社保或公积金缴纳明细
                     </p>
                </li>
                <li style="margin-top:20px;padding-right:20px;"><van-button size="large">申请贷款</van-button></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    
    },
    mounted(){

    },
    methods:{
        onClickLeft() {
          history.go(-1)
      },
    }
}
</script>

<style scoped>
    .van-button--default{
        background:rgba(242,113,84,1);
        color: #fff;
    }
   .van-nav-bar{
       background: rgba(243, 243, 243, 0);
      border: none;
   }
   .van-hairline--bottom::after{
       border: none;
   }
   .van-nav-bar__title{
         font-size: 16px;
         color:#fff;
   }
   .van-nav-bar .van-icon{
       color: #fff;
   }
   .top_title{
       padding-top: 44px;
       width: 100%;
       height: 318px;
       background: url('/../../static/images/Group 3.png') 0 0 no-repeat;
       padding-left: 20px;
       background-size: 100%;
   }
   .e_du{
        text-align: center;
        height:18px;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:18px;
        margin: 30px;
        margin-bottom: 12px;
   }
   .Amount{
        text-align: center;
        height:36px;
        font-size:30px;
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(255,255,255,1);
        line-height:36px;
   }
   .biaoqian{
       padding: 0 2px 0 2px;
        height: 20px;
        display:inline-block;
        border:1px solid #fff;
        font-size:10px;
        color:#ffff;
        font-style: normal;
        margin-left: 4px;
        text-align: center;
    }
    .yuandian{
        display: inline-block;
        width:8px;
        height:8px;
        border:2px solid rgba(255,255,255,1);
        border-radius: 50%;
    }
    .zhixian{
        display: inline-block;
        height: 2px;
        width: 161px;
        background: #fff;
        margin-bottom: 2px;
    }
    .text_t>span{
        font-size:12px;
        color:rgba(255,255,255,1);
        line-height:18px;
    }
    .introduce{
     
        font-size:14px;
        font-family:PingFangSC-Medium;
        font-weight:700;
        color:rgba(72,72,72,1);
        line-height:3;
        background: #fff;
        padding-left: 20px;
    }
    .img_icon{
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }
    .list_detail{
        font-size:14px;
        font-weight:500;
        color:rgba(72,72,72,1);
        line-height:20px;
        padding-left: 20px;
        margin-top: 24px;
    }
    .shuoming{
        margin-top: 6px;
        padding: 0 32px 0 20px;
      
        font-size:12px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:18px;
    }
</style>
