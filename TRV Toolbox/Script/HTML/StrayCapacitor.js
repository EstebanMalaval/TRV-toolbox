//	Change: HENRY GRAS 2015-06-26
//	Last Change: Esteban MALAVAL 2016-06-07

function onopen(global)
{
	previouscapacitance=document.getElementById("C1_val_id").value;
	findComponent();
	selectCapacitance();
	if(!(document.getElementById("select_capacitance_checkbox_id").checked=="1"))
	{
		document.getElementById("C1_val_id").value=previouscapacitance;
	}
}
function onclose(global)
{
	if(document.getElementById("C1_val_id").value=='')
	{
	alert("No capacitance value selected");
	return false;
	}
	return true;
}
function findComponent()
{
	source=document.getElementById("select_source_id").value;
	if(source=="choose_1")
	{
		switch(document.getElementById("Component_type_id").value)
		{
			case "Transformer":
			{
				var name= new Array();
				name.push("Transformer");
				name.push("Transformer2");
				hideAndDisplay(name);
				transfoCapacitance();
				break;
			}
			
			case "Current-Limiting Reactor":
			{
				var name= new Array();
				name.push("");
				hideAndDisplay(name);
				reactorCapacitance();
				break;
			}
			
			case "Generator":
			{
				var name= new Array();
				name.push("Generator");
				hideAndDisplay(name);
				generatorCapacitance();
				break;
			}
			
			case "Motor":
			{
				var name= new Array();
				name.push("Motor");
				hideAndDisplay(name);
				motorCapacitance();
				break;
			}
			
			case "Breaker":
			{
				var name= new Array();
				name.push("default_id");
				hideAndDisplay(name);
				document.getElementById("C1_val_id").value="";
				break;
			}
			
			case "Bus":
			{
				var name= new Array();
				name.push("Bus");
				hideAndDisplay(name);
				busCapacitance();
				break;
			}
			
			case "Current Transformer":
			{
				var name= new Array();
				name.push("CT");
				hideAndDisplay(name);
				CTCapacitance()
				break;
			}
			
			case "Potential Transformer":
			{
				var name= new Array();
				name.push("PotentialTransformer");
				hideAndDisplay(name);
				PTCapacitance();
				break;
			}
		}
	}
	else if(source=="choose_2")
	{
	switch(document.getElementById("Component_type_id").value)
		{
			case "Transformer":
			{
				var name= new Array();
				name.push("TransformerB");
				hideAndDisplay(name);
				transfoBCapacitance();
				break;
			}
			case "Current-Limiting Reactor":
			{
				var name= new Array();
				name.push("default_id");
				hideAndDisplay(name);
				document.getElementById("C1_val_id").value="";
				break;
			}
			case "Generator":
			{
				var name= new Array();
				name.push("GeneratorB");
				hideAndDisplay(name);
				generatorBCapacitance();
				break;
			}	
			case "Motor":
			{
				var name= new Array();
				name.push("default_id");
				hideAndDisplay(name);
				document.getElementById("C1_val_id").value="";
				break;
			}
			case "Breaker":
			{
				var name= new Array();
				name.push("Breaker");
				hideAndDisplay(name);
				breakerCapacitance();
				break;
			}
			case "Current Transformer":
			{
				var name= new Array();
				name.push("CTB");
				hideAndDisplay(name);
				CTBCapacitance();
				break;
			}
			case "Potential Transformer":
			{
				var name= new Array();
				name.push("PotentialTransformerB");
				hideAndDisplay(name);
				PTBCapacitance();
				break;
			}
			case "Bus":
			{
				var name= new Array();
				name.push("BusB");
				hideAndDisplay(name);
				busBCapacitance();
				break;
			}
			default:
			{
				var name= new Array();
				name.push("default_id");
				hideAndDisplay(name);
				document.getElementById("C1_val_id").value="";
				break;
			}
		}
	}
	else if(source=="choose_3")
	{
		switch(document.getElementById("Component_type_id").value)
		{
			case "Transformer":
			{
				var name= new Array();
				name.push("TransformerC");
				name.push("Transformer2");
				hideAndDisplay(name);
				transfoCCapacitance();
				break;
			}
			default:
			{
				var name= new Array();
				name.push("default_id");
				hideAndDisplay(name);
				document.getElementById("C1_val_id").value="";
				break;
			}
		}
	}
}

//functions use to calculate the values of stray capacitance for each component with data from "Allan, Greenwood, Chapter13, in "Electrical Transient in Power Systems", Wiley-Interscience, 1991"
function transfoCapacitance()
{
	if(source="choose_1")
	{
		switch(document.getElementById("S_id").value)
		{
			case "450":
			{
				switch(document.getElementById("selectC_id").value)
				{
					case "C1":
					{
					document.getElementById("Cmini_id").value=10;
					document.getElementById("Cmaxi_id").value=30;
					document.getElementById("C1_val_id").value=10;
					;
					break;
					}
					case "C2":
					{
					document.getElementById("Cmini_id").value=3;
					document.getElementById("Cmaxi_id").value=10;
					document.getElementById("C1_val_id").value=3;
					;
					break;
					}
					case "C12":
					{
					document.getElementById("Cmini_id").value=3;
					document.getElementById("Cmaxi_id").value=10;
					document.getElementById("C1_val_id").value=3;
					;
					break;
					}
				}
				document.getElementById("SP450_id").style.display = '';
				document.getElementById("SS450_id").style.display = '';
				document.getElementById("SP800_id").style.display = 'none';
				document.getElementById("SS800_id").style.display = 'none';
				document.getElementById("SP1350_id").style.display = 'none';
				document.getElementById("SS1350_id").style.display = 'none';
				document.getElementById("SP1750_id").style.display = 'none';
				document.getElementById("SS1750_id").style.display = 'none';
				break;
			}
			case "800":
			{
				switch(document.getElementById("selectC_id").value)
				{
					case "C1":
					{
					document.getElementById("Cmini_id").value=7;
					document.getElementById("Cmaxi_id").value=20;
					document.getElementById("C1_val_id").value=7;
					;
					break;
					}
					case "C2":
					{
					document.getElementById("Cmini_id").value=3;
					document.getElementById("Cmaxi_id").value=10;
					document.getElementById("C1_val_id").value=3;
					;
					break;
					}
					case "C12":
					{
					document.getElementById("Cmini_id").value=3;
					document.getElementById("Cmaxi_id").value=10;
					document.getElementById("C1_val_id").value=3;
					;
					break;
					}
				}
				document.getElementById("SP450_id").style.display = 'none';
				document.getElementById("SS450_id").style.display = 'none';
				document.getElementById("SP800_id").style.display = '';
				document.getElementById("SS800_id").style.display = '';
				document.getElementById("SP1350_id").style.display = 'none';
				document.getElementById("SS1350_id").style.display = 'none';
				document.getElementById("SP1750_id").style.display = 'none';
				document.getElementById("SS1750_id").style.display = 'none';
				break;
			}
			case "1350":
			{
				switch(document.getElementById("selectC_id").value)
				{
					case "C1":
					{
					document.getElementById("Cmini_id").value=10;
					document.getElementById("Cmaxi_id").value=20;
					document.getElementById("C1_val_id").value=10;
					break;
					}
					case "C2":
					{
					document.getElementById("Cmini_id").value=5;
					document.getElementById("Cmaxi_id").value=15;
					document.getElementById("C1_val_id").value=5;
					break;
					}
					case "C12":
					{
					document.getElementById("Cmini_id").value=10;
					document.getElementById("Cmaxi_id").value=30;
					document.getElementById("C1_val_id").value=10;
					break;
					}
				}
				document.getElementById("SP450_id").style.display = 'none';
				document.getElementById("SS450_id").style.display = 'none';
				document.getElementById("SP800_id").style.display = 'none';
				document.getElementById("SS800_id").style.display = 'none';
				document.getElementById("SP1350_id").style.display = '';
				document.getElementById("SS1350_id").style.display = '';
				document.getElementById("SP1750_id").style.display = 'none';
				document.getElementById("SS1750_id").style.display = 'none';
				break;
			}
			case "1750":
			{
				switch(document.getElementById("selectC_id").value)
				{
					case "C1":
					{
					document.getElementById("Cmini_id").value=12;
					document.getElementById("Cmaxi_id").value=25;
					document.getElementById("C1_val_id").value=12;
					break;
					}
					case "C2":
					{
					document.getElementById("Cmini_id").value=5;
					document.getElementById("Cmaxi_id").value=15;
					document.getElementById("C1_val_id").value=5;
					break;
					}
					case "C12":
					{
					document.getElementById("Cmini_id").value=20;
					document.getElementById("Cmaxi_id").value=40;
					document.getElementById("C1_val_id").value=20;
					break;
					}
					break;
				}
				document.getElementById("SP450_id").style.display = 'none';
				document.getElementById("SS450_id").style.display = 'none';
				document.getElementById("SP800_id").style.display = 'none';
				document.getElementById("SS800_id").style.display = 'none';
				document.getElementById("SP1350_id").style.display = 'none';
				document.getElementById("SS1350_id").style.display = 'none';
				document.getElementById("SP1750_id").style.display = '';
				document.getElementById("SS1750_id").style.display = '';
				break;
			}
		}
	}
}

