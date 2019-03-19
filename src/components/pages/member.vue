<template>
    <div class="loan_member">
        <van-nav-bar title="我的"/>
        <div style="padding:0 20px 0 20px" class="clearfloat">
            <div style="float:left">
                 <p class="noLongin">未登录</p>
                 <router-link to="/longin" class="look">点击登录查看</router-link>
            </div>
            <div style="float:right; position: relative;height:68px;">
                <img src="../../../static/images/user.png" alt="" class="user_icon">
           </div>
           
        </div>
        <div style="margin-top:38px; padding:0 20px 0 20px" class="user_list">
            <ul>
                <li>
                    意见反馈 <img src="" alt="">
                </li>
                 <li>
                    查询订单 <img src="" alt="">
                </li>
                 <li>
                    分析给朋友 <img src="" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>

<style scoped>
      .clearfloat:after{/* 清除浮动 */
            display:block;
            clear:both;
            content:"";
            visibility:hidden;height:0
        }
      .noLongin{
        height: 40px;
        width:78px;
        font-size:26px;
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(72,72,72,1);
        padding:0; 
        margin-top: 24px;
        margin-bottom: 10px;
      }
      .look{
        width:84px;
        height:18px;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:18px;
        padding-top: 10px;
      }
      .user_icon{
          width: 48px;
          height: 48px;
          position: absolute;
          top: 50%;
          right: 0;
         
      }
      .user_list>ul>li{
        width:335px;
        height:66px;
        box-shadow:0px 0px 0px 0px rgba(225,225,225,1);
        font-size: 16px;
        line-height: 3.5;
        color: #484848;
        font-family:PingFangSC-Light;
        border-bottom: 1px solid rgba(231, 216, 216, 0.623);
      }
</style>
