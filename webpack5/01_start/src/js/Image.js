// import img from '../img/icon.png';
import '../css/img.css';
function packImg () {
    const oEle = document.createElement('div')

    const oImg = document.createElement('img')
    // oImg.src  = img;
    oImg.src = require('../img/icon.png');

    oEle.appendChild(oImg)

    // 设置背景图
    const oBgImg = document.createElement('div');
    oBgImg.className = 'bgBox'
    oEle.appendChild(oBgImg)
    return oEle;
}

document.body.appendChild(packImg())