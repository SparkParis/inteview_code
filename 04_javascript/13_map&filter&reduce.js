//map()
var arrMap = [1,2,3].map(v=>v*v)
console.log(arrMap)//[1,4,9]

var arrMap1 = [1,2,3].map(parseInt)
console.log(arrMap1)//[1,NaN,NaN]

//filter
var arrFilter = [1,4,6].filter(function(index) {
	return index>4;
});
console.log(arrFilter)//[6]

//reduce用于累加求和,第三个参数表示acc的初始值
var arrSum = [3,4,6,7].reduce((acc,cur)=>acc+=cur,0)
console.log(arrSum)//20

var arrSum1 = [3,6,7,9].reduce((acc,cur)=>{
	acc.push(cur);
	return acc
},[])
console.log(arrSum1)//[3,6,7,9]是数组的拷贝