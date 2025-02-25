async function runModel() {
    try {
        // Load the ONNX model
        const session = await ort.InferenceSession.create("model.onnx");

        // Define input tensor (ensure it's in the correct format)
        const inputTensor = new ort.Tensor("float32", new Float32Array([1.0, 2.0]), [1, 2]);

        // Prepare input feeds
        const feeds = { "input_name": inputTensor }; // Replace "input_name" with actual input name

        // Run inference
        const results = await session.run(feeds);

        // Extract output tensor (replace "output_name" with actual output name)
        const outputTensor = results["output_name"]; 

        // Display result
        document.getElementById("output").innerText = `Model Output: ${outputTensor.data}`;
    } catch (error) {
        console.error("Error running the model:", error);
    }
}