function reactorCapacitance()
{
	document.getElementById("Cmini_id").value=0.075;
	document.getElementById("Cmaxi_id").value=0.15;
	document.getElementById("C1_val_id").value=0.075;
}

function generatorCapacitance()
{
	if(source="choose_1")
	{
			switch(document.getElementById("S_generator_id").value)
		{
		case "450":
		{
			document.getElementById("Cmini_id").value=200;
			document.getElementById("Cmaxi_id").value=400;
			document.getElementById("C1_val_id").value=200;
			break;
		}
		case "800":
		{
			document.getElementById("Cmini_id").value=200;
			document.getElementById("Cmaxi_id").value=450;
			document.getElementById("C1_val_id").value=200;
			break;
		}
		case "1350":
		{
			document.getElementById("Cmini_id").value=250;
			document.getElementById("Cmaxi_id").value=600;
			document.getElementById("C1_val_id").value=250;
			break;
		}
		case "1750":
		{
			document.getElementById("Cmini_id").value=500;
			document.getElementById("Cmaxi_id").value=700;
			document.getElementById("C1_val_id").value=500;
			break;
		}
	}

	}
}

function motorCapacitance()
{
	if(source="choose_1")
	{
			switch(document.getElementById("V_motor_id").value)
		{
			case "4.16":
			{
				document.getElementById("S_Motor_416_id").style.display='';
				document.getElementById("S_Motor_66_id").style.display='none';
				document.getElementById("S_Motor_138_id").style.display='none';
				switch(document.getElementById("S_Motor_416_id").value)
				{
					case "3500":
					{
						document.getElementById("Cmini_id").value=27.3;
						document.getElementById("Cmaxi_id").value=27.3;
						document.getElementById("C1_val_id").value=27.3;
						break;
					}
					case "5000":
					{
						document.getElementById("Cmini_id").value=35.4;
						document.getElementById("Cmaxi_id").value=35.4;
						document.getElementById("C1_val_id").value=35.4;
						break;
					}
					case "6000":
					{
						document.getElementById("Cmini_id").value=28.8;
						document.getElementById("Cmaxi_id").value=28.8;
						document.getElementById("C1_val_id").value=28.8;
						break;
					}
				}
				break;
			}
			case "6.6":
			{
				document.getElementById("S_Motor_416_id").style.display='none';
				document.getElementById("S_Motor_66_id").style.display='';
				document.getElementById("S_Motor_138_id").style.display='none';
				document.getElementById("Cmini_id").value=23.7;
				document.getElementById("Cmaxi_id").value=23.7;
				document.getElementById("C1_val_id").value=23.7;
				break;
			}
			case "13.8":
			{
				document.getElementById("S_Motor_416_id").style.display='none';
				document.getElementById("S_Motor_66_id").style.display='none';
				document.getElementById("S_Motor_138_id").style.display='';
				switch(document.getElementById("S_Motor_138_id").value)
				{
					case "3000":
					{
						document.getElementById("Cmini_id").value=21.1;
						document.getElementById("Cmaxi_id").value=21.1;
						document.getElementById("C1_val_id").value=21.1;
						break;
					}
					case "5000":
					{
						document.getElementById("Cmini_id").value=37.1;
						document.getElementById("Cmaxi_id").value=37.1;
						document.getElementById("C1_val_id").value=37.1;
						break;
					}
					case "13500":
					{
						document.getElementById("Cmini_id").value=82.9;
						document.getElementById("Cmaxi_id").value=82.9;
						document.getElementById("C1_val_id").value=82.9;
						break;
					}
				}
				break;
			}
		}

	}
}

