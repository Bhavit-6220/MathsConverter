function getValue() {
    var Value = prompt("Enter the expression");
    for (let i = 0; i < 10; i++) {
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
    }
    

    var Div = "The maths conversion is: " + Value;
    document.getElementById('div1').innerHTML = Div;
}