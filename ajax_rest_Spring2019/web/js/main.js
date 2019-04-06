$(function() {
    var $myorders = $('#orders');
    var $name = $("#name");
    var $drink1 = $("#drink1");
    var $drink2 = $("#drink2");
    var $drcolor = $("#select_color");
    var $idul = $("#idul");


    $("#get-order").click(function () {
        $.ajax({
            type: "GET",
            url: "http://rest.learncode.academy/api/Zeke/drinks1234",
            success: function (orderList) {
                $myorders.text(null);
                $idul.text(null);
                $.each(orderList, function (i, item) {

                    $myorders.append("<li> Name: " + item.name + ", Spirit 1: " + item.drink.drink1 + ", Spirit 2: " + item.drink.drink2 + ", Color: " + item.dcolor + ", Drink Id: " + item.id + "</li>");
                    $idul.append(item.id);
                });

            },
            error: function(){
                alert("Error at 'get' function")
            }
        })
    });
    $("#add-order").click(function () {

        var order = {
            name: $name.val(),
            drink: {
                drink1: $drink1.val(),
                drink2: $drink2.val()
            },
            dcolor: $drcolor.val()
        };

        if(order.name === ""){order.name = "undefined"}
        if(order.drink.drink1 === ""){order.drink.drink1 = "undefined"}
        if(order.drink.drink2 === ""){order.drink.drink2 = "undefined"}

        $.ajax({
            type: "POST",
            url: "http://rest.learncode.academy/api/Zeke/drinks1234",
            data: order,
            success: function (order) {
                alert("Item Added: " + order.name.toString())
            },
            error: function () {
                alert("Error at 'add' function")
            }
        })
    });
    $("#delete-order").click(function () {
        var idNumber = $idul.text();
        $idul.text(null);
        $myorders.text(null);
        $.ajax({
            type: "DELETE",
            url: "http://rest.learncode.academy/api/Zeke/drinks1234/" + idNumber,
            success: function (order) {
                alert("Item Deleted: " + order.name.toString())
            },
            error: function () {
                alert("Error at 'delete' function")
            }
        })
    });
    $("#put-order").click(function () {
        var idNumber = $idul.text();
        var order = {
            name: $name.val(),
            drink: {
                drink1: $drink1.val(),
                drink2: $drink2.val()
            },
            dcolor: $drcolor.val()
        };
        $.ajax({
            type: "PUT",
            url: "http://rest.learncode.academy/api/Zeke/drinks1234/" + idNumber,
            data: order,
            success: function (order) {
                alert("Item Updated: " + order.name.toString())
            },
            error: function () {
                alert("Error at 'put' function")
            }
        })
    });
});

