function checkType()
{
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');
  var emailType = document.getElementById('emailType');
  var phoneType = document.getElementById('phoneType');
  
  if(email.checked)
  {
      emailType.style.display = "block";
      phoneType.style.display = "none";
  }
  else if(phone.checked)
  {
    
      phoneType.style.display = "block";
      emailType.style.display = "none";
  }
    
}
