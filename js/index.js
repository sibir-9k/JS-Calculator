const allNumber = document.querySelectorAll(".number");
const allOperator = document.querySelectorAll(".operator");
const prevOperand = document.getElementById("prevOperand");
const currentOperand = document.getElementById("currentOperand");
const clearBtn = document.getElementById("clear");
const equals = document.getElementById("equals");
const signChange = document.getElementById("sign-change");
const backspace = document.getElementById("backspace");

let prevNum = "";
let currentNum = "";
let haveDot = false;
let result = null;
let lastOperator = "";

allNumber.forEach((number) => {
	number.addEventListener("click", (e) => {
		if (e.target.innerText === "." && !haveDot) {
			haveDot = true;
		} else if (e.target.innerText === "." && haveDot) {
			return;
		}
		currentNum += e.target.innerText;
		currentOperand.innerText = currentNum;
	});
});

allOperator.forEach((operator) => {
	operator.addEventListener("click", (e) => {
		if (!currentNum) return;
		haveDot = false;
		const operatorName = e.target.innerText;
		if (prevNum && currentNum && lastOperator) {
			mathOperation();
		} else {
			result = parseFloat(currentNum);
		}
		clearVar(operatorName);
		lastOperator = operatorName;
	});
});

const clearVar = (num = "") => {
	prevNum += currentNum + " " + num + " ";
	prevOperand.innerText = prevNum;
	currentOperand.innerText = "";
	currentNum = "";
};

const mathOperation = () => {
	if (lastOperator === "+") {
		result = parseFloat(result) + parseFloat(currentNum);
	} else if (lastOperator === "-") {
		result = parseFloat(result) - parseFloat(currentNum);
	} else if (lastOperator === "/") {
		result = parseFloat(result) / parseFloat(currentNum);
	} else if (lastOperator === "×") {
		result = parseFloat(result) * parseFloat(currentNum);
	} else if (lastOperator === "%") {
		result = parseFloat(result) % parseFloat(currentNum);
	}
};

equals.addEventListener("click", () => {
	if (!prevNum || !currentNum) return;
	haveDot = false;
	mathOperation();
	clearVar();
	currentOperand.innerText = result;
	currentNum = result;
	prevNum = "";
});

clearBtn.addEventListener("click", () => {
	prevOperand.innerText = 0;
	currentOperand.innerText = 0;
	prevNum = "";
	currentNum = "";
	result = "";
});

signChange.addEventListener("click", () => {
	if (currentNum < 0) {
		currentNum = Math.abs(Number(currentNum));
		currentOperand.innerText = currentNum;
	} else {
		currentNum = currentNum * -1;
		currentOperand.innerText = currentNum;
	}
});

backspace.addEventListener("click", () => {
	if (currentNum.length !== 0) {
		currentNum = currentNum.substring(0, currentNum.length - 1);
		currentOperand.innerText = currentNum;
	} else if (currentNum.length == 0) {
		currentOperand.innerText = 0;
	}
});
