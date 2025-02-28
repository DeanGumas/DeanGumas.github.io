var gk_data;
var def_data;
var mid_data;
var fwd_data;

var gk_session;

// Add on select callback for position select box
$("#positions").on("change", function() {
    $("#players").empty();
    switch($(this).val()){
        case "GK":
            for (const [key, value] of Object.entries(gk_data)) {
                $('#players').append($('<option>', {
                    text: key
                }));
            }
            break;
        case "DEF":
            for (const [key, value] of Object.entries(def_data)) {
                $('#players').append($('<option>', {
                    text: key
                }));
            }
            break;
        case "MID":
            for (const [key, value] of Object.entries(mid_data)) {
                $('#players').append($('<option>', {
                    text: key
                }));
            }
            break;
        case "FWD":
            for (const [key, value] of Object.entries(fwd_data)) {
                $('#players').append($('<option>', {
                    text: key
                }));
            }
            break;
    }
});

async function loadPlayerData(){
    // Load all player data from JSON files
    const gk_request = await fetch("https://deangumas.github.io/data/GK_2021-22.json");
    gk_data = await gk_request.json();

    const def_request = await fetch("https://deangumas.github.io/data/DEF_2021-22.json");
    def_data = await def_request.json();
    
    const mid_request = await fetch("https://deangumas.github.io/data/MID_2021-22.json"); 
    mid_data = await mid_request.json();
    
    const fwd_request = await fetch("https://deangumas.github.io/data/FWD_2021-22.json");
    fwd_data = await fwd_request.json();

    // Load ONNX models
    gk_session = await ort.InferenceSession.create("https://deangumas.github.io/models/GK_model.onnx");
    def_session = await ort.InferenceSession.create("https://deangumas.github.io/models/DEF_model.onnx");
    mid_session = await ort.InferenceSession.create("https://deangumas.github.io/models/MID_model.onnx");
    fwd_session = await ort.InferenceSession.create("https://deangumas.github.io/models/FWD_model.onnx");
}

async function runModel() {
    try {     
        var sample = null;
        var results = null;
        switch($("#positions").val()){
            case "GK":
                sample = gk_data[$("#players").val()];
                playerData = sample["player_data"]
        
                x_input = new ort.Tensor("float32", new Float32Array(playerData.flat()), [1, playerData.length, playerData[0].length]);
                d_input = new ort.Tensor("float32", new Float32Array([0.5]), [1, 1]);
        
                feeds = { "player_data": x_input, "team_rating": d_input };
                results = await gk_session.run(feeds);
                break;
            case "DEF":
                sample = def_data[$("#players").val()];
                playerData = sample["player_data"]
        
                x_input = new ort.Tensor("float32", new Float32Array(playerData.flat()), [1, playerData.length, playerData[0].length]);
                d_input = new ort.Tensor("float32", new Float32Array([0.5]), [1, 1]);
        
                feeds = { "player_data": x_input, "team_rating": d_input };
                results = await def_session.run(feeds);
                break;
            case "MID":
                sample = mid_data[$("#players").val()];
                playerData = sample["player_data"]
        
                x_input = new ort.Tensor("float32", new Float32Array(playerData.flat()), [1, playerData.length, playerData[0].length]);
                d_input = new ort.Tensor("float32", new Float32Array([0.5]), [1, 1]);
        
                feeds = { "player_data": x_input, "team_rating": d_input };
                results = await mid_session.run(feeds);
                break;
            case "FWD":
                sample = fwd_data[$("#players").val()];
                playerData = sample["player_data"]
        
                x_input = new ort.Tensor("float32", new Float32Array(playerData.flat()), [1, playerData.length, playerData[0].length]);
                d_input = new ort.Tensor("float32", new Float32Array([0.5]), [1, 1]);
        
                feeds = { "player_data": x_input, "team_rating": d_input };
                results = await fwd_session.run(feeds);
                break;
        } 

        // Display result
        document.getElementById("output").innerText = `Model Output: ${results["score_prediction"].data}`;
        document.getElementById("real_output").innerText = `True Output: ${sample["actual_score"]}`;
    } catch (error) {
        console.error("Error running the model:", error);
    }
}