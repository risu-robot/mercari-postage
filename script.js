document.getElementById("rakuraku").style.display = "none";
document.getElementById("yuuyuu").style.display = "none";
document.getElementById("tanomeru").style.display = "none";

function displayReset() {
  const x_css = document.getElementById('x-message');
  const y_css = document.getElementById('y-message');
  const z_css = document.getElementById('z-message');
  const mass_css = document.getElementById('mass-message');
  x_css.style.background = "white";
  x_css.style.borderColor = "gray";
  y_css.style.background = "white";
  y_css.style.borderColor = "gray";
  z_css.style.background = "white";
  z_css.style.borderColor = "gray";
  mass_css.style.background = "white";
  mass_css.style.borderColor = "gray";
  document.getElementById("rakuraku").style.display = "none";
  document.getElementById("yuuyuu").style.display = "none";
  document.getElementById("tanomeru").style.display = "none";
  const output = "";
  const output2 = "";
  document.getElementById("output-message").innerHTML = output;
  document.getElementById("sub-message").innerHTML = output2;
}

function result() {
  const x_css = document.getElementById('x-message');
  const y_css = document.getElementById('y-message');
  const z_css = document.getElementById('z-message');
  const mass_css = document.getElementById('mass-message');
  x_css.style.background = "white";
  x_css.style.borderColor = "gray";
  y_css.style.background = "white";
  y_css.style.borderColor = "gray";
  z_css.style.background = "white";
  z_css.style.borderColor = "gray";
  mass_css.style.background = "white";
  mass_css.style.borderColor = "gray";
  document.getElementById("rakuraku").style.display = "none";
  document.getElementById("yuuyuu").style.display = "none";
  document.getElementById("tanomeru").style.display = "none";
  let send = document.getElementById("how");
  let x = document.getElementById("x-message");
  let y = document.getElementById("y-message");
  let z = document.getElementById("z-message");
  let mass = document.getElementById("mass-message");
  send = Number(send.value);
  x = Number(x.value);
  y = Number(y.value);
  z = Number(z.value);
  mass = Number(mass.value);

  if (x > 0 && y > 0 && z > 0 && mass > 0) {
    let min = Math.min(x, y, z);
    let max = Math.max(x, y, z);
    let medium = x + y + z - max - min;
  
    if (min <= 1 && medium <= 12 && max <= 23.5 && mass <= 25 && send == 0) {
      const output = "84??? ????????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min <= 1 && medium <= 12 && max <= 23.5 && mass <= 50 && send == 0) {
      const output = "94??? ????????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min <= 3 && medium <= 25 && max <= 34 && mass <= 50 && send == 0) {
      const output = "120??? ??????????????? ?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min <= 3 && medium <= 25 && max <= 34 && mass <= 100 && send == 0) {
      const output = "140??? ??????????????? ?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min <= 2 && medium <= 17 && max <= 25 && mass <= 1000 && send == 0) {
      const output = "180??? ?????????????????????";
      const output2 = "????????????????????????";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min <= 3 && medium <= 25 && max <= 34 && mass <= 1000 && send == 0) {
      const output = "185??? ?????????????????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min + medium + max <= 90 && max <= 60 && mass <= 50 && send == 0) {
      const output = "200??? ??????????????? ?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min <= 3 && medium <= 22.8 && max <= 31.2 && mass <= 1000 && send == 0 || min <= 3 && medium <= 22.8 && max <= 31.2 && mass <= 1000 && send == 1) {
      const output = "210??? ????????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("rakuraku").style.display = "inline-block";
    } else if (min + medium + max <= 60 && max <= 34 && min <= 3 && mass <= 2000 && send == 0 || min + medium + max <= 60 && max <= 34 && min <= 3 && mass <= 2000 && send == 2) {
      const output = "220??? ???????????????????????????";
      const output2 = "??????????????????????????????";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuuyuu").style.display = "inline-block";
    } else if (min + medium + max <= 90 && max <= 60 && mass <= 100 && send == 0) {
      const output = "220??? ??????????????? ?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min + medium + max <= 60 && max <= 34 && min <= 3 && mass <= 1000 && send == 0 || min + medium + max <= 60 && max <= 34 && min <= 3 && mass <= 1000 && send == 2) {
      const output = "230??? ??????????????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuuyuu").style.display = "inline-block";
    } else if (min <= 3 && medium <= 22.8 && max <= 32.7 && mass <= 2000 && send == 0 || min <= 3 && medium <= 22.8 && max <= 32.7 && mass <= 2000 && send == 2) {
      const output = "280??? ???????????????????????????";
      const output2 = "?????????????????????";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuuyuu").style.display = "inline-block";
    } else if (min + medium + max <= 90 && max <= 60 && mass <= 150 && send == 0) {
      const output = "300??? ??????????????? ?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min + medium + max <= 90 && max <= 60 && mass <= 250 && send == 0) {
      const output = "350??? ??????????????? ?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min <= 3 && medium <= 24.8 && max <= 34 && mass <= 4000 && send == 0) {
      const output = "370??? ???????????????????????????";
      const output2 = "????????????????????????";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min + medium + max <= 90 && max <= 60 && mass <= 500 && send == 0) {
      const output = "510??? ??????????????? ?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min <= 5 && medium <= 20 && max <= 25 && send == 0 || min <= 5 && medium <= 20 && max <= 25 && send == 1) {
      const output = "520??? ????????????????????????";
      const output2 = "??????BOX????????????";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("rakuraku").style.display = "inline-block";
    } else if (min <= 5 && medium <= 24.8 && max <= 34 && send == 0 || min <= 5 && medium <= 24.8 && max <= 34 && send == 1) {
      const output = "520??? ???????????????????????? ???????????????";
      const output2 = "????????????BOX????????????";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("rakuraku").style.display = "inline-block";
    } else if (min <= 5 && medium <= 24.8 && max <= 34 && mass <= 4000 && send == 0) {
      const output = "520??? ??????????????????????????? ???????????????";
      const output2 = "????????????????????????";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    }else if (min <= 7 && medium <= 17 && max <= 24 && mass <= 2000 && send == 0 || min <= 7 && medium <= 17 && max <= 24 && mass <= 2000 && send == 2) {
      const output = "520??? ???????????????????????????";
      const output2 = "??????BOX????????????";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuuyuu").style.display = "inline-block";
    } else if (min + medium + max <= 90 && max <= 60 && mass <= 1000 && send == 0) {
      const output = "710??? ??????????????? ?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min + medium + max <= 60 && mass <= 2000 && send == 0 || min + medium + max <= 60 && mass <= 2000 && send == 1) {
      const output = "750??? ????????? 60?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("rakuraku").style.display = "inline-block";
    } else if (min + medium + max <= 60 && mass <= 25000 && send == 0 || min + medium + max <= 60 && mass <= 25000 && send == 2) {
      const output = "770??? ??????????????? 60?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuuyuu").style.display = "inline-block";
    } else if (min + medium + max <= 80 && mass <= 5000 && send == 0 || min + medium + max <= 80 && mass <= 5000 && send == 1) {
      const output = "850??? ????????? 80?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("rakuraku").style.display = "inline-block";
    } else if (min + medium + max <= 80 && mass <= 25000 && send == 0 || min + medium + max <= 80 && mass <= 25000 && send == 2) {
      const output = "870??? ??????????????? 80?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuuyuu").style.display = "inline-block";
    } else if (min + medium + max <= 90 && max <= 60 && mass <= 2000 && send == 0) {
      const output = "1040??? ??????????????? ?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min + medium + max <= 100 && mass <= 10000 && send == 0 || min + medium + max <= 100 && mass <= 10000 && send == 1) {
      const output = "1050??? ????????? 100?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("rakuraku").style.display = "inline-block";
    } else if (min + medium + max <= 100 && mass <= 25000 && send == 0 || min + medium + max <= 100 && mass <= 25000 && send == 2) {
      const output = "1070??? ??????????????? 100?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuuyuu").style.display = "inline-block";
    } else if (min + medium + max <= 120 && mass <= 15000 && send == 0 || min + medium + max <= 120 && mass <= 15000 && send == 1) {
      const output = "1200??? ????????? 120?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("rakuraku").style.display = "inline-block";
    } else if (min + medium + max <= 90 && max <= 60 && mass <= 4000 && send == 0) {
      const output = "1350??? ??????????????? ?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min + medium + max <= 140 && mass <= 20000 && send == 0 || min + medium + max <= 140 && mass <= 20000 && send == 1) {
      const output = "1450??? ????????? 140?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("rakuraku").style.display = "inline-block";
    } else if (min + medium + max <= 160 && mass <= 25000 && send == 0 || min + medium + max <= 160 && mass <= 25000 && send == 1) {
      const output = "1700??? ????????? 160?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("rakuraku").style.display = "inline-block";
    } else if (min + medium + max <= 80 && mass <= 150000 && send == 0) {
      const output = "1700??? ?????????????????????????????? 80?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("tanomeru").style.display = "inline-block";
    } else if (min + medium + max <= 120 && mass <= 150000 && send == 0) {
      const output = "2400??? ?????????????????????????????? 120?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("tanomeru").style.display = "inline-block";
    } else if (min + medium + max <= 160 && mass <= 150000 && send == 0) {
      const output = "3400??? ?????????????????????????????? 160?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("tanomeru").style.display = "inline-block";
    } else if (min + medium + max <= 200 && mass <= 150000 && send == 0) {
      const output = "5000??? ?????????????????????????????? 200?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("tanomeru").style.display = "inline-block";
    } else if (min + medium + max <= 250 && mass <= 150000 && send == 0) {
      const output = "8600??? ?????????????????????????????? 250?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("tanomeru").style.display = "inline-block";
    } else if (min + medium + max <= 300 && mass <= 150000 && send == 0) {
      const output = "12000??? ?????????????????????????????? 300?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("tanomeru").style.display = "inline-block";
    } else if (min + medium + max <= 350 && mass <= 150000 && send == 0) {
      const output = "18500??? ?????????????????????????????? 350?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("tanomeru").style.display = "inline-block";
    } else if (min + medium + max <= 400 && mass <= 150000 && send == 0) {
      const output = "25400??? ?????????????????????????????? 400?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("tanomeru").style.display = "inline-block";
    } else if (min + medium + max <= 450 && mass <= 150000 && send == 0) {
      const output = "33000??? ?????????????????????????????? 450?????????";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("tanomeru").style.display = "inline-block";
    } else {
      const output = "?????????";
      const output2 = "??????????????????????????????????????????";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    }
  } else {
    const output = "Error";
    const output2 = "??????????????????????????????";
    document.getElementById("output-message").innerHTML = output;
    document.getElementById("sub-message").innerHTML = output2;

    if (x <= 0) {
      const x_css = document.getElementById('x-message');
      x_css.style.background = "pink";
      x_css.style.borderColor = "red";
    }
    if (y <= 0) {
      const y_css = document.getElementById('y-message');
      y_css.style.background = "pink";
      y_css.style.borderColor = "red";
    }
    if (z <= 0) {
      const z_css = document.getElementById('z-message');
      z_css.style.background = "pink";
      z_css.style.borderColor = "red";
    }
    if (mass <= 0) {
      const mass_css = document.getElementById('mass-message');
      mass_css.style.background = "pink";
      mass_css.style.borderColor = "red";
    }
  }
}

console.log("GitHub Pages ????????????????????????????????? ('??')");
