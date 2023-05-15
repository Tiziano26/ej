let num = 545
function ejemplo (params) {
    let imp = document.querySelector("#entra");
    let p = document.querySelector("#salida");
    let divImg = document.querySelector("#img");
    divImg.innerHTML = '<img src="../img/fotoperro.avif"  alt="error"/>'
    let valor = imp.value;
    p.innerText = valor;
    console.log(p.value);
    console.log(valor);
    console.dir(imp);
    console.log(num);
    let r = num - "45";
    console.log(r);
}

