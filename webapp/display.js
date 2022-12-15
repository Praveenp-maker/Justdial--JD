function displayItems(data) {
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

function dataByCategory(y) {
    let x=[];
   
    alert("called");
   var datas={
    data:y
};
   console.log(datas);
    $.ajax({
            
        url: "http://localhost:9090/category",
        type: "POST",
        data: JSON.stringify(datas),

        success: function (data) {
            console.log(data);
            x=JSON.parse(data);
            check(x);
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });
}


function check(data) {
    alert();
    data.forEach(element => {
        console.log(element.category);

    let a=element.category;
    console.log(a);
    switch(a){
        case "Resturant":
          
            // console.log(element);
            display(data);
            function displayItems(data) {
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

function dataByCategory(y) {
    let x=[];
   
    alert("called");
   var datas={
    data:y
};
   console.log(datas);
    $.ajax({
            
        url: "http://localhost:9090/category",
        type: "POST",
        data: JSON.stringify(datas),

        success: function (data) {
            console.log(data);
            x=JSON.parse(data);
            check(x);
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });
}


function check(data) {
    alert();
    data.forEach(element => {
        console.log(element.category);

    let a=element.category;
    console.log(a);
    switch(a){
        case "Resturant":
            // console.log(element);
            

            display(data);
            
            break;

         case "Dental Hospital":
                // console.log(element);
                display(data);
                
                break;  
         case "Car Dealers":
            display(data);
            break;
            
         case  "Online Reservation":
            display(data);
            break;
            
          case "Medicals":
            display(data);
            break;
            
          case "Milk Products":
            display(data);
            break;  

          case "Decor":
            display(data);
            break;
            
          case "Salons":
            display(data);
            break;  


    }
});
}
    function display(data) {
        alert("displayy");

  
    

        data.forEach(element => {
            console.log(element.category);
            alert("for");
            let xm=document.createElement("div");
            xm.style.background="Blue";
            xm.style.height="300px";
            xm.style.width="150px";
            xm.style.color="white";
            xm.style.fontFamily="impact";
        document.body.appendChild(xm);
        xm.innerHTML=element.category+"<br>  "+element.sub_category+"<br> "+element.a_name+"<br> "+element.flatNo+"<br> "+element.city+"<br> "+element.state+"<br> "+element.country+"<br> "+element.pincode+"<br> "+element.phoneNo+"<br> "+element.open_time+"<br> "+element.close_time+"<br> "+element.ratings;
       
        // let a=element.category;
      
            
            
    
            });}
    


    //     if (element.category == "resturant") {
    //         console.log(element); 
    //         display(element);
    //       // console.log(element);
    //     }
    // });

    



// function display(data) {
    
//     console.log("display called");
// console.log(data);
//     let jd = [];

//     jd = data
// // console.log(jd);
//     let output = ""
//     for (let objs in jd) {

//         output = '<div class="d-flex flex me-4">'


//         // Array.from(jd).forEach(item => {
//         //     console.log(item);
        
//             jd.forEach(item => {
//                 output += `
     
//        ${item.id}

//        ${item.a_name}

//        ${item.phoneNo}

//        ${item.flatNo}

//        ${item.city}

//        ${item.state}

//        ${item.country}

//        ${item.pincode}

//        ${item.sub_category}

//        ${item.open_time}

//        ${item.close_time}

//        ${item.ratings}` })

//         output += '</div>' 
    //  }
//     main.insertAdjacentHTML('afterbegin', output)

//  }
    
            
            break;

         case "Dental Hospital":
                // console.log(element);
                display(data);
                
                break;  
         case "Car Dealers":
            display(data);
            break;
            
         case  "Online Reservation":
            display(data);
            break;
            
          case "Medicals":
            display(data);
            break;
            
          case "Milk Products":
            display(data);
            break;  

          case "Decor":
            display(data);
            break;
            
          case "Salons":
            display(data);
            break;  


    }
});
}
    function display(data) {
        alert("displayy");

  


        data.forEach(element => {
            console.log(element.category);
            alert("for");
            let xm=document.createElement("div");
            xm.style.background="red";
            xm.style.height="300px";
            xm.style.width="150px";
            xm.style.color="white";
            xm.style.fontFamily="impact";
        document.body.appendChild(xm);
        xm.innerHTML=element.category+"<br>  "+element.sub_category+"<br> "+element.a_name+"<br> "+element.flatNo+"<br> "+element.city+"<br> "+element.state+"<br> "+element.country+"<br> "+element.pincode+"<br> "+element.phoneNo+"<br> "+element.open_time+"<br> "+element.close_time+"<br> "+element.ratings;
    
        // let a=element.category;
      
            
            
    
            });}
    


    //     if (element.category == "resturant") {
    //         console.log(element); 
    //         display(element);
    //       // console.log(element);
    //     }
    // });

    



// function display(data) {
    
//     console.log("display called");
// console.log(data);
//     let jd = [];

//     jd = data
// // console.log(jd);
//     let output = ""
//     for (let objs in jd) {

//         output = '<div class="d-flex flex me-4">'


//         // Array.from(jd).forEach(item => {
//         //     console.log(item);
        
//             jd.forEach(item => {
//                 output += `
     
//        ${item.id}

//        ${item.a_name}

//        ${item.phoneNo}

//        ${item.flatNo}

//        ${item.city}

//        ${item.state}

//        ${item.country}

//        ${item.pincode}

//        ${item.sub_category}

//        ${item.open_time}

//        ${item.close_time}

//        ${item.ratings}` })

//         output += '</div>' 
    //  }
//     main.insertAdjacentHTML('afterbegin', output)

//  }
    