function newItem() {
    //list set up to add list item using Add button
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);

    if (inputValue === "") {
        alert("You must write something!");
    } else {
        $("#list").append(li);
    }
    //crossout function on double click
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", crossOut);
    //delete button at the end of each item marked by X
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on("click", function () {
        $(this).parent().remove();
    });
    //allows the user to drag list items around
    $("#list").sortable();
}
