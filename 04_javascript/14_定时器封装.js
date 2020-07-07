/*
用js封装一个定时器
timer:json对象
{
	count:定时器次数
	action:回调函数
	interval:时间间隔
}
*/
function Timer(timer){
    this.loop = function(){
        //如果指定了定时器执行次数则处理次数控制逻辑
	    if (timer.count){	
	        //在timer对象上通过晚绑定一个属性用于充当计数器作用
		    if (!timer.value){
		        //如果这个属性不存在则进行晚绑定,并设置初始值为0
			    timer.value=0;
		    }
		    timer.value++;
		    //如果执行次数大于了总次数则退出该函数,不再递归执行
		    if (timer.value>timer.count){		    
			    return;
		    }
	    }
	    //如果指定了回调函数则执行回调函数
	    if (timer.action){
		    timer.action(timer.value?timer.value:"");
	    }
	    //递归调用当前匿名函数(arguments对象的callee属性,取得当前函数对象,实现函数匿名引用)
	    window.setTimeout(arguments.callee,timer.interval);
	    //arguments.callee:指向拥有这个 arguments 对象的函数
    };
    //开始执行定时器的方法
    this.start=function(){
        window.setTimeout(this.loop,timer.interval);
    };
}
