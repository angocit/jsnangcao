//DOM document object model
// document.getElementById('tên_id_cần_tìm') => 1 đối tượng
// const content = document.getElementById('content')
// console.log(content);
// // document.getElementsByClassName('tên_class_cần_tìm') => Danh sách đối tượng
// const item = document.getElementsByClassName('item')
// console.log(item);
// // document.getElementsByTagName('tên_thẻ_cần_tìm') => Danh sách đối tượng 
// const span = document.getElementsByTagName('span')
// console.log(span);
// // document.getElementsByName('giá_trị_của_attribute_name')=> Danh sách đối tượng
// const address = document.getElementsByName('address')
// console.log(address);
// // querySelector & querySelectorAll : cú pháp giống nhau 
// // - truy cập theo id ('#id_cần_tìm')
// // - truy cập theo class ('.tên_class_cần_tìm')
// // - truy cập theo tag name ('tên_thẻ_cần_tìm')
// // - truy cập theo attribute ('[tên_attribute=giá_trị]')
// // querySelector: =>1 đối tượng đầu tiên phù hợp với điều kiện tìm kiếm
// // querySelectorAll => danh sách các đối tượng phù hợp điều kiện tìm kiếm
// const content2 = document.querySelector('#content')
// const item2 = document.querySelectorAll('.item')
// const span2 = document.querySelectorAll('span')
// const address2 = document.querySelectorAll('[name=address]')
// // Muốn target đến đối tượng cụ thể thì kết hợp  cha-con , id, class 
// const sp3 = document.querySelector('#content span.item')
// console.dir(sp3);
// Truy cập thông qua đối tượng khác 
// const content = document.getElementById('content')
// console.dir(content)
// // Phần tử con
// const children =  content.children
// // Phần tử con đầu tiên
// const firstchild = content.firstElementChild
// // Phần tử con cuối cùng
// const lastchild = content.lastElementChild
// // phần tử sau nó
// const next = content.nextElementSibling
// // Phần tử cha
// const parent = content.parentElement
// // phần tử trước nó
// const prev = content.previousElementSibling

// Tạo ra 1 đối tượng
// document.createElement('Tên_thẻ_cần_tạo')
// VD: Tạo ra thẻ a sau đó gắn link và nội dung text bên trong thẻ 
{/* <a href="Linklienkjet">Text </a> */}
// const atag = document.createElement('a')
// atag.href = "https://ngocnv.top"
// atag.innerHTML = "Click here!"
// console.dir(atag);
// // Chèn vào trong DOM
// // - Truy cập đến đối tượng sẽ chèn 
// // - chèn vào làm phần tử con đầu tiên: prepend(đối_tượng_cần_chèn)
// // - chèn vào làm phần tử con cuối: append(đối_tượng_cần_chèn)
// // VD: chèn thẻ a vừa tạo bên trên vào div có id là content 
// const content = document.getElementById('content')
// // content.prepend(atag)
// content.append(atag)

// // Bắt sự kiện qua phương thức addEventListener('tên_sự_kiện',hàm_callback)
// // - click 
// // - submit 
// // - mouseenter
// // - mouseleave
// // VD: Bắt sự kiện click khi click vào nút "check sự kiện"
// const button = document.getElementById('event')
// button.addEventListener('click',()=>console.log(`Bạn vừa click`))
// button.addEventListener('mouseenter',()=>console.log(`Bạn vừa di chuột vào`))
// button.addEventListener('mouseleave',()=>console.log(`Bạn vừa di chuột ra`))

// Xử lý bất đồng bộ trong js

// setTimeout(()=>{
//     console.log(1);    
// },500)
// setTimeout(()=>{
//     console.log(2);    
// },1000)
// setTimeout(()=>{
//     console.log(3);    
// },100)
// setTimeout(()=>{
//     console.log(4);    
// },20)
// setTimeout(()=>{
//     console.log(5);    
// },50)
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
//                 },50)  
//             },20)
//         },100)
//     },1000)  
// },500)
// =>Callback hell 
// ES6 (ECMA 2015) => Promise 
// pending
// fulfilled
// rejected
// const promise = new Promise((resolve,reject)=>{
//     resolve nếu promise hoàn thành 
//     reject nếu không hoàn thành (lỗi)
// })
// sử dụng then nếu promise resolve 
// sử dụng catch nếu promise reject 
// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//     },500)
// })
// promise.then(value=>{
//     console.log(value);
//     return new Promise((rel,rej)=>{
//         setTimeout(()=>{
//             rel(2)   
//         },1000)
//     })    
// }).then(value=>{
//     console.log(value)
//     return new Promise((rel,rej)=>{
//         setTimeout(()=>{
//             rel(3)   
//         },100)
//     }) 
// }
// ).then(value=>{
//     console.log(value)
//     return new Promise((rel,rej)=>{
//         setTimeout(()=>{
//             rel(4)   
//         },20)
//     }) 
// }).then(value=>console.log(value))

// const login = false 
// const promise = new Promise((resolve,reject)=>{
//     if (login) resolve('Đăng nhập thành công')
//     else reject('Đăng nhập thất bại. Từ chối')
// })
// console.log(promise);
// // promise.then(value=>console.log(value))
// promise.catch(err=>console.log(err))

const data = fetch('https://dummyjson.com/products')
console.log(data);
data.then(response=>{
    console.log(response); // Response
    // Chuyển Response sang json
    const products = response.json() // Promise
    console.log(products);
    products.then(value =>{
        console.log(value);        
    })
})
// ES7 => dùng hàm bất đồng bộ async/await 
// cú pháp:
// - thêm async vào trước function đối với hàm thông thường
// - hàm arrow function thêm async vào trước dấu khai báo tham số
// bên trong hàm: thêm await vào trước promise 
// VD:
const get_all_products = async()=>{
    const data = await fetch('https://dummyjson.com/products')
    console.log('async/await',data);
    const products = await data.json() // Promise
    console.log(products);    
}
get_all_products()