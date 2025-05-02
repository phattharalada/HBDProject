document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  // ตรวจสอบว่าชื่อและอายุไม่ว่าง
  if (!name || !age) {
    alert("กรุณากรอกชื่อและอายุให้ครบถ้วน");
    return;
  }

  // ตรวจสอบว่าอายุเป็นตัวเลข
  if (isNaN(age) || age <= 0) {
    alert("กรุณากรอกอายุเป็นตัวเลขที่ถูกต้อง");
    return;
  }

  // ส่งข้อมูลไปยังหน้า birthday.html โดยใช้ query string
  window.location.href = `birthday.html?name=${encodeURIComponent(
    name
  )}&age=${encodeURIComponent(age)}`;
});
