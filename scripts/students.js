/**
 * Created by lenovo on 2017/4/6.
 */
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open("get","../students");
    xhr.onload = function (res) {
        // console.log(typeof xhr.response);
        // console.log(xhr.response);
        var data = JSON.parse(xhr.response);
        var container = document.querySelector(".student-information");
        var html = "";
        for(var i = 0;i<data.contents.length;i++){
            var student = data.contents[i];
            html += "<div class='row'>";
            html += "<div class = 'column'>"+ student.name +"</div>";
            html += "<div class = 'column'>"+ student.gender +"</div>";
            html += "<div class = 'column'>"+ student.age +"</div>";
            html += "<div class = 'column'>" +
                "<select>" + "<option>" + student.address.province + "</option>" + "</select>" +
                "<select>" + "<option>" + student.address.city + "</option>" + "</select>" +
                "<select>" + "<option>" + student.address.district + "</option>" + "</select>" +
                "<select>" + "<option>" + student.address.countray + "</option>" + "</select>" +
               "</div>";
            html += "<div class = 'column'>"+ student.favorites +"</div>";
            html  += "</div>"
        }
        container.innerHTML += html;
    };
    xhr.send();
}
getData();