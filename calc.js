function calc(clicked_id)
  {
    var val1=parseFloat(document.getElementById("value1").value);
    var val2=parseFloat(document.getElementById("value2").value);
    if(isNaN(val1)||isNaN(val2))
    {
        alert("enter the valid number");
    }
    else if(clicked_id=="add")
    {
        document.getElementById("answer").value=val1+val2;
    }
    else if(clicked_id=="sub")
    {
        document.getElementById("answer").value=val1-val2;
    }
    else if(clicked_id=="mul")
    {
        document.getElementById("answer").value=val1*val2;
    }
    else if(clicked_id=="div")
    {
        document.getElementById("answer").value=val1/val2;
    }
  }