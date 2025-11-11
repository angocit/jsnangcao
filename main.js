// const a = [8,9,10,6,3,2]
// // Destructuring: Trích xuất giá trị từ phần tử mảng hoặc thuộc tính của
// // đối tượng và gán vào biến 
// // - Mảng 
// const [b,c] = a
// console.log('B la:',b);
// console.log('C la:',c);
// // Lưu ý: Vị trí của biến sẽ nhận giá trị tương ứng với vị
// // trí của phần tử mảng 
// // Muốn bỏ qua ptu nào đó thì dùng dấu ,
// const [,,d] = a 
// console.log('d là',d);
// // Sử dụng REST để trích xuất giá trị còn lại
// // VD const a = [8,9,10,6,3,2]
// const [e,f,...g] = a 
// console.log('e là',e);
// console.log('f là',f);
// console.log('g là',g);
// // Đối tượng
// const person = {
//     name: "Ngọc",
//     age:20,
//     address: "Thái Nguyên"
// }
// // const name = person.name
// // const age = person.age
// // const address = person.address
// const {name,age,address} = person
// console.log("Tên", name);
// console.log("Tuổi", age);
// console.log("Địa chỉ", address);
// // Lưu ý:
// // - Tên biến phải trùng với tên thuộc tính 
// // Trường hợp tên biến khác tên thuộc tính
// // thì làm như sau: 
// const {name:hoten,age:tuoi,address:dc} = person
// console.log("Tên", hoten);
// console.log("Tuổi", tuoi);
// console.log("Địa chỉ", dc);
// // Sử dụng cú pháp spead/rest để trích
// // xuất những thuộc tính còn lại 
// const {name:ten,...other} = person
// console.log(ten);
// console.log(other);
// // Sử dụng destructuring trong hàm

// function Display({name,age}){
//     console.log('Tên truyền vào là: ',name);
//     console.log('Tuổi truyền vào là: ',age);
// }
// Display(person)
// const students = [
//     {
//         name:"SV a",
//         age: 21,
//         classname: "ABC"
//     },
//     {
//         name:"SV b",
//         age: 25,
//         classname: "AA"
//     },
//     {
//         name:"SV c",
//         age: 20,
//         classname: "BB"
//     }
// ]
// console.log('DANH SÁCH SINH VIÊN');
// students.forEach(function ({name,age,classname},index){
//     // console.log('-STT: '+(index+1)+' Họ tên: '+item.name+ 'Tuổi:'+item.age+' Lớp: '+item.classname);
//     console.log('-STT: '+(index+1)+' Họ tên: '+name+ 'Tuổi:'+age+' Lớp: '+classname);
// })

// const a = [8,2,6,9,10]
// // const [min,secondmin] = a.sort(function(a,b){
// //     return a-b
// // })
// const [min,secondmin] = a.sort((a,b)=>a-b)
// console.log(min);
// console.log(secondmin);

// SPREAD/REST: ...
// SPREAD: Sao chép và mở rộng phần tử mảng hoặc thuộc tính của đối tượng
// nhưng không làm thay đổi mảng gốc 
// Mảng 
// const a = [6,8,10,9]
// // const b=a 
// const b = [1,4]
// const c = [...a]
// // b.push(20)
// c.push(20)
// console.log('Mảng b',b);
// console.log('Mảng c',c);
// console.log('Mảng a',a);
// // Mở rộng:
// const d = [9,10,...a]
// console.log('Mảng d',d);
// // GỘP MẢNG
// const mergearr = [...a,...b]
// console.log(mergearr);
// Object
// const person = {
//     name:"Ngọc",
//     age: 20
// }
// // Sao chép:
// const newperson = {...person}
// console.log(newperson);
// // Mở rộng 
// const newperson2 = {...person,address:"Thái Nguyên"}
// console.log(newperson2);
// // Thay đổi lại giá trị của thuộc tính
// const person3 = {...person,age:person.age+1}
// console.log(person3);

// REST PARAMETTER

// function tinhtong(nha1,nha2,nha3){
//     return nha1+nha2+nha3
// }

// function tinhtong(...item){
//     let tong = 0
//     for (i of item){
//         tong +=i
//     }
//     return tong 
// }
// console.log('Tổng diện tích là');
// console.log(tinhtong(5,6,10,5));

// Shortcircuiting
// Biểu thức OR || : Biểu sẽ duyệt từ trái
// qua phải và dừng lại và nhận giá trị khi 
// gặp giá trị là truthy 
//Nếu tất cả đều là falsy value thì sẽ nhận giá 
// trị cuối cùng trong biểu thức 

// const a = 0||false||""||null 
// console.log(a);
// // ỨNG DỤNG  Khi muốn gán giá trị mặc định
// // cho biến 
// function handleSubmit(){
//     let address = document.getElementById("address").value
//     let thanhpho = address||"Hà Nội"
//     console.log(thanhpho);   
// }
// Biểu thức AND && : Biểu thức duyệt từ 
// trái qua phải nhưng sẽ dừng lại khi gặp 
// giá trị là falsy value và nhận giá trị là falsy value
// Nếu tất cả giá trị đều không phải falsy value (truthy)
// thì nó sẽ nhận giá trị cuối cùng 
// const a = "Ngọc"&&"An"&&"Minh"&&10
// console.log(a);
// const a = 0
// const b = 9
// const c = a&&b/a
// console.log(c);
// const a = 1,b=6,c=7,d=9
// const ketqua = b>a&&c>b&&d>c&&"Đây là dãy số tăng dần"
// console.log(ketqua);
// NULLISH ??: Hoạt động như biểu thức OR nhưng thay
// vì so sánh với falsy value thì nó chỉ so sánh với
// null và undefined


const a = null??undefined
console.log(a);
//-----