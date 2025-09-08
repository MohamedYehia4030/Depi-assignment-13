document.querySelectorAll(".xmd").forEach(function (changer){
    changer.onclick = function () {
        document.querySelector("#object-x").style.color = changer.dataset.color;
    }
});