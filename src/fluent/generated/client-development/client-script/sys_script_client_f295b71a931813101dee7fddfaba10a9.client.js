function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
  var saveAndClose = true;
 //Type appropriate comment here, and begin script below

 if(newValue == 7){

  alert("Please chose Other Options ");
  saveAndClose = false;
 }
 
 callback(saveAndClose); 
}