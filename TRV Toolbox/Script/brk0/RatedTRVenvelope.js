//	Last change: HENRY GRAS 2015-06-26 

function displayAll_DIST() {
    if (document.getElementById('TRV_enable_id').checked == "1") {
        document.getElementById("TRV_id1").style.display = '';
        document.getElementById("TRV_id2").style.display = '';
        display_picture()
        document.getElementById('table1_id').style.display = '';
        display_TRV_parameters()
    }
    else {
        document.getElementById("TRV_id1").style.display = 'none';
        document.getElementById("TRV_id2").style.display = 'none';
        document.getElementById('trv_4_parameter_id').style.display = 'none';
        document.getElementById('trv_2_parameter_id').style.display = 'none';
        document.getElementById('table1_id').style.display = 'none';
    }

}
//Function that displays the pictures accordingly to the parameters chosen and allows the user to choose the right voltage values.
//Modifies the TRV shape selection.
function display_picture(){
    var t3 = document.getElementById('TRV_t3_id').value;
    var t2 = document.getElementById('TRV_t2_id').value;
    var t1 = document.getElementById('TRV_t1_id').value;
	if (t3 == '0' && (t2 != '0' || t1 != '0')){
	    document.getElementById("trv_2_parameter_id").style.display = 'none'
	    document.getElementById("trv_4_parameter_id").style.display = '';
	    document.getElementById('TRV_nParameters_id').value = '4-parameter'
	}
	else if (t3 != '0' && (t2 == '0' || t1 == '0')){
	    document.getElementById("trv_2_parameter_id").style.display = '';
	    document.getElementById("trv_4_parameter_id").style.display = 'none';
	    document.getElementById('TRV_nParameters_id').value = '2-parameter'
	}
	else{
	    document.getElementById("trv_2_parameter_id").style.display = 'none';
	    document.getElementById("trv_4_parameter_id").style.display = '';
	    document.getElementById('TRV_nParameters_id').value = '4-parameter'
	}
}

//Set the nominal voltage options available according to the classe of breaker. Options from IEC 62-271-100
function setOptionRatedVolateList(breaker_class, selbox, name) {
    // selbox assignment deleted
    var value = document.getElementById(name).value
    var doNotExist = false
    selbox.options.length = 0;
    if (breaker_class == 'Class_S1') {
        selbox.options[selbox.options.length] = new Option('3.6',    '3.6');
        selbox.options[selbox.options.length] = new Option('4.76',   '4.76');
        selbox.options[selbox.options.length] = new Option('7.2',    '7.2');
        selbox.options[selbox.options.length] = new Option('8.25',   '8.25');
        selbox.options[selbox.options.length] = new Option('12',     '12');
        selbox.options[selbox.options.length] = new Option('15',     '15');
        selbox.options[selbox.options.length] = new Option('17.5',   '17.5');
        selbox.options[selbox.options.length] = new Option('24',     '24');
        selbox.options[selbox.options.length] = new Option('25.8',   '25.8');
        selbox.options[selbox.options.length] = new Option('36',     '36');
        selbox.options[selbox.options.length] = new Option('38',     '38');
        selbox.options[selbox.options.length] = new Option('48.3',   '48.3');
        selbox.options[selbox.options.length] = new Option('52',     '52');
        selbox.options[selbox.options.length] = new Option('72.5',   '72.5');
    } else if (breaker_class == 'Class_S2') {
        selbox.options[selbox.options.length] = new Option('15', '15');
        selbox.options[selbox.options.length] = new Option('17.5', '17.5');
        selbox.options[selbox.options.length] = new Option('24', '24');
        selbox.options[selbox.options.length] = new Option('25.8', '25.8');
        selbox.options[selbox.options.length] = new Option('36', '36');
        selbox.options[selbox.options.length] = new Option('38', '38');
        selbox.options[selbox.options.length] = new Option('48.3', '48.3');
        selbox.options[selbox.options.length] = new Option('52', '52');
        selbox.options[selbox.options.length] = new Option('72.5', '72.5');
    }else if (breaker_class == "100KV_effectively earthed") {
        selbox.options[selbox.options.length] = new Option('100', '100');
        selbox.options[selbox.options.length] = new Option('123', '123');
        selbox.options[selbox.options.length] = new Option('145', '145');
        selbox.options[selbox.options.length] = new Option('170', '170');
        selbox.options[selbox.options.length] = new Option('245', '245');
        selbox.options[selbox.options.length] = new Option('300', '300');
        selbox.options[selbox.options.length] = new Option('362', '362');
        selbox.options[selbox.options.length] = new Option('420', '420');
        selbox.options[selbox.options.length] = new Option('550', '550');
        selbox.options[selbox.options.length] = new Option('800', '800');
    } else if (breaker_class == "100KV_non-effectively earthed") {
        selbox.options[selbox.options.length] = new Option('100', '100');
        selbox.options[selbox.options.length] = new Option('123', '123');
        selbox.options[selbox.options.length] = new Option('145', '145');
        selbox.options[selbox.options.length] = new Option('170', '170');
    } else {
        doNotExist = true
    }

    document.getElementById(name).value = value
    if (document.getElementById(name).value == '') {
        if (breaker_class == 'Class_S1' || breaker_class == 'Class_S2') {
            document.getElementById(name).value = '72.5'
            errorbar.innerHTML = "<p class=error_bar>The voltage chosen previously is not in the option associated with the chosen class. The voltage '72.5 kV' has been set to this class by default.</p>";
            showinstantlayer(errorbar);
        }
        else {
            document.getElementById(name).value = '100'
            errorbar.innerHTML = "<p class=error_bar>The voltage chosen previously is not in the option associated with the chosen class. The voltage '100 kV' has been set to this class by default.</p>";
            showinstantlayer(errorbar);
        }
    }

    return doNotExist
}

