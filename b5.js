// Làm việc với mảng
// forEach
// cú pháp: arr.forEach((item,index,array))
// trong đó: item: là phần tử được duyệt, index (optional) là chỉ số mảng, array (optional) mảng hiện tại
// Ví dụ:
const a = [5,6,20,3,70]
a.forEach((item,index)=>{
    console.log(`STT: ${index} - ${item}`);    
})
// Viết ngắn gọn khi chỉ có item
a.forEach(item=>console.log(item))
// Bài tập ví dụ :
// cho mảng pictures 
const pictures = [
  {
    "id": "0",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
    "download_url": "https://picsum.photos/id/0/5000/3333"
  },
  {
    "id": "1",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/LNRyGwIJr5c",
    "download_url": "https://picsum.photos/id/1/5000/3333"
  },
  {
    "id": "2",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/N7XodRrbzS0",
    "download_url": "https://picsum.photos/id/2/5000/3333"
  },
  {
    "id": "3",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/Dl6jeyfihLk",
    "download_url": "https://picsum.photos/id/3/5000/3333"
  }]

  // Yêu cầu: DUyệt mảng bằng forEach để hiển thị ảnh bên trong vị trí content trên DOM
//   B1: Truy cập vào vị trí content 
const content = document.getElementById("content")
// B2: C1 sử dụng innder html
// let html = ``
// pictures.forEach(item=>html+=`
//         <div>
//             <img width="120" src="${item.download_url}"/>
//             <h3>${item.author}</h3>
//         </div>
//     `)
// content.innerHTML=html
// C2:Sử dụng append 
pictures.forEach(item=>{
    // tạo thẻ mới
    const div = document.createElement("div")
    div.innerHTML = `
    <img width="120" src="${item.download_url}"/>
    <h3>${item.author}</h3>
    `
    content.append(div)
})

// Lưu ý: forEach duyệt hết mảng, không thể sử dụng break hoặc continue để dừng hoặc bỏ qua phần tủ
// map: tạo ra 1 mảng mới với cả phần tử có giá trị được tạo thành từ phần tử của mảng gốc theo logic nào đó
// Cú pháp: arr.map((item,index,array)=>{
    // return newvalue 
// })
// trong đó: item là phần tử được duyệt, index: chỉ số mảng,array: mảng hiện tại, newvalue: giá trị mới của phần tử mảng được tạo thành từ mảng gốc
// Ví dụ:  
const b = [8,9,10,3,50,21]
// yêu cầu:  Tạo ra 1 mảng c. Với các phần tử có giá trị là phần tử tương ứng của mảng b*2
const c = b.map(item=>item*2)
console.log(c);
// YC2: tạo ra mảng d từ b. Nếu ptu b chẵn thì x2, lẻ thì giữ nguyên
// const d = b.map(item=>{
//     if (item%2==0) return item*2
//     return item
// })
// console.log(d);
// rút gọn 
const d = b.map(item=>(item%2==0)?item*2:item)
console.log(d);
// Đặc điểm: Không làm thay đổi mảng gốc
// filter (lọc): Tạo ra 1 mảng mới với các phần tử có giá trị đáp ứng theo 1 điều kiện nào đó từ mảng gốc
// cú pháp : arr.filter((item,index,array)=>{
// return điều_kiện }) trong đó: item: phần tử được duyệt, index (optinal) là chỉ số mảng, array (optional) là mảng hiện tại
// Ví dụ: tạo ra mảng mới chỉ bao gồm các phần tử chẵn của mảng b
const e = b.filter(item=>item%2===0)
console.log(e);
// với mảng pictures bên trên, ứng dụng filter hãy in ra màn hình ảnh có id = 1
// const picture = pictures.filter(item=>item.id==1)
// let html = ``
// picture.forEach(item=>html+=`
//         <div>
//             <img width="120" src="${item.download_url}"/>
//             <h3>${item.author}</h3>
//         </div>
//     `)
// content.innerHTML=html
// nếu chỉ cần hiển thị ra 1 ảnh đầu tiên, sử dụng destructuring mảng và object
const [{author,download_url}] = pictures.filter(item=>item.id==1)
content.innerHTML = `
<div>
<img width="120" src="${download_url}"/>
    <h3>${author}</h3>
</div>
`
// Đặc điểm: Không làm thay đổi mảng gốc 
// reduce: Lưu trữ giá trị tích lũy qua mỗi lần duyệt ptu mảng 
// Cú pháp: const final_value = arr.reduce((value,item,index,array)=>{
   // todo something 
// },init)
// trong đó : final_value: Giá trị cuối cùng sau khi duyệt hết mảng, value: giá trị được tích lũy sau mỗi vòng lặp, item, phần tử được duyệt, index (optional) là chỉ số mảng, array(optional) là mảng hiện tại, init: giá trị khởi tạo
// Ví dụ:  Tính tổng tất cả các phần tử của mảng b
// const total = b.reduce((value,item)=>{
//  return value+item
// },0)
// rút gọn 
const total = b.reduce((value,item)=>value+item,0)
console.log(b);
console.log(total);
// Tính tổng tất cả các phần tử chẵn trong mảng b 
// const tong = b.reduce((value,item)=>{
//     if (item%2==0) return value+item 
//     return value
// },0)
// rút gọn 
const tong = b.reduce((value,item)=>(item%2==0)?value+item:value,0)
console.log(b);
console.log(tong);