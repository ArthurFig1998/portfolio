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
    
    
    
    //// HOUSE SQ FOOTAGE
//    var 400700 = document.getElementById('4-7');
//    var 701-1000 = document.getElementById('7-10');
//    var 1001-1300 = document.getElementById('10-13');
//    var 1301-1700 = document.getElementById('13-17');
//    var 1701-2100 = document.getElementById('17-21');
//    var 2101-2500 = document.getElementById('21-25');
//    var 2501-2900 = document.getElementById('25-29');
//    var 2901-3300 = document.getElementById('29-33');
//    var 33+ = document.getElementById('33+');
    ////
    
    
    /******************************************************
    Adding estimated time of service based on last cleaning
    *******************************************************/
    if(lessThanMonth.checked)
        {
            estimatedTime += 0;
        }
    else if(betweenMonthTwo.checked)
        {
            estimatedTime += 2;
        }
    else if(threeMore.checked)
        {
            estimatedTime += 4;
        }
    
    /*****************
    *****************/
    
    
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