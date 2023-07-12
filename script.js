//var fetch = require('node-fetch');

document.getElementById('myButton').addEventListener('click', fetchData);
document.getElementById('submit').addEventListener('click', fetchSolo);
document.getElementById('submitTeam').addEventListener('click', formParty);
document
  .getElementById('submitTeamManual')
  .addEventListener('click', submitManual);

async function fetchData() {
  const theNumb = Math.floor(Math.random() * 1010);
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + theNumb, {
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  const record = await res.json();
  //console.log(JSON.stringify(record));
  document.getElementById('thePokemon').innerHTML =
    '<img src=' +
    record.sprites.front_default +
    ' style="width: 150px;"></img>';
  document.getElementById('theId').innerText = record.id;
  let firstName = record.name;
  const capName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  document.getElementById('theName').innerText = capName;
  let pokeType = record.types[0].type.name;
  const capType = pokeType.charAt(0).toUpperCase() + pokeType.slice(1);
  document.getElementById('theType').innerText = capType;
  document.getElementById('theDes').innerHTML =
    '<img src=' + record.sprites.front_shiny + ' style="width: 150px;"></img>';
}
async function fetchSolo() {
  const theNumb = document.getElementById('fname').value;
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + theNumb, {
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  const record = await res.json();
  //console.log(record);
  document.getElementById('thePokemon').innerHTML =
    '<img src=' +
    record.sprites.front_default +
    ' style="width: 150px;"></img>';
  document.getElementById('theId').innerText = record.id;
  let firstName = record.name;
  const capName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  document.getElementById('theName').innerText = capName;
  let pokeType = record.types[0].type.name;
  const capType = pokeType.charAt(0).toUpperCase() + pokeType.slice(1);
  document.getElementById('theType').innerText = capType;
  document.getElementById('theDes').innerHTML =
    '<img src=' + record.sprites.front_shiny + ' style="width: 150px;"></img>';

  document.getElementById('thePokemon2').innerHTML =
    '<img src=' +
    record.sprites.front_default +
    ' style="width: 150px;"></img>';
  document.getElementById('theId2').innerText = record.id;
  let firstName2 = record.name;
  const capName2 = firstName2.charAt(0).toUpperCase() + firstName2.slice(1);
  document.getElementById('theName2').innerText = capName2;
  let pokeType2 = record.types[0].type.name;
  const capType2 = pokeType2.charAt(0).toUpperCase() + pokeType2.slice(1);
  document.getElementById('theType2').innerText = capType;
  document.getElementById('theDes2').innerHTML =
    '<img src=' + record.sprites.front_shiny + ' style="width: 150px;"></img>';
}

async function submitManual() {
  window.location.replace('buildteam.html');
}
async function formParty() {
  window.location.replace('generateteam.html');
  /*setTimeout(100);
  theIndex = 2;
  for (i = 0; i < theLength; i++) {
    const theNumb = Math.floor(Math.random() * 1281);
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + theNumb, {
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    var table = document.getElementById('myTable2');

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(theIndex);
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    cell1.id = 'cell0' + theIndex;
    var cell2 = row.insertCell(1);
    cell2.id = 'cell1' + theIndex;
    var cell3 = row.insertCell(2);
    cell3.id = 'cell2' + theIndex;
    var cell4 = row.insertCell(3);
    cell4.id = 'cell3' + theIndex;
    var cell5 = row.insertCell(4);
    cell5.id = 'cell4' + theIndex;

    // Add some text to the new cells:

    const record = await res.json();
    //console.log(record);
    cell1.innerHTML =
      '<img src=' +
      record.sprites.front_default +
      ' style="width: 150px;"></img>';
    cell2.innerText = record.id;
    let firstName = record.name;
    const capName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    cell3.innerText = capName;
    let pokeType = record.types[0].type.name;
    const capType = pokeType.charAt(0).toUpperCase() + pokeType.slice(1);
    cell4.innerText = capType;
    cell5.innerHTML =
      '<img src=' +
      record.sprites.front_shiny +
      ' style="width: 150px;"></img>';
    theIndex++;
  } */
}
/*
async function formParty2() {
  theIndex = 2;
  for (i = 0; i < theLength; i++) {
    const theNumb = Math.floor(Math.random() * 1281);
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + theNumb, {
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    var table = document.getElementById('myTable2');

    // Create an empty <tr> element and add it to the 1st position of the table:

    var row = table.insertRow(theIndex);
    row.id = 'row' + theIndex;

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = document.getElementById('cell0' + theIndex);
    var cell2 = document.getElementById('cell1' + theIndex);
    var cell3 = document.getElementById('cell2' + theIndex);
    var cell4 = document.getElementById('cell3' + theIndex);
    var cell5 = document.getElementById('cell4' + theIndex);
    // Add some text to the new cells:

    const record = await res.json();
    //console.log(record);
    cell1.innerHTML =
      '<img src=' +
      record.sprites.front_default +
      ' style="width: 150px;"></img>';
    cell2.innerText = record.id;
    let firstName = record.name;
    const capName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    cell3.innerText = capName;
    let pokeType = record.types[0].type.name;
    const capType = pokeType.charAt(0).toUpperCase() + pokeType.slice(1);
    cell4.innerText = capType;
    cell5.innerHTML =
      '<img src=' +
      record.sprites.front_shiny +
      ' style="width: 150px;"></img>';
    theIndex++;
  }
  $('#submitTeam').attr('onclick', 'formParty2');
}
*/
fetchData();
