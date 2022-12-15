const uri = "http://localhost:9090/justdial";
let addetails = [];
let updateIndex = 0;
function getAll() {
    alert();
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            books = JSON.parse(this.responseText);
            console.log();
            _displayItems();
        }
    };
    xhttp.open("GET", "http://localhost:9090/addetails");
    xhttp.send();
}
function _displayItems(data) {
    const tBody = document.getElementById("addetails");
    const button = document.createElement("button");
    data.forEach((item) => {
        let editButton = button.cloneNode(false);
        editButton.innerText = "Edit";
        editButton.setAttribute("onclick", `editItem(${item.id})`);
        let delButton = button.cloneNode(false);
        delButton.innerText = "Delete";
        delButton.setAttribute("onclick", `deleteItem(${item.id})`);
        console.log(item.title);
        let tr = tBody.insertRow();
        let td1 = tr.insertCell(0);
        let id = document.createTextNode(item.id);
        td1.appendChild(id);
        let td2 = tr.insertCell(1);
        let a_name = document.createTextNode(item.a_name);
        td2.appendChild(a_name);
        let td3 = tr.insertCell(2);
        let phoneNo = document.createTextNode(item.phoneNo);
        td3.appendChild(phoneNo);
        let td4 = tr.insertCell(3);
        let flatNo = document.createTextNode(item.flatNo);
        td4.appendChild(flatNo);
        let street = document.createTextNode(item.street);
        td5.appendChild(street);
        let city = document.createTextNode(item.city);
        td6.appendChild(city);
        let state = document.createTextNode(item.state);
        td7.appendChild(state);
        let country = document.createTextNode(item.country);
        td4.appendChild(country);

        let td5 = tr.insertCell(4);
        td5.appendChild(editButton);
        let td6 = tr.insertCell(5);
        td6.appendChild(delButton);
    });
}

function getItems() {
    $('#tableid').DataTable({
        "ajax": {
            "url": "http://localhost:9090/table",
            "dataSrc": ""
        },
        "columns": [
            { "data": "id" },
            { "data": "a_name" },
            { "data": "phoneNo" },
            { "data": "flatNo" },
            { "data": "street" },
            { "data": "city" },
            { "data": "state" },
            { "data": "country" },
            { "data": "pincode" },
            { "data": "category" },
            { "data": "sub_category" },
            { "data": "open_time" },
            { "data": "close_time" },
            { "data": "ratings" }

        ]
    });
}

function pageselect() {
    console.log("first name", document.getElementById("fname").value);
    console.log("last name", document.getElementById("lname").value);

    var datas = {
        company_name: document.getElementById("cname").value,
        title: document.getElementById("title").value,
        firstname: document.getElementById("fname").value,
        lastname: document.getElementById("lname").value,
        mobile_no: document.getElementById("mno").value,
        landline_no: document.getElementById("lno").value,
    }
    console.log(datas);

    $.ajax({
        url: "http://localhost:9090/insert",
        type: "POST",
        data: JSON.stringify(datas),
        success: function (data) {
            console.log(data);
            console.log("inserted");
        },
        error: function (error) {
            console.log("error");
        },

    });
    //when the webpage is loaded
    jQuery(document).ready(function ($) {
        alert("DATA STORED SUCCESSFULLY");

    });
}



// function check(data) {
//     data.forEach(element => {
//         console.log(element.category);
//         if (element.category == "resturant") {
//             console.log(element);
//            display(data);
//         }
//     });

// }



