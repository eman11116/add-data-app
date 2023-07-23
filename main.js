var BookmarkName =document.getElementById("BookmarkName")
var WebsiteURL =document.getElementById("WebsiteURL")

var user;
if(localStorage.getItem("myproducts")!=null){
    user=JSON.parse(localStorage.getItem("myproducts"))
    displayproduct()


}
else {
 user  = [];
}
function add(){
    if(validate()==true && validate2()==true){
var userValue={
name:BookmarkName.value,
url:WebsiteURL.value,

}
user.push(userValue)
localStorage.setItem("myproducts",JSON.stringify(user))
displayproduct()
clearForm()
}

else{
    alert(`plz enter valid name
    and enter valid url
   like "https://fontawesome.com/search"
    `)
}

}


function clearForm(){
    BookmarkName.value="";
    WebsiteURL.value="";
  }


function displayproduct(){
        var list=``;
    for (var i=1 ; i<user.length;i++)
        list += `
        <tr>
        <td>${i}</td>
        <td>${user[i].name}</td>
        <td><a href=" ${user[i].url}" class="btn my-btn2 " ><i class="fa-solid fa-eye "></i>Visit</a></td>
        <td><a herf="#" class="btn  my-btn1" onclick="deleteValue(${i})"><i class="fa-solid fa-trash-can "></i>Delete</a></td>
    
    </tr>`
    document.getElementById("tableList").innerHTML=list;
    
    }
    function deleteValue (index){
user.splice(index,1);
localStorage.setItem("myproducts",JSON.stringify(user))
displayproduct()
    }
function validate(){
    var regx =/^(https)/

    if (regx.test(WebsiteURL.value)==true) {
        WebsiteURL.classList.remove("is-invalid")
        WebsiteURL.classList.add("is-valid")
        return true

    }
    else{
        WebsiteURL.classList.remove("is-valid")
        WebsiteURL.classList.add("is-invalid")
return false

    }

}
function validate2(){
    var regx =/^[a-zA-Z]/


    if (regx.test(BookmarkName.value)==true) {
        BookmarkName.classList.remove("is-invalid")
        BookmarkName.classList.add("is-valid")
        return true

    }
    else{
        BookmarkName.classList.remove("is-valid")
        BookmarkName.classList.add("is-invalid")
return false
    }
    
}





