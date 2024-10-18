function tab() {

    let tombol = document.getElementById("toggle")
    let tombol2 = document.getElementById("toggle2")
    console.log =("test");

    let poto1 = document.getElementById("poto1");
    let poto2 = document.getElementById("poto2");
     
    if (toggle.checked){
        poto1.src = "asset/images/on.gif"
    } else {
        poto1.src = "asset/images/off.gif"
    }

    if (toggle2.checked){
        poto2.src = "asset/images/on.gif"
    } else {
        poto2.src = "asset/images/off.gif"
    }
}