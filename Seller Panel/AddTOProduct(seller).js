
function AddTheProdcuts(event){

    event.preventDefault();
    // alert("Working");

    var ProductImage = document.getElementById("Image").value;
    var ProductName = document.getElementById("Name").value;
    var ProductPrice = document.getElementById("Price").value;

    var ProductData = {Image:ProductImage, Name:ProductName, Price:ProductPrice }
    console.log(ProductData, "ProductData");

    var DataFromLS = JSON.parse(localStorage.getItem("Myntra-Data")) || [];
    DataFromLS.push(ProductData);
    console.log(DataFromLS, "DataFromLS");
    localStorage.setItem("Myntra-Data", JSON.stringify(DataFromLS)); 
    alert("Product Added to the Website");
    document.getElementById("Image").value = '';
    document.getElementById("Name").value = '';
    document.getElementById("Price").value = '';
}
