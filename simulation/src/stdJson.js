
		      var jsonData1 = {
            		"statements": [
                        {"step_no": "1", "statement": "Collect all latest versions of project documents"},
                        {"step_no": "2", "statement": "Prepare design documents for the project under scope"},
                        {"step_no": "3", "statement": "Start the procurement in chronological sequence and based on long delivery time (long lead)"},
                        {"step_no": "4", "statement": "Estimate the erection and commissioning activities"},
                        {"step_no": "5", "statement": "Prepare the PET chart with duration and dependencies of all activities"}
                    ]
            
        };
        console.log(jsonData1);
        
	      var subJsonData1 = {
          		"statements": [
                      {"step_no": "1", "statement": "Obtain the latest version of the process flow diagram from project department"},
                      {"step_no": "2", "statement": "Obtain the latest process description document from project department"},
                      {"step_no": "3", "statement": "Prepare the questioner for identifying process parameters from the process expert"}
                 ]
          
      };
      console.log(subJsonData1);
      
      var subJsonData2 = {
    		    "statements": [
    		        {"step_no": "1", "statement": "P&I diagram as per the latest revision of requirements based on the questionnaire"},
    		        {"step_no": "2", "statement": "Prepare Instrument Index sheet"},
    		        {"step_no": "3", "statement": "Prepare Specification sheets for all the equipment"},
    		        {"step_no": "4", "statement": "Prepare hook-up diagram for the field instruments"},
    		        {"step_no": "5", "statement": "Complete the sizing of the control system"},
    		        {"step_no": "6", "statement": "Prepare GA of panel and panel wiring diagram"},
    		        {"step_no": "7", "statement": "Prepare cable schedule (Control and signal both) and cable layouts based on GA of the plant"},
    		        {"step_no": "8", "statement": "Prepare Instrument and electric cable tray layouts with tray sizes"},
    		        {"step_no": "9", "statement": "Prepare pneumatic supply (Instrument air) diagram with BoM"},
    		        {"step_no": "10", "statement": "Identify the locations of the junction boxes and finalize the sizes for the marshalling cabinets and junction boxes"},
    		        {"step_no": "11", "statement": "Prepare the control room layout and HVAC and other safety requirements"},
    		        {"step_no": "12", "statement": "Prepare manpower requirements for the site work and control system design work"}
    		    ]
    		};
    console.log(subJsonData2);
    var subJsonData3 = {
    	    "statements": [
    	        {"step_no": "1", "statement": "Procurement of field instruments like transmitter, control valves etc."},
    	        {"step_no": "2", "statement": "Procurement of control system components"},
    	        {"step_no": "3", "statement": "Finalisation of vendor for the control panel"},
    	        {"step_no": "4", "statement": "Procurement of cables, trays, and allied items"},
    	        {"step_no": "5", "statement": "Place order for pneumatic components"},
    	        {"step_no": "6", "statement": "Place order for consumables"}
    	    ]
    	};
    console.log(subJsonData3);
    var subJsonData4 = {
    	    "statements": [
    	        {"step_no": "1", "statement": "Obtain the site clearance and decide the date for project site work kick-off"},
    	        {"step_no": "2", "statement": "Start dispatching the material to the stores of the site office"},
    	        {"step_no": "3", "statement": "Identify skilled workforce for site activity and plan their availability for the project duration"},
    	        {"step_no": "4", "statement": "Mobilize the manpower to kick start the site activities"},
    	        {"step_no": "5", "statement": "Conduct site activities as per the standard and complete erection activities including junction boxes and marshalling cabinets"},
    	        {"step_no": "6", "statement": "Charge the control panel and start cold testing of the control systems"},
    	        {"step_no": "7", "statement": "Lay and terminate the cables"},
    	        {"step_no": "8", "statement": "Plan and conduct water trials based on site clearance from other departments"},
    	        {"step_no": "9", "statement": "Test the logic thoroughly as per requirement and tune the controllers"},
    	        {"step_no": "10", "statement": "Conduct final commissioning"},
    	        {"step_no": "11", "statement": "Conduct final product trials and hand over the plant with fully tested functionality"},
    	        {"step_no": "12", "statement": "Report and hand over all the as-built documents to the client and vacate the site"}
    	    ]
    	};
    console.log(subJsonData4);
    var timeJson = {
    		  "activities": [
    		    {
    		      "section": "Collect all latest versions of project documents",
    		      "tasks": [
    		        {
    		          "activity_number": 1,
    		          "activity_details": "Obtain the latest version of the process flow diagram from project department",
    		          "spray_dryer_with_utilities": 4,
    		          "flow_calibration_with_utilities": 2
    		        },
    		        {
    		          "activity_number": 2,
    		          "activity_details": "Obtain the latest process description document from project department",
    		          "spray_dryer_with_utilities": 1,
    		          "flow_calibration_with_utilities": 1
    		        },
    		        {
    		          "activity_number": 3,
    		          "activity_details": "Prepare the questionnaire for identifying process parameters from the process expert",
    		          "spray_dryer_with_utilities": 7,
    		          "flow_calibration_with_utilities": 4
    		        }
    		      ],
    		      "total_time": {
    		    	  "statement":"Time required for Activity Number 1",
    		        "spray_dryer_with_utilities": 12,
    		        "flow_calibration_with_utilities": 7
    		      }
    		    },
    		    {
    		      "section": "Prepare design documents for the project under scope",
    		      "tasks": [
    		        {
    		          "activity_number": 1,
    		          "activity_details": "P&I diagram as per the latest revision of requirements based on questionnaire",
    		          "spray_dryer_with_utilities": 11,
    		          "flow_calibration_with_utilities": 8
    		        },
    		        {
    		          "activity_number": 2,
    		          "activity_details": "Prepare Instrument Index sheet",
    		          "spray_dryer_with_utilities": 3,
    		          "flow_calibration_with_utilities": 2
    		        },
    		        {
    		          "activity_number": 3,
    		          "activity_details": "Prepare Specification sheets for all the equipment",
    		          "spray_dryer_with_utilities": 6,
    		          "flow_calibration_with_utilities": 4
    		        },
    		        {
    		          "activity_number": 4,
    		          "activity_details": "Prepare hook up diagram for the field instruments",
    		          "spray_dryer_with_utilities": 10,
    		          "flow_calibration_with_utilities": 7
    		        },
    		        {
    		          "activity_number": 5,
    		          "activity_details": "Complete the sizing of the control system",
    		          "spray_dryer_with_utilities": 12,
    		          "flow_calibration_with_utilities": 9
    		        },
    		        {
    		          "activity_number": 6,
    		          "activity_details": "Prepare GA of panel and panel wiring diagram",
    		          "spray_dryer_with_utilities": 8,
    		          "flow_calibration_with_utilities": 6
    		        },
    		        {
    		          "activity_number": 7,
    		          "activity_details": "Prepare cable schedule (Control and signal both) and cable layouts based on GA of the plant",
    		          "spray_dryer_with_utilities": 12,
    		          "flow_calibration_with_utilities": 9
    		        },
    		        {
    		          "activity_number": 8,
    		          "activity_details": "Prepare Instrument and electric cable tray layouts with tray sizes",
    		          "spray_dryer_with_utilities": 8,
    		          "flow_calibration_with_utilities": 5
    		        },
    		        {
    		          "activity_number": 9,
    		          "activity_details": "Prepare pneumatic supply (Instrument air) diagram with BoM",
    		          "spray_dryer_with_utilities": 6,
    		          "flow_calibration_with_utilities": 3
    		        },
    		        {
    		          "activity_number": 10,
    		          "activity_details": "Identify the locations of the junction boxes and finalize the sizes for the marshalling cabinets and junction boxes",
    		          "spray_dryer_with_utilities": 6,
    		          "flow_calibration_with_utilities": 3
    		        },
    		        {
    		          "activity_number": 11,
    		          "activity_details": "Prepare the control room layout and HVAC and other safety requirements",
    		          "spray_dryer_with_utilities": 12,
    		          "flow_calibration_with_utilities": 8
    		        },
    		        {
    		          "activity_number": 12,
    		          "activity_details": "Prepare manpower requirements for the site work and control system design work",
    		          "spray_dryer_with_utilities": 11,
    		          "flow_calibration_with_utilities": 8
    		        }
    		      ],
    		      "total_time": {
    		    	  "statement":"Time required for Activity Number 2",
    		        "spray_dryer_with_utilities": 105,
    		        "flow_calibration_with_utilities": 72
    		      }
    		    },
    		    {
    		      "section": "Start the procurement in chronological sequence and based on long delivery time (long lead)",
    		      "tasks": [
    		        {
    		          "activity_number": 1,
    		          "activity_details": "Procurement of field instruments like transmitter, control valves etc.",
    		          "spray_dryer_with_utilities": 60,
    		          "flow_calibration_with_utilities": 55
    		        },
    		        {
    		          "activity_number": 2,
    		          "activity_details": "Procurement of control system components",
    		          "spray_dryer_with_utilities": 90,
    		          "flow_calibration_with_utilities": 75
    		        },
    		        {
    		          "activity_number": 3,
    		          "activity_details": "Finalization of vendor for the control panel",
    		          "spray_dryer_with_utilities": 50,
    		          "flow_calibration_with_utilities": 15
    		        },
    		        {
    		          "activity_number": 4,
    		          "activity_details": "Procurement of cables, trays, and allied items",
    		          "spray_dryer_with_utilities": 45,
    		          "flow_calibration_with_utilities": 35
    		        },
    		        {
    		          "activity_number": 5,
    		          "activity_details": "Place order for pneumatic components",
    		          "spray_dryer_with_utilities": 15,
    		          "flow_calibration_with_utilities": 15
    		        },
    		        {
    		          "activity_number": 6,
    		          "activity_details": "Place order for consumables",
    		          "spray_dryer_with_utilities": 10,
    		          "flow_calibration_with_utilities": 10
    		        }
    		      ],
    		      "total_time": {
    		    	  "statement":"Time required for Activity Number 3",
    		        "spray_dryer_with_utilities": 270,
    		        "flow_calibration_with_utilities": 205
    		      }
    		    },
    		    {
    		      "section": "Estimate the erection and commissioning activities (After the clearance from process team)",
    		      "tasks": [
    		        {
    		          "activity_number": 1,
    		          "activity_details": "Obtain the site clearance and decide the date for project site work kick-off",
    		          "spray_dryer_with_utilities": 15,
    		          "flow_calibration_with_utilities": 10
    		        },
    		        {
    		          "activity_number": 2,
    		          "activity_details": "Start dispatching the material to the stores of the site office",
    		          "spray_dryer_with_utilities": 8,
    		          "flow_calibration_with_utilities": 6
    		        },
    		        {
    		          "activity_number": 3,
    		          "activity_details": "Identify skilled workforce for site activity and plan their availability for the project duration",
    		          "spray_dryer_with_utilities": 15,
    		          "flow_calibration_with_utilities": 10
    		        },
    		        {
    		          "activity_number": 4,
    		          "activity_details": "Mobilize the manpower to kick start the site activities",
    		          "spray_dryer_with_utilities": 10,
    		          "flow_calibration_with_utilities": 8
    		        },
    		        {
    		          "activity_number": 5,
    		          "activity_details": "Conduct site activities as per the standard and complete erection activities including junction boxes and marshalling cabinets",
    		          "spray_dryer_with_utilities": 45,
    		          "flow_calibration_with_utilities": 35
    		        }
    		      ],
    		      "total_time": {
    		    	  "statement":"Time required for Activity Number 4",
    		        "spray_dryer_with_utilities": 229,
    		        "flow_calibration_with_utilities": 168
    		      }
    		    }
    		  ],
    		  
    		  "total_time_required2": {
    			  "statement":"Total time required for the project",
    			    "spray_dryer_with_utilities": 616,
    			    "flow_calibration_with_utilities": 452
    			  }
    			  
    		};

    console.log(timeJson);
