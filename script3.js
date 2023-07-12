//var fetch = require('node-fetch');

document.getElementById('submitIds').addEventListener('click', formPartyManual);
document.getElementById('backHomeButton2').addEventListener('click', backHome);

const theLength = 6;
let theIndex = 0;

async function formPartyManual() {
  const id1 = document.getElementById('pid1').value;
  const id2 = document.getElementById('pid2').value;
  const id3 = document.getElementById('pid3').value;
  const id4 = document.getElementById('pid4').value;
  const id5 = document.getElementById('pid5').value;
  const id6 = document.getElementById('pid6').value;

  let newArray = [id1, id2, id3, id4, id5, id6];

  theIndex = 1;
  newArray.forEach(async (i) => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, {
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    var table = document.getElementById('myTable3');

    // Create an empty <tr> element and add it to the 1st position of the table:

    // Add some text to the new cells:

    const record = await res.json();
    console.log(record);
    document.getElementById('table3thePokemon' + theIndex).innerHTML =
      '<img src=' +
      record.sprites.front_default +
      ' style="width: 150px;"></img>';
    document.getElementById('table3theId' + theIndex).innerText = record.id;
    let firstName = record.name;
    const capName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    document.getElementById('table3theName' + theIndex).innerText = capName;
    let pokeType = record.types[0].type.name;
    const capType = pokeType.charAt(0).toUpperCase() + pokeType.slice(1);
    document.getElementById('table3theType' + theIndex).innerText = capType;
    document.getElementById('table3theDes' + theIndex).innerHTML =
      '<img src=' +
      record.sprites.front_shiny +
      ' style="width: 150px;"></img>';
    theIndex++;
  });
}

async function backHome() {
  window.location.replace('index.html');
}
formPartyManual();
