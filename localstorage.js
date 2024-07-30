//const inpKey = document.getElementById("keyname");
const inpValue = document.getElementById("AccName");
const btn = document.getElementById("create");
//const output = document.getElementById("output");
//let newValue

btn.onclick = function () {
    //const key = inpKey.value;
    const value = inpValue.value;
    
    //if (key && value) {
    if (value) {
        localStorage.setItem("name",value);
    }
};

function getAccount() {
    const input = document.getElementById
}

/*for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    output.innerHTML += `${key}: ${value}<br />`;
    
}*/