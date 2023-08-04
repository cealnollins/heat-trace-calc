const btnEl = document.getElementById("btn");

function calc () {
    const btnEl = document.getElementById("btn");
    let pipeFt = parseInt(document.getElementById("pipeFt").value);
    let ninCnt = parseInt(document.getElementById("ninCnt").value);
    let teeCnt = parseInt(document.getElementById("teeCnt").value);
    let vlvCnt = parseInt(document.getElementById("vlvCnt").value);
    let endBagCst  = parseInt(document.getElementById("cstPerEnd").value);
    let endPerBag  = parseInt(document.getElementById("endSealPerBag").value);
    let fitMth = (ninCnt + teeCnt) * 2 + (vlvCnt * 3) + pipeFt;
    let wasteMath = (fitMth *1.05);
    let cblCst = parseFloat(document.getElementById("cblCst").value) * wasteMath;
    let cblPerTherm = parseFloat(document.getElementById("cblPerTherm").value);
    let amntTherm = wasteMath / cblPerTherm;
    let thermCst = parseFloat(document.getElementById("thermCst").value) * amntTherm;
    let endCnt = amntTherm + teeCnt;
    let bagCnt = endCnt / endPerBag;
    let endCst = bagCnt * endBagCst;
    console.log(endCst);
    let finalMath = thermCst + cblCst;
    let res = document.getElementById("result").innerHTML="Your heat trace cost is: " + "$" + finalMath;   
}

btnEl.addEventListener("click", calc)