//Enable the parameters according the shape of TRV selected.
function enable_times_inputs() {
    if (document.getElementById('TRV_envelope_id').value == 'Customized') {
        if (document.getElementById('TRV_nParameters_id').value == '2-parameter') {
            document.getElementById('TRV_t3_id').disabled = false
            document.getElementById('TRV_t2_id').disabled = true
            document.getElementById('TRV_t1_id').disabled = true
            document.getElementById('TRV_U1_id').disabled = true
            if (document.getElementById('TRV_t3_id').value == 0) {
                document.getElementById('TRV_t3_id').value = '-1'
                testpos0realvalue(document.all('TRV_t3'), '10')
            }
            document.getElementById('TRV_t2_id').value = '0'
            document.getElementById('TRV_t1_id').value = '0'
            document.getElementById('TRV_U1_id').value = '0'
        }
        else {
            document.getElementById('TRV_t3_id').disabled = true
            document.getElementById('TRV_t2_id').disabled = false
            document.getElementById('TRV_t1_id').disabled = false
            document.getElementById('TRV_U1_id').disabled = false
            if (document.getElementById('TRV_t2_id').value == 0) {
                document.getElementById('TRV_t2_id').value = '-1'
                testpos0realvalue(document.all('TRV_t2'), '10')
            }
            document.getElementById('TRV_t3_id').value = '0'
        }
    }
}
    
//This function calculates all the parameters of the envelope with the parameters entered by the user
function compute_TRV_parameters1() {
    if (document.getElementById('TRV_envelope_id').value == "Customized") {

        var Uc = document.getElementById('TRV_Uc_id').value
        var U1 = document.getElementById('TRV_U1_id').value
        var t1 = document.getElementById('TRV_t1_id').value
        var t2 = document.getElementById('TRV_t2_id').value
		var t3 = document.getElementById('TRV_t3_id').value
		var RRRV1 = document.getElementById('TRV_RRRV1_id').value
        var RRRV2 = document.getElementById('TRV_RRRV2_id').value 
		
		t1 = parseFloat(t1)
		t2 = parseFloat(t2)
		t3 = parseFloat(t3)
		RRRV1 = parseFloat (RRRV1)
		RRRV2 = parseFloat (RRRV2)
		Uc = parseFloat (Uc)
		U1 = parseFloat (U1)
		
        if (t2 < t1) {
            t2 = t1
			t1 = 0
			t3 = 0

        }
        if (t1 == 0) {
            RRRV1 = 0
        } 
		if (t1 !=0 && U1!=0){
            RRRV1 = U1 / t1
        }

        if (t1 < t2 && t2 !=0) {
            RRRV2 = (Uc - U1) / (t2 - t1)
        }
		
		if (t1 == 0 && t2 == 0 && t3 !=0){
			RRRV2 = Uc/t3
			RRRV1 = RRRV2;
		}
		if (t3 != 0){
			t1 = 0
			t2 = 0
			RRRV2 = Uc/t3
			RRRV1 = RRRV2
			U1 = 0
		}
		if (t3 == t2 && t1 == t2 && t2 == 0){
			RRRV1 = 1e15
			RRRV2 = 1e15
		}
		
        document.getElementById('TRV_Uc_id').value = Uc.toString()
        document.getElementById('TRV_U1_id').value = U1.toString()
        document.getElementById('TRV_t1_id').value = t1.toString()
        document.getElementById('TRV_t2_id').value = t2.toString()
		document.getElementById('TRV_t3_id').value = t3.toString()
        document.getElementById('TRV_RRRV1_id').value = RRRV1.toString()
        document.getElementById('TRV_RRRV2_id').value = RRRV2.toString()
		   document.getElementById('td_id').value = td.toString()
        document.getElementById('tp_id').value = tp.toString()
		document.getElementById('up_id').value = up.toString()
    }

    //Display the 2 or 4-segment picture considering the value of t1, t2, t3
    display_picture()
}

function roundTo(val, dec) {    
	if (!isNaN(val)) { 
		var mult = Math.pow(10,dec);       
		return ( Math.round(val*mult) / mult );   
	}   
	else {       
		return val;    
	}
	}

//Find the value of capacitance from a hard coding database from IEEE C37.011
//Disable the input of stray capacitances if a selection is made
function findCapacitance() {
    var breakerType = document.getElementById('Breaker_type_id').value
    var ratedVoltage = document.getElementById('TRV_Rated_voltage_id').value
    var capacitor1
    var capacitor2
    var value1_prev = document.getElementById('TRV_Cstrayk_id').value
    var value2_prev = document.getElementById('TRV_Cstraym_id').value
    if (breakerType == 'none') {
        document.getElementById('TRV_Cstrayk_id').disabled = false
        document.getElementById('TRV_Cstraym_id').disabled = false
    }
    else {
        document.getElementById('TRV_Cstrayk_id').disabled = true
        document.getElementById('TRV_Cstraym_id').disabled = true
    }
    if (breakerType == 'Break_1') { capacitor1 = 350; capacitor2 = 350 }
    else if (breakerType == 'Break_2') { capacitor1 = 45; capacitor2 = 45 }
    else if (breakerType == 'Break_3') { capacitor1 = 56; capacitor2 = 56 }
    else if (breakerType == 'Break_4') { capacitor1 = 56; capacitor2 = 56 }
    else if (breakerType == 'Break_5') { capacitor1 = 30; capacitor2 = 30 }
    else if (breakerType == 'Break_6') { capacitor1 = 60; capacitor2 = 60 }
    else if (breakerType == 'Break_7') { capacitor1 = 30; capacitor2 = 30 }
    else if (breakerType == 'Break_8') { capacitor1 = 40; capacitor2 = 40 }
    else if (breakerType == 'Break_9') { capacitor1 = 100; capacitor2 = 100 }
    else { capacitor1 = value1_prev; capacitor2 = value2_prev }
    document.getElementById('TRV_Cstrayk_id').value = capacitor1
    document.getElementById('TRV_Cstraym_id').value = capacitor2
}

//Display the stray capacitance tab if the option is selected.
function capacitanceEnabled() {
    var capacitanceCheck = document.getElementById('TRV_capacitance_id').checked
        
    if (capacitanceCheck == '1') {
        document.getElementById('breaker_capacitance_id').style.display = '';
    }
    else {
        document.getElementById('breaker_capacitance_id').style.display = 'none';
    }
}

