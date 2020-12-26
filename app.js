var gradeTable = document.getElementById("gradesTable");
var info = document.getElementById("contentDivID");
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
// <td>
//   <input type="checkbox" name="" value="">
// </td>
var termPoints = 0;
var termHours = 0;
var termGPA = 0;


function addSub(){
gradeTable.innerHTML += emptySub;
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

  alert("Alreted");
}


function calcGrades(){
  var rows = document.getElementById("gradesTable").children;

  for (var i = 1; i < rows.length; i++) {
    rows[i].children[0].children[1].innerHTML = getGrade(rows[i].children[0].children[3].children[0].value);
  }

}

function calcPoints(){
  var rows = document.getElementById("gradesTable").children;

  for (var i = 1; i < rows.length; i++) {
    // alert(rows[i].children[0].children[3].children[0].value+" "+rows[i].children[0].children[2].children[0].value);
    // alert(typeof(rows[i].children[0].children[2].children[0].value));
    rows[i].children[0].children[0].innerHTML = getPoints(rows[i].children[0].children[3].children[0].value,rows[i].children[0].children[2].children[0].value);
    termPoints += getPoints(rows[i].children[0].children[3].children[0].value,rows[i].children[0].children[2].children[0].value);
  }

}

function getPoints(grade,hours){
  hours = parseInt(hours);

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

}

function calcTermGPA(){
  var rows = document.getElementById("gradesTable").children;

  for (var i = 1; i < rows.length; i++) {
    // alert(rows[i].children[0].children[3].children[0].value+" "+rows[i].children[0].children[2].children[0].value);
    // alert(typeof(rows[i].children[0].children[2].children[0].value));
    termHours += parseInt(rows[i].children[0].children[2].children[0].value);
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
