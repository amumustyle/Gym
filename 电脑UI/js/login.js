$(function(){
	
	$('#switch_qlogin').click(function(){
		$('#switch_login').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_qlogin').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_bottom').animate({left:'0px',width:'70px'});
		$('#qlogin').css('display','none');
		$('#web_qr_login').css('display','block');
		
		});
	$('#switch_login').click(function(){
		
		$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_bottom').animate({left:'154px',width:'70px'});
		
		$('#qlogin').css('display','block');
		$('#web_qr_login').css('display','none');
		});
if(getParam("a")=='0')
{
	$('#switch_login').trigger('click');
}

	});
	
function logintab(){
	scrollTo(0);
	$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
	$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
	$('#switch_bottom').animate({left:'154px',width:'96px'});
	$('#qlogin').css('display','none');
	$('#web_qr_login').css('display','block');
	
}
//根据参数名获得该参数 pname等于想要的参数名 
function getParam(pname) { 
    var params = location.search.substr(1); // 获取参数 平且去掉？ 
    var ArrParam = params.split('&'); 
    if (ArrParam.length == 1) { 
        //只有一个参数的情况 
        return params.split('=')[1]; 
    } 
    else { 
         //多个参数参数的情况 
        for (var i = 0; i < ArrParam.length; i++) { 
            if (ArrParam[i].split('=')[0] == pname) { 
                return ArrParam[i].split('=')[1]; 
            } 
        } 
    } 
}  


var reMethod = "GET",
	pwdmin = 6;

$(document).ready(function() {


	$('#reg').click(function() {

		if ($('#user').val() == "") {
			$('#user').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userCue').html("<font color='red'><b>×手机号不能为空</b></font>");
			return false;
		}

		else {
			$('#user').css({
				border: "1px solid #D7D7D7",
				boxShadow: "none"
			});
			
		}
		$.ajax({
			type: reMethod,
			url: "/member/ajaxyz.php",
			data: "uid=" + $("#user").val() + '&temp=' + new Date(),
			dataType: 'html',
			success: function(result) {

				if (result.length > 2) {
					$('#user').focus().css({
						border: "1px solid red",
						boxShadow: "0 0 2px red"
					});$("#userCue").html(result);
					return false;
				} else {
					$('#user').css({
						border: "1px solid #D7D7D7",
						boxShadow: "none"
					});
				}

			}
		});
        
        if ($('#qq').val() == "") {
			$('#qq').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userCue').html("<font color='red'><b>×验证码不能为空</b></font>");
			return false;
		}

		if ($('#qq').val().length < 4 || $('#qq').val().length > 6) {

			$('#qq').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userCue').html("<font color='red'><b>×验证码为4位数</b></font>");
			return false;
		} else {
			$('#qq').css({
				border: "1px solid #D7D7D7",
				boxShadow: "none"
			});
			
		}

  //       var sqq = /^[1-9]{1}[0-9]{4,9}$/;
		// if (!sqq.test($('#qq').val()) || $('#qq').val().length < 5 || $('#qq').val().length > 12) {
		// 	$('#qq').focus().css({
		// 		border: "1px solid red",
		// 		boxShadow: "0 0 2px red"
		// 	});
		// 	$('#userCue').html("<font color='red'><b>×QQ号码格式不正确</b></font>");return false;
		// } else {
		// 	$('#qq').css({
		// 		border: "1px solid #D7D7D7",
		// 		boxShadow: "none"
		// 	});
			
		// }

		if ($('#passwd').val().length < pwdmin) {
			$('#passwd').focus();
			$('#userCue').html("<font color='red'><b>×密码不能小于" + pwdmin + "位</b></font>");
			return false;
		}
		if ($('#passwd2').val() != $('#passwd').val()) {
			$('#passwd2').focus();
			$('#userCue').html("<font color='red'><b>×两次密码不一致！</b></font>");
			return false;
		}

		

		$('#regUser').submit();
	});

	$('#log').click(function() {

		if ($('#u').val() == "") {
			$('#u').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
	
			return false;
		}
		if ($('#p').val() == "") {
			$('#p').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
	
			return false;
		}
		

		// $('#login_form').submit();
	});
	

});

$(function (){
			//获取手机验证码
			$("#j_getVerifyCode").on("click",getVerifyCode({
				callBack: function (){//按钮点击后的回调函数，--必须--
					//在这里你还是可以对你的按钮进行操作
					console.log(this);
					alert("验证码发送成功");
				},
				time: 30,//定时时间，以秒为单位，默认60秒
				isPhone: true,//是否为发送手机验证码，如果是则会验证手机号格式，--必须--
				getPhone: function (){//获取手机号，此处一定要return
					return $("#user").val();
				},
				//phoneReg: /^1[34578]\d{9}$/,//手机号验证正则
				phoneCallBack: function (){//当手机号有误时的回调，默认会中止操作
					alert("您输入的手机号有误");
				},
				unabledClass: "unlabed"//按钮不能用的样式，即点击按钮后的样式
			}));


			//获取普通验证码
			$("#j_timekeeping").on("click",getVerifyCode({
				callBack: function (){//按钮点击后的回调函数，--必须--
					//在这里你还是可以对你的按钮进行操作
					console.log(this);
					alert("验证码发送成功");
				},
				time: 20,//定时时间，以秒为单位
				unabledClass: "unlabed"//按钮不能用的样式，即点击按钮后的样式
			}));
		});