function updateDateTime() {
      const now = new Date();
      const formatted = now.toLocaleString(); // e.g. "5/5/2025, 10:23:45 AM"
      $('#dateTime').text(formatted);
    }



function result(){
	timerMasterJson.activtiesTime=$("#counter").text();
	console.log(timerMasterJson);
	seconds = 0;
	  updateCounter();
	$("#simDemo,#procedure,#counter,#tagDetails").prop("hidden",true);
	$("#report").prop("hidden",false);
//	$("#Header").html("<center>Activity Chart</center>");
$("#Header").prop("hidden", true);
	
	htm=''
	+`<div class="row" id="divMis" style="background-color: #2e3539; padding: 10px; display: flex; justify-content: center;">
  <div style="display: flex; align-items: center; gap: 10px; white-space: nowrap;">
    <span style="color: white;font-weight: bold;">Enter Name:</span>
    <input type="text" id="nameInput" style="color: #000; padding: 5px; max-width: 200px;">
<label id="dateTime" style="color:#fff;"></label>

  </div>
</div>`
	+'<div class="container-fluid">'
	 +' <div class="row titlePart" id="" ><center><span >Activity Chart</span></center></div>' 
	  
	+' <!-- Title -->'

//	+'  <h3 class="text-center heading">Spray Drying Pilot Plant</h3>'

	+' <!-- Competency Table -->'
	+' <div class="box">'
	+' <div class="row">'
	+'  <div class="col-sm-6">'
	+' <table class="table table-bordered status-table">'
	+'    <thead>'
	+'     <tr>'
	+'        <th><center>Competency</center> </th>'
	+'        <th><center>Status</center></th>'
	+'        <th><center>Time</center></th>'
	+'      </tr>'
	+'    </thead>'
	+'   <tbody>'
	+'      <tr>'
	+'       <td><b>MAIN ACTIVITES</b></td>'
	+'        <td id="piping">'
	
	+'		</td>'
	+'        <td id="pipingTimer">'
	
	+'       </td>'
	+'     </tr>'
	+'      <tr>'
	+'        <td> <b>SUB ACTIVITES-1</b></td>'
	+'        <td id="instr">'

	+'		</td>'
    +'        <td id="instrTimer">'
	
	+'       </td>'
	+'      </tr>'
	+'     <tr>'
	+'        <td><b>SUB ACTIVITES-2</b></td>'
	+'        <td id="squ">'

	+'		</td>'
	  +'        <td id="squTimer">'
		
		+'       </td>'
	+'      </tr>'
	+'     <tr>'
	+'        <td><b>SUB ACTIVITES-3</b></td>'
	+'        <td id="squ2">'

	+'		</td>'
	  +'        <td id="squTimer2">'
		
		+'       </td>'
	+'      </tr>'
	+'     <tr>'
	+'        <td><b>SUB ACTIVITES-4</b></td>'
	+'        <td id="squ3">'

	+'		</td>'
	  +'        <td id="squTimer3">'
		
		+'       </td>'
	+'      </tr>'
	+'     <tr>'
	+'        <td><b>TIME ACTIVITES</b></td>'
	+'        <td id="squ4">'

	+'		</td>'
	  +'        <td id="squTimer4">'
		
		+'       </td>'
	+'      </tr>'
 
    +'    </tbody>'
    +'  </table>'
    +' </div>'
    +' <div class="col-sm-6" id="graphDiv">'
	 
    +' </div>'
    +'</div>'
    +'</div>'
    +'   <!-- First Row -->'
    +'  <div class="row">'
    +'   <div class="col-md-3" >'
    +'     <div class="box">'
    +'      <h5 class="section-title sectionStyle" >MAIN ACTIVITES</h5>'
    +'       <div class="table-container">'
    +'        <table style="border-style: solid;">'
    +'           <tr class="trStyle">'
    +'            <th>Expected</th>'
    +'             <th>Actual</th>'
    +'          </tr>'
    +'           <tr>'
    +'           <td><b> <center><strong class="correct">1</strong> </center></b></td>'
	+'           <td><b> <center><strong class="wrong">'+resultJson.mainActivitesCount+'</strong> </center></b></td>'
	  +'         </table>'
    +'      </div>'
    +'    </div>'
    +'   </div>'
    +'  <div class="col-md-3" >'
    +'    <div class="box">'
    +'     <h5 class="section-title sectionStyle" >SUB ACTIVITES-1</h5>'
    +'     <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'            <th>Actual</th>'
	+'          </tr>'
	+'          <tr>'
	 +'						  <td><b class="correct">1</b></td>'
	    +'                       <td><b class="wrong">'+resultJson.subActivties1Count+'</b></td>'
	  	+'          </tr>'
	+'        </table>'
	+'      </div>'
	+'     </div>'
	+'   </div>'
	+'   <div class="col-md-3">'
	+'    <div class="box">'
	+'     <h5 class="section-title sectionStyle" >SUB ACTIVITES-2</h5>'
	+'      <div class="table-container">'
	+'        <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'           <th>Actual</th>'
	+'         </tr>'
	+'          <tr>'
	 +'						  <td><b class="correct">1</b></td>'
	    +'                       <td><b class="wrong">'+resultJson.subActivties2Count+'</b></td>'
	  	+'         </tr>'
	+'        </table>'
	+'     </div>'
	+'   </div>'
	+' </div>'
	+'  <div class="col-md-3">'
	+'    <div class="box">'
	+'     <h5 class="section-title sectionStyle" >SUB ACTIVITES-3</h5>'
	+'      <div class="table-container">'
	+'        <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'           <th>Actual</th>'
	+'         </tr>'
	+'          <tr>'
	 +'						  <td><b class="correct">1</b></td>'
	    +'                       <td><b class="wrong">'+resultJson.subActivties3Count+'</b></td>'
	  	+'         </tr>'
	+'        </table>'
	+'     </div>'
	+'   </div>'
	+'  </div>'
	
	+'</div>'
	+' <!-- second Row -->'
	+' <div class="row">'
	
	+' <div class="col-md-3">'
	+'   <div class="box">'
	+'     <h5 class="section-title sectionStyle" >SUB ACTIVITES-4</h5>'
	+'     <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'         <tr class="trStyle">'
	+'           <th>Expected</th>'
	+'           <th>Actual</th>'
	+'         </tr>'
	+'         <tr>'
	 +'						  <td><b class="correct">1</b></td>'
 +'                       <td><b class="wrong">'+resultJson.subActivties4Count+'</b></td>'
 +'         </tr>'
	+'       </table>'
	+'     </div>'
	+'   </div>'
	+' </div>'
	+' <div class="col-md-3">'
	+'   <div class="box">'
	+'     <h5 class="section-title sectionStyle" >TIME ACTIVITIES</h5>'
	+'     <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'         <tr class="trStyle">'
	+'           <th>Expected</th>'
	+'           <th>Actual</th>'
	+'         </tr>'
	+'         <tr>'
	 +'						  <td><b class="correct">1</b></td>'
 +'                       <td><b class="wrong">'+resultJson.timeSheetCount+'</b></td>'
 +'         </tr>'
	+'       </table>'
	+'     </div>'
	+'   </div>'
	+' </div>'
	
	+' </div>'
	+' </div> '

	+'<!-- Graphs Section -->'
	+'<div class="row">'
    +'</div>'
    +'<!-- Pie Chart Section -->'
    +'<div class="row">'
      
    +'</div>'

//    +'<!-- Animation Section -->'
//    +'<div class="row">'
//    +' <div class="col-md-12">'
//    +'   <div class="box">'
//    +'     <h5 class="section-title sectionStyle" >Simulation</h5>'
//    +'     <div class="animation-container">'
//           
//    +'           <div class="col-md-4">'
//    +'				<div class="box">'
//    +'				  <h5 class="section-title sectionStyle">Start</h5>'
//    +'				  <div class="table-container">'
//    +'					<table style="border-style: solid;" >'
//    +'					  <tr class="trStyle">'
//    +'						<th>Expected</th>'
//    +'						<th>Actual</th>'
//    +'					  </tr>'
//    +'					  <tr>'
//    +'						  <td><b class="correct">3</b></td>'
//    +'                       <td><b class="wrong">'+resultJson.animationStart+'</b></td>'
//    +'					  </tr>'
//    +'					</table>'
//    +'				  </div>'
//    +'				</div>'
//    +'			  </div>'
//    +'         <div class="col-md-4">'
//    +'		<div class="box">'
//    +'		  <h5 class="section-title sectionStyle">View Datasheet</h5>'
//    +'		  <div class="table-container">'
//    +'			<table style="border-style: solid;">'
//    +'			  <tr class="trStyle">'
//    +'				<th>Expected</th>'
//    +'			<th>Actual</th>'
//    +'			  </tr>'
//    +'			  <tr>'
//    +'				  <td><b class="correct">3</b></td>'
//    +'                <td><b class="wrong">'+resultJson.datasheet+'</b></td>'
//    +'			  </tr>'
//    +'			</table>'
//    +'		  </div>'
//    +'		</div>'
//    +' </div>'
//    +'       <div class="col-md-4">'
//    +'		<div class="box">'
//    +'		  <h5 class="section-title sectionStyle">Trends</h5>'
//    +'		  <div class="table-container">'
//    +'			<table style="border-style: solid;">'
//    +'			  <tr class="trStyle">'
//    +'				<th>Expected</th>'
//    +'				<th>Actual</th>'
//    +'			  </tr>'
//    +'			  <tr>'
//    +'				  <td><b class="correct">3</b></td>'
//    +'            <td><b class="wrong">'+resultJson.trends+'</b></td>'
//    +'			  </tr>'
//    +'			</table>'
//    +'		  </div>'
//    +'		</div>'
//    +' </div>'
//          
//    +'     </div>'
//    +'   </div>'
//    +' </div>'
//    +'</div>'
//    +'</div>'
    $("#mainDiv").html(htm);
	
	var piping=parseFloat((1/resultJson.mainActivitesCount)*100);
	var instr=parseFloat((1/resultJson.subActivties1Count)*100);
	var squ=parseFloat((1/resultJson.subActivties2Count)*100);
	var squ2=parseFloat((1/resultJson.subActivties3Count)*100);
	var squ3=parseFloat((1/resultJson.subActivties4Count)*100);
	var squ4=parseFloat((1/resultJson.timeSheetCount)*100);

	if(piping>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
	 $("#piping").html(str);
		 var str1=''
	+'	     	<div class="alert alert-success attainedText">'
	+'    	   <center><strong> '+timerMasterJson.mainActivites+'</strong> </center>'
	+'     		 </div>'
	 $("#pipingTimer").html(str1); 
		     
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#piping").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.mainActivites+'</strong> </center>'
				+'     		 </div>'
							     $("#pipingTimer").html(str1); 
		 
		 
		}
	if(instr>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
		     $("#instr").html(str);
		 var str1=''
				+'	     	<div class="alert alert-success attainedText">'
				+'    	   <center><strong> '+timerMasterJson.subActivties1+'</strong> </center>'
				+'     		 </div>'
							     $("#instrTimer").html(str1); 
		 	 
		     
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#instr").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.subActivties1+'</strong> </center>'
				+'     		 </div>'
							     $("#instrTimer").html(str1); 
		}
	if(squ>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
		     $("#squ").html(str);
		 var str1=''
				+'	     	<div class="alert alert-success attainedText">'
				+'    	   <center><strong> '+timerMasterJson.subActivties2+'</strong> </center>'
				+'     		 </div>'
							     $("#squTimer").html(str1); 
		     
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#squ").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.subActivties2+'</strong> </center>'
				+'     		 </div>'
							     $("#squTimer").html(str1); 
		}
	if(squ2>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
		     $("#squ2").html(str);
		 var str1=''
				+'	     	<div class="alert alert-success attainedText">'
				+'    	   <center><strong> '+timerMasterJson.subActivties2+'</strong> </center>'
				+'     		 </div>'
							     $("#squTimer2").html(str1); 
		     
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#squ2").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.subActivties2+'</strong> </center>'
				+'     		 </div>'
							     $("#squTimer2").html(str1); 
		}
	if(squ3>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
		     $("#squ3").html(str);
		 var str1=''
				+'	     	<div class="alert alert-success attainedText">'
				+'    	   <center><strong> '+timerMasterJson.subActivties3+'</strong> </center>'
				+'     		 </div>'
							     $("#squTimer3").html(str1); 
		     
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#squ3").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.subActivties3+'</strong> </center>'
				+'     		 </div>'
							     $("#squTimer3").html(str1); 
		}
	if(squ4>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
		     $("#squ4").html(str);
		 var str1=''
				+'	     	<div class="alert alert-success attainedText">'
				+'    	   <center><strong> '+timerMasterJson.activtiesTime+'</strong> </center>'
				+'     		 </div>'
							     $("#squTimer4").html(str1); 
		     
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#squ4").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.activtiesTime+'</strong> </center>'
				+'     		 </div>'
							     $("#squTimer4").html(str1); 
		}
	

	Highcharts.chart('graphDiv', {
		credits: { enabled: false},
	    chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'pie',
	        backgroundColor: '#f0f0f0'
	    },
		exporting: { enabled: false },
		credits: { enabled: false},
	    title: {
	        text: ' ',
	        align: 'left'
	    },
	    tooltip: {
	    	 enabled: false,
        style: {
            fontFamily: 'Arial, sans-serif', // Set tooltip font family
            fontSize: '12px',                    // Set tooltip font size
            color: '#000',                    // Set tooltip text color
            fontWeight: 'bold',                  // Optional: bold text
            backgroundColor: '#000'           // Optional: tooltip background color
        },
        formatter: function () {
            return `<b>${this.point.name}</b>: ${this.y}%`;
        }
    },
	    accessibility: {
	        point: {
	            valueSuffix: '%'
	        }
	    },
	    plotOptions: {
	        pie: {
	            dataLabels: {
	                enabled: true,
	                style: {
	                    color: '#000',
//	                font-family: 'Arial, sans-serif',
	                fontSize: '14px',
	                /* font-weight: bold; */
	                fill: '#000',
	                },
	                formatter: function () {
	                    return `<span>${this.point.name}: ${this.percentage.toFixed(2)}%</span>`;
	                }
	            }
	        }
	    },

	    series: [{
	        name: '',
	        data: [
	            { name: 'MAIN_ACTIVITIES', y: piping },
	            { name: 'SUB_ACTIVITIES-1', y: instr },
	            { name: 'SUB_ACTIVITIES-2', y: squ },
	            { name: 'SUB_ACTIVITIES-3', y: squ2 },
	            { name: 'SUB_ACTIVITIES-4', y: squ3 },
	            { name: 'TIME_ACTIVITIES', y: squ4 }
	            
	          
	        ]
	    }]
	});
	
	updateDateTime();
	
$("#report").click(function() {
		tmp = $("#nameInput").val();
		if(tmp != ""){
			
			  // Restore value from localStorage when page loads
			  const savedName = localStorage.getItem("username");
			  if (savedName) {
			    $('#nameInput').val(savedName);
			  }
 
			  // Save input on change
			  $('#nameInput').on('input', function() {
			    localStorage.setItem("username", $(this).val());
			  });
			
 
			console.log("click triggred");
 
			const button = document.getElementById("report");
			button.hidden = true;
 
			html2canvas(document.querySelector("#mainDiv"), {
				useCORS: true,
				allowTaint: false,
				backgroundColor: null
			}).then(canvas => {
				let link = document.createElement('a');
				link.download = 'report.png';
				link.href = canvas.toDataURL("image/png");
				link.click();
//				$("#btnNext").prop("hidden", false);
			}).catch(err => {
				console.error("Screenshot failed:", err);
			}).finally(() => {
				button.hidden = true;
			});
			$("#divMis").prop("hidden",true);
			
			}else{
				alert("Enter Name");
			}
	});
}
