console.log("string methods");
//charAt;
x="narmada gandla";
console.log(x.charAt(3));

//charCodeAt();
 console.log(x.charCodeAt(2));
//Concat();
y=x.concat("T")
console.log(y);
//startswith();
console.log(x.startsWith("narmada"));
//endswith();
console.log(x.endsWith("gandla"));
//includes()
console.log(y.includes("T"));
//indexOf()
console.log(x.indexOf("a"));
console.log(y.indexOf("T"));
//lastindexOf();
console.log(x.lastIndexOf("a"));
//repeat()
z="kinnera  ";
console.log(z.repeat(3));
//replace()
z="python"
console.log(z.replace("p","c"));
//slice()
console.log(x.slice(0,3));
//split()
console.log(y.split(" "));
//substring();
console.log(x.substring(0,3));
//toLowercase()
console.log(x.toLowerCase());
//toUppercase()
console.log(x.toUpperCase());
//trim()
z="   narmada gandla   ";
console.log(z.trim());


console.log("Regular Expression");
//literal Notation
var re1=/j.*t/i;
console.log(re1.test("JavaScript"));
console.log(re1.exec("Javascript,JavapoinT"));


//Object Notation
var re2=new RegExp("j.*t","i");
console.log(re2.test("JavaScript"));
console.log(re2.exec("JavaScript,JavapoinT"));

