function handlesubmit()
{
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var pn = document.getElementById("pn").value;
var DA = document.getElementById("DA").value;
var Cash = document.getElementById("Cash").value;
var Online = document.getElementById("Online").value;
var check = document.getElementById("check").value;
//Validation Input
if (name === "" || email ==="" || id === "" || pn === "" || DA === "" || Cash === "" || Online ===  ""|| check ===   "")
   { alert ("Please Fill the Form");
return false;
   }
}
 /* if (id.length !== 5 || isNaN(id))
    {
  alert(" ID must be exactly 5 digits.");
  return false;
  }
alert("Registration Complete \n " +
"Name:" +name + "\n" +
"ID: " + id + "\n" +
"Age:" +age + "\n" +
"Department: " + department + "\n" );    

}*/