var gk_data;
var def_data;
var mid_data;
var fwd_data;

var gk_session;

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
    gk_session = await ort.InferenceSession.create("https://deangumas.github.io/model.onnx");
}

async function runModel() {
    try {       
        const keys = Object.keys(gk_data);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const sample = gk_data[randomKey];
        const playerData = sample["player_data"]
        
        const x_input = new ort.Tensor("float32", new Float32Array(playerData.flat()), [1, 6, 10]);
        const d_input = new ort.Tensor("float32", new Float32Array([0.5]), [1, 1]);

        const feeds = { "player_data": x_input, "team_rating": d_input };
        const results = await gk_session.run(feeds);

        // Display result
        document.getElementById("output").innerText = `Model Output: ${results["score_prediction"].data}`;
        document.getElementById("real_output").innerText = `True Output: ${sample["actual_score"]}`;
    } catch (error) {
        console.error("Error running the model:", error);
    }
}