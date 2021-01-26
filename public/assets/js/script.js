$(function () {
    $("#burgerBtn").on("click", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#userBurger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("New Burger Added...");
                location.reload();
            }
        );
    });

    $(".devourBtn").on("click", function (event) {
        let id = $(this).data("id");
        let hasDevour = {
            devoured: 1
        };

        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: hasDevour
        }).then(
            function () {
                console.log(`You have ${hasDevour} devoured ${id}...`);
                location.reload();
            }
        );
    });

    $(".deleteBtn").on("click", function (event) {
        let id = $(this).data("id");

        $.ajax("api/burgers/" + id, {
            type: "DELETE",
        }).then(
            function () {
                console.log(`You have deleted ${id}...`);
                location.reload();
            }
        );
    });

});