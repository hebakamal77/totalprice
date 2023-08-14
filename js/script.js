



var allproducts = document.querySelectorAll("#btn8")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn1")

totalprice = 0



allproducts.forEach(function(item){
    item.onclick = function()
    {
        totalprice += +(item.getAttribute("price"))
        content.innerHTML += "- "+item.textContent + "<br>" 

      
    }

})


btn.onclick = function()
{
   document.getElementById("totalprice").innerHTML = (totalprice)+"$"
}


