//SUBSTRING => USED TO EXTRACT A PORTION OF STRING
// str.substring(start, end)
const str ="CAT";
for(let i = 0; i<str.length;i++){
    console.log(str.substring(0, i+1));
}
for(let i=1;i<=str.length; i++){
    console.log(str.substring(i)); 
}