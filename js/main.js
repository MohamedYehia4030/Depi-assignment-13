document.querySelector("#works-form").addEventListener("submit", function (event) {
    var works = document.querySelector("#works").value;
    var result = document.querySelector("#do-list");

    if (works == "") {
        alert("Please Enter Value");
        event.preventDefault();
    }
    else {
        var toDoList = document.createElement("li");
        toDoList.setAttribute("class","d-flex justify-content-between my-3")
        var span = document.createElement("span");
        span.textContent = works;
        var delBtn = document.createElement("button");
        delBtn.setAttribute("class","btn btn-danger")
        delBtn.textContent = "Delete";
        delBtn.onclick = function () {
            toDoList.remove();
        };
        toDoList.append(span);
        toDoList.append(delBtn);
        result.append(toDoList);
        document.querySelector("#works").value = "";
        event.preventDefault();
    }
})
