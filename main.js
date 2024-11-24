//DOM document object model
// document.getElementById('tên_id_cần_tìm') => 1 đối tượng 
// const content = document.getElementById('content')
// console.log(content);
// // document.getElementsByClassName('Tên_class_cần_tìm')=> danh sách các đối tượng
// const item = document.getElementsByClassName('item')
// console.log(item);
// // document.getElementsByTagName('Tên_thẻ_cần_tìm') => danh sách các đối tượng
// const span = document.getElementsByTagName('span')
// console.log(span);
// // document.getElementsByNam('giá_trị_của_attribute_name')=>danh sách đối tượng
// const address = document.getElementsByName('address')
// console.log(address);
// // --------------------------------------
// // querySelector & querySelectorAll: cú pháp thì giống nhau
// //  - truy cập theo id: ('#id_cần_tìm')
// //  - truy cập theo class: ('.class_cần_tìm')
// // - truy cập theo tên thẻ: ('Tên_thẻ_cần_tìm')
// // truy cập theo attribute: ('[tên_attr=giá_trị]')
// const content2 = document.querySelector('#content')
// const item2 = document.querySelectorAll('.item')
// const span2 = document.querySelectorAll('span')
// const address2 = document.querySelectorAll('[name="address"]')
// // Kết hợp truy cập theo cả phần tử cha, con, tên thẻ, id,class ...
// // const span3 = document.querySelector('div#content span.item')
// // Lưu ý:
// // querySelector =>trả về 1 đối tượng đầu tiên mà nó tìm thấy 
// // querySelectorAll => trả về danh sách các đối tượng 
// // Tìm thông qua 1 đối tượng khác 
// const sp3 = document.querySelector('div#content span.item')
// // console.log(sp3);
// console.dir(sp3)
// // phần tử sau nó\
// const next = sp3.nextElementSibling
// // phần tử cha
// const parent = sp3.parentNode
// // phần tử trước nó
// const prev = sp3.previousElementSibling
// console.log(prev);
// //phần tử con
// const children = sp3.children

// Tạo ra 1 đối tượng mới
// document.createElement('Tên_thẻ_muốn_tạo')
// Tạo ra 1 đối tượng liên kết (thẻ a) sau đó đặt nội dung trong thẻ và gắn link cho nó 
// {/* <a href="https://ngocnv.top">Click here!</a> */}
// const atag = document.createElement('a')
// console.dir(atag);
// atag.href = "https://ngocnv.top"
// // atag.innerHTML = "Click here!"
// atag.innerHTML = `<img src="https://www.transparentpng.com/thumb/click-here-button/VbnO5J-click-here-button-free-transparent-png.png"/>`
// // --/ Chèn nó vào làm phần tử con của div có id là content
// const content = document.getElementById('content')
// // - chèn vào làm phần tử con đầu tiên : prepend('thẻ_cần_chèn')
// // - chèn vào làm phần tử con cuối cùng : append('thẻ_cần_chèn')
// content.append(atag)
// // Bắt sự kiện trên DOM thông qua phương thức addEventListener('Tên_sự_kiện',hàm_callback)
// // sự kiện hay gặp:
// //  - click 
// //  - mouseenter
// //  - mouseleave
// //  - submit 
// // VD: bắt sự kiện click của nút "check sự kiện" trên DOM 
// // - truy cập nút check sự kiện
// const button = document.getElementById('event')
// button.addEventListener('click',()=>console.log(`Bạn vừa click!`))
// button.addEventListener('mouseenter',()=>console.log(`Bạn vừa di chuột vào!`))
// button.addEventListener('mouseleave',()=>console.log(`Bạn vừa di chuột ra!`))
// setTimeout(()=>{
//     console.log(1);    
//     },60
// )
// setTimeout(()=>{
//     console.log(2);    
//     },500
// )
// setTimeout(()=>{
//     console.log(3);    
//     },20
// )
// setTimeout(()=>{
//     console.log(4);    
//     },100
// )
// setTimeout(()=>{
//     console.log(5);    
//     },50
// )
// các cách xử lý bất đồng bộ 
// - Callback 
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
//                     },50
//                 )   
//                 },100
//             )  
//             },20
//         )  
//         },500
//     )   
//     },60
// )
// =>Callback hell
// ES6: Promise 
 
// -pendding
// -fulfilled
// -rejected
// const promise = new Promise((resolve,reject)=>{
//     // resolve nếu hoàn thành, không gặp lỗi 
//     // reject nếu lỗi
// })
// sử dụng then nếu promise resolve 
// sử dụng catch nếu promise reject 
// const promise = new Promise((resolve,reject)=>{
//     const login = false
//     if (login){
//         resolve('Đăng nhập thành công')
//     }
//     else reject('Sai thông tin')
// })
// // promise.then((value)=>{
// //     console.log(value);    
// // })
// promise.catch((err)=>{
//     console.log(err);    
// })
// const data = fetch('https://dummyjson.com/products')
// console.log(data);
// data.then(response =>{
//     console.log(response);    // Response
//     // chuyển Response sang Json 
//     const products = response.json()  // promise
//     return products   
// }).then(products=>{
//     console.log(products);    
// })
// ES7 (ECMA 2016) Hàm bất đồng bộ async/await
// -cú pháp: thêm async vào trước function đối với hàm thông thường
// đối với arrow function thì thêm vào trước dấu khai báo tham số 
// thêm await vào trước promise 
const get_all_products = async ()=>{
    const data = await fetch('https://dummyjson.com/products')
    console.log(data); 
     // chuyển Response sang Json 
    const products = await data.json()    // promise
    console.log(products);    
}
get_all_products()