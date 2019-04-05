$(document).ready(function () {
    var $name = $("#name");
    var $drink1 = $("#drink1");
    var $drink2 = $("#drink2");
    var $color = $("#select_color");
    var $myOrders = $("#orders");
    var $ID = $("#idul");

    $("#add-order").click(function () {
        var order = {
            name: $name.val(),
            drink:{
                drink1:$($drink1).val(),
                drink2:$drink2.val()
            },
            color: $color.val()
        };
        $.ajax({
            type: "POST",
            url: "http://rest.learncode.academy/api/baxter1898/assignment2",
            data: order,
            success: function (newOrder) {
                alert("Item added");
            },
            error: function () {
                alert("Error at post method");
            }
        })
    });

    $("#get-order").click(function () {
        $.ajax({
            type: "GET",
            url: "http://rest.learncode.academy/api/baxter1898/assignment2",
            success: function (orderList) {
                $.each(orderList, function (i, item) {
                    $myOrders.append("<li> name: " + item.name + ", Drink1: " + item.drink.drink1 + ", Drink2: " + item.drink.drink2 +
                        ", Color: " + item.color + ", ID: " + item.id + "</li>");
                })
            },
            error: function () {alert("Error at post method");}
        })
    });

    $("#put-order").click(function () {     //must use ID value
        var editedOrder = {
            name: $name.val(),
            drink:{
                drink1:$($drink1).val(),
                drink2:$drink2.val()
            },
            color: $color.val(),
            id: $ID.val()
        };
        $.ajax({
            type: "PUT",
            url: "http://rest.learncode.academy/api/baxter1898/class3360/" + editedOrder.id,
            data: JSON.stringify(editedOrder),
            dataType: "json",
            success: function () {
                alert("Item updated")
            },
            error: function () {
                alert("Error at put method")
            }
            //alert
        })
    });

    $("#delete-order").click(function () {
        var delOrder = {
            name: $name.val(),
            drink:{
                drink1:$($drink1).val(),
                drink2:$drink2.val()
            },
            color: $color.val(),
            id: $ID.val()
        };
        $.ajax({
            type: "DELETE",
            url: "http://rest.learncode.academy/api/baxter1898/class360/" + delOrder.id,
            dataType: "json",
            data: delOrder,
            success: function () {
                alert("Item deleted");
            },
            error: function () {
                alert("Error at delete method");
            }
        })
    })
});