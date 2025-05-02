// ดึงค่าชื่อและอายุจาก query string
const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "คุณ";
const age = params.get("age") || "0";

document.getElementById("greeting").textContent = `Happy Birthday ${name}!`;

// เพิ่ม event listener สำหรับปุ่มย้อนกลับ
document
  .querySelector("button[type='submit']")
  .addEventListener("click", function () {
    window.location.href = "index.html";
  });

// แยกตัวเลขอายุเป็นหลักสิบและหลักหน่วย
const ageStr = age.toString().padStart(2, "0");
const digit1 = ageStr[0];
const digit2 = ageStr[1];

// ตั้งค่า src ของภาพเทียน
const basePath = "./pic";
document.getElementById("candle1").src = `${basePath}/C_l${digit1}.png`;
document.getElementById("candle2").src = `${basePath}/C_l${digit2}.png`;
