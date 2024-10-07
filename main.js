// 1 số các cách truy cập vào phần tử trong DOM
// - document.getElementById   => Trả 1 đối tượng 
// - document.getElementsByClassName => trả về list đối tương 
// - document.getElementsByTagName  => trả về list đối tượng 
// - document.getElementsByName => trả về list đối tượng

// - document.querySelector         => 1 đối tương 
// - document.querySelectorAll      => trả về list đối tượng 
// const addproduct = document.getElementById('addproduct')
// console.log(addproduct);
// const items = document.getElementsByClassName('item')
// const span = document.getElementsByTagName('span')
// console.log(span);
// const address = document.getElementsByName('address')
// console.log(address);

// // querySelector & querySelectorAll
// // Về mặt cú pháp thì querySelector và querySelectorAll có cú pháp như nhau chỉ
// // khác querySelector trả về 1 đối tượng đầu tiên, querySelectorAll trả về danh sách
// // lấy theo id
// const addproduct2 = document.querySelector('#addproduct')
// console.log(addproduct2);
// // lấy theo class
// const items2 = document.querySelectorAll('.item')
// console.log(items2);

// // Lấy theo tag name 
// const span2 = document.querySelectorAll('span')
// console.log(span2);
// // lấy theo attribute 
// const address2 = document.querySelectorAll('[name = address]')
// console.log(address2);
// const data = document.querySelector('[data-id="1"]')
// console.log(data);
// // Truy cập phần tử thông qua các thuộc tính của phần tử khác
// // console.dir() cú pháp thần thánh 
// console.dir(data)
// //phần tử sau nó
// const btnsubmit = data.nextElementSibling
// console.log(btnsubmit);
// // phần tử trước nó\
// const input2 = data.previousElementSibling
// console.log(input2);
// // Phần tử cha
// const parent = data.parentElement
// console.dir(parent);
// // phần tử con 
// const children = parent.children
// console.log(children);
// // Một số tương tác DOM thường gặp
// // 1. Tạo mới 1 element và chèn nó vào 1 node nào đó
// // - Tạo mới
// const newElm = document.createElement('a')
// console.dir(newElm)

// newElm.innerText ='Click đây đi, hay lắm'
// newElm.href = 'https://ngocnv.top'
// // CHèn vào 1 node nào đó. VD: node parent bên trên 
// // 1. chèn nó làm phần tử cuối cùng 
// parent.append(newElm)
// // 2 Chèn nó làm phần tử đầu tiên
// parent.prepend(newElm)
//  Chèn các element vào node nào đó. VD chèn 1 ND html vào parent bên trên
// parent.innerHTML =`
// <strong>Xin chào</strong>
// <img src="https://media.istockphoto.com/id/2004010477/photo/blur-of-abstract-green-garden-and-flower-background-from-window-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=WYARh1F6YtjNDEYEriUqzp53Lg7-mDHYOM0eey7CSew="/>
// `
// Bắt sự kiện trên DOM => sử dụng addEventListener
// VD: khi click vào nút submit thì thực hiện hành động nào đó 
// - truy cập vào nút submit 
// const button = document.querySelector('button')
// // lắng nghe sự kiện
// //ktra có những sự kiện gì đối với button => console.dir
// console.dir(button)
// button.addEventListener('click',()=>{
//     //todo
//     alert('Bạn vừa click')
// })
// button.addEventListener('mouseenter',()=>{
//     //todo
//     console.log('Bạn vừa di chuột vào')
// })
// button.addEventListener('mouseleave',()=>{
//     //todo
//     console.log('Bạn vừa di chuột ra')
// })
// Xử lý bất đồng bộ trong js 
// VD call API và append vào node nào đó 
// call api => 1s 
// append => ngay lập tức 
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
//                     setTimeout(()=>{
//                         console.log(6);    
//                     },100) 
//                 },50)
//             },3000) 
//         },200)
//     },1000)   
// },2000)
// Callback Hell 
// ES6 => Promise để xử lý bất đồng bộ 
// const promise = new Promise((resolve,reject)=>{
//     //todo
//     // resolve(value) nếu không gặp vấn đề gì
//     // reject nếu lỗi
// })
// Tương ứng với resolve và reject chúng ta sẽ sử dụng then hoặc catch để xử lý promise 
// sử dụng then nếu promise resolve
// sử dụng catch để bắt lỗi nếu promise reject 
// VD: Call API 
// https://dummyjson.com/products
// const data = fetch('https://dummyjson.com/products')
// console.log(data);
// data.then(value=>{
//     console.log(value);  // Trả về response => cần chuyển json
//     const product = value.json()
//     console.log(product); 
//     product.then(value=>{
//         console.log(value);        
//     })
// })
// TH trả về là reject 
// const data = fetch('https://abcsdfsadfasdf.com/products')
// // console.log(data);
// data.catch(value=>{
//     console.log('Lỗi',value);    
// })
// ES8=> sử dụng hàm bất đồng bộ async/await để xử lý promise
// Cú pháp : như hàm thông thường nhưng thêm async vào trước function hoặc async vào trước
// dấu khai báo tham số của hàm arrow function 
// - Cần thêm await vào trước promise
// VD:
async function getProduct(){
   try {
    const data = await fetch('https://dummyjson.com/products')
    console.log(data); // Trả về response => cần chuyển json
    const product = await data.json()
    console.log(product);  
   } catch (error) {
    console.log(error);    
   }     
}
getProduct()
// với Arrow function 
const getProduct2= async ()=>{
    try {
     const data = await fetch('https://dummyjson.com/products')
     console.log(data); // Trả về response => cần chuyển json
     const product = await data.json()
     console.log(product);  
    } catch (error) {
     console.log(error);    
    }     
 }
 getProduct2()