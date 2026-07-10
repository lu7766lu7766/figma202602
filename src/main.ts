// console.log('Vite + TypeScript environment loaded successfully!');

// const testButton = document.querySelector('button');
// if (testButton) {
//   testButton.addEventListener('click', () => {
//     console.log('Button clicked!');
//   });
// }
// console.log("hello world!!")

// "麻煩了"
// 654322
// true
// false
// let a = {
//   name: "Jac",
//   age: 20,
//   height: 170,
//   eat() {},
// }
// let arr = [1, 2, 3]
// let b = [1, "a", true, a, arr]
// console.log(b[1])
// null
// undefined
let a = 10
let b = 20

// let a = 10
// let b = 20
// let c = a
// a = b
// b = c
// console.log(a, b)

// > < == != >= <=
// if (a > b) {
//   // console.lo g("a is bigger")
//   console.log("a不等於b")
// } else {
//   // console.log("b is bigger")
//   console.log("a等於b")
// }

// 寫一個year變數，判斷該年份是否為閏年
// let year = 2026
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("是閏年")
// } else {
//   console.log("不是閏年")
// }
// 寫三個變數x,y,z代表三角形三個邊長，判斷這三個邊長能否成為三角形
// let x = 10
// let y = 15
// let z = 20
// if (x + y > z && x + z > y && y + z > x) {
//   console.log("可以構成三角形")
// } else {
//   console.log("不能構成三角形")
// }
// i = i + 1

// console.log("loop start")
// let sum = 0
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i
//   // console.log(l)
// }
// console.log("loop end", sum)

// let method = function() { }
// let callA = (a: string) => {
//   console.log(a + " A")
// }
// callA("hello")
// let add = (a: number, b: number) => {
//   // console.log(a + b)
//   return a + b
// }
// let aplusb = add(10, 20)
// console.log(aplusb)
// markdown
// let compareAB = (a: number, b: number) => {
//   // if (a > b) {
//   //   return a
//   // } else {
//   //   return b
//   // }
//   return a > b ? a : b
// }
// console.log(compareAB(8, 9))
let countBMI = (height: number, weight: number) => {
  return weight / (height * height)
}
console.log(countBMI(1.73, 80))
