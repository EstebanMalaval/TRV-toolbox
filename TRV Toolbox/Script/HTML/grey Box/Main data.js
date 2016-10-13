//Last Change: Esteban MALAVAL 2016-06-07
function onopen(global)
{
	File = global.SPFile();   				//Give an SPFile object
	brklist=global.breakerlist[0];	//Load the list of breakers
	lineList=global.lineList;				//Load the list of lines
	pin0=global.breakerlist[1];		//Load the list of first pin of breakers
	pin1=global.breakerlist[2];		//Load the list of second pin of breakers
	
	//*Put the list of breakers in the html page
	selbox=document.getElementById("breaker_id");
	while(selbox.options.length<brklist.length)
	{
		selbox.options[selbox.options.length] = new Option(brklist[selbox.options.length],    brklist[selbox.options.length]);
	}
	selbox.value=global.breaker;
	searchTerminal(global.breaker);
	
	statusbar.innerHTML="<li class=status_bar>The breaker, the bus and the line on which the TRV analysis will be done must be in the main design</li>";
	
	//*Put the list of lines in the html page
	selbox_line=document.getElementById("line_id");
	while(selbox_line.options.length<lineList.length)
	{
		selbox_line.options[selbox_line.options.length] = new Option(lineList[selbox_line.options.length],   lineList[selbox_line.options.length]);
	}
	selbox_line.value=global.line;
	
	while(selbox.options.length<brklist.length)
	{
		selbox.options[selbox.options.length] = new Option(brklist[selbox.options.length],    brklist[selbox.options.length]);
	}
	
	// hideAndShow();
}

//*Folder selection
function folderselect(pathFile,type)
{
   var isfileok = File.openDialog('Open the ' + type + ' file',type,pathFile.value);
   if(isfileok)
   {
    statusbar.innerHTML="<p class=status_bar>" + type + " file Selected, click OK to continue</p>"
    var FileName = File.fullName;
    FileName = FileName.replace(/\\$/,'');
    pathFile.value = FileName;
   }
   else
   {
    statusbar.innerHTML="<p class=status_bar>No file selected</p>"
   }
}
//*Change the box whether the case "load a case" is clicked or not
// function hideAndShow()
// {
	// if(document.getElementById("load_a_case_chckbox_id").checked)
	// {
	// document.getElementById("load_a_case_id").style.display='';
	// document.getElementById("new_analysis_id").style.display='none';
	// }
	// else
	// {
	// document.getElementById("load_a_case_id").style.display='none';
	// document.getElementById("new_analysis_id").style.display='';
	// }
// }

//*Put the list of pins in the html page
function searchTerminal()
{
	i=0;
	while(brklist[i]!=document.getElementById("breaker_id").value)
	{
		i++;
	}
	terminalList=document.getElementById("terminalBus_id");
	terminalList.options[0] = new Option(pin0[i],    pin0[i]);
	terminalList.options[1] = new Option(pin1[i],    pin1[i]);
}