var box = $("#box");
var list = $("#menu-box li");

list.mouseenter((e) => {
    e.preventDefault();
    box.animate({
        left: "20px"
    }, 700);
});

list.on("click", (e) => {
    e.preventDefault();
    box.animate({
        left: "-120px"
    }, 300)
})
