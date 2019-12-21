<template>
    <div class="loginbox">
        <div class="verify-phone">
            <div class="loginbox-form">
                <input type="text" placeholder="请输入手机号">
                <input type="text" placeholder="输入验证码">
                <div class="btn-code"><button>语音验证码</button></div>
                <div class="agree-box">
                    <input type="checkbox" :checked="isChecked" @click="handleDisabled">
                    <div class="form-protocol-label clear">
                        <i>我已认真阅读、理解并同意</i>
                        <i class="form-protocol-link">《每日优鲜用户协议》</i>
                        <i>及</i>
                        <i class="form-protocol-link">《每日优鲜隐私策略》</i>
                    </div>
                </div>
                <div class="agree-btn">
                    <button :disabled="isDisabled">登录</button>
                </div>
                <h2 class="login-tip">为方便您及时查询订单信息，需要验证您的手机号来登录</h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isChecked: false,
                isDisabled:false
            }
        },
        methods: {
            handleDisabled(){
                this.isChecked = !this.isChecked;
                if(this.isChecked == true){
                    this.isDisabled = true;
                }else{
                    this.isDisabled = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .verify-phone{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 1.875rem 0 1.875rem;
        .loginbox-form{
            width: 3.3rem;
            padding: 1.5rem 0;
            input{
                text-align: left;
                line-height: 0.5rem;
                font-size: 16px;
                height: 0.5rem;
                width: 3.3rem;
                border: none;
                border-bottom: 1px solid #e6e6e6;
            }
            .btn-code{
                float: right;
                position: relative;
                top: -.88rem;
                button{
                    color: #ff4891;
                    border: 1px solid #ff4891;
                    border-radius: .1rem;
                    height: .3rem;
                    width:1rem;
                    background: #fff;
                }
            }
            .agree-box{
                width: 3.5rem;
                margin-top: 50px;
                input{
                    width: 15px;
                    height: 15px;
                }
                .form-protocol-label{
                    width: 3.3rem;
                    float: right;
                    padding-right: 20px;
                    font-size: 14px;
                    line-height: 15px;
                    color: #969696;
                }
                .form-protocol-link{
                    color: #ff4891;
                }
            }
        }
        .agree-btn{
            width: 3.3rem;
            margin-top: 40px;
            opacity: 4;
            background: #B8B3BA;
            button{
                width: 100%;
                height: 50px;
                color: #fff;
                font-weight: 400;
                border: none;
                font-size: 18px;
            }
        }
        .login-tip{
            color: #969696;
            font-size: 14px;
            margin-top: 20px;
            text-align: center;
            
        }
    }
</style>