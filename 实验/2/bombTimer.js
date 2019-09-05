function bomb(message) {
    this.message = message || "bomb!!";
    this.explode = function() {
        console.log(this.message);
    }
}
var b1 = new bomb();
setTimeout(function() {
    b1.explode();
}, 2000);