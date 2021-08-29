function compose(...funcs) {
  if (funcs.length === 0) {
    return funcs => funcs;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  const composeFunc = funcs.reduce((a, b) => {
    return (...args) => {
      return a(b(...args))
    }
  })

  return composeFunc;
}


const test1 = (next) => {
  console.log('test1')
  return (data) => {
    console.log('1')
    return next(data)
  }
}

const test2 = (next) => {
  console.log('test2')
  return (data) => {
    console.log('2')
    return next(data)
  }
}

const test3 = (next) => {
  console.log('test3')
  return (data) => {
    console.log('3')
    return next(data)
  }
}

const test4 = (next) => {
  console.log('test4')
  return (data) => {
    console.log('4')
    next(data);
  }
}

// test1(test2(test3(test4())))
const composeFunc = compose(test1, test2, test3, test4);

const chain = composeFunc((data) => { console.log('hello world', data) });
chain({ data: 'data' });

// 输出
// test4
// test3
// test2
// test1
// 1
// 2
// 3
// 4
// hello world

// console.log('----------------------------')
// // 形成发chain如下
// const manulChain = () => {
//   console.log('1');
//   return (() => { // test1的next
//     console.log('2');
//     return (() => { // test2的next
//       console.log('3');
//       return (() => { // test3的next
//         console.log('4');
//         return (() => { // test4的next 即 要增强的函数
//           console.log('hello world~~~')
//         })()
//       })()
//     })()
//   })()
// }
// manulChain();



// // function f
// const f = (arg) => `函数f(${arg})` 

// // function g
// const g = (arg) => `函数g(${arg})`

// // function h 最后一个函数可以接受多个参数
// const h = (...arg) => `函数h(${arg.join('_')})`

// const r = compose(f, g, h)

// console.log(typeof r) // function

// console.log(r(1,2,3)) //函数f(函数g(函数h(1_2_3)))

// console.log(((arg) => `函数f(${arg})`)(
//   ((arg) => `函数g(${arg})`)(
//     ((...arg) => `函数h(${arg.join('_')})`)(1,2,3)
//   )
// ))
