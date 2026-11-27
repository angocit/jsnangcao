// xử lý bất đồng bộ bằng aysnc/await
// Hàm bất đồng bộ
// -- Hàm thông thường (function declaration) 
// async  function tenham(){
//     // await Promise 
// }
// // -- Arrow function

// const tenham = async()=>{
//     // await promise 
// }
// Ví dụ: Truy cập API https://picsum.photos/v2/list và log ra link download ảnh
const GetPicture = async api_URL=>{
    const res = await fetch(api_URL)
    const data = await res.json()
    console.log(data);    
}
GetPicture("https://picsum.photos/v2/list")