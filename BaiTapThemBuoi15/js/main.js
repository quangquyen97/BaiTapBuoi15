function tinhThue() {
  var hoVaTen = String(document.getElementById("hoVaTen").value);
  var thuNhap = Number(document.getElementById("thuNhap").value);
  var soNguoi = Number(document.getElementById("soNguoi").value);
  var thueTNCN = 0;

  if (thuNhap > 0 && thuNhap <= 60) {
    thueTNCN = (thuNhap - 4 - soNguoi * 1.6) * 0.05;
    document.getElementById("txtThue").innerHTML =
      "Thuế cần phải trả là : " + thueTNCN + " (triệu)";
  } else if (thuNhap > 60 && thuNhap <= 120) {
    thueTNCN = (thuNhap - 4 - soNguoi * 1.6) * 0.1;
    document.getElementById("txtThue").innerHTML =
      "Thuế cần phải trả là : " + thueTNCN + " (triệu)";
  } else if (thuNhap > 120 && thuNhap <= 210) {
    thueTNCN = (thuNhap - 4 - soNguoi * 1.6) * 0.15;
    document.getElementById("txtThue").innerHTML =
      "Thuế cần phải trả là : " + thueTNCN + " (triệu)";
  } else if (thuNhap > 210 && thuNhap <= 384) {
    thueTNCN = (thuNhap - 4 - soNguoi * 1.6) * 0.2;
    document.getElementById("txtThue").innerHTML =
      "Thuế cần phải trả là : " + thueTNCN + " (triệu)";
  } else if (thuNhap > 384 && thuNhap <= 624) {
    thueTNCN = (thuNhap - 4 - soNguoi * 1.6) * 0.25;
    document.getElementById("txtThue").innerHTML =
      "Thuế cần phải trả là : " + thueTNCN + " (triệu)";
  } else if (thuNhap > 624 && thuNhap <= 960) {
    thueTNCN = (thuNhap - 4 - soNguoi * 1.6) * 0.3;
    document.getElementById("txtThue").innerHTML =
      "Thuế cần phải trả là : " + thueTNCN + " (triệu)";
  } else if (thuNhap > 960) {
    thueTNCN = (thuNhap - 4 - soNguoi * 1.6) * 0.35;
    document.getElementById("txtThue").innerHTML =
      "Thuế cần phải trả là : " + thueTNCN + " (triệu)";
  } else {
    document.getElementById("txtThue").innerHTML =
      "Số tiền nhập vào không hợp lệ: Xin nhập lại";
  }
}

// BÀI TẬP 2

function showInp() {
  var loaiKH = String(document.getElementById("loaiKH").value);
  console.log(loaiKH);
  switch (loaiKH) {
    case "Doanh nghiệp":
      document.getElementById("content").style.display = "block";

      break;
    case "Cá nhân":
      document.getElementById("content").style.display = "none";

    default:
      document.getElementById("content").style.display = "none";
  }
}

function tinhTienCap(loaiKH) {
  var loaiKH = document.getElementById("loaiKH").value;
  var hoVaTen2 = String(document.getElementById("hoVaTen2").value);
  var soKetNoi = Number(document.getElementById("soKetNoi").value);
  var soKenh = Number(document.getElementById("soKenh").value);
  var tienCap = 0;
  switch (loaiKH) {
    case "Doanh nghiệp":
      if (soKetNoi > 0 && soKetNoi <= 10) {
        tienCap = 15 + soKetNoi * 7.5 + 50 * soKenh;
        document.getElementById("txtThue2").innerHTML =
          "Số tiền khách hàng " + hoVaTen2 + " cần phải trả là: " + tienCap;
      } else if (soKetNoi > 10) {
        tienCap = 15 + 75 + (soKetNoi - 10) * 5 + 50 * soKenh;
        document.getElementById("txtThue2").innerHTML =
          "Số tiền khách hàng " + hoVaTen2 + " cần phải trả là: " + tienCap;
      } else {
        document.getElementById("txtThue2").innerHTML =
          "Bạn nhập chưa đúng định dạng của Số Kết Nối, mời nhập lại.";
      }
      break;
    case "Cá nhân":
      tienCap = 4.5 + 20.5 + 7.5 * soKenh;
      document.getElementById("txtThue2").innerHTML =
        "Số tiền khách hàng " + hoVaTen2 + " cần phải trả là: " + tienCap;
      break;
    default:
      document.getElementById("txtThue2").innerHTML =
        "Bạn chưa chọn loại khách hàng.";
  }
}
