// Phương thức của mảng
// DUyệt mảng
// forEach
// Cú pháp
// arr.forEach((item,index,array)=>{

// })
// // Trong đó:
// item: là phần tử được duyệt 
// index: Chỉ số trong mảng của phần tử được duyệt 
// array: Mảng đang được duyệt 
// Ví dụ: 
const a = [8,39,49,0,10,50]
// a.forEach((item,index,array)=>{
//     console.log(`${index}. Giá trị là: ${item}`);    
// })
const duyetmang = (item,index)=>{
    console.log(`${index}. Giá trị là: ${item}`); 
}
a.forEach(duyetmang)
// Đặc điểm: Duyệt hết mảng chứ không continue hay break được

// map()
// Tạo ra mảng mới từ mảng cũ theo logic nào đó mà không làm thay đổi mảng gốc
// VD:
const b = a.map((item,index)=>{
    return item
})
console.log(b); // tương đương cú pháp b = [...a]
// Tạo ra mảng c với các ptu có giá trị gấp đôi
// phần tử mảng gốc 
const c = a.map(item=>item*2)
console.log(c);
// Tạo ra mảng mới với đkiện: ptu chẵn thì x3, ptu lẻ thì giữ nguyên
// const d = a.map((item,index)=>{
//     if (index%2==0){
//         return item*3
//     }
//     return item
// })

// cú pháp gọn hơn
// const d = a.map((item,index)=>(index%2==0)?item*3:item)
// console.log(d);
// filter() // Lọc=> tạo ra mảng mới với các ptu của mảng gốc
//  phù hợp đkiện nào đó
// VD: tạo ra mảng mới với các phần tử chẵn ở mảng a
//  const filterarr = a.filter((item,index)=>{
//     return item%2==0  // return điều kiện
//  })
// Ngắn gọn hơn
// const filterarr = a.filter(item=>item%2==0)
//  console.log(filterarr);
 const students = [
    {
        name:"SV1",
        score:8,
        address: "Thái Nguyên"
    },
     {
        name:"SV2",
        score:6,
        address: "Hà Nội"
    },
     {
        name:"SV3",
        score:5,
        address: "Thái Nguyên"
    }
 ]

 // Lọc ra sinh viên quê Thái Nguyên
 // Hiển thị danh sách sv, với điều kiện, sv quên thái nguyên
//  sẽ được +1 điểm 
// // Ý 1
// const svthainguyen = students.filter(sv=>sv.address=="Thái Nguyên")
// console.log(svthainguyen);
// // Ý 2
// // const bangdiem = students.map(sv=>{
// //     if (sv.address=="Thái Nguyên"){
// //         return {...sv,score:sv.score+1}
// //     }
// //     return sv
// // })
// // ngắn gọn hơn
// const bangdiem = students.map(sv=>(sv.address=="Thái Nguyên"?{...sv,score:sv.score+1}:sv))
// console.log(bangdiem);
// reduce() => Tạo ra giá trị tích lũy khi duyệt mảng
// Cú pháp:
// const valuetotal = arr.reduce((total,item,index)=>{
//     return value // return giá trị tích lũy
// },initvalue)
// Trong đó
// total: là giá trị được tích lũy sau mỗi lần duyệt phần tử 
// item: phần tử được duyệt
// index: chỉ số của phần tử được duyệt
// initvalue: Giá trị khởi tạo. Nếu trống thì nhận giá trị đầu tiên của mảng và mảng
// sẽ duyệt từ vị trí 2
// VD: Tính tổng các phần tử của mảng a 
// const tongptu = a.reduce((total,item)=>{
//     return total+item
// })
// console.log(tongptu);
// slice: Tách mảng
// Cú pháp:  arr.slice(vị trí bắt đầu, vị trí kết thúc)
const newarr = a.slice(1,3)
console.log(newarr);
// Đặc điểm: Tạo ra mảng mới mà không làm thay đổi mảng gốc
// splice : chèn và xóa phần tử trong mảng, thay đổi mảng gốc
// Cú pháp: 
// arr.splice(vị trí bắt đầu, số ptu muốn xóa,ptu mới 1,phần tử mới 2...)
// VD:  Thay thế phần tử thứ 4 của mảng a thành giá trị 100
// a.splice(3,1,100)
// Chèn phần tử vào vị trí thứ 4 của mảng a
a.splice(3,0,100,9,1)
console.log(a);
