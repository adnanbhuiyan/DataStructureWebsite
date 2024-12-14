if (window.location.pathname.endsWith("index.htm") || window.location.pathname === "/") {
    alert("Get ready to learn data structures!");
}
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("array.htm") || window.location.pathname.endsWith("linked_list.htm")
    || window.location.pathname.endsWith("stack.htm") || window.location.pathname.endsWith("queue.htm")
    || window.location.pathname.endsWith("trees.htm")) {
        const runButton = document.getElementById("run-code");
        const codeEditor = document.getElementById("code-editor");
        const outputDiv = document.getElementById("output");

        runButton.addEventListener("click", () => {
            try {
                // Clear previous output
                outputDiv.innerHTML = "";

                // Redirect console.log to display in the output box
                const originalConsoleLog = console.log;
                console.log = function (...messages) {
                    messages.forEach((message) => {
                        outputDiv.innerHTML += `<pre>${message}</pre>`;
                    });
                };

                // Create a function to execute user code
                const userCode = codeEditor.value;
                const userFunction = new Function(userCode);

                // Execute user code
                const result = userFunction();

                // If the code returns a value, display it
                if (result !== undefined) {
                    outputDiv.innerHTML += `<pre>Result: ${result}</pre>`;
                }

                // Restore the original console.log after execution
                console.log = originalConsoleLog;
            } catch (error) {
                outputDiv.innerHTML = `<pre style="color: red;">Error: ${error.message}</pre>`;
            }
        });
    }
});





