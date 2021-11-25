function countWords(minutes,seconds,textArea){
    const charPerSec=textArea.value.length/(seconds+(minutes*60));
    console.log(charPerSec);
    document.getElementById("show").innerHTML = charPerSec;

}
