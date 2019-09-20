var username = process.argv[2];
var password = process.argv[3];

var str = username + " " + password;
console.log(str);
var str1 = Buffer.from(str, "utf-8");
var str11 = str1.toString("base64");
console.log(str11);