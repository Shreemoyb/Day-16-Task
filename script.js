const hEle = document.createElement('h1');
document.body.append(hEle);

var count = 11;
setTimeout(() => {
  hEle.innerText = 10;
    setTimeout(() => {
  hEle.innerText = 9;
    setTimeout(() => {
  hEle.innerText = 8;
    setTimeout(() => {
  hEle.innerText = 7;
    setTimeout(() => {
  hEle.innerText = 6;
    setTimeout(() => {
    hEle.innerText = 5;
    setTimeout(() => {
      hEle.innerText = 4;
      setTimeout(() => {
        hEle.innerText = 3;
        setTimeout(() => {
          hEle.innerText = 2;
          setTimeout(() => {
            hEle.innerText = 1;
            setTimeout(() => {
              hEle.innerText = "Happy Independance Day";
            }, 1000);
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)
}, 1000)
}, 1000)
}, 1000)
}, 1000)