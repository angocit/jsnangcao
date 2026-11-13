// Set: Dùng để lưu trữ những giá trị là duy nhât (không trùng lặp)
// Cú pháp: const set = new Set()
const set = new Set()
// 1 số phương thức và thuộc tính của Set
// Thêm phần tử vào set: cú pháp: set.add(value)
set.add(5)
set.add(6)
set.add(5)
set.add(8)
set.add(10)
console.log(set);
// Xóa phần tử set. set.delete(value)
set.delete(5)
console.log(set);
// xóa tất cả phần tử: set.clear()
// set.clear()
// console.log(set);
// Kiểm tra phần tử có tồn tại trong set hay không. set.has(value)=> trả về boolean
console.log(set.has(5)); // false
console.log(set.has(6)); // true
// kiểm tra số lượng phần tử trong Set: set.size
console.log(set.size);
// Tạo Set từ mảng 
const a = [8,5,5,8,2,9,1]
const set2 = new Set(a)
console.log(set2);
// Đặc điểm: Không thể truy cập trực tiếp được vào phần tử của set. nhưng có thể sử dụng for để duyệt từng phần tử hoặc chuyển set về array bằng cú pháp spread
// Ví dụ:
for (item of set2){
    console.log(item);    
}
const arr = [...set2]
console.log(arr);
// Ứng dụng: lọc trùng
// Nhập tên công việc vào ô input sau đó hiển thị ra màn hình ở vị trí content danh sách những tên đã nhập vào, cái nào đã nhập rồi thì không hiển thị ra nữa
const todoform = document.getElementById("todo")
const todoset = new Set()
// Bắt sự kiện submit
todoform.addEventListener("submit",(e)=>{
    e.preventDefault() // Ngăn trình duyệt chuyển hướng
    // Lấy giá trị từ input
    const todo = document.getElementById("name").value || "Chưa xác định"
    // Đưa vào set
    todoset.add(todo)
    // Hiển thị ra content
    // const content = document.getElementById("content")
    // // duyệt set để hiển thị
    // let html = ''
    // for(item of todoset){
    //     html += `<p>${item}</p>`
    // }
    // content.innerHTML= html
    render(todoset)
})
const render = (set)=>{
    const content = document.getElementById("content")
    // duyệt set để hiển thị
    let html = ''
    for(item of set){
        html += `<p>${item}</p>`
    }
    content.innerHTML= html
}