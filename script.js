const button1 = document.getElementById("button1");
button1.addEventListener("click", diceR);
function diceR(){
    num = 0;
    x = Math.floor(Math.random() * 7);
    const para = document.createElement("p");
    para.textContent = "first die: " + x;
    num +=x;
    const para2 = document.createElement("p");
    y = Math.floor(Math.random() * 7);
    num += y;
    para2.textContent = "second die: " + y;
    const para3 = document.createElement("p");
    para3.textContent = "total value: " + num;
    document.body.appendChild(para);
    document.body.appendChild(para2);
    document.body.appendChild(para3);
}