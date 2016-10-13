//Last Change: Esteban MALAVAL 2016-06-07
function onopen()
{
	hideAndShow();
}

function hideAndShow()
{
	if(document.getElementById("type_of_fault_id").value=="Short Line Fault")
	{
		document.getElementById("distance_line_id").style.display="";
	}
	else
	{
		document.getElementById("distance_line_id").style.display="none";
	}
}