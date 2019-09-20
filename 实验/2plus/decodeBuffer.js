var loginStr = "emhhbmdzYW46MTlzNDU2";
var buf1 = Buffer.from(loginStr, "base64");
var base64Str = buf1.toString("utf-8");
console.log(base64Str);