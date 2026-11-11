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