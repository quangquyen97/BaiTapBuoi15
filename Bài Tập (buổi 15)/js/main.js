function tuyenSinh() {
  var diem1 = Number(document.getElementById("diemThi1").value);
  var diem2 = Number(document.getElementById("diemThi2").value);
  var diem3 = Number(document.getElementById("diemThi3").value);
  var diemChuan = Number(document.getElementById("diemChuan").value);
  var doiTuong = document.getElementById("doiTuong").value;
  var khuVuc = document.getElementById("khuVuc").value;
  var ketQua = 0;

    switch(doiTuong){
        case '1': {
            doiTuong = 2.5;
        }
        break;
        case '2': {
            doiTuong = 1.5;
        break;
        }
        case '3': {
            doiTuong = 1;
        }
        default : {
            doiTuong = 0;
        }
    }
    switch(khuVuc){
        case 'A': {
            khuVuc = 2;
        }
        break;
        case 'B': {
            khuVuc = 1;
        break;
        }
        case 'C': {
            khuVuc = 0.5;
        }
        default : {
            khuVuc = 0;
        }
    }

  ketQua = (diem1 + diem2 + diem3) + doiTuong + khuVuc;

  if(diem1 <= 0){
    document.getElementById("hienthi").innerHTML =
    "Bạn đã rớt. Do có môn nhỏ hơn hoặc bằng 0";
  }else if(diem2 <= 0){
    document.getElementById("hienthi").innerHTML =
      "Bạn đã rớt. Do có môn nhỏ hơn hoặc bằng 0";
  }else if(diem3 <= 0){
    document.getElementById("hienthi").innerHTML =
      "Bạn đã rớt. Do có môn nhỏ hơn hoặc bằng 0";
  }else if(ketQua >= diemChuan){
    document.getElementById("hienthi").innerHTML =
    "Xin chúc mừng, bạn đã đậu với số điểm: " + ketQua;
  }else{
      document.getElementById("hienthi").innerHTML = "Bạn đã rớt với số điểm: " + ketQua;
  }
  console.log(diem1, diem2, diem3, khuVuc, doiTuong, diemChuan);
}

function tinhTienDien(){
    var tenKH = String(document.getElementById("tenKH").value);
    var soKW = Number(document.getElementById("soKW").value);
    var tienDien = 0;
    
    if(soKW <= 50){
        tienDien = soKW * 500;
        document.getElementById("hienthi2").innerHTML = "Số tiền điện của hộ dân "+ tenKH +" cần trả là: "+ tienDien.toLocaleString();
    }else if(soKW > 50 && soKW <= 100){
        tienDien = 50*500 + (soKW - 50) * 650;
        document.getElementById("hienthi2").innerHTML = "Số tiền điện của hộ dân "+ tenKH +" cần trả là: "+ tienDien.toLocaleString();
    }else if(soKW > 100 && soKW <= 200){
        tienDien = (50*500) + (50 * 650) + ((soKW - 100)* 850) ;
        document.getElementById("hienthi2").innerHTML = "Số tiền điện của hộ dân "+ tenKH +" cần trả là: "+ tienDien.toLocaleString();
    }else if(soKW > 200 && soKW <= 350){
        tienDien = (50 * 500) + (50 * 650) + (100 * 850) + ((soKW - 200) * 1100) ;
        document.getElementById("hienthi2").innerHTML = "Số tiền điện của hộ dân "+ tenKH + " cần trả là: "+ tienDien.toLocaleString();
    }else{
        tienDien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((soKW - 350) * 1300) ;
        document.getElementById("hienthi2").innerHTML = "Số tiền điện của hộ dân "+ tenKH + " cần trả là: "+ tienDien.toLocaleString();
    }
}
