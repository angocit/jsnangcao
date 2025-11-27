// Xử lý bất đồng bộ
// setTimeout(()=>{
// console.log(1);
// },100)
// setTimeout(()=>{
// console.log(2);
// },1000)
// setTimeout(()=>{
// console.log(3);
// },50)

// Trước 2015 trước bản ES6 
// - sử dụng hàm callback 
// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//         }, 50)
//     }, 1000)
// }, 100)
// => Callback hell
// => Promise 
// cú pháp :
// const promise = new Promise((resolve,reject)=>{
//     // todo => kết quả của todo sẽ là resolve hoặc reject
// })
// Để xử lý kết quả của promise
// - nếu promise resolve => thì sử dụng then 
// - nếu promise reject => thì sử dụng catch
// VD : với th timeout bên trên 
// const timeoutpromise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(1);
//     }, 1000)
// })
// timeoutpromise.then((value)=>{
//     console.log(value);
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         resolve(2);
//     }, 500)
//     })    
// }).then(value=>{
//     console.log(value);   
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         resolve(3);
//     }, 100)
//     })   
// }).then(value=>
//     console.log(value)    
// )
// ES7 (ECMA2016) => hàm bất đồng bộ async/await
// Cú pháp:
// - Đối hàm Declaration
// async function tenham(){
//     // await promise 
// }
// Arrow function
// const tenham = async()=>{
//     await promise 
// }
// Ví dụ: Call API lấy danh sách sản phẩm từ API sau: https://fakestoreapi.com/products
// làm theo 2 cách 