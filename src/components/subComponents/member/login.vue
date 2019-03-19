<template>
    <div id="example">
       <van-nav-bar  right-text="注册"  class="top"/>
       <div style="padding:0 30px 0 30px">
           <p class="longin">
             快速登录
           </p>
           <p class="zhanghao">将默认注册华尔客账号</p>
       </div>
       <!--输入框-->
       <div  style="padding:0 30px 0 30px;margin-top:48px" class="user_longin">
           <ul>
             <li>
                <input type="text" placeholder="请输入手机号"  @focus="clear_icon()" v-model="phone_num"><van-icon name="cross" color="#D8D8D8" size=20px @click="clear_phone()"  v-show="show"/> <span class="get_code" id="getCode" @click="getCodeTimer()">获取验证码</span> 
             </li>
              <li style="margin-top:18px">
                 <input type="text" placeholder="请输入4位验证码" style="width:90%" @focus="clear_codenum_icon()" v-model="code_num"><van-icon name="cross" color="#D8D8D8" size=20px @click="clear_codenum()" v-show="code_show"/> 
             </li>
             <li style="margin-top:30px">
                  <van-button size="large" type="danger" @click="longin_Verification()">登录</van-button>
              </li>
           </ul>
       </div>
    </div>
</template>
<script>



export default {
      data(){
        return{
          phone_num:"",
          show:false,
          code_num:"",
          code_show:false,
          cutdownFlag:true,
        }
      },
      created(){
       
      },
       methods: {
         clear_icon:function(){
             this.show = true;
         },
         clear_phone:function(){
             this.phone_num="";
         },
         clear_codenum_icon:function(){
              this.code_show=true;
         },
         clear_codenum:function(){
           this.code_num="";
         },
         getCodeTimer:function(){
              //获取短信验证码倒计时
              console.log(1);
              
             if(this.phone_num ==''){//手机号不能我空
                  console.log(this.phone_num);
                       this.$dialog.alert({
                        title: '错误信息',
                        message: '手机号不能为空'
                      }).then(() => {
                        // on close
                      });
                      
                       return;
                  }else if(this.cutdownFlag==true){
                          this.cutdownFlag = false;
                          var time = 60;
                          var timer = setInterval(function () {
                              document.getElementById('getCode').innerText = ("("+time+")" + "s后重新获取");
                              
                             
                              time--;
                              if (time < 0) {
                                  clearInterval(timer);
                                  document.getElementById("getCode").innerText = ("重新获取");
                                  this.cutdownFlag = true;
                              }
                          }, 1000);                
                  }
             
         },
         longin_Verification:function(){
             //验证码验证
         }
    
     }
}
</script>
<style scoped>
  .van-icon {
      top:5px;
  }
   .van-nav-bar__text{
      color: #484848;
      font-weight: 700;
   }
   .longin{
     margin-top: 20px;
    font-size:24px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
   }
   .zhanghao{
    margin-top: 20px;
    font-size:14px;
    font-weight:400;
    color:rgba(153,153,153,1);
   
   }
   .user_longin>ul>li{
     width:100%;
     height:48px;
     border-bottom: 1px solid rgba(231, 216, 216, 0.623);
     position: relative;
      
   }
   .user_longin>ul>li>input{
      height: 46px;
      width: 66%;
      border: none;
      font-size: 16px;
      background: #F0F2F5;
     
   }
   
   input-placeholder{
       color: #CCCCCC;
   }
   .get_code{
     position: absolute;
     right: 0;
     top: 50%;
     margin-top: -10px;
     display: inline-block;
    
    height:20px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:20px;
   }
   .van-button--danger{
     background: #F27154;
   }
</style>
     