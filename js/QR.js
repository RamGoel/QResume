
function generateQR(user_input){

    //removes previous stylings
    document.querySelector("#QR").style = "";
  
    var qrcode = new QRCode(document.querySelector("#QR"), {
        text: `${user_input}`,
        width: 160, //128
        height: 160,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
  
    console.log(qrcode);
  
    //create Download btn
    let download = document.createElement("button");
    document.querySelector("#QR").appendChild(download);
  
    let download_link = document.createElement("a");
    download_link.setAttribute("download", "qr_code_bruteforce.png");
    download_link.innerText = "Download";
    download.appendChild(download_link);
  
    if(document.querySelector("#QR img").getAttribute("src") == null){
        setTimeout(() => {
            download_link.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
        }, 300);
    } else {
        setTimeout(() => {
            download_link.setAttribute("href", `${document.querySelector("#QR img").getAttribute("src")}`);
        }, 300);
    }
 }
  
 
  