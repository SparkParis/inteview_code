reflect是ES6中新添加的方法,用于拦截javascript操作
新老写法的对比
console.log('assign' in Object);//true
console.log(Reflect.has(Object,'assign'));//true

/*
这里的Function.prototype.apply.call(a,b,arg)==b.a(args)
*/
Function.prototype.apply.call(Math.floor,undefined,[1.75])//1
Reflect.apply(Math.floor,undefined,[1.75])//1

//删除
delete obj.foo;
Reflect.deleteProperty(obj,'foo')

//new
const p = new Object('张三')
const p1 = Reflect.constructor(Object,	['张三'])//注意参数是一个数组的像是

//重新定于属性,参数3是一个对象(定义或者修改的属性描述符),
Object.defineProperty(myDate,'now',{
	value:()=>Date.now()
})
Reflect.defineProperty(myDate,'now',{
	value:()=>Date.now()
})

const obj = {
	foo:1,
	bar:2,
	get bar(){
		return this.foo+this.bar
	},
	get foo(){
		return this.foo
	}
	
}
var receiveObj = {
	foo:5,
	bar:6,
}
var res = Reflect.get(obj,'bar',receiveObj)//11将bar的get方法的this指向receiveObj
var res = Reflect.get(obj,'foo',receiveObj)//5将bar的get方法的this指向receiveObj