//Function that displays the TRV parameters
function displayGrid() {
    if (document.getElementById('TRV_enable_id').checked == '1') {
        document.getElementById()
    }

}


// Function that finds rated TRV parameters according to IEC 62271-100 2010 and IEEE C37.011-2011	
function find_rated_TRV_parameters1(){

	var Tx = document.getElementById('TRV_K_id').value
	var Tt = document.getElementById('TRV_Rated_short_circuit_id').value
	var Percentage = Tx/Tt*100 			//Percentage of short-circuit current on rated short-circuit

	if (Percentage>100){
	    errorbar.innerHTML = "<p class=error_bar>The short-circuit current is higher than the rated short-circuit current. The parameters of the T100 test envelope are loaded.</p>";
	    showinstantlayer(errorbar);
		Percentage=100
}	
	else if (Percentage<10){
	    errorbar.innerHTML = "<p class=error_bar>The short-circuit current is less than 10% of the rated short-circuit current. The parameters of the T10 test envelope are loaded.</p>";
	    showinstantlayer(errorbar);
		Percentage=10
} 	
	Percentage = parseFloat(Percentage)
	var Timet1 =0
	var Timet2=0
	var Timet3=0
	var AmplitudeFactor=0
	var VoltagePeakU1=0
	var VoltagePeakUc=0
	var PoleToClear=0
	var RRRV1=0
	var RRRV2=0
	var breaker_class = document.getElementById('TRV_breaker_class_id').value
	var findParam
	if (document.getElementById('TRV_envelope_id').value == 'Customized') {
	    findParam = '0'
	} else {
        findParam = '1'
	}
        

   if (findParam == '1'){
	    //Find rated TRV parameters for cables (Class S1) IEC 62271-100 2010 and IEEE C37.011-2011
	    if (breaker_class == 'Class_S1') {	
		    var RatedVoltage = document.getElementById('TRV_Rated_voltage_id').value
		    var Kt3 //t3 ratio for cables
		    var Kuc	//Uc ratio for cables 
		    var RatedVoltagesS1                     = [3.6,     4.76,   7.2,    8.25,   12,     15,     17.5,   24,     25.8,   36,     38,     48.3,   52,     72.5]  //Table 1 IEC 62271-100 2010
		    var Timet3S1         				    = [41,      44,     51,     52,     61,     66,     71,     87,     91,     109,    109,    125,    131,    165]  //Table 1 IEC 62271-100 2010
		    var TRVPeakS1    				        = [6.2,     8.2,    12.3,   14.1,   20.6,   25.7,   30,     41.2,   44.2,   61.7,   65.2,   82.8,   89.2,   124]  //Table 1 IEC 62271-100 2010
			 var TRVtdS1    				        = [[6, 3,1.4,1.4],[7,3,1.5,1.5],[8,3,2,2],[8,3,2,2],[9,4,2,2],[10,4,2,2],[11,5,2,2],     [13,6,3,3],   [14,6,3,3],   [16,7,3.6,3.6],   [16,7,3.6,3.6],   [19,8,4,4],   [20,8,4,4],   [25,11,5,5]]  //Table 1 IEC 62271-100 2010
			 var TRVtpS1    				        = [[20,0,4.4,4.4],     [21,9,5,5],    [25,11,5,5],   [25,11,6,6],   [29,13,6,6],   [32,14,7,7],   [34,15,8,8],     [42,19,9,9],   [44,18,10,10],   [53,23,12,12],   [53,23,12,12],	[60,27,13,13],   [63,28,14,14],   [80,35,18,18]]  //Table 1 IEC 62271-100 2010
			 var TRVupS1    				        = [[2.1,2.2,2.4,2.5],     [2.7,2.9,3.1,3.3],    [4.1,4.4,4.7,5],   [4.7,5.1,5.4,5.7],   [6.9,7.3,7.8,8.3],   [8.6,9.2,9.8,10.4],   [10,10.7,11.4,12.1],     [13.7,14.7,15.7,16.7],   [14.7,15.8,16.9,17.9],   [20.6,22,23.5,25],   [21.7,23.3,24.8,26.4],		[27.6,29.6,31.5,33.5],   [29.7,31.8,34,36.1],   [41.4,44.4,47.4,50.3]]  //Table 1 IEC 62271-100 2010
		    var nlines=0
		    while (RatedVoltage > RatedVoltagesS1[nlines] && nlines+1 < RatedVoltagesS1.length) {
			    Timet3S1[nlines] = parseFloat(Timet3S1[nlines])
			    RatedVoltagesS1[nlines] = parseFloat(RatedVoltagesS1[nlines])
			    nlines = nlines + 1
		    }
	    if (Percentage>=10&&Percentage<=30){
			  Kt3=0.22											//Figure 10 C37.011-2011
		    Kuc=((1.14-1.21)/(30-10))*(Percentage-10)+1.21 		//Figure 10 C37.011-2011
			 var td=TRVtdS1[nlines][3]+(TRVtdS1[nlines][2]-TRVtdS1[nlines][3])/(30-10)*(Percentage-10);
			 var tp=TRVtpS1[nlines][3]+(TRVtpS1[nlines][2]-TRVtpS1[nlines][3])/(30-10)*(Percentage-10);
			 var up=TRVupS1[nlines][3]+(TRVupS1[nlines][2]-TRVupS1[nlines][3])/(30-10)*(Percentage-10);
	    } else if (Percentage>30&&Percentage<=60){
		    Kt3=((0.44-0.22)/(60-30))*(Percentage-30)+0.22 		//Figure 10 C37.011-2011
		    Kuc=((1.07-1.14)/(60-30))*(Percentage-30)+1.14		//Figure 10 C37.011-2011
			 var td=TRVtdS1[nlines][2]+(TRVtdS1[nlines][1]-TRVtdS1[nlines][2])/(60-30)*(Percentage-30);
			 var tp=TRVtpS1[nlines][2]+(TRVtpS1[nlines][1]-TRVtpS1[nlines][2])/(60-30)*(Percentage-30);
			 var up=TRVupS1[nlines][2]+(TRVupS1[nlines][1]-TRVupS1[nlines][2])/(60-30)*(Percentage-30);
	    } else if (Percentage>60&&Percentage<=100){
		    Kt3=((1-0.44)/(100-60))*(Percentage-60)+0.44 		//Figure 10 C37.011-2011
		    Kuc=((1-1.07)/(100-60))*(Percentage-60)+1.07		//Figure 10 C37.011-2011
			var td=TRVtdS1[nlines][1]+(TRVtdS1[nlines][0]-TRVtdS1[nlines][1])/(100-60)*(Percentage-60);
			var tp=TRVtpS1[nlines][1]+(TRVtpS1[nlines][0]-TRVtpS1[nlines][1])/(100-60)*(Percentage-60);
			var up=TRVupS1[nlines][1]+(TRVupS1[nlines][0]-TRVupS1[nlines][1])/(100-60)*(Percentage-60);
	    }
	    AmplitudeFactor=1.4*Kuc		//Table 1 IEC 62271-100 2010
	    AmplitudeFactor = roundTo(AmplitudeFactor,1)
	    PoleToClear=1.5
	    Timet3=(Kt3*Timet3S1[nlines])
	    Timet3 = roundTo(Timet3,1);
	    VoltagePeakUc=(TRVPeakS1[nlines]*Kuc);		//Equation 1 C37.011-2011
	    RRRV2=VoltagePeakUc/Timet3
	    RRRV2 = roundTo(RRRV2, 2)
        RRRV1 = RRRV2
		
		var up=Kuc*TRVupS1[nlines]
	    //VoltagePeakUc = Math.Ceil(VoltagePeakUc);
	    //RRRV2= Math.Ceil(RRRV2);
    }
	    //Find rated TRV parameters for lines (Class S2) IEC 62271-100 2010 and IEEE C37.011-2011
	    else if (breaker_class == 'Class_S2'){
		    var RatedVoltage = document.getElementById('TRV_Rated_voltage_id').value
		    var Kt3 //t3 ratio for cables
		    var Kuc	//Uc ratio for cables 
		    var RatedVoltagesS2                     = [15.0,    17.5,   24.0,   25.8,   36.0,   38.0,   48.3,   52,     72.5]   //Table 2 IEC 62271-100 2010
		    var Timet3S2          					= [31.0,    34.0,   43.0,   45.0,   57.0,   59.0,   70.0,   74.0,   93.0]     //Table 2 IEC 62271-100 2010
		    var TRVPeakS2				            = [28.3,    33,     45.3,   48.7,   67.9,   71.7,   91.1,   98.1,   137]    //Table 25 IEC 62271-100 2010
			 var TRVtdS2   				        = [[5,3,2,2],     [5,3,2,2],    [6,4,3,3],   [7,5,3,3],   [9,6,3,3],   [9,6,4,4],   [11,7,4,4],     [11,7,4,4],   [14,9,6,6]]  //Table 25 IEC 62271-100 2010
			 var TRVtpS2    				        = [[15,10,6,6],     [17,11,7,7],    [21,14,8,8],   [22,15,9,9],   [28,18,11,11],   [29,19,11.9,11.9],   [34,23,13.5,13.5],     [36,24,14,14],   [45,30,18,18]]  //Table 2 IEC 62271-100 2010
			 var TRVupS2    				        = [[9.4,10.1,10.7,11],	[11,11.8,12.4,12.9],		[15.1,16.1,17,17.6],		[16.2,17.4,18.3,19],		[22.6,24.2,25.6,26.5],		[23.9,25.6,27,28],		[30.4,32.5,34.3,35.5],		[32.7,35,36.9,38.3],		[45.6,48.8,51.5,53.3]]  //Table 2 IEC 62271-100 2010
		    var nlines=0
	
		    while (RatedVoltage > RatedVoltagesS2[nlines] && nlines+1 < RatedVoltagesS2.length) {
			    nlines = nlines + 1
		    }
	    if (Percentage>=10&&Percentage<=30){
		    Kt3=0.4												//Figure 10 IEEE Std C37.011-2011
		    Kuc=((1.13-1.17)/(30-10))*(Percentage-10)+1.17 		//Figure 10 IEEE Std C37.011-2011
			 var td=TRVtdS2[nlines][3]+(TRVtdS2[nlines][2]-TRVtdS2[nlines][3])/(30-10)*(Percentage-10);
			 var tp=TRVtpS2[nlines][3]+(TRVtpS2[nlines][2]-TRVtpS2[nlines][3])/(30-10)*(Percentage-10);
			 var up=TRVupS2[nlines][3]+(TRVupS2[nlines][2]-TRVupS2[nlines][3])/(30-10)*(Percentage-10);
	    } 
	    else if (Percentage>30&&Percentage<=60){
		    Kt3=((0.67-0.4)/(60-30))*(Percentage-30)+0.4 		//Figure 10 IEEE Std C37.011-2011
		    Kuc=((1.07-1.13)/(60-30))*(Percentage-30)+1.13		//Figure 10 IEEE Std C37.011-2011
			 var td=TRVtdS2[nlines][2]+(TRVtdS2[nlines][1]-TRVtdS2[nlines][2])/(60-30)*(Percentage-30);
			 var tp=TRVtpS2[nlines][2]+(TRVtpS2[nlines][1]-TRVtpS2[nlines][2])/(60-30)*(Percentage-30);
			 var up=TRVupS2[nlines][2]+(TRVupS2[nlines][1]-TRVupS2[nlines][2])/(60-30)*(Percentage-30);
	    } 
	    else if (Percentage>60&&Percentage<=100){
		    Kt3=((1-0.67)/(100-60))*(Percentage-60)+0.67		//Figure 10 IEEE Std C37.011-2011
		    Kuc=((1-1.07)/(100-60))*(Percentage-60)+1.07		//Figure 10 IEEE Std C37.011-2011
			var td=TRVtdS2[nlines][1]+(TRVtdS2[nlines][0]-TRVtdS2[nlines][1])/(100-60)*(Percentage-60);
			var tp=TRVtpS2[nlines][1]+(TRVtpS2[nlines][0]-TRVtpS2[nlines][1])/(100-60)*(Percentage-60);
			var up=TRVupS2[nlines][1]+(TRVupS2[nlines][0]-TRVupS2[nlines][1])/(100-60)*(Percentage-60);
	    }
	    // Kuc = parseFloat(Kuc)
	    AmplitudeFactor=1.54*Kuc	//Table 6 of IEEE Std C37.06
	    PoleToClear=1.5;
	    Timet3=Kt3*Timet3S2[nlines]
	    Timet3 = roundTo(Timet3, 1)
	    VoltagePeakUc=TRVPeakS2[nlines]*Kuc;
	    RRRV2 = VoltagePeakUc / Timet3
	    RRRV1 = RRRV2
	    AmplitudeFactor = roundTo(AmplitudeFactor,2);


	    }
	    //Find rated TRV parameters for 100kV effectively earthed IEC 62271-100 2010 and IEEE C37.011-2011
	    else if (breaker_class == '100KV_effectively earthed'){
		    var RatedVoltage = document.getElementById('TRV_Rated_voltage_id').value
		    var Kt1
		    var Kt2
		    var Kt3
		    var Kuc
		    var Ku1
		    var RatedVoltageU1
		    var RatedVoltages100_800kV_earthed          = [100.0,     123.0,    145.0,    170.0,	245.0,	300.0,	362.0,	420.0,	550.0,	800.0]    //Table 3 and Table 5 IEC 62271-100 2010
		    var Timet1100_800kV						    = [40.0,      49.0,     58.0,     68.0,		98.0,	119.0,	144.0,	167.0,	219.0,	318.0]     //Table 3 and Table 5 IEC 62271-100 2010
		    var Timet2100_800kV					        = [160.0,     196.0,    232.0,    272.0,	392.0,	476.0,	576.0,	668.0,	876.0,	1272.0]    //Table 3 and Table 5 IEC 62271-100 2010
		    var FirstVoltageRef100_800kV  				= [80.0,      98.0,     115.0,    135.0,	195.0,	239.0,	288.0,	334.0,	438.0,	637.0]    //Table 3 and Table 5 IEC 62271-100 2010
		    var TRVPeak100Earthed						= [149.0,	  183.0,	215.0,	  253.0,	364.0,	446.0,	538.0,	624.0,	817.0,	1189.0]	//Table 3 and Table 5 IEC 62271-100 2010
			var TRVtd100_800kV  				        = [[11,8,5,4],     [14,10,6,5],    [16,12,7,6],   [19,14,8,7],   [27,20,12,10],   [33,24,15,12],   [40,29,18,15],     [47,33,21,17],   [61,44,27,22],		[89,64,39,32]]  //Table 3 IEC 62271-100 2010
			 var TRVtp100_800kV    				        = [[31,21,16,13],    [38,26,19,16],   [45,31,23,19],   [53,36,27,22],   [76,52,39,32],  [93,64,47,39],     [112,77,57,47],   [130,89,66,54],    [171,117,87,71],   [248,170,126,103]]  //Table 3 IEC 62271-100 2010
			 var TRVup100_800kV   				        = [[40,40,54,62],	[49,49,67,77],		[58,58,79,91],		[68,68,93,106],		[98,98,133,153],		[119,119,163,187],		[144,144,197,226],		[167,167,229,262],		[219,219,300,344],   [318,318,436,500]]  //Table 3 IEC 62271-100 2010
		    var nlines=0
	
	
		    while (RatedVoltage > RatedVoltages100_800kV_earthed[nlines] && nlines+1 < RatedVoltages100_800kV_earthed.length) {
			    nlines = nlines + 1
		    }
		    if (Percentage>=10 && Percentage<=30){			//Short-circuit current between T10 and T30
			    Kuc=((1.1-1.26)/(30-10))*(Percentage-10)+1.26
			    Kt3 = ((0.21 - 0.17) / (30 - 10)) * (Percentage - 10) + 0.17
			    AmplitudeFactor=1.4*Kuc
			    PoleToClear=1.3	
			    Timet3=Kt3*Timet2100_800kV[nlines]
			    Timet3 = roundTo(Timet3, 1)
			    VoltagePeakUc=TRVPeak100Earthed[nlines]*Kuc
			    RRRV2=VoltagePeakUc/Timet3
			    AmplitudeFactor = roundTo(AmplitudeFactor, 1);
			    RRRV1 = RRRV2
				  var td=TRVtd100_800kV[nlines][3]+(TRVtd100_800kV[nlines][2]-TRVtd100_800kV[nlines][3])/(30-10)*(Percentage-10);
				  var tp=TRVtp100_800kV[nlines][3]+(TRVtp100_800kV[nlines][2]-TRVtp100_800kV[nlines][3])/(30-10)*(Percentage-10);
				  var up=TRVup100_800kV[nlines][3]+(TRVup100_800kV[nlines][2]-TRVup100_800kV[nlines][3])/(30-10)*(Percentage-10);
		    }
		    else if (Percentage>30 && Percentage<=60){
			    Ku1=((1-2.05)/(60-30))*(Percentage-30)+2.05
			    Kuc=((1.07-1.1)/(60-30))*(Percentage-30)+1.1
			    Kt1=((0.67-0.82)/(60-30))*(Percentage-30)+0.82
			    Kt2 = ((1 - 0.21) / (60 - 30)) * (Percentage - 30) + 0.21
			    AmplitudeFactor=1.4*Kuc
			    PoleToClear=1.3
			    Timet1 = Timet1100_800kV[nlines] * Kt1
			    Timet2=Timet2100_800kV[nlines]*Kt2
			    Timet1 = roundTo(Timet1,1);
			    Timet2 = roundTo(Timet2,1);
			    VoltagePeakU1=FirstVoltageRef100_800kV[nlines]*Ku1
			    VoltagePeakUc = TRVPeak100Earthed[nlines] * Kuc
			    RRRV1=VoltagePeakU1/Timet1
			    RRRV2 = (VoltagePeakUc - VoltagePeakU1) / (Timet2 - Timet1)
			    AmplitudeFactor=roundTo(AmplitudeFactor, 1);
				 var td=TRVtd100_800kV[nlines][2]+(TRVtd100_800kV[nlines][1]-TRVtd100_800kV[nlines][2])/(60-30)*(Percentage-30);
				 var tp=TRVtp100_800kV[nlines][2]+(TRVtp100_800kV[nlines][1]-TRVtp100_800kV[nlines][2])/(60-30)*(Percentage-30);
				 var up=TRVup100_800kV[nlines][2]+(TRVup100_800kV[nlines][1]-TRVup100_800kV[nlines][2])/(60-30)*(Percentage-30);
		    } 
		    else if (Percentage>60&&Percentage<=100){
			    Ku1=1
			    Kuc=((1-1.07)/(100-60))*(Percentage-60)+1.07
			    Kt1=((1-0.67)/(100-60))*(Percentage-60)+0.67
			    Kt2=1
			    AmplitudeFactor=1.4*Kuc
			    PoleToClear=1.3
			    Timet1=Timet1100_800kV[nlines]*Kt1
			    Timet2=Timet2100_800kV[nlines]*Kt2
			    VoltagePeakU1=FirstVoltageRef100_800kV[nlines]*Ku1
			    VoltagePeakUc = TRVPeak100Earthed[nlines] * Kuc
			    RRRV1=VoltagePeakU1/Timet1
			    RRRV2 = (VoltagePeakUc - VoltagePeakU1) / (Timet2 - Timet1)
				 var td=TRVtd100_800kV[nlines][1]+(TRVtd100_800kV[nlines][0]-TRVtd100_800kV[nlines][1])/(100-60)*(Percentage-60);
				 var tp=TRVtp100_800kV[nlines][1]+(TRVtp100_800kV[nlines][0]-TRVtp100_800kV[nlines][1])/(100-60)*(Percentage-60);
				 var up=TRVup100_800kV[nlines][1]+(TRVup100_800kV[nlines][0]-TRVup100_800kV[nlines][1])/(100-60)*(Percentage-60);
		    }
		    Timet1 = roundTo(Timet1,1);
		    Timet2 = roundTo(Timet2,1);
		    AmplitudeFactor = roundTo(AmplitudeFactor,1);
		    RRRV1 = roundTo(RRRV1, 3);
		    RRRV2 = roundTo(RRRV2, 3);
		
	    }
    //Find Rated TRV with 100kV non-effectively earthed IEC 62271-100 2010 and IEEE C37.011-2011
    else if (breaker_class == '100KV_non-effectively earthed'){
        var RatedVoltage = document.getElementById('TRV_Rated_voltage_id').value
	    var Kt1
	    var Kt2
	    var Kt3
	    var Kuc
	    var Ku1
	    var RatedVoltages100_170kV_non_earthed                  = [100.0,     123.0,    145.0,	  170.0]    //Table 4 IEC 62271-100 2010
	    var Timet1100_170kV_non_earthed					        = [46.0,      56.0,     67.0,     78.0]     //Table 4 IEC 62271-100 2010
	    var FirstVoltageRef100_170kV_non_earthed				= [92.0,      113.0,    133.0,    156.0]    //Table 4 IEC 62271-100 2010
        var Timet2100_170kV_non_earthed					        = [184.0,     224.0,    268.0,    312.0]    //Table 4 IEC 62271-100 2010
	    var TRVPeak100_170kV_non_earthed            				        = [171.0,     211.0,    249.0,    291.0]    //Table 4 IEC 62271-100 2010
			var TRVtd100_170kV_non_earthed 				        = [[13,8,5,4],     [16,10,6,5],   [19,12,7,6],   [22,14,8,7]]  //Table 3 IEC 62271-100 2010
			var TRVtp100_170kV_non_earthed    				        = [[36,21,16,13],		[44,26,19,16],		[52,31,23,19],		[61,36,27,22]]  //Table 3 IEC 62271-100 2010
			 var TRVup100_170kV_non_earthed   				        = [[46,46,63,62],		[56,56,77,77],		[67,67,91,91],		[78,78,107,106]]  //Table 3 IEC 62271-100 2010
	    var nlines = 0
	
	    while (RatedVoltage > RatedVoltages100_170kV_non_earthed[nlines] && nlines+1 < RatedVoltages100_170kV_non_earthed.length) {
            nlines = nlines + 1
	    }
	    if (Percentage>=10&&Percentage<30){
		    Kuc=((1.11-1.09)/(30-10))*(Percentage-10)+1.09;
		    Kt3=((0.21-0.16)/(30-10))*(Percentage-10)+0.16;
		    AmplitudeFactor=1.4*Kuc
		    PoleToClear=1.5	
		    Timet3=Kt3*Timet2100_170kV_non_earthed[nlines]
		    Timet3 = roundTo(Timet3,1);
		    VoltagePeakUc = TRVPeak100_170kV_non_earthed[nlines] * Kuc;
		    RRRV2=roundTo(VoltagePeakUc/Timet3,2)
		    AmplitudeFactor = roundTo(AmplitudeFactor,1);
		    Timet3 = roundTo(Timet3, 1);
		    RRRV1 = RRRV2
			 var td=TRVtd100_170kV_non_earthed[nlines][3]+(TRVtd100_170kV_non_earthed[nlines][2]-TRVtd100_170kV_non_earthed[nlines][3])/(30-10)*(Percentage-10);
			 var tp=TRVtp100_170kV_non_earthed[nlines][3]+(TRVtp100_170kV_non_earthed[nlines][2]-TRVtp100_170kV_non_earthed[nlines][3])/(30-10)*(Percentage-10);
			 var up=TRVup100_170kV_non_earthed[nlines][3]+(TRVup100_170kV_non_earthed[nlines][2]-TRVup100_170kV_non_earthed[nlines][3])/(30-10)*(Percentage-10);
	    }
	    else if (Percentage>=30&&Percentage<60){
		    Ku1=((1-2.11)/(60-30))*(Percentage-30)+2.11
		    Kuc=((1.07-1.13)/(60-30))*(Percentage-30)+1.13
		    Kt1=((0.67-0.84)/(60-30))*(Percentage-30)+0.84
		    Kt2=((1-0.21)/(60-30))*(Percentage-30)+0.21
		    AmplitudeFactor=1.4*Kuc
		    PoleToClear=1.5
		    Timet1=Timet1100_170kV_non_earthed[nlines]*Kt1
		    Timet2=Timet2100_170kV_non_earthed[nlines]*Kt2
		    Timet1 = roundTo(Timet1,1);
		    Timet2 = roundTo(Timet2,1);
		    VoltagePeakU1=FirstVoltageRef100_170kV_non_earthed[nlines]*Ku1
		    VoltagePeakUc = TRVPeak100_170kV_non_earthed[nlines] * Kuc;
		    RRRV1=VoltagePeakU1/Timet1
		    RRRV2 = (VoltagePeakUc - VoltagePeakU1) / (Timet2 - Timet1)
		    AmplitudeFactor = roundTo(AmplitudeFactor, 1);
		    RRRV1 = roundTo(RRRV1, 3);
		    RRRV2 = roundTo(RRRV2, 3);	
			var td=TRVtd100_170kV_non_earthed[nlines][2]+(TRVtd100_170kV_non_earthed[nlines][1]-TRVtd100_170kV_non_earthed[nlines][2])/(60-30)*(Percentage-30);
			 var tp=TRVtp100_170kV_non_earthed[nlines][2]+(TRVtp100_170kV_non_earthed[nlines][1]-TRVtp100_170kV_non_earthed[nlines][2])/(60-30)*(Percentage-30);
			 var up=TRVup100_170kV_non_earthed[nlines][2]+(TRVup100_170kV_non_earthed[nlines][1]-TRVup100_170kV_non_earthed[nlines][2])/(60-30)*(Percentage-30);
	    }
	    else if (Percentage>=60&&Percentage<=100){
		    Ku1=1
		    Kuc=((1-1.07)/(100-0))*(Percentage-60)+1.07
		    Kt1=((1-0.67)/(100-60))*(Percentage-60)+0.67
		    Kt2=1
		    AmplitudeFactor=1.4*Kuc
		    PoleToClear = 1.5
		    Timet1=Timet1100_170kV_non_earthed[nlines]*Kt1
		    Timet2=Timet2100_170kV_non_earthed[nlines]*Kt2
		    Timet1 = roundTo(Timet1,1);
		    Timet2 = roundTo(Timet2,1);
		    VoltagePeakU1=FirstVoltageRef100_170kV_non_earthed[nlines]*Ku1
		    VoltagePeakUc = TRVPeak100_170kV_non_earthed[nlines] * Kuc;
		    RRRV1=VoltagePeakU1/Timet1
		    RRRV2 = (VoltagePeakUc - VoltagePeakU1) / (Timet2 - Timet1)
		    AmplitudeFactor = roundTo(AmplitudeFactor,1);
		    RRRV1 = roundTo(RRRV1, 3);
		    RRRV2 = roundTo(RRRV2, 3);	
			 var td=TRVtd100_170kV_non_earthed[nlines][1]+(TRVtd100_170kV_non_earthed[nlines][0]-TRVtd100_170kV_non_earthed[nlines][1])/(100-60)*(Percentage-60);
			var tp=TRVtp100_170kV_non_earthed[nlines][1]+(TRVtp100_170kV_non_earthed[nlines][0]-TRVtp100_170kV_non_earthed[nlines][1])/(100-60)*(Percentage-60);
			var up=TRVup100_170kV_non_earthed[nlines][1]+(TRVup100_170kV_non_earthed[nlines][0]-TRVup100_170kV_non_earthed[nlines][1])/(100-60)*(Percentage-60);
	    }
    }
	    VoltagePeakUc = roundTo(VoltagePeakUc,1)
	    VoltagePeakU1 = roundTo(VoltagePeakU1,1)
        document.getElementById('TRV_kpp_id').value = PoleToClear.toString()
        document.getElementById('TRV_kaf_id').value = AmplitudeFactor.toString()
        document.getElementById('TRV_Uc_id').value = VoltagePeakUc.toString()
        document.getElementById('TRV_U1_id').value = VoltagePeakU1.toString()
        document.getElementById('TRV_t1_id').value = Timet1.toString()
        document.getElementById('TRV_t2_id').value = Timet2.toString()
        document.getElementById('TRV_t3_id').value = Timet3.toString()
        document.getElementById('TRV_RRRV1_id').value = RRRV1.toString()
        document.getElementById('TRV_RRRV2_id').value = RRRV2.toString()
		document.getElementById('td_id').value = td.toString()
		document.getElementById('tp_id').value = tp.toString()
		document.getElementById('up_id').value = up.toString()
   }

    //Display the 2 or 4-segment picture considering the value of t1, t2, t3
   display_picture()
}

