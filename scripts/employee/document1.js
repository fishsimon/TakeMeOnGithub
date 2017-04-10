/**
 * Created by lenovo on 2017/4/10.
 */
var dataBody = document.querySelector("#dataBody");
function getDate() {
    var xhr = new XMLHttpRequest();
    xhr.open("get","/findDocument");
    xhr.onload = function () {
        var res = null;
        if(xhr.response){
            res = JSON.parse(xhr.response);
            var html = "";
            res.contents.forEach(function (employee) {
                html += "<tr data-uid='" + employee.id + "'>";

                html += "<td onclick='titleClick(this)'>";
                html += employee.title;
                html += "</td>";

                html += "<td onclick='typeClick(this)'>";
                html += employee.type?employee.type:"";
                html += "</td>";

                html += "<td>";
                html += employee.content?employee.content:"";
                html += "</td>";

                html += "<td>";
                html += employee.author?employee.author:"";
                html += "</td>";

                html += "<td>";
                html += employee.avator?employee.avator:"";
                html += "</td>";

                html += "<td>";
                html += employee.remark?employee.remark:"";
                html += "</td>";

                html += "<td>";
                html += employee.icon?employee.icon:"";
                html += "</td>";

                var createDate = new Date(employee.createAt);
                html += "<td>";
                html += (createDate.getMonth()+1)+
                    "-"+createDate.getDate()+
                    " "+createDate.getHours()+":"+createDate.getMinutes();
                html += "</td>";

                var updateDate = new Date(employee.updateAt);
                html += "<td>";
                html += (updateDate.getMonth()+1)+
                    "-"+updateDate.getDate()+
                    " "+updateDate.getHours()+":"+createDate.getMinutes();
                html += "</td>";

                html += "<td>";
                html += "<input type='button' value='删除' onclick='deleteData(this)' />"+
                    "<input type='button' value='更新' onclick='updateData(this)' />";
                html += "</td>";

                html += "</tr>";
            });
            dataBody.innerHTML = html;
        }
    };
    xhr.send();
}
getDate();