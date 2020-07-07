//class的实质是一个function
class Person {
	constructor(name) {
		this.name = name
	}
}
// console.log(Person instanceof Function);//true

// 1.组合继承:将子类的原型指向父类,就可以直接继承父类的方法和属性
function Father(name) {
	this.name = name
}
Father.prototype.getName = function () {
	return this.name
}
//定义子类
function Child(name) {
	//继承父类的属性
	Father.call(this, name)
}
//将子类的原型指向父类的实例,继承父类的方法
Child.prototype = new Father();
const c = new Child('张三');
console.log(c.name)//张三
console.log(c.getName())//张三
console.log(c instanceof Father)//true


// 2. class继承实现
class CFather{
	constructor(name){
		this.name = name
	}

	getName(){
		return this.name
	}
}

//通过extends实现继承,通过super继承父类中的方法
class CChild extends CFather{
	constructor(name){
		//继承父类中的属性和方法
		super(name)
	}
}

const cchild = new CChild('王富贵');
console.log(cchild.name);//王富贵
console.log(cchild.getName());//王富贵
console.log(cchild instanceof CFather);//true

