//Last Change: Esteban MALAVAL 2016-06-07
function onopen(global)
{
	selbox=document.getElementById("line_id");
	if(global.lineList!='none')
	{
		for(i=0;i<global.lineList.length;i++)
		{
			selbox.options[selbox.options.length] = new Option(global.lineList[selbox.options.length],    global.lineList[selbox.options.length]);
		}
	}
	else
	{
		document.getElementById("line_line_id").style.display='none';
		document.getElementById("distance_line_id").style.display='none';
	}
}