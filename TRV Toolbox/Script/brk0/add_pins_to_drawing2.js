//	Last change: JEAN MAHSEREDJIAN 02/12/2011 11:52:36 PM
//*Functions designed to add pins to existing symbol drawing
//dev           is the device handle
//newpinnames   holds all new pins names, it is always an Array
//newXpos       holds x positions, automatically determined from an existing bundle,
//              is a scalar when adding a new bundle
//newYpos       holds y positions
//              Same definition as newXpos
//newDirection  holds all new pin directions,
//              Same definition as newXpos

//newfunc       holds new pin functions, always an Array, I, O or P
//newPhaseAttributes holds new phase attributes
//                   Use '' to take default selection
//
//newLen        gives the new pin lengths
//              Same definition as newXpos

//isbundle  means the new pins will be added in a bundle and it gives the bundle name
//          In this version the existing bundle name will be grabbed automatically and only
//          one bundle is permitted. Using any name is valide.
//
//changeBundle is true when the call is changing a bundle
//pins_no_bundle  is the number of pins without bundle
//bundle_exist is true to mean that we are adding into an existing bundle
//keepSubCct: if true,  save the subcircuit of the previous object
function add_pins_to_drawing(dev, newpinnames, newXpos, newYpos, newDirection,
                            newfunc, newPhaseAttributes, newLen,
                            isbundle, changeBundle, pins_no_bundle, bundle_exist, keepSubCct){



    //*Get type of this device
    var t=dev.type;
    //*Get the previous number of pins
    var oldNumberOfPins=t.numPins;
    if( changeBundle){
        oldNumberOfPins= pins_no_bundle

    }

    //*Create a new type
    var newt=DWType();

    newt.pic = t.pic;  //_grab the picture
    var numberOfPinsToAdd=newpinnames.length;
    if( isbundle.length!=0) {
        numberOfPinsToAdd=numberOfPinsToAdd+1;
    }
    newt.numPins=oldNumberOfPins+numberOfPinsToAdd;    //_set the new number of pins

    var pins=t.pins;        //_grab the pins from the old device
    var newpins=newt.pins;  //_create the new pins

    //*COPY BACK OLD PINS
    for(i=0;i<oldNumberOfPins;i++){
        newpins[i].posX=     pins[i].posX;  //copy position X
        newpins[i].posY=     pins[i].posY;  //copy position Y
        newpins[i].func=     pins[i].func;  //copy func

        newpins[i].pinLength=pins[i].pinLength //copy length
        newpins[i].name     =pins[i].name      //copy name
        newpins[i].setAttribute("Phase",  pins[i].getAttribute("Phase") );    //copy phase attribute

        newpins[i].direction=pins[i].direction //copy direction

    }

    //*START ADDING NEW PINS
    if( numberOfPinsToAdd > 0 ){
      if( isbundle.length!=0) {

            //+Adding bundle pins
            if(bundle_exist) { //_grab old bundle
              i=pins_no_bundle; //start from 0
              newXpos    =pins[i].posX
              newYpos    =pins[i].posY
              newDirection=pins[i].direction;
              newLen      =pins[i].pinLength;
              isbundle=pins[i].name;
            }
        

            p=oldNumberOfPins;  //_Bundle pin, start at 0
            newpins[p].func='S';   //S for bundle
            newpins[p].posX = newXpos;
            newpins[p].posY = newYpos;
            newpins[p].direction = newDirection;
            newpins[p].pinLength =  newLen;    // Must be multiples of 70
            newpins[p].name=isbundle;

            jnames=0;
            for( i=p+1;i<newt.numPins;i++ ){ //from 0
                newpins[i].name = newpinnames[jnames];
                newpins[i].func = newfunc[jnames];
                newpins[i].direction = 'B';  //* B for Bus internal pin
                //newpins[i].setAttribute("Phase", newPhaseAttributes[jnames] );
                //Does not set in this version of EMTPWorks. In any case, the pin func will force
                //the number of phases and Power pins will inherit from the device.
                jnames=jnames+1;
            }

      }else{  //+we are not adding bundle pins
        p=oldNumberOfPins;  //_start at 0
        
        jnames=0;
        for( i=p;i<newt.numPins;i++ ){ //from 0
            newpins[i].name =           newpinnames[jnames];
            newpins[i].func =           newfunc[jnames];
            newpins[i].direction =      newDirection[jnames];
            newpins[i].posX=            newXpos[jnames]
            newpins[i].posY=            newYpos[jnames]
            newpins[i].pinLength =      newLen[jnames]
            newpins[i].setAttribute("Phase", newPhaseAttributes[jnames] );

            jnames=jnames+1;
        }
        
      }
    }


    //*save back the new device
    newt.name = t.name  //_grabe the name
    if(keepSubCct) newt.subCircuit = t.subCircuit()
    dev.type=newt;
}


//*Function used to remove pins
// Removes the last pin in the list by recreating a drawing with a new number of pins
function remove_pins(dev, newnumberofpins, keepSubCct) {
    //*Get type of this device
    var t=dev.type;

    //*Get the previous number of pins
    var oldNumberOfPins=t.numPins;

    //*Create a new type
    var newt=DWType();

    newt.pic    =t.pic;              //_grab the picture
    newt.numPins=newnumberofpins;    //_set the new number of pins

    pins   =t.pins;        //_grab the pins from the old device
    newpins=newt.pins;     //_create the new pins

    //*COPY BACK OLD PINS
    for(i=0;i<newnumberofpins;i++){
        newpins[i].posX=     pins[i].posX;  //copy position X
        newpins[i].posY=     pins[i].posY;  //copy position Y
        newpins[i].func=     pins[i].func;  //copy func

        newpins[i].pinLength=pins[i].pinLength //copy length
        newpins[i].name     =pins[i].name      //copy name
        newpins[i].setAttribute("Phase",  pins[i].getAttribute("Phase") );    //copy phase attribute

        newpins[i].direction=pins[i].direction; //copy direction
    }

    //*save back the new device
    newt.name = t.name  //_grabe the name
    if (keepSubCct) newt.subCircuit = t.subCircuit()
    dev.type=newt;


}

//*will init global variables for holding data for standard pins
function init_pin_data(){
    newpinnames= new Array();
    newXpos    = new Array();
    newYpos    = new Array();
    newDirection= new Array();
    newfunc     = new Array();
    newPhaseAttributes = new Array();
    newLen      = new Array();
    isbundle='';
    changeBundle=false;
    pins_no_bundle=0;
    bundle_exist=false;
}








