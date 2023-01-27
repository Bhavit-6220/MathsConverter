function getValue() {
    var Value = prompt("Enter the expression");
    for (let i = 0; i < 50; i++) {
        if(Value.includes("^0")){
            Value = Value.replace("^0", "⁰")
        }
        if(Value.includes("^1")){
            Value = Value.replace("^1", "¹")
        }
        if(Value.includes("^2")){
            Value = Value.replace("^2", "²")
        }
        if(Value.includes("^3")){
            Value = Value.replace("^3", "³")
        }
        if(Value.includes("^4")){
            Value = Value.replace("^4", "⁴")
        }
        if(Value.includes("^5")){
            Value = Value.replace("^5", "⁵")
        }
        if(Value.includes("^6")){
            Value = Value.replace("^6", "⁶")
        }
        if(Value.includes("^7")){
            Value = Value.replace("^7", "⁷")
        }
        if(Value.includes("^8")){
            Value = Value.replace("^8", "⁸")
        }
        if(Value.includes("^9")){
            Value = Value.replace("^9", "⁹")
        }
        if(Value.includes('sqrt')){
            Value = Value.replace("sqrt", "√")
        }
        if(Value.includes("curt")){
            Value = Value.replace("curt", "∛")
        }
        if(Value.includes("theta")){
            Value = Value.replace("theta", "θ")
        }
        if(Value.includes("x")){
            Value = Value.replace("x", "𝑥")
        }
        if(Value.includes("+-")){
            Value = Value.replace("+-", "±")
        }
    }

    var Div = Value;
    document.getElementById('div1').innerHTML = Div;
}

const btn_copy = document.getElementById('copy')
const txt_data = document.getElementById('div1')

copy.onclick = () => {
    const value = txt_data.value
    document.body.appendChild(selBox);
    document.execCommand('copy');
  }