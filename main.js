//DOM document object model
// Truy cập phần tử trên DOM
// document.getElementById('id_phần_tử_cần_tìm') =>1 đối tượng cần tìm 
// document.getElementsByClassName('tên_class_cần_tìm')=>danh sách phần tử
// document.getElementsByTagName('Tên_thẻ') => danh sách các phần tử
// document.getElementsByName('Giá_tri_của_attribute_name') => Danh sách các phần tử
// const content = document.getElementById('content')
// console.log(content);
// const item = document.getElementsByClassName('item')
// console.log(item);
// const span = document.getElementsByTagName('span')
// console.log(span);
// const address = document.getElementsByName('address')
// console.log(address);

//querySelector & querySelectorAll: Về mặt cú pháp thì giống nhau
// 1. Truy cập theo id ('#id')
// 2. Truy cập theo class ('.tên_class')
// 3. Truy cập theo tag name ('tên_tag')
// 4. Truy cập theo attribute ('[tên_attb = giá_trị]')
// querySelector => trả về 1 đối tượng
// querySelectorAll => trả về danh sách phần tử
// const content2 = document.querySelector('#content')
// console.log(content2);
// const item2 = document.querySelector('.item')
// console.log(item2);
// const item3 = document.querySelectorAll('.item')
// console.log(item3);
// const span2 = document.querySelectorAll('span')
// console.log(span2);
// const address2 = document.querySelectorAll('[name = address]')
// console.log(address2);
// const item4 = document.querySelectorAll('span.item')
// console.log(item4);
// Truy cập thông qua 1 phần tử khác
// const item = document.querySelector('span.item')
// console.log(item);
// console.dir(item)
// // - phần tử trước nó
// const prev = item.previousElementSibling
// //Phần tử sau nó:
// const next = item.nextElementSibling
// // Phần tử cha
// const parent = item.parentNode
// // Phần tử con
// const children = item.children
// Tạo mới phần tử html
// document.createElement('Tên_thẻ')
// VD: tạo 1 thẻ a sau đó gắn link và text cho nó
// const aElm = document.createElement('a')
// aElm.href ="https://ngocnv.top"
// aElm.innerText = "CLick HERE!"
// // console.dir(aElm)
// // Chèn vào DOM
// // 1. TÌm thành phần cha của thẻ muốn tìm 
// // 2. Cú pháp chèn:
// //     - Chèn làm phần tử đầu tiên: parent.prepend(thẻ_muốn_chèn)
// //     - Chèn làm phần tử cuối cùng: parent.append(thẻ_muốn_chèn)
// // VD: Chèn thẻ a bên trên vào div có id là content 
// const content = document.getElementById('content')
// content.append(aElm)
// // Bắt sự kiện trên DOM thông qua phương thức addEventListener
// // VD: Bắt sự kiện click của button trên DOM 
// const button = document.getElementById('event')
// console.dir(button)
// button.addEventListener('click',()=>alert('Bạn vừa click'))
// button.addEventListener('mouseenter',()=>console.log('Bạn vừa di chuột vào'))
// button.addEventListener('mouseleave',()=>console.log('Bạn vừa di chuột ra'))
// setTimeout(()=>{
//     console.log(1);    
// },500)
// setTimeout(()=>{
//     console.log(2);    
// },20)
// setTimeout(()=>{
//     console.log(3);    
// },60)
// setTimeout(()=>{
//     console.log(4);    
// },30)
// setTimeout(()=>{
//     console.log(5);    
// },100)
// Các cách xử lý bất đồng bộ
// Sử dụng hàm callback
// setTimeout(()=>{
//     console.log(1); 
//     setTimeout(()=>{
//         console.log(2);    
//         setTimeout(()=>{
//             console.log(3);    
//             setTimeout(()=>{
//                 console.log(4);   
//                 setTimeout(()=>{
//                     console.log(5);    
//                 },100) 
//             },30)
//         },60)
//     },20)   
// },500)
// => Callback Hell
// Promise (ES6)
// const promise = new Promise((resolve,reject)=>{
//     // resolve nếu sự kiện hoàn thành k gặp vấn đề gì 
//     // reject nếu lỗi gì đó 
// })
// sử dụng then nếu resolve
// sử dụng catch nếu reject 
// const data = fetch('https://dummyjson.com/products')
// console.log(data);
// data.then((response)=>{
//     console.log(response);   
//     const products = response.json()
//     // console.log(products);
//     products.then(pro=>{
//         console.log(pro);        
//     })
// })
// ES7: Sử dụng hàm bất đồng bộ Async/await
// - CÚ pháp :
// async function tenham(){

// }
const get_all_product = async()=>{
    try {
        const data = await fetch('https://dummyjson.com/products')   
        const products = await data.json() 
        console.log(products);        
    } catch (error) {
        console.log(error);        
    }       
}
get_all_product()