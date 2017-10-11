var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}
if (mm < 10) {
  mm = ')' + mm;
}

today = dd+'/'+mm+'/'+yyyy;
console.log(today);

today = dd+'-'+mm+'-'+yyyy;
console.log(today);
