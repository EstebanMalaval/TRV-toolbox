//	Last change: JEAN MAHSEREDJIAN 2015-05-12 10:20:19 PM
//*Used to disable keys like F5 (Refresh) and Right-Click menus on web pages
// The standard right click menu becomes accessible through CTRL-Right-click and should be used only
// for printing.

function standard_onload(){
   //*Disable standard IE functions
   document.attachEvent("onkeydown", my_onkeydown_handler);

  if( document.body.oncontextmenu == null ){ //just in case we have redefined already
      document.body.oncontextmenu=my_right_click;
  }

  //+Define global data
  window.GlobalWebData=new GlobalWebDataScriptObject

}

//*Global data creator function
function GlobalWebDataScriptObject(){
   this.CurrentDefaultData='';        //For the Grid
   this.MaxInputLength=22;

   this.ResolutionScale=window.ResolutionScale;
}


//*This function must be called from onopen if visual settings are needed
// This function must be called to initialize the ResolutionScale and ResolutionType
function standard_onload_GlobalDataInit(myglobal){
  window.ResolutionScale=myglobal.ResolutionScale;   //set in check_if_excluded
  window.ResolutionType =myglobal.ResolutionType;
}

function my_right_click(){
    
  if (!event.ctrlKey) {return false}
}

//*keycodes
//F5=116
//Enter=13
//Tab=9
function my_onkeydown_handler()
{
 switch (event.keyCode){
    case 116 : //*F5
         event.keyCode     = 0;
         event.returnValue = false;
    break;

    case 13 : //*Enter
         //Attention: in boxes the Enter will not create a new line if we intercept
         if(event.srcElement.type != 'textarea'){
           //event.keyCode     = 9; //Tab

         }
    break;
    

 }

}
