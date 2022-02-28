// import '../css/login.css'
// import '../css/login.less'
function login () {
    const oH2 = document.createElement('h2');
    oH2.innerHTML = '前端7'
    oH2.className = 'title';
    return oH2;
}

function input () {
    const iTo = document.createElement('input');
    return iTo;
}
console.log('XXX')
document.body.appendChild(login());
document.body.appendChild(input());