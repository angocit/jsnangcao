// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//             setTimeout(() => {
//                 console.log(4);
//             }, 1)
//         }, 2)
//     }, 5)
// }, 10)

// 3 cách
// 1- Callback lồng nhau => Callback hell
// - 2. Promise // Có từ bản ES6 ECMA 2015

// const promise = new Promise((resolve,reject)=>{
//         /// Làm gì đó
//         // nếu: 
//         // - Thành công 
//         // resolve(value)   giá trị

//         // - Thất bại  reject(err)
// })

// Với VD timeout bên trên 
// const timeout = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(1)
//     }, 1000)
// })
// timeout.then((value)=>{
//     console.log(value);    
//     return new Promise((resolve,rej)=>{
//         setTimeout(() => {
//             resolve(2)
//         }, 500)
//     })
// }).then((value)=>{
//     console.log(value);   
//      return new Promise((resolve,rej)=>{
//         setTimeout(() => {
//             resolve(3)
//         }, 600)
//     }) 
// }).then((value)=>{
//     console.log(value); 
//     return new Promise((resolve,rej)=>{
//         rej("Lỗi")
//     })   
// }).catch(err=>console.log(err))

// const data = fetch("https://fakestoreapi.com/products")
// // console.log(data);
// data.then(value=>{
//     console.log(value);   
//     const json = value.json()
//     return json    
// }).then(value=>{
//     console.log(value);    
// })

// Hàm bất đồng bộ 
// Cú pháp: 
// Với hàm Declaration 
// async function tenham (){
//     // await promise 
// }
// Arrow function
// const tenham = async ()=>{
//     await promise 
// }
// const GetAllProduct = async()=>{
//     try {
//     const response = await fetch("https://fakestoreapi.com/products")
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log(error);        
//     }
// }
// GetAllProduct()
// const Login = async ()=>{
//     const user =  { username: 'john_doe', password: 'pass123' }
//     try {
//         const response = await fetch("https://fakestoreapi.com/auth/login",{
//             method:'POST',
//             body:JSON.stringify(user),
//             headers: {'Content-type':'Application/json'}
//         })
//         const data=await response.json()
//         console.log(data);        
//     } catch (error) {
//         console.log('Lỗi',error);        
//     }
// }
// Login() // Promise reject 
const GetAllProduct = async()=>{
    try {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    console.log(data);
    // Truy cập vào DOM
    const productElm = document.querySelector(".listproduct")
    // Duyệt mảng
    data.forEach(({title,image,price})=>{
        // Tạo item div
        const div = document.createElement('div')
        div.innerHTML=`
            <img src="${image}"/>
            <h3>${title}</h3>
            <span>${price}</span>
        `
        // Chèn vào DOM
        productElm.appendChild(div)
    })
    } catch (error) {
        console.log(error);        
    }
}
GetAllProduct()