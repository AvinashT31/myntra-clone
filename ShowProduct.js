window.onload = function(){
    // alert("working");

    var ShowProduct = document.getElementById("DisplayProduct");
    console.log(ShowProduct, "ShowProduct");

    var DataFromLS = JSON.parse(localStorage.getItem("Myntra-Data"));
    console.log(DataFromLS, "DataFromLS");

    var array = [];

    for(var i=0; i<DataFromLS.length; i++){
        
        array += `<div id=container><img src="${DataFromLS[i].Image}" alt="Image"></img><h4>${DataFromLS[i].Name}</h4><p>Rs.${DataFromLS[i].Price}</p></div>`
    }
    console.log(array, "array");
    
    ShowProduct.innerHTML = array;
    console.log(ShowProduct, "ShowProduct");
}

