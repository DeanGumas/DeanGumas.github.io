async function runModel() {
    try {
        // Load the ONNX model
        const session = await ort.InferenceSession.create("https://deangumas.github.io/model.onnx");

        // Example input data (ensure it matches your model's input shapes)
        const x_input = new ort.Tensor("float32", new Float32Array(6 * 10, [1, 6, 10])); // Batch size 1
        const d_input = new ort.Tensor("float32", new Float32Array([0.5]), [1, 1]); // Batch size 1

        const feeds = { "player_data": x_input, "team_rating": d_input };
        const results = await session.run(feeds);

        console.log(results["score_prediction"].data);

        // Display result
        document.getElementById("output").innerText = `Model Output: ${results["score_prediction"].data}`;
    } catch (error) {
        console.error("Error running the model:", error);
    }
}