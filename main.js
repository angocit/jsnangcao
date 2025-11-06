// Destructuring: Trích xuất giá trị của phần tử mảng hoặc 
// thuộc tính của đối tượng và gán vào biến cụ thể 
// const a = [8,10,6,20,5]
// Mảng 
// const [b,c] = a 
// console.log('B là:',b);
// console.log('C là:',c);
// // Lưu ý: Vị trí của biến
// // sẽ nhận giá trị tương ứng với
// // vị trí của phần tử mảng 
// // Có thể bỏ qua phần tử = dấu ,
// // VD :
// const [d,,,e] = a 
// console.log('E là:',e);
// Muốn lấy những phần tử còn lại
// thì có thể sử dụng cú pháp speac/rest 
// như sau:
// const a = [8,10,6,20,5]
// const [b,c,...d] = a 
// console.log('B là:',b);
// console.log('C là:',c);
// console.log('D là:',d);
// const a = [6,7,5,4,9,10]
// const [min] = a.sort((a,b)=>a-b)
// console.log(min);
// Đối tượng (Object)
// const person = {
//     fullname: "Ngoc",
//     age: 20,
//     address: "Thái Nguyên"
// }
// const {fullname,age,address} = person
// console.log('Tên là:',fullname);
// console.log('Tuổi là:',age);
// console.log('ĐC là:',address);
// // Lưu ý: - Tên biến phải trùng tên thuộc 
// // tính 
// // Muốn biến có tên khác thì dùng dấu :
// // như sau 
// const {fullname:ten,age:tuoi,address:dc} = person
// console.log('Tên là:',ten);
// console.log('Tuổi là:',tuoi);
// console.log('ĐC là:',dc);
// muốn lấy những thuộc tính còn lại
// thì sử dụng cú pháp spread,rest 
// const {fullname,...other} = person
// console.log(fullname);
// console.log(other);
// Sử dụng destructuring trong hàm 
// function Display(params){
//     console.log('Tên là: '+params.fullname);
//     console.log('Tuổi là: '+params.age);
// }
// function Display({fullname,age}){
//     console.log('Tên là: '+fullname);
//     console.log('Tuổi là: '+age);
// }

// // Display(person)
// // Template String ``
// function tinhtong(a,b){
//     return a+b
// }
// const bien1= 5
// const bien2 =9
// console.log(`ĐÁP ÁN 
//  Tổng 2 số ${bien1} + ${bien2} là: ${tinhtong(bien1,bien2)}    
// `);
// Spread: Sao chép và mở rộng phần tử mảng hoặc thuộc tính của
// đối tượng 
// const a = [5,1,20,8,30]
// // - Sao chép không làm thay đổi mảng gốc
// const b = [...a]
// const c=a
// b.push(9)
// console.log('Mảng a',a);
// console.log('Mảng b',b);
// console.log('Mảng c',c);
// // - Mở rộng
// const d = [6,9,...a]
// console.log('Mảng d',d);
// GỘP MẢNG
// const a = [5,1,20,8,30]
// const b = [9,10]
// const c = a.concat(b)
// console.log(c);
// const d = [...a,...b]
// console.log(d);

// OBJECT 
// const person = {
//     name:"Ngọc",
//     age:30,
//     address:"Thái Nguyên"
// }
// // Sao chép:
// const newperson = {...person}
// console.log(newperson);
// // Mở rộng
// const newperson2 = {...person,classname:'MD20301'}
// console.log(newperson2);
// // - Thay đổi giá trị của thuộc tính
// const newperson3 = {...person,age:35}
// console.log(newperson3);
// REST parameter
// function tinhtong(...items){
//     let tong = 0
//     for (item of items){
//         tong +=item
//     }
//     return tong
// }
// console.log(`Tổng diện tích là: ${tinhtong(50,60,90,45)} `);
// Biểu thức Shortcircuiting
// - Biểu thức OR || : Duyệt từ trái qua phải cho đến khi gặp giá trị
// không phải là falsy value (Truthy) thì dừng và nhận giá trị đó (giá trị
//     truthy
// ) Nếu tất cả đều là falsy value thì nó sẽ nhận giá trị cuối cùng
 const value = 0||false||""||10||null||undefined
 console.log(value);
//  function handleSubmit(){
//     const address1 = document.getElementById("address").value
//     const address2 = document.getElementById("address2").value
//     // Nếu người dùng nhập địa chỉ 1 thì lấy địa chỉ 1, không nhập thì lấy địa chỉ 2
//     // nếu địa chỉ 2 cũng không nhập thì lấy địa chỉ là Hà Nội
//     // let address = address1
//     // if (address1==''){
//     //     address = address2
//     // }
//     // if (address==''){
//     //     address="Hà Nội"
//     // }
//     // console.log(address);  
//     const address = address1||address2||"Hà Nội"
//     console.log(address);
      
//  }
//  Biểu thức AND && :Duyệt từ trái qua phải cho đến khi gặp falsy value thì dừng
// và nhận giá trị là falsy value 
// Nếu tất cả đều không phải là falsy value thì nhận giá trị cuối cùng
// const message = "Ngọc"&&"Minh"&&"An"
// console.log(message);
// Ứng dụng: Khi cần kiểm tra nhiều điều kiện
// liên tiếp nhau 
function handleSubmit(){
    const address1 = document.getElementById("address").value
    const address2 = document.getElementById("address2").value
   address1&&address2&&console.log("Submit thành công");
}
