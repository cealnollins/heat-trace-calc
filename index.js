const btnEl = document.getElementById("btn");

function calc () {
    const btnEl = document.getElementById("btn");
    let pipeFt = parseInt(document.getElementById("pipeFt").value);
    let ninCnt = parseInt(document.getElementById("ninCnt").value);
    let teeCnt = parseInt(document.getElementById("teeCnt").value);
    let vlvCnt = parseInt(document.getElementById("vlvCnt").value);
    let endBagCst  = parseInt(document.getElementById("cstPerEnd").value);
    let endPerBag  = parseInt(document.getElementById("endSealPerBag").value);
    let tapeft = parseInt(document.getElementById("ftPerRoll").value);
    let tapeCstPer = parseInt(document.getElementById("cstPerTape").value);
    let cstPerStrap = parseInt(document.getElementById("cstPerStrap").value);
    let cstPerTBag = parseInt(document.getElementById("cstPerTeeBag").value);
    let cblPerDay  = parseInt(document.getElementById("cblPerDay").value);
    let lbrPerDay = parseInt(document.getElementById("lbrPerDay").value);
    let fitMth = (ninCnt + teeCnt) * 2 + (vlvCnt * 3) + pipeFt;
    let wasteMath = Math.ceil(fitMth *1.05);
    let cblCst = parseFloat(document.getElementById("cblCst").value) * wasteMath;
    let cblPerTherm = parseFloat(document.getElementById("cblPerTherm").value);
    let amntTherm = Math.ceil(wasteMath / cblPerTherm);
    let thermCst = parseFloat(document.getElementById("thermCst").value) * amntTherm;
    let endCnt = Math.ceil(amntTherm + teeCnt);
    let bagCnt = Math.ceil(endCnt / endPerBag);
    let endCst = bagCnt * endBagCst;
    let tapeNeeded = Math.ceil(wasteMath / tapeft)
    let tapeCst = tapeNeeded * tapeCstPer
    let strapCst = (amntTherm * 2) * cstPerStrap
    let tBagCst = (teeCnt / 5) * cstPerTBag
    let lbrCst = (wasteMath / cblPerDay) * lbrPerDay
    let finalMath = thermCst + cblCst + endCst + tapeCst + strapCst + tBagCst + lbrCst ;
    let res = document.getElementById("result").innerHTML="Your heat trace cost is: " + "$" + finalMath *1.35;   
}

btnEl.addEventListener("click", calc)
