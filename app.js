var gradeTable = document.getElementById("gradesTable");
var info = document.getElementById("contentDivID");

// <td>
//   <input type="checkbox" name="" value="">
// </td>
var termPoints = 0;
var termHours = 0;
var termGPA = 0;


function addSub(){
// gradeTable.innerHTML += emptySub;

var outerRow = document.createElement("tr");
var td1 = document.createElement("td");
var td2 = document.createElement("td");
var td3 = document.createElement("td");
var td4 = document.createElement("td");
var td5 = document.createElement("td");

addClass(td1);
addClass(td2);
addClass(td3);
addClass(td4);
addClass(td5);

var td1Inner = document.createElement("h2");
td1Inner.classList.add("subHeader2");

var td2Inner = document.createElement("h2");
td2Inner.classList.add("subHeader2");


var td3Inner = document.createElement("input");
td3Inner.classList.add("subField");
td3Inner.type = "text";
td3Inner.value = "";

var td4Inner = document.createElement("input");
td4Inner.classList.add("subField");
td4Inner.type = "text";
td4Inner.value = "";


var td5Inner = document.createElement("input");
td5Inner.classList.add("subField");
td5Inner.type = "text";
td5Inner.value = "";


td1.appendChild(td1Inner);
td2.appendChild(td2Inner);
td3.appendChild(td3Inner);
td4.appendChild(td4Inner);
td5.appendChild(td5Inner);

outerRow.appendChild(td1);
outerRow.appendChild(td2);
outerRow.appendChild(td3);
outerRow.appendChild(td4);
outerRow.appendChild(td5);

gradeTable.appendChild(outerRow);

}


function addClass(element){
  element.classList.add("subHeader");
}

function calcGPA(){

  termPoints = 0;
  termHours = 0;
  termGPA = 0;
  calcGrades();
  calcPoints();
  calcTermGPA();
  calcCumGPA();

}

function getGrade(grade){

if (grade!=null){
  if (grade >= 95){
    return "A+";
  }else if (grade >= 90){
      return "A";
  }else if (grade >= 85){
        return "B+";
  }else if (grade >= 80){
        return "B";
  }else if (grade >= 75){
        return "C+";
  }else if (grade >= 70){
        return "C";
  }else if (grade >= 65){
        return "D+";
  }else if (grade >= 60){
        return "D";
  }else return "F";

}else {
  alert("Grade is missing.");
}


}


var emptySub = `<tr>
  <td class="subHeader">
    <h2 class="subHeader"></h2>
  </td>
  <td class="subHeader">
    <h2 class="subHeader"></h2>
  </td>
  <td class="subHeader">
    <input class="subField" type="text" value="">
  </td>
  <td class="subHeader">
    <input class="subField" type="text" value="">
  </td>
  <td class="subHeader">
    <input class="subField" type="text" value="">
  </td>

</tr>`;

function calcGrades(){
  var rows = document.getElementById("gradesTable").children;

  for (var i = 1; i < rows.length; i++) {
    rows[i].children[1].children[0].innerHTML = getGrade(rows[i].children[3].children[0].value);
  }


}

var emptySub = `<tr>
  <td class="subHeader">
    <h2 class="subHeader"></h2>
  </td>
  <td class="subHeader">
    <h2 class="subHeader"></h2>
  </td>
  <td class="subHeader">
    <input class="subField" type="text" value="">
  </td>
  <td class="subHeader">
    <input class="subField" type="text" value="">
  </td>
  <td class="subHeader">
    <input class="subField" type="text" value="">
  </td>

</tr>`;

function calcPoints(){
  var rows = document.getElementById("gradesTable").children;

  for (var i = 1; i < rows.length; i++) {
    // alert(rows[i].children[0].children[3].children[0].value+" "+rows[i].children[0].children[2].children[0].value);
    // alert(typeof(rows[i].children[0].children[2].children[0].value));
    rows[i].children[0].children[0].innerHTML = getPoints(rows[i].children[2].children[0].value,rows[i].children[3].children[0].value);
    termPoints += getPoints(rows[i].children[2].children[0].value,rows[i].children[3].children[0].value);
  }

}

function getPoints(hours,grade){
  hours = parseInt(hours);

  if (hours!=null || hours != 0){

  switch(hours){
    case 4:{
      if (grade >= 95){
        return 20;
      }else if (grade >= 90){
          return 19;
      }else if (grade >= 85){
            return 18;
      }else if (grade >= 80){
            return 16;
      }else if (grade >= 75){
            return 14;
      }else if (grade >= 70){
            return 12;
      }else if (grade >= 65){
            return 10;
      }else if (grade >= 60){
            return 8;
      }else return 4;
    }
    case 3:{
      if (grade >= 95){
        return 15;
      }else if (grade >= 90){
          return 14.25;
      }else if (grade >= 85){
            return 13.5;
      }else if (grade >= 80){
            return 12;
      }else if (grade >= 75){
            return 10.5;
      }else if (grade >= 70){
            return 9;
      }else if (grade >= 65){
            return 7.5;
      }else if (grade >= 60){
            return 6;
      }else return 3;
    }
    case 2:{
      if (grade >= 95){
        return 10;
      }else if (grade >= 90){
          return 9.5;
      }else if (grade >= 85){
            return 9;
      }else if (grade >= 80){
            return 8;
      }else if (grade >= 75){
            return 7;
      }else if (grade >= 70){
            return 6;
      }else if (grade >= 65){
            return 5;
      }else if (grade >= 60){
            return 4;
      }else return 2;
    }
    case 1:{
      if (grade >= 95){
        return 5;
      }else if (grade >= 90){
          return 4.75;
      }else if (grade >= 85){
            return 4.5;
      }else if (grade >= 80){
            return 4;
      }else if (grade >= 75){
            return 3.5;
      }else if (grade >= 70){
            return 3;
      }else if (grade >= 65){
            return 2.5;
      }else if (grade >= 60){
            return 2;
      }else return 1;
    }

  }

}else {
  alert("Invalid Input");
}

}

var emptySub = `<tr>
  <td class="subHeader">
    <h2 class="subHeader"></h2>
  </td>
  <td class="subHeader">
    <h2 class="subHeader"></h2>
  </td>
  <td class="subHeader">
    <input class="subField" type="text" value="">
  </td>
  <td class="subHeader">
    <input class="subField" type="text" value="">
  </td>
  <td class="subHeader">
    <input class="subField" type="text" value="">
  </td>

</tr>`;

function calcTermGPA(){
  var rows = document.getElementById("gradesTable").children;

  for (var i = 1; i < rows.length; i++) {
    // alert(rows[i].children[0].children[3].children[0].value+" "+rows[i].children[0].children[2].children[0].value);
    // alert(typeof(rows[i].children[0].children[2].children[0].value));
    termHours += parseInt(rows[i].children[2].children[0].value);
  }

  info.children[1].children[0].children[1].children[0].innerHTML = termHours;
  termGPA = (termPoints/termHours).toFixed(2);
  info.children[1].children[0].children[2].children[0].innerHTML = termGPA;

}



function calcCumGPA(){
var prevHours = parseFloat(document.getElementById("prevHours").value);
var prevGPA = parseFloat(document.getElementById("prevGPA").value);

var x = prevGPA * prevHours;
var y = termGPA * termHours;
// alert("previous GPA is : "+prevGPA);
var z = x + y;
var totalHours = prevHours + termHours;
var cumGPA = (z / totalHours).toFixed(2);


info.children[1].children[1].children[1].children[0].innerHTML = totalHours;
info.children[1].children[1].children[2].children[0].innerHTML = cumGPA;


}
