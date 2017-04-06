/**
 * Created by lenovo on 2017/4/6.
 */
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open("get","../staff");
    xhr.onload = function (res) {
        var data = JSON.parse(xhr.response);
        var container = document.querySelector(".staff-information");
        var html = "";
        for(var i = 0;i<data.contents.length;i++){
            var staff = data.contents[i];
            html += "<div class='row'>";
            html += "<div class='column'>" + staff.name +"</div>";
            html += "<div class='column'>" + staff.age +"</div>";
            html += "<div class='column'>" + staff.sex +"</div>";
            html += "<div class='column'>" +
                "<select>" + "<option>" + staff.adress.countray + "</option>" + "</select>" +
                "<select>" + "<option>" + staff.adress.city + "</option>" + "</select>" +
                "</div>";
            html += "</div>";
        }
        container.innerHTML += html;
    };
    xhr.send();
}
getData();