function breakerCapacitance()
{
		switch(document.getElementById("Breaker_type_id").value)
		{
			case "Break_1":
			{
				document.getElementById("number_of_SW_per_pole_case_id").style.display='none';
				if(document.getElementById("Breaker_Status_id").value=="Open")
				{
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.15/2;
						document.getElementById("Cmini_id").value=0.15/2;
						document.getElementById("Cmaxi_id").value=0.65/2;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.25/2;
						document.getElementById("Cmini_id").value=0.25/2;
						document.getElementById("Cmaxi_id").value=0.55/2;
					}
				}
				else if(document.getElementById("Breaker_Status_id").value=="Closed")
				{
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.3/2;
						document.getElementById("Cmini_id").value=0.3/2;
						document.getElementById("Cmaxi_id").value=1.3/2;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.5/2;
						document.getElementById("Cmini_id").value=0.5/2;
						document.getElementById("Cmaxi_id").value=1.3/2;
					}
				}
				break;
			}
			case "Break_8":
			{
				document.getElementById("number_of_SW_per_pole_case_id").style.display='none';
				if(document.getElementById("Breaker_Status_id").value=="Open")
				{
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.025/2;
						document.getElementById("Cmini_id").value=0.025/2;
						document.getElementById("Cmaxi_id").value=0.15/2;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.025/2;
						document.getElementById("Cmini_id").value=0.025/2;
						document.getElementById("Cmaxi_id").value=0.15/2;
					}
				}
				else if(document.getElementById("Breaker_Status_id").value=="Closed")
				{
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.05/2;
						document.getElementById("Cmini_id").value=0.05/2;
						document.getElementById("Cmaxi_id").value=0.3/2;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.05/2;
						document.getElementById("Cmini_id").value=0.05/2;
						document.getElementById("Cmaxi_id").value=0.3/2;
					}
				}
				break;
			}
			case "Break_9":
			{
				document.getElementById("number_of_SW_per_pole_case_id").style.display='none';
				if(document.getElementById("Breaker_Status_id").value=="Open")
				{
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.05/2;
						document.getElementById("Cmini_id").value=0.05/2;
						document.getElementById("Cmaxi_id").value=0.2/2;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.1/2;
						document.getElementById("Cmini_id").value=0.1/2;
						document.getElementById("Cmaxi_id").value=0.5/2;
					}
				}
				else if(document.getElementById("Breaker_Status_id").value=="Closed")
				{
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.1/2;
						document.getElementById("Cmini_id").value=0.1/2;
						document.getElementById("Cmaxi_id").value=0.4/2;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.2/2;
						document.getElementById("Cmini_id").value=0.2/2;
						document.getElementById("Cmaxi_id").value=1/2;
					}
				}
				break;
			}
			case "Break_2":
			{
				if(document.getElementById("Breaker_Status_id").value=="Open")
				{
					document.getElementById("number_of_SW_per_pole_case_id").style.display='none';
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.02/2;
						document.getElementById("Cmini_id").value=0.02/2;
						document.getElementById("Cmaxi_id").value=0.05/2;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.025/2;
						document.getElementById("Cmini_id").value=0.025/2;
						document.getElementById("Cmaxi_id").value=0.15/2;
					}
				}
				else if(document.getElementById("Breaker_Status_id").value=="Closed")
				{
					document.getElementById("number_of_SW_per_pole_case_id").style.display='';
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.04/2*document.getElementById("number_of_SW_per_pole_id").value;
						document.getElementById("Cmini_id").value=0.04/2*document.getElementById("number_of_SW_per_pole_id").value;
						document.getElementById("Cmaxi_id").value=0.1/2*document.getElementById("number_of_SW_per_pole_id").value;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.05/2*document.getElementById("number_of_SW_per_pole_id").value;
						document.getElementById("Cmini_id").value=0.05/2*document.getElementById("number_of_SW_per_pole_id").value;
						document.getElementById("Cmaxi_id").value=0.25/2*document.getElementById("number_of_SW_per_pole_id").value;
					}
				}
				break;
			}
			case "Break_3":
			{
				document.getElementById("number_of_SW_per_pole_case_id").style.display='none';
				if(document.getElementById("Breaker_Status_id").value=="Open")
				{
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.012/2;
						document.getElementById("Cmini_id").value=0.012/2;
						document.getElementById("Cmaxi_id").value=0.017/2;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.012/2;
						document.getElementById("Cmini_id").value=0.012/2;
						document.getElementById("Cmaxi_id").value=0.017/2;
					}
				}
				else if(document.getElementById("Breaker_Status_id").value=="Closed")
				{
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.012/2;
						document.getElementById("Cmini_id").value=0.012/2;
						document.getElementById("Cmaxi_id").value=0.017/2;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.012/2;
						document.getElementById("Cmini_id").value=0.012/2;
						document.getElementById("Cmaxi_id").value=0.017/2;
					}
				}
				break;
			}
			case "Break_4":
			{
				document.getElementById("number_of_SW_per_pole_case_id").style.display='none';
				if(document.getElementById("Breaker_Status_id").value=="Open")
				{
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.012/2;
						document.getElementById("Cmini_id").value=0.012/2;
						document.getElementById("Cmaxi_id").value=0.017/2;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.012/2;
						document.getElementById("Cmini_id").value=0.012/2;
						document.getElementById("Cmaxi_id").value=0.017/2;
					}
				}
				else if(document.getElementById("Breaker_Status_id").value=="Closed")
				{
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.012/2;
						document.getElementById("Cmini_id").value=0.012/2;
						document.getElementById("Cmaxi_id").value=0.017/2;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.012/2;
						document.getElementById("Cmini_id").value=0.012/2;
						document.getElementById("Cmaxi_id").value=0.017/2;
					}
				}
				break;
			}
			case "Break_5":
			{
				if(document.getElementById("Breaker_Status_id").value=="Open")
				{
					document.getElementById("number_of_SW_per_pole_case_id").style.display='none';
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.02/2;
						document.getElementById("Cmini_id").value=0.02/2;
						document.getElementById("Cmaxi_id").value=0.04/2;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.025/2;
						document.getElementById("Cmini_id").value=0.025/2;
						document.getElementById("Cmaxi_id").value=0.1/2;
					}
				}
				else if(document.getElementById("Breaker_Status_id").value=="Closed")
				{
					document.getElementById("number_of_SW_per_pole_case_id").style.display='';
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.04/2*document.getElementById("number_of_SW_per_pole_id").value;
						document.getElementById("Cmini_id").value=0.04/2*document.getElementById("number_of_SW_per_pole_id").value;
						document.getElementById("Cmaxi_id").value=0.1/2*document.getElementById("number_of_SW_per_pole_id").value;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.05/2*document.getElementById("number_of_SW_per_pole_id").value;
						document.getElementById("Cmini_id").value=0.05/2*document.getElementById("number_of_SW_per_pole_id").value;
						document.getElementById("Cmaxi_id").value=0.2/2*document.getElementById("number_of_SW_per_pole_id").value;
					}
				}
				break;
			}
			case "Break_6":
			{
				document.getElementById("number_of_SW_per_pole_case_id").style.display='none';
				if(document.getElementById("Breaker_Status_id").value=="Open")
				{
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.025/2;
						document.getElementById("Cmini_id").value=0.025/2;
						document.getElementById("Cmaxi_id").value=0.08/2;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.03/2;
						document.getElementById("Cmini_id").value=0.03/2;
						document.getElementById("Cmaxi_id").value=0.2/2;
					}
				}
				else if(document.getElementById("Breaker_Status_id").value=="Closed")
				{
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.06/2;
						document.getElementById("Cmini_id").value=0.06/2;
						document.getElementById("Cmaxi_id").value=0.12/2;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.08/2;
						document.getElementById("Cmini_id").value=0.08/2;
						document.getElementById("Cmaxi_id").value=0.25/2;
					}
				}
				break;
			}
			case "Break_7":
			{
				document.getElementById("number_of_SW_per_pole_case_id").style.display='none';
				if(document.getElementById("Breaker_Status_id").value=="Open")
				{
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.02/2;
						document.getElementById("Cmini_id").value=0.02/2;
						document.getElementById("Cmaxi_id").value=0.06/2;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.03/2;
						document.getElementById("Cmini_id").value=0.03/2;
						document.getElementById("Cmaxi_id").value=0.13/2;
					}
				}
				else if(document.getElementById("Breaker_Status_id").value=="Closed")
				{
					if(document.getElementById("Maximum_system_voltage_id").value=="15–72.5 kV")
					{
						document.getElementById("C1_val_id").value=0.03/2;
						document.getElementById("Cmini_id").value=0.03/2;
						document.getElementById("Cmaxi_id").value=0.1/2;
					}
					else if(document.getElementById("Maximum_system_voltage_id").value=="72.5-800 kV")
					{
						document.getElementById("C1_val_id").value=0.06/2;
						document.getElementById("Cmini_id").value=0.06/2;
						document.getElementById("Cmaxi_id").value=0.2/2;
					}
				}
				break;
			}
		}
}

