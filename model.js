async function runModel() {
    try {
        // Load the ONNX model
        const session = await ort.InferenceSession.create("https://deangumas.github.io/model.onnx");
        
        const gk_data = await fetch("https://deangumas.github.io/data/GK_2021-22.json");
        const real_data = await gk_data.json();
        const keys = Object.keys(real_data);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const sample = real_data[randomKey];
        const playerData = sample["player_data"]
        
        const x_input = new ort.Tensor("float32", new Float32Array(playerData.flat()), [1, 6, 10]);
        const d_input = new ort.Tensor("float32", new Float32Array([0.5]), [1, 1]);

        const feeds = { "player_data": x_input, "team_rating": d_input };
        const results = await session.run(feeds);

        console.log(results["score_prediction"].data);

        // Display result
        document.getElementById("output").innerText = `Model Output: ${results["score_prediction"].data}`;
        document.getElementById("real_output").innerText = `True Output: ${sample["actual_score"]}`;
    } catch (error) {
        console.error("Error running the model:", error);
    }
}