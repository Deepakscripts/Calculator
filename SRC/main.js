/* Script tag will work once HTML is full loaded */
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is ready");
    /* DISPLAY */
    const display = document.getElementById("calc-display");

    /* BUTTONS */
    /* ARRAY OF BUTTONS(objects)  */
    const buttons = document.getElementsByClassName("btn");


    /* CURRENT VALUE */
    let currValue = "";
    /* HELPER FNX TO EVALUATE */
    function evaluateResult() {
        const convertedvalue = currValue
            .replace("×", "*")
            .replace("÷", "/")
            .replace("%", "*0.01")
            .replace("sin", "Math.sin")
            .replace("cos", "Math.cos")
            .replace("π", "Math.PI")
            .replace("ln", "Math.log")
            .replace("log", "Math.log10")
            .replace("e", "Math.E")
            .replace("tan", "Math.tan")
            .replace("√", "Math.sqrt");

        const result = eval(convertedvalue);
        const calculatedValue = result.toString();
        display.value = calculatedValue;
        /* CLEAR DISPLAY if user pressed any btn after calculation */
        currValue = "";
    }

    /* FOR-OF LOOP TO LISTEN EVENT ON ALL BTN's */
    for (const button of buttons) {
        button.addEventListener("click", () => {
            const value = button.innerText;

            try {
                /* CLEAR ALL FNX */
                if (value == "AC") {
                    currValue = "";
                    display.value = currValue;
                }
                else if (value == "=") {
                    evaluateResult();

                }
                else {
                    currValue += value;
                    display.value = currValue;
                }
            }
            catch (error) {

                console.error(error);
                currValue = "ERROR";
                display.value = currValue;
                currValue = "";
            }


        })
    }


});

