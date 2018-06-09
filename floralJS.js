function myFunction()
{
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav")
        {
           x.className += " responsive";
        }
        else
        {
            x.className = "topnav";
        }
}
            
function checkType()
{
    if(document.getElementById('standard').checked)
        freqCleaning.style.display = "block";
    else
        freqCleaning.style.display = "none";
}
            
function checkPet()
{
    if(document.getElementById('petY').checked)
        petYes.style.display = "block";
    else
        petYes.style.display = "none";    
}

function calcEstimate()
{
    var dollarsPerHour = 24;
    var estimatedTime = 0;
    
    ///TYPE OF CLEANING
    var standard = document.getElementById('standard');
    var deep = document.getElementById('deep');
    var onceWeek = document.getElementById('onceWeek');
    var onceTwoWeeks = document.getElementById('onceTwoWeeks');
    var onceMonth = document.getElementById('onceMonth');
    var onceTwoMonths = document.getElementById('onceTwoMonths');
    var onceThreeMonths = document.getElementById('onceThreeMonths');
    ///
    
    ///LAST CLEANING
    var lessThanMonth = document.getElementById('lessMonth');
    var betweenMonthTwo = document.getElementById('betweenMonthTwo');
    var threeMore = document.getElementById('threeMore');
    ///
    
    
    
    /****************
    Defining pricing
    ****************/
    if(deep.checked)
        {
            dollarsPerHour = 27;
            estimatedTime += 12;
        }
    else
        {
            estimatedTime = 0;
        }
    
    if(onceWeek.checked)
        {
            dollarsPerHour = 20;
        }
    else if(onceTwoWeeks.checked)
        {
            dollarsPerHour = 21;
        }
    else if(onceMonth.checked)
        {
            dollarsPerHour = 22;
        }
    else if(onceTwoMonths.checked)
        {
            dollarsPerHour = 23;
        }
    else if(onceThreeMonths.checked)
        {
            dollarsPerHour = 24;
        }
    
    
    console.log(estimatedTime, dollarsPerHour);
}