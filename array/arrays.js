var k = "The values are :";
function ObtainArray() {
    let input = document.getElementsByName('array[]');
    let aux=[]
    for (let i = 0; i < input.length; i++) {
        a = input[i];
        aux[i]=parseInt(input[i].value);
        k = k + "array[" + i + "].value= "
            + a.value + " ";
    }
    
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const reduced=aux.reduce(reducer);
    document.getElementById("par").innerHTML = k+reduced;
}
