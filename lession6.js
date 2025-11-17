// Làm việc với DOM
// Document Object Model 
// - id,class, attribute   
// Truy cập theo id 
// const elm = document.getElementById('Tênid')
// VD: truy cập ô input có id là address (ptu phải
// có id )=>trả về duy nhất 1 ptu
// const address = document.getElementById("address")
// console.log(address);
// Truy cập theo class. =>danh sách các ptu
// Cú pháp  const listelm = document.getElementByClassName("Tên class")
// VD: Truy cập các ptu có class là item
const listitem = document.getElementsByClassName('item')
console.log(listitem);
// Truy cập chi tiết ptu theo chỉ số 
console.log(listitem[0]);
// Truy cập theo tên element (tagname(tên thẻ)) => trả về danh sách các ptu
// VD: Truy cập các ptu có tên thẻ là span  
const listspan = document.getElementsByTagName("span")
console.log(listspan);

// Truy cập chi tiết ptu cụ thể theo chỉ số 
// Truy cập theo thuộc tính name
// Cú pháp: document.getElementByName("value")
// Ví dụ :  Truy cập ô input có name là address
const address = document.getElementsByName("address")
console.log(address);
 // Truy cập chi tiết ptu cụ thể theo chỉ số 
 // Truy cập bằng querySelector và querySelectorAll
//  - querySelector => trả về giá trị đầu tiên phù hợp => trả về 1 ptu duy nhất
// querySelectorAll => trả về danh sách các phần tử phù hợp-> truy cập chi tiết 
// theo chỉ số (thứ tự xuất hiện)
// - cú pháp của querySelector, querySelectorAll giống nhau 
// 1. Truy cập theo id: const elm = document.querySelector("#id")
// VD: Truy cập vào ptu có id là address 
const address2 = document.querySelector("#address")
console.log(address2);
// 2. Truy cập theo class: const elm = document.querySelector(".classname")
// VD: truy cập vào ptu đầu tiên có class là item
const firstItem = document.querySelector(".item")
console.log(firstItem);
 // Lấy ra danh sách các phần tử có class là item 
 const listItem = document.querySelectorAll(".item")
 console.log(listItem);
 // 3. Truy cập theo tagname (tên thẻ)
 // const elm = document.querySelector("tagname")
//  VD:  Truy cập vào phần tử đầu tiên có tên thẻ 
// là span
const firstSpan = document.querySelector("span")
console.log(firstSpan);
// Tất cả thì dùng selectorAll
// 4. Truy cập theo attribute
// const elm = document.querySelector('[tên_attribute=value]')
// VD : truy cập vào ptu đầu tiên có name = address
// const address3 = document.querySelector("[name=address]")
// console.log(address3);
// VD2: Truy cập vào ptu đầu tiên có attr datavalue = 1 
const data1Elm = document.querySelector('[datavalue="1"]')
console.log(data1Elm);
// Truy cập thông qua phần tử khác 
// Ptu con -> ptu cha  (parent)
// Ptu cha -> ptu con (children)
// Truy cập ptu lân cận (hàng xóm) (sibling)
// -> Lấy ptu cha 
// const parent = elm.parentNode 
// vd: Lấy phần tử cha của input address trên DOM 
// B1: Truy cập vào input address 
// B2: Lấy ptu cha qua thuộc tính parentNode 
const inputAddress = document.getElementById("address")
const parent = inputAddress.parentNode
console.log(parent); // body

// --> lấy phần tử con 
// const children = elm.children 
// VD: Lấy phần tử con của elment có class là content 
// B1: Truy cập vào element có class content 
// B2: Lấy ptu con qua thuộc tính children
const content = document.querySelector('.content')
const children = content.children
console.log(children);
// Lấy qua các phần tử lân cận (sibling)

const address4 = document.getElementById("address")
console.dir(address4)
// Thằng trước nó 
const prev = address4.previousElementSibling
console.log(prev);

// Thằng sau nó

const next = address4.nextElementSibling
console.log(next);
// Tip: Có thể in ra thuộc tính của phần tử bằng console.dir(ptu)

 


