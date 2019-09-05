var fun = setInterval(function loop() {
    console.log("i willl loop forever");
}, 500);
var fun2 = setTimeout(function() {
    console.log("游戏结束");
    process.exit();
}, 5000);