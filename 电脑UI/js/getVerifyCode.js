function getVerifyCode(options) {
	return function() {
		clearInterval(timer);
		if(!(options && options.callBack)) {
			throw new Error("必须传递参数及回调函数");
		}
		var that = $(this);
		if(options.isPhone){
			var phone = options.getPhone(),
				reg = options.phoneReg || /^1[3|4|5|7|8][0-9]\d{8}$/;
			if(!reg.test(phone)) {
				//如果手机号码不正确，则执行手机号码对应的回调函数
				options.phoneCallBack && options.phoneCallBack.call(that,phone);
				return;
			}
		}
		
		var timer = null,
			time = options.time ||60,
			unabledClass = options.unabledClass || "";
		that.off("click");
		that.addClass(unabledClass);
		timer = setInterval(function() {
			//避免重复发送
			if(time <= 0) {
				clearInterval(timer);
				time = 60;
				that.html("重新获取").removeClass(unabledClass);
				that.on("click", getVerifyCode(options));
			} else {
				time--;
				that.html(time + "秒后重新获取");
			}
		}, 1000);
		//执行回调函数
		options.callBack.call(that);
	}
}