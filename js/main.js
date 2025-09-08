document.querySelector("#works-form").addEventListener("submit", function (event) {
    var works = document.querySelector("#works").value;
    var result = document.querySelector("#do-list");

    if (works == "") {
        alert("Please Enter Value");
        event.preventDefault();
    }
    else {
        var toDoList = document.createElement("li");
        toDoList.innerHTML = works;
        result.append(toDoList);
        document.querySelector("#works").value = "";
        event.preventDefault();
    }
});