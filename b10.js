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
// const timeout = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(1)
//     },500)
// })
// timeout.then(value=>{
//     console.log(value);
//     return new Promise((res,rej)=>setTimeout(()=>res(2),100))    
// }).then(value=>console.log(value)
// )
// Ví dụ: Sử dụng fetch để call API sau: https://picsum.photos/v2/list
const promiseImage = fetch("https://picsum.photos/v2/list")
console.log(promiseImage);
promiseImage.then(value=>{
    console.log(value);
    // value là response => chuyển sang json
    const data = value.json()
    // console.log(data);
    data.then(value=>{
        console.log(value);      
        const pic = new Picture(value)
        pic.render()  
    })        
})
// Tạo class có phương thức render để hiển thị ra màn hình các hình ảnh được trả về khi CALL API https://picsum.photos/v2/list
class Picture{
    constructor(pictures){
        this.pictures = pictures
    }
    render(){
        const pic = document.getElementById("pictures")
        // DUyệt mảng pictures
        this.pictures.forEach(item=>{
            // Tạo thẻ img
            const img = document.createElement("img")
            img.src= item.download_url
            img.setAttribute("width",90)
            pic.append(img)
        })
    }
}