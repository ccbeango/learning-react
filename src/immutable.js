const imjs = require('immutable');

// 1.定义JavaScript的Array和转换成immutable的List
const friends = [
  { name: "why", age: 18 },
  { name: "kobe", age: 30 }
]

// 不会进行深层转换
const imArray1 = imjs.List(friends);
// 会进行深层转换
const imArray2 = imjs.fromJS(friends);
console.log(imArray1);
console.log(imArray2);


// 2.定义JavaScript的Object和转换成immutable的Map
const info = {
  name: "coderwhy",
  age: 18,
  friend: {
    name: "kobe",
    age: 30
  }
}

const imObj1 = imjs.Map(info);
const imObj2 = imjs.fromJS(info);
console.log(imObj1);
console.log(imObj2);

// 3.对immutable操作
// 3.1.添加数据
// 产生一个新的immutable对象
console.log(imArray1.push("aaaa"));
console.log(imArray1.set(2, "aaaa"));
// 原来的是不变的
console.log(imArray1);

// 3.2.修改数据
console.log(imArray1.set(1, "aaaa"));
console.log(imArray2.set(2, imjs.fromJS("bbbb")));

// 3.3.删除数据
console.log(imArray1.delete(0).get(0)); // {name: "kobe", age: 30}

// 3.4.查询数据
console.log(imArray1.get(1));
console.log(imArray2.get(1));
console.log(imArray1.get(1).name);
console.log(imArray2.getIn([1, "name"]));

// 4.转换成JavaScript对象
const array = imArray1.toJS();
const obj = imObj1.toJS();
console.log(array);
console.log(obj);
