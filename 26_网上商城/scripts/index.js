$(function() {
    //input
    $("#inputSearch").on("focus", function () {
        if (this.value == this.defaultValue) {
            this.value = "";
        }
    }).on("blur", function () {
        if (this.value == "") {
            this.value = this.defaultValue;
        }
    })


    $("#jnNoticeInfo a").hover(function (e) {
        this.tip = $(this).attr("title");
        if ($(".tip").length == 0) {
            var $tooltip = $("<div class='tip'></div>").html(this.tip);
            $tooltip.appendTo($("body"));
        } else {
            $(".tip").html(this.tip);
        }

        $(".tip").offset({
            top: e.pageY + 10,
            left: e.pageX + 10
        });
        $(this).removeAttr("title");
    }, function () {
        $(this).attr("title", this.tip);
        $(".tip").remove();
    }).on("mousemove", function (e) {
        $(".tip").offset({
            top: e.pageY + 10,
            left: e.pageX + 10
        });
    })
})


function addCookie(key, val, expires){//expires表示过期天数

    var str=key+"="+val;
    if(expires)
        var date=new Date();
        date.setDate(date.getDate()+expires)
        str+=";expirres"+date.toUTCString();
    }
    document.cookie = str;
}








