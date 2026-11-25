// Bất đồng bộ trong js
// console.log(1);
// setTimeout(()=>{
//     console.log(2);    
// },300)
// setTimeout(()=>{
//     console.log(3);    
// },100)
// setTimeout(()=>{
//     console.log(5);    
// },500)
// Xử lý bất đồng bộ 
// 1. Sử dụng callback lồng nhau
// console.log(1);
// setTimeout(()=>{
//     console.log(2); 
//         setTimeout(()=>{
//         console.log(3); 
//         setTimeout(()=>{
//             console.log(5);    
//         },500)   
//     },100)   
// },300)
// 2. Sử dụng promise
// cú pháp
// const promise = new Promise((resolve,reject)=>{
//     // resolve nếu tác hoàn thành không gặp vấn đề gì
//     // reject nếu xảy ra lỗi
// })
// Xử lý promise 
// then : nếu promise resolve
// catch: nếu promise reject 
const timeout = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(1)
    },500)
})
timeout.then(value=>{
    console.log(value);
    return new Promise((res,rej)=>setTimeout(()=>res(2),100))    
}).then(value=>console.log(value)
)