//This function calculates all the paramters of the envelope with the parameters entered by the user
function compute_TRV_parameters() {
	
    if (document.getElementById('TRV_envelope_id').value == "Customized") {

        var Uc = document.getElementById('TRV_Uc_id').value
        var U1 = document.getElementById('TRV_U1_id').value
        var RRRV1 = document.getElementById('TRV_RRRV1_id').value
        var RRRV2 = document.getElementById('TRV_RRRV2_id').value
		Uc = parseFloat (Uc)
		U1 = parseFloat (U1)

        var t1 = document.getElementById('TRV_t1_id').value
        var t2 = document.getElementById('TRV_t2_id').value
		var t3 = document.getElementById('TRV_t3_id').value
		t1 = parseFloat(t1)
		t2 = parseFloat(t2)
		t3 = parseFloat(t3)
		
        if (Uc < U1) {
            Uc = U1
			U1 = '0'
			RRRV1 = 0
			RRRV2 = Uc/t2
			t1 = 0
		}

		if (U1 >0 ) {
            RRRV1 = U1/t1
			RRRV2 = (Uc-U1)/(t2-t1)
			t3 = '0'
        }


		t3 = roundTo(t3,1)
		t1 = roundTo(t1,1)
		t2 = roundTo(t2,1)
		RRRV1 = roundTo(RRRV1, 1)
        RRRV2 = roundTo(RRRV2, 1)
        document.getElementById('TRV_Uc_id').value = Uc.toString()
        document.getElementById('TRV_U1_id').value = U1.toString()
        document.getElementById('TRV_t1_id').value = t1.toString()
        document.getElementById('TRV_t2_id').value = t2.toString()
		document.getElementById('TRV_t3_id').value = t3.toString()
        document.getElementById('TRV_RRRV1_id').value = RRRV1.toString()
        document.getElementById('TRV_RRRV2_id').value = RRRV2.toString()
		document.getElementById('td_id').value = td.toString()
		document.getElementById('tp_id').value = tp.toString()
		document.getElementById('up_id').value = up.toString()
    }

    //Display the 2 or 4-segment picture considering the value of t1, t2, t3
    display_picture()
}


