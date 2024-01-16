// Map
// Các phần tử trong map sẽ 2 giá trị
// Key - value
// - Thêm phần tử vào Map
// const map1 = new Map();
// map1.set('key1', "Số 1");
// map1.set("Key2", "Số 2");
// map1.set("Key3", "Số 3");
// // console.log(map1);
// // Lấy giá trị từ map
// // Tên Map.get('Key)
// console.log(map1.get('key1'));

// Khởi tạo Map từ Array.

// const arraya = [["Key1","Value 1"],["Key2","Value 2"],["Key3","Value 3"]];
// const map2 = new Map(arraya);
// const set1 = new Set(arraya);
// // console.log(set1);
// // console.log(map2.get('Key2'));
// // Khởi tạo Map từ Map
// // const map3 = new Map(map2);
// // console.log(map3);
// const map4 = new Map(set1);
// // xóa phần tử trong Map;
// // map4.delete('Key1');
// // Xóa toàn bộ
// map4.clear();
// console.log(map4);
// console.log(map4.has('Key5'));

// const tracnghiem = new Map();
// tracnghiem.set('cauhoi','Đâu là tên một châu lục?');
// tracnghiem.set(1,'Việt Nam');
// tracnghiem.set(2,'Châu Á');
// tracnghiem.set(3,'Trung Quốc');
// tracnghiem.set('dapan','Châu Á');
// tracnghiem.set(true,'Bạn đã trả lời đúng');
// tracnghiem.set(false,'Câu trả lời chưa chính xác');
// console.log(tracnghiem.get('cauhoi'));
// console.log(`1. ${tracnghiem.get(1)}`);
// console.log(`2. ${tracnghiem.get(2)}`);
// console.log(`3. ${tracnghiem.get(3)}`);
// const dapan = 2;
// // console.log(tracnghiem.get('dapan')==tracnghiem.get(dapan));
// console.log(tracnghiem.get(tracnghiem.get('dapan')==tracnghiem.get(dapan)));

// Default parameters
// const tinhtong = (a,b=2)=>{
//     return a+b;
// }
// // console.log(tinhtong(5));
// (Callback)
// const printResults = (so1,so2,fn)=>{
//     console.log(`Tổng 2 số là: ${fn(so1,so2)}`);
// }
// printResults(5,7,tinhtong);

// Return Hàm trong Hàm 
// const Demo1 = ()=>{
//     console.log(`Đây là hàm số 1`);
//     return (a)=>{
//         console.log(`Đây là hàm số ${a}`);
//     }
// }
// Demo1()("Hàm con");

// (Immediately Invoked Function Expressions (IIFE))
// (DemoPrintResult = ()=>{
//     console.log(`Gọi hàm ngay lập tức `);
// })();

// const manga = [8,5,6,2,1,7,96];
// 1.
// for (let item of manga) {
//     console.log(item);
// }
// 2.
// for (let i=0; i<manga.length;i++) {
//     console.log(manga[i],i);
// }
// map
// manga.map((value, index)=>{
//     console.log(value,index);
// });

// // forEach;
// manga.forEach((value, index)=>{
//     console.log(value,index);
// });
// Filter;
const objarr = [
    {a:6,b:9},
    {a:8,b:10},
    {a:3,b:6},
    {a:9,b:7},
    {a:6,b:8}
]
// const mangb = manga.filter((value)=>
// {
//     return value>6;
// });
// const mangb = objarr.filter(({a,b})=>{
//     return a==6;
//     // return (value.a==6)&&(value.b==9);
// });
// console.log(objarr);
// console.log(mangb);
// Reduce
const manga = [6,6,43];
const tong = manga.reduce((results,value)=>{
    if (value%2==1){
        results+=value;
    }
    return results;
    //    return results+=value;
},0);

console.log(tong);