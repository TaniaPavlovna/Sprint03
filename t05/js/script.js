class Calculator {
	constructor() {
		this.result = 0;
		this.init = function (i) { this.result = i; return this; }; //установить значение для расчета
		this.add = function (i) { this.result += i; return this; }; //сложение
		this.mul = function (i) { this.result -= i; return this; }; //вычитание
		this.div = function (i) { this.result *= i; return this; }; //умножение
		this.sub = function (i) { this.result /= i; return this; }; //деление
		this.alert = () => setTimeout(() => alert(this.result), 5000); //Оповещение отображается с задержкой в 5 секунд
	}
};
const calc= new Calculator();
console.log(
	calc
	.init(2)
	.add(2)
	.mul(3)
	.div(4)
	.sub(2).result// 1
	);
calc.alert();