//Enables or disabled the inputs for parameters considering if they are predifined or to be defined
function display_TRV_parameters() {
    if(document.getElementById('TRV_envelope_id').value == "Standard IEC 62271-100"){
        document.getElementById('TRV_id1').style.display = ""
        document.getElementById('TRV_Uc_id').disabled = true
        document.getElementById('TRV_U1_id').disabled = true
        document.getElementById('TRV_t1_id').disabled = true
        document.getElementById('TRV_t2_id').disabled = true
		document.getElementById('TRV_t3_id').disabled = true
        document.getElementById('TRV_RRRV1_id').disabled = true
        document.getElementById('TRV_RRRV2_id').disabled = true
        document.getElementById('TRV_nParameters_id').disabled = true
		document.getElementById('td_id').disabled = true
		document.getElementById('tp_id').disabled = true
		document.getElementById('up_id').disabled = true

    } else if (document.getElementById('TRV_envelope_id').value == "Customized") {
        document.getElementById('TRV_id1').style.display = "none"
        document.getElementById('TRV_Uc_id').disabled = false
        document.getElementById('TRV_U1_id').disabled = false
        document.getElementById('TRV_t1_id').disabled = false
        document.getElementById('TRV_t2_id').disabled = false
		document.getElementById('TRV_t3_id').disabled = false
        document.getElementById('TRV_RRRV1_id').disabled = true
        document.getElementById('TRV_RRRV2_id').disabled = true
        document.getElementById('TRV_nParameters_id').disabled = false
				document.getElementById('td_id').disabled = false
		document.getElementById('tp_id').disabled = false
		document.getElementById('up_id').disabled = false
    }
    enable_times_inputs()
}



