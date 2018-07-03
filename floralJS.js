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

function calcEstimate(event)
{
    event.preventDefault();
    console.log(event);
    var dollarsPerHour = 24;
    var estimatedTime = 4;
    var form = event.target;
    form.style.display = "none";
    
    
    ///TYPE OF CLEANING
    var standard = document.getElementById('standard');
    var deep = document.getElementById('deep');
    var onceWeek = document.getElementById('onceWeek');
    var onceTwoWeeks = document.getElementById('onceTwoWeeks');
    var onceMonth = document.getElementById('onceMonth');
    var onceTwoMonths = document.getElementById('onceTwoMonths');
    var onceThreeMonths = document.getElementById('onceThreeMonths');
    ///
    
    /****************
    Defining pricing
    ****************/
    if(deep.checked)
        {
            dollarsPerHour = 27;
            estimatedTime += 12;
        }
   
    
    else if(onceWeek.checked)
            dollarsPerHour = 20;
    else if(onceTwoWeeks.checked)
            dollarsPerHour = 21;
    else if(onceMonth.checked)
            dollarsPerHour = 22;
    else if(onceTwoMonths.checked)
            dollarsPerHour = 23;
    else if(onceThreeMonths.checked)
            dollarsPerHour = 24;
    
    
    /************
    Last Cleaning
    ************/
    var lessThanMonth = document.getElementById('lessMonth');
    var betweenMonthTwo = document.getElementById('betweenMonthTwo');
    var threeMore = document.getElementById('threeMore');

    
     
    if(lessThanMonth.checked)
            estimatedTime += 0;
    else if(betweenMonthTwo.checked)
            estimatedTime += 2;
    else if(threeMore.checked)
            estimatedTime += 4;
    
    
    /*********
    House size
    **********/
    var smallish = document.getElementById('4-7');
    var small = document.getElementById('7-10');
    var mediumish = document.getElementById('10-13');
    var medium = document.getElementById('13-17');
    var largeish = document.getElementById('17-21');
    var large = document.getElementById('21-25');
    var bigish = document.getElementById('25-29');
    var big = document.getElementById('29-33');
    var bigger = document.getElementById('33+');
   
    
   
    if(smallish.checked)
        estimatedTime += 1;
    else if(small.checked)
        estimatedTime += 2;
    else if(mediumish.checked)
        estimatedTime += 3;
    else if(medium.checked)
        estimatedTime += 4;
    else if(largeish.checked)
        estimatedTime += 5;
    else if(large.checked)
        estimatedTime += 6;
    else if(bigish.checked)
        estimatedTime += 7;
    else if(big.checked)
        estimatedTime += 8;
    else if(bigger.checked)
        estimatedTime += 9;
    
    
    /***************
    Bathroom Amount
    ***************/
    var oneTwo = document.getElementById('1-2');
    var threeFour = document.getElementById('3-4');
    var fiveSix = document.getElementById('5-6');
    var six = document.getElementById('6');
    
    if(oneTwo.checked)
        estimatedTime += 1;
    else if(threeFour.checked)
        estimatedTime += 2;
    else if(fiveSix.checked)
        estimatedTime +=3;
    else if(six.checked)
        estimatedTime += 4;
    
    
    /*************
    Inside fridge?
    *************/
    
    var insideFridge = document.getElementById('fridgeY');
    
    if(insideFridge.checked)
        estimatedTime += 1;
    
    /********
    Pets?
    ********/
    
    var havePets = document.getElementById('petY');
    
    if(petY.checked)
        estimatedTime += 2;
    
    
    
    
    var finalPrice = estimatedTime * dollarsPerHour;
    
    document.getElementById('finalMessage').style.display = "block";
    document.getElementById('finalPrice').innerHTML = finalPrice;
    
    
    console.log(estimatedTime, dollarsPerHour);
    
    
}

document.getElementById('formTesting').addEventListener("submit", calcEstimate);