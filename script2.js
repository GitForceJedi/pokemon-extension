//var fetch = require('node-fetch');

document.getElementById('myTeamButton').addEventListener('click', formParty1);
document.getElementById('backHomeButton').addEventListener('click', backHome);

const theLength = 6;
let theIndex = 0;
async function formParty() {
  window.location.replace('index2.html');
  setTimeout(100);
  theIndex = 2;
  for (i = 0; i < theLength; i++) {
    const theNumb = Math.floor(Math.random() * 1010);
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
  }
}
async function formParty1() {
  theIndex = 1;
  for (i = 0; i < theLength; i++) {
    const theNumb = Math.floor(Math.random() * 1010);
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + theNumb, {
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    var table = document.getElementById('myTable2');

    // Create an empty <tr> element and add it to the 1st position of the table:

    // Add some text to the new cells:

    const record = await res.json();
    //console.log(record);
    document.getElementById('thePokemon' + theIndex).innerHTML =
      '<img src=' +
      record.sprites.front_default +
      ' style="width: 150px;"></img>';
    document.getElementById('theId' + theIndex).innerText = record.id;
    let firstName = record.name;
    const capName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    document.getElementById('theName' + theIndex).innerText = capName;
    let pokeType = record.types[0].type.name;
    const capType = pokeType.charAt(0).toUpperCase() + pokeType.slice(1);
    document.getElementById('theType' + theIndex).innerText = capType;
    document.getElementById('theDes' + theIndex).innerHTML =
      '<img src=' +
      record.sprites.front_shiny +
      ' style="width: 150px;"></img>';
    theIndex++;
  }
}

async function formParty2() {
  const theNumb = Math.floor(Math.random() * 1010);
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + theNumb, {
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  var table = document.getElementById('myTable2');

  // Create an empty <tr> element and add it to the 1st position of the table:

  // Add some text to the new cells:

  const record = await res.json();
  //console.log(record);
  document.getElementById('thePokemon1').innerHTML =
    '<img src=' +
    record.sprites.front_default +
    ' style="width: 150px;"></img>';
  document.getElementById('theId1').innerText = record.id;
  let firstName = record.name;
  const capName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  document.getElementById('theName1').innerText = capName;
  let pokeType = record.types[0].type.name;
  const capType = pokeType.charAt(0).toUpperCase() + pokeType.slice(1);
  document.getElementById('theType1').innerText = capType;
  document.getElementById('theDes1').innerHTML =
    '<img src=' + record.sprites.front_shiny + ' style="width: 150px;"></img>';

  const theNumb2 = Math.floor(Math.random() * 1010);
  const res2 = await fetch('https://pokeapi.co/api/v2/pokemon/' + theNumb2, {
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  // Create an empty <tr> element and add it to the 1st position of the table:

  // Add some text to the new cells:

  const record2 = await res2.json();
  //console.log(record);
  document.getElementById('thePokemon2').innerHTML =
    '<img src=' +
    record2.sprites.front_default +
    ' style="width: 150px;"></img>';
  document.getElementById('theId2').innerText = record2.id;
  let firstName2 = record2.name;
  const capName2 = firstName2.charAt(0).toUpperCase() + firstName2.slice(1);
  document.getElementById('theName2').innerText = capName2;
  let pokeType2 = record2.types[0].type.name;
  const capType2 = pokeType2.charAt(0).toUpperCase() + pokeType2.slice(1);
  document.getElementById('theType2').innerText = capType2;
  document.getElementById('theDes2').innerHTML =
    '<img src=' + record2.sprites.front_shiny + ' style="width: 150px;"></img>';

  const theNumb3 = Math.floor(Math.random() * 1010);
  const res3 = await fetch('https://pokeapi.co/api/v2/pokemon/' + theNumb3, {
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  // Create an empty <tr> element and add it to the 1st position of the table:

  // Add some text to the new cells:

  const record3 = await res3.json();
  //console.log(record);
  document.getElementById('thePokemon3').innerHTML =
    '<img src=' +
    record3.sprites.front_default +
    ' style="width: 150px;"></img>';
  document.getElementById('theId3').innerText = record3.id;
  let firstName3 = record3.name;
  const capName3 = firstName3.charAt(0).toUpperCase() + firstName3.slice(1);
  document.getElementById('theName3').innerText = capName3;
  let pokeType3 = record3.types[0].type.name;
  const capType3 = pokeType3.charAt(0).toUpperCase() + pokeType3.slice(1);
  document.getElementById('theType3').innerText = capType3;
  document.getElementById('theDes3').innerHTML =
    '<img src=' + record3.sprites.front_shiny + ' style="width: 150px;"></img>';

  const theNumb4 = Math.floor(Math.random() * 1010);
  const res4 = await fetch('https://pokeapi.co/api/v2/pokemon/' + theNumb4, {
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  // Create an empty <tr> element and add it to the 1st position of the table:

  // Add some text to the new cells:

  const record4 = await res4.json();
  //console.log(record);
  document.getElementById('thePokemon4').innerHTML =
    '<img src=' +
    record4.sprites.front_default +
    ' style="width: 150px;"></img>';
  document.getElementById('theId4').innerText = record4.id;
  let firstName4 = record4.name;
  const capName4 = firstName4.charAt(0).toUpperCase() + firstName4.slice(1);
  document.getElementById('theName4').innerText = capName4;
  let pokeType4 = record4.types[0].type.name;
  const capType4 = pokeType4.charAt(0).toUpperCase() + pokeType4.slice(1);
  document.getElementById('theType4').innerText = capType4;
  document.getElementById('theDes4').innerHTML =
    '<img src=' + record4.sprites.front_shiny + ' style="width: 150px;"></img>';

  // Create an empty <tr> element and add it to the 1st position of the table:

  // Add some text to the new cells:

  const theNumb5 = Math.floor(Math.random() * 1010);
  const res5 = await fetch('https://pokeapi.co/api/v2/pokemon/' + theNumb5, {
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  // Create an empty <tr> element and add it to the 1st position of the table:

  // Add some text to the new cells:

  const record5 = await res5.json();
  //console.log(record);
  document.getElementById('thePokemon5').innerHTML =
    '<img src=' +
    record5.sprites.front_default +
    ' style="width: 150px;"></img>';
  document.getElementById('theId5').innerText = record5.id;
  let firstName5 = record5.name;
  const capName5 = firstName5.charAt(0).toUpperCase() + firstName5.slice(1);
  document.getElementById('theName5').innerText = capName5;
  let pokeType5 = record5.types[0].type.name;
  const capType5 = pokeType5.charAt(0).toUpperCase() + pokeType5.slice(1);
  document.getElementById('theType5').innerText = capType5;
  document.getElementById('theDes5').innerHTML =
    '<img src=' + record5.sprites.front_shiny + ' style="width: 150px;"></img>';

  const theNumb6 = Math.floor(Math.random() * 1010);
  const res6 = await fetch('https://pokeapi.co/api/v2/pokemon/' + theNumb6, {
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  // Create an empty <tr> element and add it to the 1st position of the table:

  // Add some text to the new cells:

  const record6 = await res6.json();
  //console.log(record);
  document.getElementById('thePokemon6').innerHTML =
    '<img src=' +
    record6.sprites.front_default +
    ' style="width: 150px;"></img>';
  document.getElementById('theId6').innerText = record6.id;
  let firstName6 = record6.name;
  const capName6 = firstName6.charAt(0).toUpperCase() + firstName6.slice(1);
  document.getElementById('theName6').innerText = capName6;
  let pokeType6 = record6.types[0].type.name;
  const capType6 = pokeType6.charAt(0).toUpperCase() + pokeType6.slice(1);
  document.getElementById('theType6').innerText = capType6;
  document.getElementById('theDes6').innerHTML =
    '<img src=' + record6.sprites.front_shiny + ' style="width: 150px;"></img>';
}

async function backHome() {
  window.location.replace('index.html');
}
formParty1();