function busCapacitance()
{
	feetToM=0.3048;
	if(source="choose_1")
	{
		switch(document.getElementById("typeBus_id").value)
		{
			case "Isolated Phase Bus Capacitance":
			{
				document.getElementById("IsolatedBusBlock_id").style.display='';
				document.getElementById("IsolatedBusIBlock_id").style.display='';
				document.getElementById("SegregatedBusBlock_id").style.display='none';
				document.getElementById("SegregatedBusIBlock_id").style.display='none';
				
				switch(document.getElementById("IsolatedBus_id").value)
				{
					case "15kVClass110kvBIL":
					{
						switch(document.getElementById("IsolatedBusI_id").value)
						{
							case "1200":
							{
								document.getElementById("Cmini_id").value=0.0089*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0143*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0089*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "2000":
							{
								document.getElementById("Cmini_id").value=0.0102*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0143*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0102*document.getElementById("busLength").value*feetToM;
							}
							case "2500":
							{
								document.getElementById("Cmini_id").value=0.0102*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0143*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0102*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "3000":
							{
								document.getElementById("Cmini_id").value=0.0102*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0143*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0102*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "3500":
							{
								document.getElementById("Cmini_id").value=0.0102*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0143*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0102*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "4000":
							{
								document.getElementById("Cmini_id").value=0.014*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0143*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.014*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "4500":
							{
								document.getElementById("Cmini_id").value=0.014*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0143*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.014*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "5000":
							{
								document.getElementById("Cmini_id").value=0.014*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.019*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.014*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "5500":
							{
								document.getElementById("Cmini_id").value=0.014*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.019*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.014*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "6000":
							{
								document.getElementById("Cmini_id").value=0.014*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.019*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.014*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "6500":
							{
								document.getElementById("Cmini_id").value=0.014*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.019*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.014*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "7000":
							{
								document.getElementById("Cmini_id").value=0.0173*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0226*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0173*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "7500":
							{
								document.getElementById("Cmini_id").value=0.0173*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0226*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0173*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "8000":
							{
								document.getElementById("Cmini_id").value=0.0217*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0217*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0217*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "9000":
							{
								document.getElementById("Cmini_id").value=0.0217*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0217*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0217*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "10000":
							{
								document.getElementById("Cmini_id").value=0.0217*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0217*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0217*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "11000":
							{
								document.getElementById("Cmini_id").value=0.0237*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0237*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0237*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "12000":
							{
								document.getElementById("Cmini_id").value=0.0237*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0237*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0237*document.getElementById("busLength").value*feetToM;
								break;
							}
						}
						break;
					}
					case "23kVClass150kvBIL":
					{
						switch(document.getElementById("IsolatedBusI_id").value)
						{
							case "1200":
							{
								document.getElementById("Cmini_id").value=0.008*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0124*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.008*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "2000":
							{
								document.getElementById("Cmini_id").value=0.009*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0124*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.009*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "2500":
							{
								document.getElementById("Cmini_id").value=0.009*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0124*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.009*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "3000":
							{
								document.getElementById("Cmini_id").value=0.009*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0124*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.009*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "3500":
							{
								document.getElementById("Cmini_id").value=0.009*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0124*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.009*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "4000":
							{
								document.getElementById("Cmini_id").value=0.0124*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0135*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0124*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "4500":
							{
								document.getElementById("Cmini_id").value=0.0127*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0135*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0127*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "5000":
							{
								document.getElementById("Cmini_id").value=0.0127*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0158*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0127*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "5500":
							{
								document.getElementById("Cmini_id").value=0.0127*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0158*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0127*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "6000":
							{
								document.getElementById("Cmini_id").value=0.0135*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0158*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0135*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "6500":
							{
								document.getElementById("Cmini_id").value=0.0135*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0158*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0135*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "7000":
							{
								document.getElementById("Cmini_id").value=0.0144*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0176*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0144*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "7500":
							{
								document.getElementById("Cmini_id").value=0.0144*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0176*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0144*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "8000":
							{
								document.getElementById("Cmini_id").value=0.0176*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0176*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0176*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "9000":
							{
								document.getElementById("Cmini_id").value=0.0181*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0181*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0181*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "10000":
							{
								document.getElementById("Cmini_id").value=0.0181*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0181*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0181*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "11000":
							{
								document.getElementById("Cmini_id").value=0.0205*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0205*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0205*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "12000":
							{
								document.getElementById("Cmini_id").value=0.0205*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0205*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0205*document.getElementById("busLength").value*feetToM;
								break;
							}
						}
					}
				}
				break;
			}
			case "Segregated Phase Bus Capacitance":
			{
				document.getElementById("IsolatedBusBlock_id").style.display='none';
				document.getElementById("IsolatedBusIBlock_id").style.display='none';
				document.getElementById("SegregatedBusBlock_id").style.display='';
				document.getElementById("SegregatedBusIBlock_id").style.display='';
				
				switch(document.getElementById("SegregatedBus_id").value)
				{
					case "15kVClass110kvBIL":
					{
						switch(document.getElementById("SegregatedBusI_id").value)
						{
							case "1200":
							{
								document.getElementById("Cmini_id").value=0.01*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.01*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.01*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "2000":
							{
								document.getElementById("Cmini_id").value=0.01*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0102*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.01*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "3000":
							{
								document.getElementById("Cmini_id").value=0.01*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0102*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.01*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "4000":
							{
								document.getElementById("Cmini_id").value=0.01*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0126*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.01*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "5000":
							{
								document.getElementById("Cmini_id").value=0.0125*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0149*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0125*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "6000":
							{
								document.getElementById("Cmini_id").value=0.015*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0171*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.015*document.getElementById("busLength").value*feetToM;
								break;
							}
							case "7000":
							{
								document.getElementById("Cmini_id").value=0.0171*document.getElementById("busLength").value*feetToM;
								document.getElementById("Cmaxi_id").value=0.0171*document.getElementById("busLength").value*feetToM;
								document.getElementById("C1_val_id").value=0.0171*document.getElementById("busLength").value*feetToM;
								break;
							}
						}
						break;
					}
				}
			}
		}
	}
}

function CTCapacitance()
{
		switch(document.getElementById("CT_V_id").value)
		{
		case "25":
		{
			document.getElementById("Cmini_id").value=0.18;
			document.getElementById("Cmaxi_id").value=0.26;
			document.getElementById("C1_val_id").value=0.18;
			break;
		}
		case "34.5":
		{
			document.getElementById("Cmini_id").value=0.16;
			document.getElementById("Cmaxi_id").value=0.25;
			document.getElementById("C1_val_id").value=0.16;
			break;
		}
		case "46":
		{
			document.getElementById("Cmini_id").value=0.17;
			document.getElementById("Cmaxi_id").value=0.22;
			document.getElementById("C1_val_id").value=0.17;
			break;
		}
		case "69":
		{
			document.getElementById("Cmini_id").value=0.17;
			document.getElementById("Cmaxi_id").value=0.26;
			document.getElementById("C1_val_id").value=0.17;
			break;
		}
		case "115":
		{
			document.getElementById("Cmini_id").value=0.21;
			document.getElementById("Cmaxi_id").value=0.32;
			document.getElementById("C1_val_id").value=0.21;
			break;
		}
		case "161":
		{
			document.getElementById("Cmini_id").value=0.31;
			document.getElementById("Cmaxi_id").value=0.38;
			document.getElementById("C1_val_id").value=0.31;
			break;
		}
		case "196":
		{
			document.getElementById("Cmini_id").value=0.33;
			document.getElementById("Cmaxi_id").value=0.39;
			document.getElementById("C1_val_id").value=0.33;
			break;
		}
		case "230":
		{
			document.getElementById("Cmini_id").value=0.35;
			document.getElementById("Cmaxi_id").value=0.42;
			document.getElementById("C1_val_id").value=0.35;
			break;
		}
	}
}
function PTCapacitance()
{
	if(source="choose_1")
	{
		switch(document.getElementById("PotentialTransformer_id").value)
		{
		case "15":
		{
			document.getElementById("LLBlock").style.display='';
			document.getElementById("LNBlock").style.display='none';
			document.getElementById("LLLNBlock").style.display='none';
			switch(document.getElementById("LL_id").value)
			{
				case "Line-Line":
				{
					document.getElementById("Cmini_id").value=0.26;
					document.getElementById("Cmaxi_id").value=0.26;
					document.getElementById("C1_val_id").value=0.26;
					break;
				}
			}
			break;
		}
		case "25":
		{
			document.getElementById("LLBlock").style.display='none';
			document.getElementById("LNBlock").style.display='none';
			document.getElementById("LLLNBlock").style.display='';
			switch(document.getElementById("LLLN_id").value)
			{
				case "Line-Line":
				{
					document.getElementById("Cmini_id").value=0.25;
					document.getElementById("Cmaxi_id").value=0.44;
					document.getElementById("C1_val_id").value=0.25;
					break;
				}
				case "Line-Neutral":
				{
					document.getElementById("Cmini_id").value=0.27;
					document.getElementById("Cmaxi_id").value=0.8;
					document.getElementById("C1_val_id").value=0.27;
					break;
				}
			}
			break;
		}
		case "34.5":
		{
			document.getElementById("LLBlock").style.display='none';
			document.getElementById("LNBlock").style.display='none';
			document.getElementById("LLLNBlock").style.display='';
			switch(document.getElementById("LLLN_id").value)
			{
				case "Line-Line":
				{
					document.getElementById("Cmini_id").value=0.31;
					document.getElementById("Cmaxi_id").value=0.44;
					document.getElementById("C1_val_id").value=0.31;
					break;
				}
				case "Line-Neutral":
				{
					document.getElementById("Cmini_id").value=0.27;
					document.getElementById("Cmaxi_id").value=0.9;
					document.getElementById("C1_val_id").value=0.27;
					break;
				}
			}
			break;
		}
		case "46":
		{
			document.getElementById("LLBlock").style.display='none';
			document.getElementById("LNBlock").style.display='none';
			document.getElementById("LLLNBlock").style.display='';
			switch(document.getElementById("LLLN_id").value)
			{
				case "Line-Line":
				{
					document.getElementById("Cmini_id").value=0.350;
					document.getElementById("Cmaxi_id").value=0.430;
					document.getElementById("C1_val_id").value=0.350;
					break;
				}
				case "Line-Neutral":
				{
					document.getElementById("Cmini_id").value=0.3;
					document.getElementById("Cmaxi_id").value=0.970;
					document.getElementById("C1_val_id").value=0.3;
					break;
				}
			}
			break;
		}
		case "69":
		{
			document.getElementById("LLBlock").style.display='none';
			document.getElementById("LNBlock").style.display='none';
			document.getElementById("LLLNBlock").style.display='';
			switch(document.getElementById("LLLN_id").value)
			{
				case "Line-Line":
				{
					document.getElementById("Cmini_id").value=0.36;
					document.getElementById("Cmaxi_id").value=0.44;
					document.getElementById("C1_val_id").value=0.36;
					break;
				}
				case "Line-Neutral":
				{
					document.getElementById("Cmini_id").value=0.34;
					document.getElementById("Cmaxi_id").value=1.3;
					document.getElementById("C1_val_id").value=0.34;
					break;
				}
			}
			break;
		}
	case "115":
		{
			document.getElementById("LLBlock").style.display='none';
			document.getElementById("LNBlock").style.display='none';
			document.getElementById("LLLNBlock").style.display='';
			switch(document.getElementById("LLLN_id").value)
			{
				case "Line-Line":
				{
					document.getElementById("Cmini_id").value=0.47;
					document.getElementById("Cmaxi_id").value=0.52;
					document.getElementById("C1_val_id").value=0.47;
					break;
				}
				case "Line-Neutral":
				{
					document.getElementById("Cmini_id").value=0.48;
					document.getElementById("Cmaxi_id").value=0.61;
					document.getElementById("C1_val_id").value=0.48;
					break;
				}
			}
			break;
		}
		case "138":
		{
			document.getElementById("LLBlock").style.display='none';
			document.getElementById("LNBlock").style.display='none';
			document.getElementById("LLLNBlock").style.display='';
			switch(document.getElementById("LLLN_id").value)
			{
				case "Line-Line":
				{
					document.getElementById("Cmini_id").value=0.49;
					document.getElementById("Cmaxi_id").value=0.55;
					document.getElementById("C1_val_id").value=0.49;
					break;
				}
				case "Line-Neutral":
				{
					document.getElementById("Cmini_id").value=0.53;
					document.getElementById("Cmaxi_id").value=0.66;
					document.getElementById("C1_val_id").value=0.53;
					break;
				}
			}
			break;
		}
		case "161":
		{
			document.getElementById("LLBlock").style.display='none';
			document.getElementById("LNBlock").style.display='none';
			document.getElementById("LLLNBlock").style.display='';
			switch(document.getElementById("LLLN_id").value)
			{
				case "Line-Line":
				{
					document.getElementById("Cmini_id").value=0.51;
					document.getElementById("Cmaxi_id").value=0.58;
					document.getElementById("C1_val_id").value=0.51;
					break;
				}
				case "Line-Neutral":
				{
					document.getElementById("Cmini_id").value=0.51;
					document.getElementById("Cmaxi_id").value=0.7;
					document.getElementById("C1_val_id").value=0.51;
					break;
				}
			}
			break;
		}
		case "196":
		{
			document.getElementById("LLBlock").style.display='none';
			document.getElementById("LNBlock").style.display='';
			document.getElementById("LLLNBlock").style.display='none';
			switch(document.getElementById("LL_id").value)
			{
				case "Line-Neutral":
				{
					document.getElementById("Cmini_id").value=0.58;
					document.getElementById("Cmaxi_id").value=0.82;
					document.getElementById("C1_val_id").value=0.58;
					break;
				}
			}
			break;
		}
		case "230":
		{
			document.getElementById("LLBlock").style.display='none';
			document.getElementById("LNBlock").style.display='none';
			document.getElementById("LLLNBlock").style.display='';
			switch(document.getElementById("LLLN_id").value)
			{
				case "Line-Line":
				{
					document.getElementById("Cmini_id").value=0.6;
					document.getElementById("Cmaxi_id").value=0.68;
					document.getElementById("C1_val_id").value=0.6;
					break;
				}
				case "Line-Neutral":
				{
					document.getElementById("Cmini_id").value=0.6;
					document.getElementById("Cmaxi_id").value=0.81;
					document.getElementById("C1_val_id").value=0.6;
					break;
				}
			}
			break;
		}
		case "345":
		{
			document.getElementById("LLBlock").style.display='none';
			document.getElementById("LNBlock").style.display='';
			document.getElementById("LLLNBlock").style.display='none';
			switch(document.getElementById("LL_id").value)
			{
				case "Line-Neutral":
				{
					document.getElementById("Cmini_id").value=0.920;
					document.getElementById("Cmaxi_id").value=0.920;
					document.getElementById("C1_val_id").value=0.920;
					break;
				}
			}
			break;
		}
	}
	}
}

//functions use to calculate the values of stray capacitance for each component with data from "IEEE Std C37.011-2015"
function transfoBCapacitance()
{
	switch(document.getElementById("SB_id").value)
	{
		case "1-10":
		{
			document.getElementById("SP110B_id").style.display='';
			document.getElementById("SP10100B_id").style.display='none';
			document.getElementById("SP1001000B_id").style.display='none';
			document.getElementById("Cmini_id").value=0.9;
			document.getElementById("Cmaxi_id").value=10;
			document.getElementById("C1_val_id").value=0.9;
			break;
		}
		case "10-100":
		{
			document.getElementById("SP110B_id").style.display='none';
			document.getElementById("SP10100B_id").style.display='';
			document.getElementById("SP1001000B_id").style.display='none';
			switch(document.getElementById("SP10100B_id").value)
			{
				case "15-121":
				{
				document.getElementById("Cmini_id").value=2;
				document.getElementById("Cmaxi_id").value=12;
				document.getElementById("C1_val_id").value=2;
				break;
				}
				
				case "121-550":
				{
				document.getElementById("Cmini_id").value=2;
				document.getElementById("Cmaxi_id").value=6.5;
				document.getElementById("C1_val_id").value=2;
				break;
				}
			}
			break;
		}
		case "100-1000":
		{
			document.getElementById("SP110B_id").style.display='none';
			document.getElementById("SP10100B_id").style.display='none';
			document.getElementById("SP1001000B_id").style.display='';
			document.getElementById("Cmini_id").value=3.5;
			document.getElementById("Cmaxi_id").value=16;
			document.getElementById("C1_val_id").value=3.5;
			break;
		}
	}
}
function generatorBCapacitance()
{
	switch(document.getElementById("type_of_generator_id").value)
	{
		case "Steam-turbine":
		{
			document.getElementById("S_GeneratorB_steam_Line_id").style.display='';
			document.getElementById("S_GeneratorB_hydro_Line_id").style.display='none';
			switch(document.getElementById("S_GeneratorB_steam_id").value)
			{
				case "15-70":
				{
					document.getElementById("Cmini_id").value=30;
					document.getElementById("Cmaxi_id").value=85;
					document.getElementById("C1_val_id").value=30;
					break;
				}
				case "70-300":
				{
					document.getElementById("Cmini_id").value=50;
					document.getElementById("Cmaxi_id").value=110;
					document.getElementById("C1_val_id").value=50;
					break;
				}
				case ">300":
				{
					document.getElementById("Cmini_id").value=65;
					document.getElementById("Cmaxi_id").value=250;
					document.getElementById("C1_val_id").value=65;
					break;
				}
			}
			break;
		}
		case "Hydro driven":
		{
			document.getElementById("S_GeneratorB_steam_Line_id").style.display='none';
			document.getElementById("S_GeneratorB_hydro_Line_id").style.display='';
			switch(document.getElementById("S_GeneratorB_hydro_id").value)
			{
				case "10-25":
				{
					document.getElementById("Cmini_id").value=50;
					document.getElementById("Cmaxi_id").value=85;
					document.getElementById("C1_val_id").value=50;
					break;
				}
				case "25-100":
				{
					document.getElementById("Cmini_id").value=150;
					document.getElementById("Cmaxi_id").value=300;
					document.getElementById("C1_val_id").value=150;
					break;
				}
			}
			break;
		}
	}
}

function busBCapacitance()
{
	switch(document.getElementById("InsulationB_id").value)
	{
		case "Air":
		{
			document.getElementById("AirBBusLine_id").style.display='';
			document.getElementById("AirUnit").style.display='';
			document.getElementById("AirAR").style.display='';
			switch(document.getElementById("AirBBus_id").value)
			{
				case "Isolated Phase Bus Capacitance":
				{
					document.getElementById("IsolatedBCase_id").style.display='';
					document.getElementById("SegregatedBCase_id").style.display='none';
					document.getElementById("OutdoorB_id").style.display='none';
					document.getElementById("GasBBusLine_id").style.display='none';
					document.getElementById("RatedMaximumVoltageBLine_id").style.display='none';
					switch(document.getElementById("IsolatedB").value)
					{
						case "1200-3500":
						{
							document.getElementById("Cmini_id").value=0.026*document.getElementById("busLengthB_id").value;
							document.getElementById("Cmaxi_id").value=0.052*document.getElementById("busLengthB_id").value;
							document.getElementById("C1_val_id").value=0.026*document.getElementById("busLengthB_id").value;
							break;
						}
						case "4000-6500":
						{
							document.getElementById("Cmini_id").value=0.039*document.getElementById("busLengthB_id").value;
							document.getElementById("Cmaxi_id").value=0.062*document.getElementById("busLengthB_id").value;
							document.getElementById("C1_val_id").value=0.039*document.getElementById("busLengthB_id").value;
							break;
						}
						case "7000-12000":
						{
							document.getElementById("Cmini_id").value=0.014*document.getElementById("busLengthB_id").value;
							document.getElementById("Cmaxi_id").value=0.024*document.getElementById("busLengthB_id").value;
							document.getElementById("C1_val_id").value=0.014*document.getElementById("busLengthB_id").value;
							break;
						}
					}
					break;
				}
				case "Segregated Phase Bus Capacitance":
				{
					document.getElementById("IsolatedBCase_id").style.display='none';
					document.getElementById("SegregatedBCase_id").style.display='';
					document.getElementById("OutdoorB_id").style.display='none';
					document.getElementById("GasBBusLine_id").style.display='none';
					document.getElementById("RatedMaximumVoltageBLine_id").style.display='none';
					switch(document.getElementById("SegregatedB").value)
					{
						case "1200-3500":
						{
							document.getElementById("Cmini_id").value=0.033*document.getElementById("busLengthB_id").value;
							document.getElementById("Cmaxi_id").value=0.066*document.getElementById("busLengthB_id").value;
							document.getElementById("C1_val_id").value=0.033*document.getElementById("busLengthB_id").value;
							break;
						}
						case "4000-6500":
						{
							document.getElementById("Cmini_id").value=0.033*document.getElementById("busLengthB_id").value;
							document.getElementById("Cmaxi_id").value=0.066*document.getElementById("busLengthB_id").value;
							document.getElementById("C1_val_id").value=0.033*document.getElementById("busLengthB_id").value;
							break;
						}
					}
					break;
				}
				case "Outdoor substation bus capacitance":
				{
					document.getElementById("IsolatedBCase_id").style.display='none';
					document.getElementById("SegregatedBCase_id").style.display='none';
					document.getElementById("OutdoorB_id").style.display='';
					document.getElementById("GasBBusLine_id").style.display='none';
					document.getElementById("RatedMaximumVoltageBLine_id").style.display='none';
					switch(document.getElementById("OutdoorB_id").value)
					{
						case "1200-3500":
						{
							document.getElementById("Cmini_id").value=0.0082*document.getElementById("busLengthB_id").value;
							document.getElementById("Cmaxi_id").value=0.018*document.getElementById("busLengthB_id").value;
							document.getElementById("C1_val_id").value=0.0082*document.getElementById("busLengthB_id").value;
							break;
						}
						case "4000-6500":
						{
							document.getElementById("Cmini_id").value=0.0082*document.getElementById("busLengthB_id").value;
							document.getElementById("Cmaxi_id").value=0.018*document.getElementById("busLengthB_id").value;
							document.getElementById("C1_val_id").value=0.0082*document.getElementById("busLengthB_id").value;
							break;
						}
					}
					break;
				}
			}
			break;
		}
		case "Gas":
		{
			document.getElementById("AirUnit").style.display='none';
			document.getElementById("AirAR").style.display='none';
			document.getElementById("AirBBusLine_id").style.display='none';
			document.getElementById("IsolatedBCase_id").style.display='none';
			document.getElementById("SegregatedBCase_id").style.display='none';
			document.getElementById("OutdoorB_id").style.display='none';
			document.getElementById("GasBBusLine_id").style.display='';
			document.getElementById("RatedMaximumVoltageBLine_id").style.display='';
			switch(document.getElementById("RatedMaximumVoltageB_id").value)
			{
				case "none":
				{
					document.getElementById("C1_val_id").value='';
					break;
				}
				case "242 and below":
				{
					switch(document.getElementById("GasBBus_id").value)
					{
						case "Isolated Phase Bus Capacitance":
						{
							document.getElementById("Cmini_id").value=0.049*document.getElementById("busLengthB_id").value;
							document.getElementById("Cmaxi_id").value=0.066*document.getElementById("busLengthB_id").value;
							document.getElementById("C1_val_id").value=0.049*document.getElementById("busLengthB_id").value;
							break;
						}
						case "Three-in-one Capacitance":
						{
							document.getElementById("Cmini_id").value=0.066*document.getElementById("busLengthB_id").value;
							document.getElementById("Cmaxi_id").value=0.082*document.getElementById("busLengthB_id").value;
							document.getElementById("C1_val_id").value=0.066*document.getElementById("busLengthB_id").value;
							break;
						}
					}
					break;
				}
				case "362 and above":
				{
					switch(document.getElementById("GasBBus_id").value)
					{
						case "Isolated Phase Bus Capacitance":
						{
							document.getElementById("Cmini_id").value=0.039*document.getElementById("busLengthB_id").value;
							document.getElementById("Cmaxi_id").value=0.056*document.getElementById("busLengthB_id").value;
							document.getElementById("C1_val_id").value=0.039*document.getElementById("busLengthB_id").value;
							break;
						}
						case "Three-in-one Capacitance":
						{
							document.getElementById("Cmini_id").value=0.049*document.getElementById("busLengthB_id").value;
							document.getElementById("Cmaxi_id").value=0.072*document.getElementById("busLengthB_id").value;
							document.getElementById("C1_val_id").value=0.049*document.getElementById("busLengthB_id").value;
							break;
						}
					}
					break;
				}
			}
			break;
		}
	}
}

function CTBCapacitance()
{
	switch(document.getElementById("CTB_V_id").value)
	{
		case "none":
		{
			document.getElementById("C1_val_id").value='';
			break;
		}
		case "15-72.5":
		{
			document.getElementById("Cmini_id").value=0.075;
			document.getElementById("Cmaxi_id").value=0.260;
			document.getElementById("C1_val_id").value=0.075;
			break;
		}
		case "72.5-800":
		{
			document.getElementById("Cmini_id").value=0.15;
			document.getElementById("Cmaxi_id").value=0.45;
			document.getElementById("C1_val_id").value=0.15;
			break;
		}
	}
}

function PTBCapacitance()
{
	switch(document.getElementById("PotentialTransformerB_id").value)
	{
		case "none":
		{
			document.getElementById("C1_val_id").value='';
			break;
		}
		case "15-72.5":
		{
			document.getElementById("Cmini_id").value=0.125;
			document.getElementById("Cmaxi_id").value=0.5;
			document.getElementById("C1_val_id").value=0.125;
			break;
		}
		case "72.5-800":
		{
			document.getElementById("Cmini_id").value=0.15;
			document.getElementById("Cmaxi_id").value=0.45;
			document.getElementById("C1_val_id").value=0.15;
			break;
		}
	}
}

function transfoCCapacitance()
{
	switch(document.getElementById("type_of_transformerC_id").value)
	{
		case "Core Type":
		{
			document.getElementById("S_core_type_id").style.display='';
			document.getElementById("S_shellauto_type_id").style.display='none';
			switch(document.getElementById("S_core_type_id").value)
			{
				case "1":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=1.2;
						document.getElementById("Cmaxi_id").value=14;
						document.getElementById("C1_val_id").value=1.2;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=3.1;
						document.getElementById("Cmaxi_id").value=16;
						document.getElementById("C1_val_id").value=3.1;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=1.2;
						document.getElementById("Cmaxi_id").value=17;
						document.getElementById("C1_val_id").value=1.2;
						break;
						}
					}
					break;
				}
				case "2":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=1.4;
						document.getElementById("Cmaxi_id").value=16;
						document.getElementById("C1_val_id").value=1.4;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=3;
						document.getElementById("Cmaxi_id").value=16;
						document.getElementById("C1_val_id").value=3;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=1;
						document.getElementById("Cmaxi_id").value=18;
						document.getElementById("C1_val_id").value=1;
						break;
						}
					}
					break;
				}
				case "5":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=1.2;
						document.getElementById("Cmaxi_id").value=14;
						document.getElementById("C1_val_id").value=1.2;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=5.5;
						document.getElementById("Cmaxi_id").value=17;
						document.getElementById("C1_val_id").value=5.5;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=1.1;
						document.getElementById("Cmaxi_id").value=20;
						document.getElementById("C1_val_id").value=1.1;
						break;
						}
					}
					break;
				}
				case "7":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=2.7;
						document.getElementById("Cmaxi_id").value=11;
						document.getElementById("C1_val_id").value=2.7;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=8;
						document.getElementById("Cmaxi_id").value=16;
						document.getElementById("C1_val_id").value=8;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=3.5;
						document.getElementById("Cmaxi_id").value=17;
						document.getElementById("C1_val_id").value=3.5;
						break;
						}
					}
					break;
				}
				case "10":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=4;
						document.getElementById("Cmaxi_id").value=7;
						document.getElementById("C1_val_id").value=4;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=8;
						document.getElementById("Cmaxi_id").value=18;
						document.getElementById("C1_val_id").value=8;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=4;
						document.getElementById("Cmaxi_id").value=11;
						document.getElementById("C1_val_id").value=4;
						break;
						}
					}
					break;
				}
				case "25":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=2.8;
						document.getElementById("Cmaxi_id").value=4.2;
						document.getElementById("C1_val_id").value=2.8;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=5.2;
						document.getElementById("Cmaxi_id").value=20;
						document.getElementById("C1_val_id").value=5.2;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=2.5;
						document.getElementById("Cmaxi_id").value=18;
						document.getElementById("C1_val_id").value=2.5;
						break;
						}
					}
					break;
				}
				case "50":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=4;
						document.getElementById("Cmaxi_id").value=6.8;
						document.getElementById("C1_val_id").value=4;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=3;
						document.getElementById("Cmaxi_id").value=24;
						document.getElementById("C1_val_id").value=3;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=3.4;
						document.getElementById("Cmaxi_id").value=11;
						document.getElementById("C1_val_id").value=3.4;
						break;
						}
					}
					break;
				}
				case "75":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=3.5;
						document.getElementById("Cmaxi_id").value=7;
						document.getElementById("C1_val_id").value=3.5;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=2.8;
						document.getElementById("Cmaxi_id").value=30;
						document.getElementById("C1_val_id").value=2.8;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=5.5;
						document.getElementById("Cmaxi_id").value=13;
						document.getElementById("C1_val_id").value=5.5;
						break;
						}
					}
					break;
				}
				case "100":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=3.3;
						document.getElementById("Cmaxi_id").value=7;
						document.getElementById("C1_val_id").value=3.3;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=4;
						document.getElementById("Cmaxi_id").value=40;
						document.getElementById("C1_val_id").value=4;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=5;
						document.getElementById("Cmaxi_id").value=13;
						document.getElementById("C1_val_id").value=5;
						break;
						}
					}
					break;
				}
			}
		break;
		}
		case "Shell Type":
		{
			document.getElementById("S_core_type_id").style.display='none';
			document.getElementById("S_shellauto_type_id").style.display='';
			switch(document.getElementById("S_shellauto_type_id").value)
			{
				case "25":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=4;
						document.getElementById("Cmaxi_id").value=7;
						document.getElementById("C1_val_id").value=4;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=10;
						document.getElementById("Cmaxi_id").value=17;
						document.getElementById("C1_val_id").value=10;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=4;
						document.getElementById("Cmaxi_id").value=8;
						document.getElementById("C1_val_id").value=4;
						break;
						}
					}
					break;
				}
				case "50":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=6;
						document.getElementById("Cmaxi_id").value=9;
						document.getElementById("C1_val_id").value=6;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=8;
						document.getElementById("Cmaxi_id").value=16;
						document.getElementById("C1_val_id").value=8;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=4;
						document.getElementById("Cmaxi_id").value=15;
						document.getElementById("C1_val_id").value=4;
						break;
						}
					}
					break;
				}
				case "75":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=7;
						document.getElementById("Cmaxi_id").value=13;
						document.getElementById("C1_val_id").value=7;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=7;
						document.getElementById("Cmaxi_id").value=17;
						document.getElementById("C1_val_id").value=7;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=4;
						document.getElementById("Cmaxi_id").value=25;
						document.getElementById("C1_val_id").value=4;
						break;
						}
					}
					break;
				}
				case "100":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=6;
						document.getElementById("Cmaxi_id").value=14;
						document.getElementById("C1_val_id").value=6;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=7;
						document.getElementById("Cmaxi_id").value=19;
						document.getElementById("C1_val_id").value=7;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=5;
						document.getElementById("Cmaxi_id").value=30;
						document.getElementById("C1_val_id").value=5;
						break;
						}
					}
					break;
				}
				case "200":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=5;
						document.getElementById("Cmaxi_id").value=18;
						document.getElementById("C1_val_id").value=5;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=8;
						document.getElementById("Cmaxi_id").value=25;
						document.getElementById("C1_val_id").value=8;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=5;
						document.getElementById("Cmaxi_id").value=27;
						document.getElementById("C1_val_id").value=5;
						break;
						}
					}
					break;
				}
				case "300":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=5.5;
						document.getElementById("Cmaxi_id").value=21;
						document.getElementById("C1_val_id").value=5.5;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=11;
						document.getElementById("Cmaxi_id").value=22;
						document.getElementById("C1_val_id").value=11;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=20;
						document.getElementById("Cmaxi_id").value=40;
						document.getElementById("C1_val_id").value=20;
						break;
						}
					}
					break;
				}
				case "400":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=8;
						document.getElementById("Cmaxi_id").value=24;
						document.getElementById("C1_val_id").value=8;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=14;
						document.getElementById("Cmaxi_id").value=21;
						document.getElementById("C1_val_id").value=14;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=17;
						document.getElementById("Cmaxi_id").value=45;
						document.getElementById("C1_val_id").value=17;
						break;
						}
					}
					break;
				}
				case "500":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=6.5;
						document.getElementById("Cmaxi_id").value=30;
						document.getElementById("C1_val_id").value=6.5;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=17;
						document.getElementById("Cmaxi_id").value=24;
						document.getElementById("C1_val_id").value=17;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=18;
						document.getElementById("Cmaxi_id").value=46;
						document.getElementById("C1_val_id").value=18;
						break;
						}
					}
					break;
				}
				case "600":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=5;
						document.getElementById("Cmaxi_id").value=40;
						document.getElementById("C1_val_id").value=5;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=16;
						document.getElementById("Cmaxi_id").value=29;
						document.getElementById("C1_val_id").value=16;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=16;
						document.getElementById("Cmaxi_id").value=46;
						document.getElementById("C1_val_id").value=16;
						break;
						}
					}
					break;
				}
				case "700":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=4;
						document.getElementById("Cmaxi_id").value=39;
						document.getElementById("C1_val_id").value=4;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=15;
						document.getElementById("Cmaxi_id").value=30;
						document.getElementById("C1_val_id").value=15;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=14;
						document.getElementById("Cmaxi_id").value=43;
						document.getElementById("C1_val_id").value=14;
						break;
						}
					}
					break;
				}
				case "1000":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=4;
						document.getElementById("Cmaxi_id").value=41;
						document.getElementById("C1_val_id").value=4;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=11;
						document.getElementById("Cmaxi_id").value=30;
						document.getElementById("C1_val_id").value=11;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=6;
						document.getElementById("Cmaxi_id").value=54;
						document.getElementById("C1_val_id").value=6;
						break;
						}
					}
					break;
				}
			}
		break;
		}
		case "AutoTransformer":
		{
			document.getElementById("S_core_type_id").style.display='none';
			document.getElementById("S_shellauto_type_id").style.display='';
			switch(document.getElementById("S_shellauto_type_id").value)
			{
				case "25":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=8;
						document.getElementById("Cmaxi_id").value=18;
						document.getElementById("C1_val_id").value=8;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=3.5;
						document.getElementById("Cmaxi_id").value=8;
						document.getElementById("C1_val_id").value=3.5;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=3;
						document.getElementById("Cmaxi_id").value=8;
						document.getElementById("C1_val_id").value=3;
						break;
						}
					}
					break;
				}
				case "50":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=5.5;
						document.getElementById("Cmaxi_id").value=10;
						document.getElementById("C1_val_id").value=5.5;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=5.3;
						document.getElementById("Cmaxi_id").value=13;
						document.getElementById("C1_val_id").value=5.3;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=6;
						document.getElementById("Cmaxi_id").value=17;
						document.getElementById("C1_val_id").value=6;
						break;
						}
					}
					break;
				}
				case "75":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=7;
						document.getElementById("Cmaxi_id").value=11;
						document.getElementById("C1_val_id").value=7;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=6;
						document.getElementById("Cmaxi_id").value=20;
						document.getElementById("C1_val_id").value=6;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=11;
						document.getElementById("Cmaxi_id").value=18;
						document.getElementById("C1_val_id").value=11;
						break;
						}
					}
					break;
				}
				case "100":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=8.5;
						document.getElementById("Cmaxi_id").value=12;
						document.getElementById("C1_val_id").value=8.5;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=9;
						document.getElementById("Cmaxi_id").value=20;
						document.getElementById("C1_val_id").value=9;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=12;
						document.getElementById("Cmaxi_id").value=17;
						document.getElementById("C1_val_id").value=12;
						break;
						}
					}
					break;
				}
				case "200":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=8;
						document.getElementById("Cmaxi_id").value=40;
						document.getElementById("C1_val_id").value=8;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=7;
						document.getElementById("Cmaxi_id").value=22;
						document.getElementById("C1_val_id").value=7;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=16;
						document.getElementById("Cmaxi_id").value=26;
						document.getElementById("C1_val_id").value=16;
						break;
						}
					}
					break;
				}
				case "300":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=6;
						document.getElementById("Cmaxi_id").value=40;
						document.getElementById("C1_val_id").value=6;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=5;
						document.getElementById("Cmaxi_id").value=24;
						document.getElementById("C1_val_id").value=5;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=12;
						document.getElementById("Cmaxi_id").value=32;
						document.getElementById("C1_val_id").value=12;
						break;
						}
					}
					break;
				}
				case "400":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=6;
						document.getElementById("Cmaxi_id").value=25;
						document.getElementById("C1_val_id").value=6;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=5;
						document.getElementById("Cmaxi_id").value=20;
						document.getElementById("C1_val_id").value=5;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=11;
						document.getElementById("Cmaxi_id").value=23;
						document.getElementById("C1_val_id").value=11;
						break;
						}
					}
					break;
				}
				case "500":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=6;
						document.getElementById("Cmaxi_id").value=22;
						document.getElementById("C1_val_id").value=6;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=5;
						document.getElementById("Cmaxi_id").value=20;
						document.getElementById("C1_val_id").value=5;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=10;
						document.getElementById("Cmaxi_id").value=24;
						document.getElementById("C1_val_id").value=10;
						break;
						}
					}
					break;
				}
				case "600":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=6;
						document.getElementById("Cmaxi_id").value=20;
						document.getElementById("C1_val_id").value=6;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=4.5;
						document.getElementById("Cmaxi_id").value=20;
						document.getElementById("C1_val_id").value=4.5;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=14;
						document.getElementById("Cmaxi_id").value=26;
						document.getElementById("C1_val_id").value=14;
						break;
						}
					}
					break;
				}
				case "700":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=6;
						document.getElementById("Cmaxi_id").value=18;
						document.getElementById("C1_val_id").value=6;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=5;
						document.getElementById("Cmaxi_id").value=20;
						document.getElementById("C1_val_id").value=5;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=12;
						document.getElementById("Cmaxi_id").value=28;
						document.getElementById("C1_val_id").value=12;
						break;
						}
					}
					break;
				}
				case "1000":
				{
					switch(document.getElementById("selectC_id").value)
					{
						case "C1":
						{
						document.getElementById("Cmini_id").value=6;
						document.getElementById("Cmaxi_id").value=12;
						document.getElementById("C1_val_id").value=6;
						break;
						}
						case "C12":
						{
						document.getElementById("Cmini_id").value=7;
						document.getElementById("Cmaxi_id").value=23;
						document.getElementById("C1_val_id").value=7;
						break;
						}
						case "C2":
						{
						document.getElementById("Cmini_id").value=16;
						document.getElementById("Cmaxi_id").value=30;
						document.getElementById("C1_val_id").value=16;
						break;
						}
					}
					break;
				}
			}
		break;
		}
	}
}
//testpos functions checked if positive number were entered
function testpos()
{
   if(isNaN(document.getElementById("busLength_id").value))
   {
	   document.getElementById("busLength_id").value=0;
	   document.getElementById("busLength_id").style.color='red';
   }
   else if(document.getElementById("busLength_id").value<0)
   {
	   document.getElementById("busLength_id").value=0;
	   document.getElementById("busLength_id").style.color='red';
   }
   else
   {
	   if(document.getElementById("busLength_id").style.color=='red')
	   {
		   document.getElementById("busLength_id").value='';
	   }
	   document.getElementById("busLength_id").style.color='blue';
   }
}
function testposB()
{
   if(isNaN(document.getElementById("busLengthB_id").value))
   {
	   document.getElementById("buslengthB_id").value=0;
	   document.getElementById("buslengthB_id").style.color='red';
   }
   else if(document.getElementById("buslengthB_id").value<0)
   {
	   document.getElementById("buslengthB_id").value=0;
	   document.getElementById("buslengthB_id").style.color='red';
   }
   else
   {
	   document.getElementById("buslengthB_id").style.color='blue';
   }
}

function hideAndDisplay(name)
{
	listOfComponent=["Transformer","Transformer2","TransformerB","TransformerC","Generator","Motor","Breaker","Bus","CT","PotentialTransformer","GeneratorB","CTB","PotentialTransformerB","BusB","default_id"];
	for(i=0;i<listOfComponent.length;i++)
	{
		if(includes(listOfComponent[i],name))
		{
			document.getElementById(listOfComponent[i]).style.display='';
		}
		else
		{
			document.getElementById(listOfComponent[i]).style.display='none';
		}
	}
}

function includes(name,array)
{
	for(j=0;j<array.length;j++)
	{
		if(array[j]==name)
		{
			return true;
		}
	}
	return false;
}

function selectCapacitance()
{
	if(!(document.getElementById("select_capacitance_checkbox_id").checked=="1"))
	{
		document.getElementById("C1").disabled=false;
		document.getElementById("capacitance_id").style.display='none';
		document.getElementById("minmax").style.display='none';
		hideAndDisplay([]);
	}
	else
	{
		document.getElementById("C1").disabled=true;
		document.getElementById("capacitance_id").style.display='';
		document.getElementById("minmax").style.display='';
		findComponent();
	}
}