//Function to find errors in voltage peaks values
function errorU(){
	var Uc = document.getElementById('TRV_Uc_id').value
	var U1 = document.getElementById('TRV_U1_id').value
	Uc = parseFloat(Uc)
	U1 = parseFloat(U1)
	
	if (U1 > Uc && Uc !=0){
		return true
	}
	if (U1 !=0 && Uc == 0){
		return true
	}
	else {
		return false
	}
}
//Function to find errors in time values
function errorTime(){
	var timet1 = document.getElementById('TRV_t1_id').value
    var timet2 = document.getElementById('TRV_t2_id').value
	var timet3 = document.getElementById('TRV_t3_id').value
	timet1 = parseFloat(timet1)
	timet2 = parseFloat(timet2)
	if (timet1 > timet2){
		return true
	}
	if (timet3!=0 && (timet1!=0 || timet2 != 0)){
		return true
	} 
	else {
		return false
	}
}

//Function to find errors in RRRV1 or RRRV2
function errorRRRV(){
	var RRRV1 = document.getElementById('TRV_RRRV1_id').value
	var RRRV2 = document.getElementById('TRV_RRRV2_id').value
	
	if (RRRV1 != 0 && RRRV2 ==0){
		return true
	}
	if (RRRV2 == 0 && RRRV1 == 0){
		return true
	} 
	else 
		return false
}
function testrealinrangevalueBreaker(obj, bydefault)
{
	result=false;
	var upperBound = document.getElementById('TRV_Rated_short_circuit_id').value;
	var lowerBound = 0.1*document.getElementById('TRV_Rated_short_circuit_id').value;
	
	obj.style.color=testedcolor();
	if(testvalue(obj.name,bydefault))	//will give #..# or obj.value or bydefault
	{ 
		obj.style.color=errorindatacolor();
		result= true; //found an error
	}else
	{	//it is a number 
		if( isNaN(obj.value) ) 
		{  // not a number ,  #...# not allowd as we are doing range check
				obj.value=bydefault;
				obj.style.color=errorindatacolor();
				result=  true;			  
		}		 
	}
	
	if ( result==false)
	{
		// No error so far so check range
		if((parseFloat(obj.value)< lowerBound) ||(parseFloat(obj.value)> upperBound) )
		{
			// Error 
			obj.value      =bydefault;
			obj.style.color=errorindatacolor();
			result=  true;
		} 

	}

	return result;
}

function SCCWarningMessage()
{
	errorbar.innerHTML = "<p class=error_bar>Clicking on this box and 'OK' will close the html windows, open a new windom to parameter the fault and short-circuit the breaker to ground and run a simulation to find the short-circuit current </p>";
	showinstantlayer(errorbar);
}
//Functions that are call at the opening
function onopen(global) {
    var myglobal;
    myglobal = global

    display_TRV_parameters()
    display_picture()
    capacitanceEnabled()
    findCapacitance()
    displayAll_DIST()
    setOptionRatedVolateList(document.getElementById('TRV_breaker_class_id').value, document.getElementById('TRV_Rated_voltage_id'), 'TRV_Rated_voltage')
	 find_rated_TRV_parameters1()
}
//Functions called when closing
function onclose(global)
{  
	if (errorU())		{
		errorbar.innerHTML="<p class=error_bar>Errors in voltage</p>";
		showinstantlayer(errorbar);
		return false
	}
	if (errorTime())	{
		errorbar.innerHTML="<p class=error_bar>Errors in time</p>";
		showinstantlayer(errorbar);
		return false
	}
   return true;
}
