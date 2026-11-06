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

