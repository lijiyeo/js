var arg = process.argv[2];
if (arg == undefined && arg == "-h") {
    console.log("请输入运算式");
} else {
    console.log(arg + "=%s", eval(arg));
}