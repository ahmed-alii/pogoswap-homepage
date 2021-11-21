(() => {
    "use strict";
    document.addEventListener("scroll", (function (t) {
        const e = window.pageYOffset, n = window.document.getElementById("scroll-down");
        if (e > 0) {
            const t = 1 - e / 100;
            n.style.opacity = t > "0.1" ? t + "" : "0"
        } else n.style.opacity = "1"
    }))
})();

const nn = document.getElementsByClassName("dropdown-link");
for (let tt of nn) {
    tt.removeEventListener('click', function (){

    });
}
