window.onload = hideContent;

var androidFront = '<img src="./androidFront.png">';
var androidBack = '<img src="./androidBack.png">';

function generate()
{
  // initialize table
  var table = document.getElementById('androidTable');
  showContent();
	
  //remove previous data if there is any
  var rowLen = table.rows.length;	
  if(rowLen>0) 
    for(i=0;i<rowLen;i++)
      table.deleteRow(0);
			
  // get #s of rows and cols from the textfields
  var rows = 5;
  var cols = rows;
				
  // populate table
  for(i=0;i<rows+1;i++)
    {		
      var row = table.insertRow(i);		
      var count = 0;
		
      for(j=0;j<cols+1;j++)
	{			
	  var cell = row.insertCell(j);
	  var img;			
			
	  if(j != cols)
	    {
	      var ran = parseInt(Math.random()*2);						
	      if(ran == 0) img = androidFront;
	      else img = androidBack;
	      cell.innerHTML = img;				
	      count += ran;
	    }
	  else // last column
	    {
	      if(rows%2==0){
		if((count+1)%2 != 0) img = androidBack;
		else img = androidFront;
	      }else{
		if((count+1)%2 != 0) img = androidFront;
		else img = androidBack;
	      }
	      cell.innerHTML = img;
	    }
	}
    }	
  // last row
  for(i=0;i<cols+1;i++)
    {
      var counter = 0;
      for(j=0;j<rows;j++)				
	if(table.rows[j].cells[i].innerHTML == androidFront)
	  counter++;							
		
      if(counter%2 == 0)			
	table.rows[rows].cells[i].innerHTML = androidBack;		
      else					
	table.rows[rows].cells[i].innerHTML = androidFront;		
    }
  checkClick(table);	
}
	
// hide label
function hideContent(){
  document.getElementById('label').style.display='none';
}
// show label
function showContent(){
  document.getElementById('label').style.display='block';
}
// flip android when clicked
function checkClick(table){
  if (table != null) {
    for (var i = 0; i < table.rows.length; i++) {
      for (var j = 0; j < table.rows[i].cells.length; j++)
	table.rows[i].cells[j].onclick = function () {

	  if(this.innerHTML == androidFront)
	    this.innerHTML = androidBack;
	  else
	    this.innerHTML = androidFront;
				
	};
    }
  }
}