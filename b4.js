// Các cách truy cập phần tử trên DOM 
// - getElementById
//    - getElementByClassName
//    - querySelector
//    - querySelectorAll
// Truy cập theo id // Trả về ptu duy nhất
const content = document.getElementById("content")
console.log(content);
// Truy cập theo class// Trả về danh sach
const item = document.getElementsByClassName("item")
console.log(item);
// truy cập theo tên thẻ // Trả về danh sách
const span = document.getElementsByTagName("span")
console.log(span);
// Truy cập theo name // Trả về danh sách
const hoten = document.getElementsByName("hoten")
console.log(hoten);
// querySelector và querySelectorAll => có cú pháp giống nhau 
// Điểm khác:
// -querySelector trả về 1 ptu đầu tiên mà nó tìm thấy
// -querySelectorAll trả về danh sách ptu mà nó tìm thấy
// Ví dụ :
// Tìm theo id
const content2 = document.querySelector("#content")
console.log(content2);
// TÌm theo class
const item2 = document.querySelector(".item")
const item3 = document.querySelectorAll(".item")
console.log(item2); // trả về 1 ptu
console.log(item3); // trả về danh sách
// Tìm theo tagname
const span2 = document.querySelector("span")
const span3 = document.querySelectorAll("span")
console.log(span2); // trả về 1 ptu
console.log(span3); // trả về danh sách
// Truy cập theo attribute
const value = document.querySelector('input[name="hoten"]')
console.log(value);
// Truy cập theo mối quan hệ, cha, con, phần tử liền kề
// 1. truy cập từ phần tử cha 
const span4 = content.children  // trong đó content là p.tử cha 
console.log(span4);
// 2. Truy cập phần tử cha từ phần tử con
const content3 = span2.parentElement
console.log(content3);
// 3. Truy cập thông qua phần tử liền kề
// Truy cập phần tử phía trước
const precontent = content.previousElementSibling
console.log(precontent);
// truy cập ptu phía sau
const nextcontent = content.nextElementSibling
console.log(nextcontent);
// Tạo mới ptu
const newElm = document.createElement("button")
// Chèn ptu mới tạo vào DOM
// chèn làm phần tử con đầu tiên của content
content.prepend(newElm)
// chèn làm phần tử con cuối cùng content
content.append(newElm)
// TIP: sử dụng console.dir để xem các thuộc tính
console.dir(content)
// Thao tác trên DOM
// THay đổi nội dung bên trong ptu
content.innerHTML=`
<a href="https://vtools.vn">Click đây</a>
`
// Thay đổi thuộc tính
// Thay đổi class
content.setAttribute("class","new-content")
content.setAttribute("style","background:red;font-weight:bold")
// Lấy giá trị của thuộc tính
const spvalue = span2.getAttribute("data-value")
console.log(spvalue);
// Bắt sự kiện thông qua addEventListener
// VD: Bắt sự kiện submit của button
//  Truy cập button
const button2 = document.querySelector("button")
// Click
button2.addEventListener("click",()=>{
    // alert("Bạn vừa click")
    // Truy cập input lấy giá trị
    const hten = document.getElementById("name").value
    const dchi = document.getElementById("address").value||"Không xác định"
    const contentElm = document.createElement("p")
    contentElm.innerHTML=`
        <h3>Họ tên: ${hten}</h3>
        <span>Địa chỉ: ${dchi}</span>
    `
    // Chèn vào content
    content.append(contentElm)
})
// Di chuột vào, ra
// button2.addEventListener("mouseenter",()=>{
//     console.log("Bạn vừa di chuột vào");    
// })
// button2.addEventListener("mouseleave",()=>{
//     console.log("Bạn vừa di chuột ra");    
// })