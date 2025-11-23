// Làm việc với DOM 
// Truy cập ptu trên DOM 
// - Truy cập theo id 
// const elm = document.getElementById("TênID")
// => Trả về phần tử duy nhất
// VD: Truy cập vào ô input có id là address
const address = document.getElementById("address")
console.log(address);
// - Truy cập theo class
// const elm = document.getElementsByClassName("Tên class")
// => Trả về danh sách các phần tử 
// VD: truy cập các phần tử có class là item
const itemElm = document.getElementsByClassName("item")
console.log(itemElm);
//- Truy cập theo tên thẻ
// const elm = document.getElementsByTagName("Tên_thẻ")
// =>Trả về danh sách các phần tử 
// VD: Truy cập các phần tử có thẻ là span
const spanElm = document.getElementsByTagName("span")
console.log(spanElm);
// Truy cập theo attribute name
// const elm = document.getElementsByName("value của attr")
// => Trả về danh sách các ptu
// VD: Truy cập vào ô input có name là address
const addressElm = document.getElementsByName("address")
console.log(addressElm);
// Note: Những trường hợp trả về danh sách các phần tử thì có thể
// truy cập từng phần tử theo chỉ số trong danh sách 
// VD: 
const item1 = itemElm[0]
console.log(item1);
// sử dụng query=> querySelector và querySelectorAll 
// => Về mặt cú pháp: Giống nhau tuy nhiên kết quả nhận được sẽ khác nhau 
// - querySelector:=> Trả về phần tử đầu tiên thỏa mãn (phần tử duy nhất)
// - querySelectorAll=> Trả về danh sách tất cả các phần tử thỏa mãn
// 1. Truy cập theo id =>cú pháp: const elm = document.querySelector("#id")
// VD: Truy cập ô input có id là address
const addressSelect = document.querySelector("#address")
console.log(addressSelect);
// 2. Truy cập theo class=>Cú pháp: const elm = document.querySelector(".classname")
// VD:  Truy cập vào phần tử đầu tiên có class là item
const selectItem = document.querySelector(".item")
console.log(selectItem);
// Truy cập vào tất cả các phần tử có class là item
const allItem = document.querySelectorAll(".item")
// 3. Truy cập theo tên thẻ=> cú pháp: const elm = document.querySelector("tagname")
// VD:  Truy cập vào phần tử đầu tiên có thẻ là span
const selectSpan = document.querySelector("span")
// Truy cập vào tất cả các phần tử có tên thẻ là span
const AllSpan = document.querySelectorAll("span")
// 4. Truy cập theo attribute=> cú phap: const elm = document.querySelector('[attrName="value"]')
// Vd: Truy cập vào div có datavalue = 1 
// const value1 = document.querySelector('[datavalue="1"]')
// hoặc cách viết khác 
const value1 = document.querySelector('div[datavalue="1"]')
console.log(value1);

// Truy cập thông qua 1 phần tử khác
// 1. Truy cập vào phần tử cha elm.parentElement
// VD: Truy cập vào phần tử cha của phần tử có id là address 
// B1: Truy cập vào address
// B2: Sử dụng thuộc tính parentElement
const address1 = document.getElementById("address")
const parent = address1.parentElement
console.log(parent);
// 2. Truy cập vào phần tử con elm.children 
// VD: Truy cập vào phần tử con của phần tử có class là content 
// B1: Truy cập vào ptu
// B2: Sử dụng thuộc tính children
const content = document.querySelector(".content")
console.dir(content)
const child = content.children
console.log(child);
// 3. Truy cập vào phần tử hàng xóm (lân cận) sử dụng sibling
// VD: Truy cập vào phần tử trước và sau của phần tử có id là name
// B1: Truy cập vào ptu
// B2: Sử dụng thuộc tính nextSiblingElement và previousElementSibling
const name = document.getElementById("name")
console.dir(name)
// -  Ptu trước nó
const prev = name.previousElementSibling 
// Phần tử sau nó:
const next = name.nextElementSibling
// Tip: Để in ra các thuộc tính và phương thức của ptu thì có thể sử dụng
// console.dir(elm)
// Tạo ra phần tử mới
// const newElm = document.createElement("tagname")
// VD: Tạo ra thẻ div có nội dung là:MD20301 
const newDiv = document.createElement("div")
// Chèn text vào thẻ 
newDiv.innerHTML = "MD20301"
// Chèn vào DOM
// B1: Truy cập vào phần tử muốn chèn
// B2: Chèn vào vị trí nào? Đầu tiên => prepand(elm), cuối cùng => append(elm)
// VD:  Chèn div vừa tạo bên trên vào trong thẻ có class là content
const contentElm = document.querySelector(".content")
// Vào vị trí đầu tiên 
// contentElm.prepend(newDiv)
// Vào vị trí cuối cùng
contentElm.append(newDiv)
// Get và Set attribute
// VD: Lấy giá data của phần tử có id là datademo
// B1: Truy cập vào ptu
const demo = document.getElementById("datademo")
const value = demo.getAttribute("data")
console.log(value);
// Thay đổi giá trị của data attribute
demo.setAttribute("data","MD20502")
// Sự kiện: addEventListener
// VD: Bắt sự kiện vào nút button
// B1: Truy cập vào button 
const btsubmit = document.querySelector("#submit")
// Bắt sự kiện submit
btsubmit.addEventListener("click",()=>{
    alert("Ahihi")
})