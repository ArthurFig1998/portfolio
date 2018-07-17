import shipController from './ships';

console.log(shipController.getShips());
console.log(shipController.getShipByName('Executor'));

// check to see if javascript is working
function component() {
  const element = document.createElement('p');

  element.innerHTML = 'Setup Appears to be working &#128521;';

  return element;
}
document.body.appendChild(component());


function testingShips()
{
    var ships = shipController.getShips();
    var i, j, x = "";
    for (i of ships)
    {
        x += "<h1>" + i.name + "</h1>";
        x += i.model;
    }
}
// shipController.getShips().then((data) => {
//   console.log(data);
// });
