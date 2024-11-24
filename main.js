//DOM document object model
// document.getElementById('tên_id_cần_tìm') => 1 đối tượng
// const content = document.getElementById('content')
// console.log(content);
// // document.getElementsByClassName('tên_class_cần_tìm') => danh sách đối tượng
// const item = document.getElementsByClassName('item')
// console.log(item);
// // document.getElementsByTagName('Tên_thẻ')=>danh sách phần tử 
// const span = document.getElementsByTagName("span")
// console.log(span);
// // document.getElementsByName("giá_trị_của_attribute_name") =>danh sách các đối tượng
// const address = document.getElementsByName("address")
// console.log(address);
// // ---------------------------------
// // querySelector & querySelectorAll: cú pháp giống nhau
// // - theo id: ('#id_cần_tìm')
// // - theo class: ('.class_cần_tìm')
// // - theo thẻ: ('tên_thẻ')
// // - theo attribute ('[tên_attribute=giá_trị]')
// const content2 = document.querySelector('#content')
// const item2 = document.querySelectorAll('.item')
// const span2 = document.querySelectorAll('span')
// const address2 = document.querySelectorAll('[name=address]')
// // Có thể sử dụng đồng thời cả tên thẻ, tên id, class, cú pháp cha - con
// const sp3 = document.querySelector('#content span.item')
// querySelector =>1 đối tượng đầu tiên
// querySelectorAll =>danh sách các đối tượng phù hợp 
// Truy cập thông qua 1 đối tượng khác
// const content = document.getElementById('content')
// console.dir(content)
// // các phần tử con 
// const children = content.children
// // phần tử con đầu tiên:
// content.firstElementChild
// // phần tử con cuối cùng
// content.lastElementChild
// // phần tử sau nó
// const next = content.nextElementSibling
// // phần tử cha
// const parent = content.parentElement
// // phần tử trước nó 
// const prev = content.previousElementSibling

// Tạo phần tử DOM
// document.createElement('Tên_thẻ_cần_tạo')
// // VD: Tạo thẻ a sau đó đặt link liên kết và nội dung text trong thẻ a 
// const atag = document.createElement('a') 
// atag.href = "https://ngocnv.top"
// atag.innerHTML = "<strong>CLICK HERE!</strong>"
// console.dir(atag)

// // Chèn thẻ vào DOM 
// //   - chèn làm phần tử con đầu tiên: prepend('thẻ_cần_chèn')
// //   - chèn làm phần tử con cuối cùng: append('thẻ_cần_chèn')
// // VD: chèn thẻ a vừa tạo bên trên vào làm phần tử con của đối tượng div có id là content 
// const content = document.getElementById('content')
// content.append(atag)

// // bắt sự kiện thông qua phương thức addEventListener('tên_sự_kiện',hàm_callback)
// // click 
// // submit 
// // mouseenter
// // mouseleave
// // VD: Bắt sự kiện khi click vào nút "Check sự kiện" trên DOM
// // - truy cập đến nút "Check sự kiện"
// const button = document.getElementById('event')
// button.addEventListener('click',()=>console.log('Bạn vừa click'))
// button.addEventListener('mouseenter',()=>console.log('Bạn vừa di chuột vào'))
// button.addEventListener('mouseleave',()=>console.log('Bạn vừa di chuột ra'))
// setTimeout(()=>{
//     console.log(1);    
// },50)
// setTimeout(()=>{
//     console.log(2);    
// },20)
// setTimeout(()=>{
//     console.log(3);    
// },60)
// setTimeout(()=>{
//     console.log(4);    
// },10)
// setTimeout(()=>{
//     console.log(5);    
// },100)
// Các cách xử lý bất đồng bộ
// Callback 
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
//             },10)  
//         },60)   
//     },20)  
// },50)

// Callback Hell 
// ES6 (ECMA 2015) Promise 
// - pending 
// - fulfilled
// - rejected
// const promise = new Promise((resolve,reject)=>{
//     // resolve nếu hoàn thành và không lỗi 
//     // reject nếu lỗi 
// })
// sử dụng then nếu resolve 
// sử dụng catch nếu reject 
// let login = false 
// const promise = new Promise((resolve,reject)=>{
//     if (login) resolve('Đăng nhập thành công')
//     else reject('Đăng nhập thất bại') 
// })
// // console.log(promise);
// // promise.then((value)=>{
// //     console.log('Kết quả:',value);    
// // })
// promise.catch((err)=>{
//     console.log('Kết quả:',err);    
// })
const data = fetch('https://dummyjson.com/products')
console.log('data',data); // promise
data.then(value=>{
    console.log(value);    // Response
    // chuyển sang json 
    const products = value.json()
    // console.log(products);    
    products.then(value=>{
        console.log('Kết quả json',value);        
    })
})
// ES7 (ECMA 2016) hàm bất đồng bộ async/await 
// Khai báo: thêm async vào trước function đối vói hàm thông thường
// - đối với hàm arrow function thì thêm async vào trước dấu khai báo tham số 
// thêm await vào trước promise
const get_all_product = async ()=>{
    try {
        const data = await fetch('https://dummyjson.com/products')
        console.log('hàm bất đồng bộ',data);     // Response
        // chuyển sang json 
        const products = await data.json() // promise
        console.log('kết quả hàm bất đồng bộ',products); 
    } catch (error) {
        console.log(error);        
    }
} 
get_all_product()