//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () {
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var downArrowFlags = [true, true, true];
var checkedList = [];
var checkBoxFlags = [true, true, true];

var t = new Title("CONNECT WITH ME!");

var rowCount = 0;

function addButton() {
  var deleteButton = document.createElement("button");
  
  deleteButton.setAttribute("value", "Delete");
  
  deleteButton.innerHTML = "Delete";
  
  deleteButton.setAttribute("onclick", "deleteRow(this)");
  
  deleteButton.setAttribute("class", "hidden");
  
  var editButton = document.createElement("button");
  editButton.setAttribute("value","Edit");
  editButton.innerHTML = "Edit";
  editButton.setAttribute("onclick", "editRow(this)");
  editButton.setAttribute("class","hidden");

  var table = document.getElementById("myTable");
  var row = table.insertRow();
  row.setAttribute("class", "newrow");
  var c1 = row.insertCell(0);
  c1.innerHTML =
    '<input type="checkbox" onclick="Checked(this)" /><br /><br /><img src="down.png" width="25px" onclick="downArrow(this)" />';
  var c2 = row.insertCell(1);
  var c3 = row.insertCell(2);
  var c4 = row.insertCell(3);
  var c5 = row.insertCell(4);
  var c6 = row.insertCell(5);
  var c7 = row.insertCell(6);
  var c8 = row.insertCell(7);
  var c9 = row.insertCell(8);
  var c10 = row.insertCell(9);
  rowCount = document.getElementById("myTable").getElementsByTagName("tr").length/2;
  var items = ['Failed', 'Passed'];
  var intake = ['Spring', 'Fall', 'Summer'];
  var assistant = ['TA', 'RA'];
  c2.innerHTML = "Student "+rowCount;
  c3.innerHTML = "Teacher "+rowCount;
  c4.innerHTML = items[Math.floor(Math.random()*items.length)];
  c5.innerHTML = intake[Math.floor(Math.random()*intake.length)];
  c6.innerHTML = assistant[Math.floor(Math.random()*assistant.length)];
  c7.innerHTML = Math.floor(Math.random()*100000);
  c8.innerHTML = Math.floor(Math.random()*100) + "%";
  c9.appendChild(deleteButton);
  c10.appendChild(editButton);

  checkBoxFlags.push("true");
  downArrowFlags.push("true");

  var row2 = table.insertRow();
  row2.classList.add("hidden");
  row2.innerHTML =
    '<tr class="dropDownTextArea hidden"><td colspan="8"> Advisor:<br /><br /> Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /></td></tr>';
  }

function deleteRow(x) {
  try{
    var rowElement = x.parentElement.parentElement;
    var rowIndex = rowElement.rowIndex;
    document.getElementById("myTable").deleteRow(rowIndex + 1);
    document.getElementById("myTable").deleteRow(rowIndex);
    var flagIndex = (rowIndex - 1) / 2;
    downArrowFlags.splice(flagIndex, 1);
    checkBoxFlags.splice(flagIndex, 1);
    checkedList.pop();
    if (checkedList.length == 0) {
      document.getElementById("button").disabled = true;
      document.getElementById("button").style.backgroundColor = "grey";
      console.log(document.getElementById("button").disabled);
    }
    alert("Record deleted successfully");
  }
  catch(err)
  {
    Message.innerHTML = "Cant delete this row";
  }
  
}
function editRow(x) {
  alert("Edit the details");
}


function Checked(x) {
  var rowElement = x.parentElement.parentElement;

  var rowIndex = rowElement.rowIndex;
  var flagIndex = (rowIndex - 1) / 2;
  console.log(rowElement);
  var lastcolumn = rowElement.lastElementChild;
  var delcolumn = lastcolumn.previousElementSibling;
  var button = lastcolumn.children[0];
  var delbutton = delcolumn.children[0];
  if (checkBoxFlags[flagIndex]) {
    rowElement.style.backgroundColor = "yellow";
    checkBoxFlags[flagIndex] = false;
    button.classList.remove("hidden");
    delbutton.classList.remove("hidden");
    checkedList.push(flagIndex);
  } else {
    checkBoxFlags[flagIndex] = true;
    rowElement.style.backgroundColor = "white";
    button.classList.add("hidden");
    delbutton.classList.add("hidden");
    var toDeleteRowIndex = checkedList.indexOf(flagIndex);
    checkedList.splice(toDeleteRowIndex, 1);
  }

  console.log(checkedList);

  if (checkedList.length == 0) {
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.backgroundColor = "grey";
    console.log(document.getElementById("button").disabled);
  } else {
    document.getElementById("button").disabled = false;
    document.getElementById("button").style.backgroundColor = "#a7c942";
    console.log(document.getElementById("button").disabled);
  }
}


function downArrow(x) {
  var rowElement = x.parentElement.parentElement;
  console.log(rowElement);
  var rowIndex = rowElement.rowIndex;
  var flagIndex = (rowIndex - 1) / 2;
  if (downArrowFlags[flagIndex]) {
    console.log("true");
    console.log(rowElement);
    if (rowElement.classList.contains("newrow"))
      var exRow = rowElement.nextSibling;
    else var exRow = rowElement.nextSibling.nextSibling;
    exRow.classList.remove("hidden");
    downArrowFlags[flagIndex] = false;
  } else {
    console.log("false");
    if (rowElement.classList.contains("newrow"))
      var exRow = rowElement.nextSibling;
    else var exRow = rowElement.nextSibling.nextSibling;
    exRow.classList.add("hidden");
    downArrowFlags[flagIndex] = true;
  }
}