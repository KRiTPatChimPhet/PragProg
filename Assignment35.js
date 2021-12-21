function NumToText() {
    let inputNum = Number(prompt());
    let num = ["ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า", "สิบ"];
    let pos = ["หน่วย", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน", "สิบล้าน","ร้อยล้าน","พันล้าน","ล้านล้าน"];
    let res = "";
    if (inputNum){
    for (i = 0; i < inputNum.length; i++) {
         if (inputNum[i] !== "0") {
              res = res + num[parseInt(inputNum[i])];
              res = res + pos[inputNum.length - (i + 1)];
         }
    }
    res = res.replace("หนึ่งสิบ", "สิบ");
    res = res.replace("ศูนย์หน่วย", "");
    res = res.replace("หนึ่งหน่วย", "เอ็ด");
    res = res.replace("สองสิบ", "ยี่สิบ");
    res = res.replace("หน่วย", "");
    if (res == "เอ็ด") {
         res = "หนึ่ง"
    }
    console.log(res);
}
}
NumToText(), NumToText(), NumToText();