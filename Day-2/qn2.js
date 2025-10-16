function wordCount(str){
    let newString = str.trim();
    let count = 0;
    if(newString === "") return count
    for(let i = 0; i <= newString.length; i++){
        if(newString[i]===" "){
            count++
        }
        }
    return count+1;
}
console.log(wordCount("Hello World"));
console.log(wordCount("This is a sample sentence."));
console.log(wordCount("Programming is fun!"));



