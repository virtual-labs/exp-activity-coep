var timeSheetCount = 0;

var remainingAttempts = 4; // Overall attempts

function TimeVerifyCall() {
    timerMasterJson.activtiesTime = $("#counter").text();
    console.log(timerMasterJson);
    seconds = 0;
    updateCounter();
    $("#Header").html("<center>TIME ACTIVITES</center>");
    var htm = `
        <div class="row" >
         <div class="col-sm-2">
         <div class="row titlePart"  style="border-style: unset;padding:7px;">
		<center><span >PANEL</span></center>
		</div>
         <button id="result" class="btn btn-danger" style="width:100%" disabled >Result</button>
         </div>
            <div class="col-sm-8" id="tableDetails">
                <table class="table table-bordered">
                    <thead class="thead-light">
                        <tr>
                            <th>Activity Number</th>
                            <th>Activity Details</th>
                            <th>Spray Dryer with Utilities</th>
                            <th>Flow Calibration with Utilities</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody"></tbody>
                </table>
                <button id="verifyBtn" class="btn btn-primary mt-3" style="margin-bottom:100px;float:right">Submit</button>
               
            </div>
        </div>

        <!-- Bootstrap Modal for Messages -->
        <div class="modal fade" id="messageModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Validation Message</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body" id="modalBody"></div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-2"></div>
        </div>
        
    `;

    $("#mainDiv").html(htm);
    
    $("#result").click(function(){
	resultJson.timeSheetCount=timeSheetCount;
	console.log(resultJson);
	result();	
	});
    
    let tableBody = $("#tableBody");

    timeJson.activities.forEach(activity => {
        tableBody.append(`
            <tr class="section-header">
                <td colspan="4" class="table-primary" style="color:#0d6efd;font-weight: 900;font-size: larger;text-align: left;">
                    ${activity.section}
                </td>
            </tr>
        `);

        activity.tasks.forEach(task => {
            tableBody.append(`
                <tr>
                    <td>${task.activity_number}</td>
                    <td style="text-align: left;">${task.activity_details}</td>
                    <td>
                        <input type="text" class="form-control validate-input" data-correct="${task.spray_dryer_with_utilities}">
                    </td>
                    <td>
                        <input type="text" class="form-control validate-input" data-correct="${task.flow_calibration_with_utilities}">
                    </td>
                </tr>
            `);
        });

        tableBody.append(`
            <tr class="font-weight-bold" >
                <td colspan="2"  style="    color: #2c5881; text-align: left;">Total Time : ${activity.total_time.statement}</td>
                <td>
                    <input type="text" class="form-control validate-input" data-correct="${activity.total_time.spray_dryer_with_utilities}">
                </td>
                <td>
                    <input type="text" class="form-control validate-input" data-correct="${activity.total_time.flow_calibration_with_utilities}">
                </td>
            </tr>
        `);
    });
    
    tableBody.append(`
            <tr class="font-weight-bold" >
                <td colspan="2"  style="color:brown; text-align: left;">total_time_required : ${timeJson.total_time_required2.statement}</td>
                <td>
                    <input type="text" class="form-control validate-input" data-correct="${timeJson.total_time_required2.flow_calibration_with_utilities}">
                </td>
                <td>
                    <input type="text" class="form-control validate-input" data-correct="${timeJson.total_time_required2.spray_dryer_with_utilities}">
                </td>
            </tr>
        `);

    // Verify Button Click
    $("#verifyBtn").click(function () {
    	timeSheetCount++;
        let allCorrect = true;
        let allFilled = true;
        let validationError = false;

        $(".validate-input").each(function () {
            let input = $(this);
            let correctValue = input.data("correct").toString().trim();
            let enteredValue = input.val().trim();

            // Basic validation (empty fields & non-numeric values)
            if (enteredValue === "") {
                input.addClass("border-danger");
                validationError = true;
                return;
            }
            if (!/^\d+$/.test(enteredValue)) {
                input.addClass("border-danger");
                validationError = true;
                return;
            }

            // Check correctness
            if (enteredValue !== correctValue) {
                allCorrect = false;
            }
        });

        // If basic validation fails, show message but don't reduce attempts
        if (validationError) {
            showMessage("❌ Please fill all fields with valid numbers!", "red");
            return;
        }

        // If answers are incorrect, reduce attempt count
        if (!allCorrect) {
            if (remainingAttempts > 1) {
                remainingAttempts -= 1;
              
                showMessage(`⚠ Answers are incorrect! ${remainingAttempts}<br> attempts remaining. Attempts left: ${remainingAttempts}`, "red");
            } else {
                remainingAttempts = 0;
                $(".validate-input").prop("disabled", true);
                $("#attemptsMessage").text("No attempts left").css("color", "black");
                $("#result").prop("disabled", false);
                renderFinalTable();
                showMessage("❌ No attempts left! Correct values are now displayed.", "red");
            }
        } else {
            showMessage("✅ All answers are correct! You can proceed to the next step.", "green");
        }
    });

    // Render final table with correct values
    function renderFinalTable() {
        let finalTable = `
        	
            <table class="table table-bordered mt-3" style="margin-bottom: 100px;">
                <thead class="thead-dark">
                    <tr>
                        <th>Activity Number</th>
                        <th>Activity Details</th>
                        <th>Spray Dryer with Utilities</th>
                        <th>Flow Calibration with Utilities</th>
                    </tr>
                </thead>
                <tbody>`;

        timeJson.activities.forEach(activity => {
            finalTable += `
                <tr class="table-primary">
                    <td colspan="4" class="table-primary" style="color:#0d6efd;font-weight: 900;font-size: larger;text-align: left;">${activity.section}</td>
                </tr>`;

            activity.tasks.forEach(task => {
                finalTable += `
                    <tr>
                        <td>${task.activity_number}</td>
                        <td style="text-align:left">${task.activity_details}</td>
                        <td>${task.spray_dryer_with_utilities}</td>
                        <td>${task.flow_calibration_with_utilities}</td>
                    </tr>`;
            });

            finalTable += `
                <tr class="font-weight-bold">
                    <td colspan="2" style="color:#2c5881;text-align: left;">Total Time for ${activity.total_time.statement}</td>
                    <td>${activity.total_time.spray_dryer_with_utilities}</td>
                    <td>${activity.total_time.flow_calibration_with_utilities}</td>
                </tr>`;
            
        });
        
        finalTable += ` <tr class="font-weight-bold" >
                    <td colspan="2"  style="color:brown; text-align: left;text-align: left;">total_time_required : ${timeJson.total_time_required2.statement}</td>
                    <td>
                       ${timeJson.total_time_required2.spray_dryer_with_utilities}
                          </td>
                    <td>
                       ${timeJson.total_time_required2.flow_calibration_with_utilities}
                        </td>
                </tr>
            `;
        finalTable += `</tbody></table>
       `;
        $("#tableDetails").html(finalTable);
    }

    // Show Bootstrap Modal with Custom Color
    function showMessage(message, color) {
        $("#modalBody").html(`<span style="color:${color}; font-weight: bold;">${message}</span>`);
        $("#messageModal").modal("show");
    }
}
