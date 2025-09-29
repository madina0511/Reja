/*TASK-C

Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
Hamda classning quyidagdek 3'ta metodi bo'lsin:

1) qoldiq
2) sotish
3) qabul

Har bir metod ishga tushgan vaqtda log qilinsin

MASALAN:
const shop = new Shop(4, 5, 2)

shop.qoldiq();
natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud! */
const { type } = require("express/lib/response");
const moment = require("moment");

class Shop {
  non;
  cola;
  lagmon;
  constructor(non, cola, lagmon) {
    this.non = non;
    this.cola = cola;
    this.lagmon = lagmon;
  }
  qoldiq() {
    const time = moment().format("HH:mm");
    console.log(
      `Hozir ${time}da non: ${this.non}, cola: ${this.cola}, lagmon: ${this.lagmon} ta bor.`
    );
  }
  sotish(mahsulot, son) {
    let qolgan;
    if (mahsulot === "non") {
      this.non -= son;
      qolgan = this.non;
    } else if (mahsulot === "lagmon") {
      this.lagmon -= son;
      qolgan = this.lagmon;
    } else if (mahsulot === "cola") {
      this.cola -= son;
      qolgan = this.cola;
    }
    console.log(`Sotilgan ${son} ta ${mahsulot}. Qolgan miqdor: ${qolgan}`);
    this.qoldiq();
  }
  qabulQilish(mahsulot, son) {
    let qolgan;
    if (mahsulot === "non") {
      this.non += son;
      qolgan = this.non;
    } else if (mahsulot === "lagmon") {
      this.lagmon += son;
      qolgan = this.lagmon;
    } else if (mahsulot === "cola") {
      this.cola += son;
      qolgan = this.cola;
    }
    console.log(
      `Qabul qilingan ${son} ta ${mahsulot}. Qolgan miqdor: ${qolgan}`
    );
    this.qoldiq();
  }
}

const shop = new Shop(4, 6, 7);
shop.qoldiq();
shop.sotish("non", 2);
shop.qabulQilish("lagmon", 3);

// TASK B

// Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
// string tarkibidagi sonlar miqdorini qaytarsin

// Masalan: countDigits("ad2a54y79wet0sfgb9")
// Yuqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi
// let b = 0;
// function raqamHisoblagich(a) {
//   for (let i of a) {
//     if (i >= "0" && i <= "9") {
//       b++;
//     }
//   }
//   console.log(b);
// }
// raqamHisoblagich("ad2a54y79wet0sfgb9"); // 7

// A-TASK:

// Shunday 2 parametrli function tuzing, hamda birinchi
// parametrdagi letterni ikkinchi parametrdagi
// sozdan qatnashga sonini
// return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masalani yechimi:

// let count = 0;
// const countLetter = (a, b) => {
//   for (let i = 0; i < b.length; i++) {
//     if (b[i] == a) count++;
//   }
// };
// countLetter("a", "madina");
// console.log(count);

// console.log("Jeck Ma maslahatlari:");

// const list = [
//   "yaxshi talaba bo'ling",
//   "to'g'ri boshliq tanlang va ko'p xato qiling",
//   "uzingizga ishlashingizni boshlang",
//   "siz kuchli bo'lgan narsalarni qiling",
//   "yoshlarga investitsiya qiling",
//   "endi dam oling, foydasi yuq",
// ];

// async function // async then().catch() // async await
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// async function run() {
//   let javob = await maslahatBering(30);
//   console.log("javob: ", javob);
//   javob = await maslahatBering(70);
//   console.log("javob: ", javob);
// }
// run();
// async then().catch
// maslahatBering(50)
//   .then((data) => {
//     console.log("javob: ", data);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });

// Callback function

// function maslahatBering(a, callback) {
//   if (a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(() => {
//       callback(null, list[5]);
//     });
//   }
// }
// maslahatBering(10, (err, data) => {
//   if (err) console.log("ERROR: ", err);
//   else {
//     console.log("javob: ", data);
//   }
// });

// DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng emas!", null);
//   } else {
//     const c = a % b;
//     callback(null, c);
//   }
// }

// // CALL
// qoldiqliBolish(7, 5, (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     console.log("data:", data);
//     console.log("MANTIQLAR...");
//   }
// });
