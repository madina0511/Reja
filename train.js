console.log("Jeck Ma maslahatlari:");

const list = [
  "yaxshi talaba bo'ling",
  "to'g'ri boshliq tanlang va ko'p xato qiling",
  "uzingizga ishlashingizni boshlang",
  "siz kuchli bo'lgan narsalarni qiling",
  "yoshlarga investitsiya qiling",
  "endi dam oling, foydasi yuq",
];

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
