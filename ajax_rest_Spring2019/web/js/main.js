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
                    $myorders.append("<li> Name:" + item.name + ", Drink1: " + item.drink.drink1 + ", Drink2: " + item.drink.drink2 + ", Color: " + item.dcolor + ", Id: " + item.id + "</li>");
                    $idul.append(item.id);
                });

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
        $.ajax({
            type: "POST",
            url: "http://rest.learncode.academy/api/Zeke/drinks1234",
            data: order,
            success: function (newOrder) {
                alert("Item Added")
            },
            error: function () {
                alert("Enter do not blah blah")
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
            success: function (newOrder) {
                alert("Item Deleted")
            },
            error: function () {
                alert("Error")
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
            success: function (newOrder) {
                alert("Item Updated")
            },
            error: function () {
                alert("Error")
            }
        })
    });
});