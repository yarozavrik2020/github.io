// 2-4 строчка, создание переменной
let firstNum = ''; 
let sign = '';
let secondNum = '';

let resultRow = document.getElementById('row1'); //Получаем ID row1 из html 
//Создание функции
function OnClearClick(){
	// 10-12 строчка, задаем новые значения переменным
	firstNum = '';
	sign = '';
	secondNum = '';

	resultRow.value = ''; //Обнуление значения resultRow, то есть убираем все что было там написано
	ReturnStyle();
}
//Создание функции
function OnNumberClick(num){
	if (sign != '' && firstNum != '') { //Делаем проверку, если 'Действие' != Ничему. и 1 цифра не равняется Ничему, тогда
		if (num.value == '.' && secondNum.includes('.')) { //Если мы нажали . и у второй цифры есть . тогда
			alert("You can't do > 1 points"); //Предупреждение игрока
			ErrorSetting();
			return;//Вернуть значение
		}

		secondNum += num.value; //Присваиваем 2 цифру к намбу, делая так что намб == секонд намб
	}

	else{ //Иначе
		if (num.value == '.' && firstNum.includes('.')) {//Если мы нажали . и у первой цифры есть . тогда
			alert("You can't do > 1 points");//Предупреждение игрока
			ErrorSetting();
			return;//Вернуть значение
		}
		firstNum += num.value; //Почти такое же как у 19 строчки
	}
	resultRow.value += num.value; //Мы добавляем в строку вывода ту цифру на которую мы нажали
}
function OnSignClick(Znak){
	// Sign разделяет 1- ое цисло от 2 цисла
	if (sign != '') { // Если сигн не равняется ничему (есть) тогда
		alert("You can't do > 1 sign"); //Предупреждение игрока
		ErrorSetting();
		return;//Вернуть значение
	}
	else{ //Иначе
		firstNum = resultRow.value;
		resultRow.value += Znak.value;
		sign = Znak.value; //Делаем что бы Значение Знака была равной сигну
	}

}
//Создаем функцию, без аргументов
function OnPabnoClick(){
	//Проверки if, else if
	if (sign == '-') { //
		secondNum = parseFloat(firstNum)-parseFloat(secondNum); //Если у нас в цифре - цисле есть '.' мы делаем что бы этот пример решался
	}
	else if (sign == '+') {
		secondNum = parseFloat(firstNum)+parseFloat(secondNum); //Если у нас в цифре - цисле есть '.' мы делаем что бы этот пример решался
	}
	else if (sign == '/'){//Если иначе знак == / тогда
		if (secondNum == 0) {//Если второе число это 0
			alert("You can't divide on Zero!");//Предупреждение игрока
			ErrorSetting();
			return;//Вернуть значение
		}
		else{
			secondNum = parseFloat(firstNum)/parseFloat(secondNum); //Если у нас в цифре - цисле есть '.' мы делаем что бы этот пример решался
		}
		
	}
	else if (sign == '*') {
		secondNum = parseFloat(firstNum)*parseFloat(secondNum); //Если у нас в цифре - цисле есть '.' мы делаем что бы этот пример решался
	}
	resultRow.value = secondNum; //Делаем что бы вывод был, который у нас написан в коде

	firstNum = secondNum;//фирст нам будет равнятся секанд нам
	sign = ''; //
	secondNum = '';//ОбнулениеОбнуление

}
//Создаем функцию
function OnPlusMinusClick(){
	resultRow.value = parseFloat(resultRow.value) * (-1);//Если в цифре есть '.', мы умножаем цифру на минус 1, и так мы получим -цифра
}
function OnProcentClick(){
	resultRow.value /= 100;//Разделяем на 100
}
function ErrorSetting(){
	document.body.style.background = 'black';
	let elementsWhite = document.getElementsByClassName('white');
	let elementsBlue = document.getElementsByClassName('blue');
	let elementsRed = document.getElementsByClassName('red');
/*	document.getElementById('White').style.color = 'orange'; */
	for (var i = 0; i < elementsWhite.length; i++) {
		elementsWhite[i].style.borderColor = 'orange';
	}
	for (var i = 0; i < elementsBlue.length; i++) {
		elementsBlue[i].style.borderColor = 'orange';
	}
	for (var i = 0; i < elementsRed.length; i++) {
		elementsRed[i].style.borderColor = 'orange';
	}
}
function ReturnStyle(){
	document.body.style.background = '';
	let elementsWhite = document.getElementsByClassName('white');
	let elementsBlue = document.getElementsByClassName('blue');
	let elementsRed = document.getElementsByClassName('red');
/*	document.getElementById('White').style.color = 'orange'; */
	for (var i = 0; i < elementsWhite.length; i++) {
		elementsWhite[i].style.borderColor = '';
	}
	for (var i = 0; i < elementsBlue.length; i++) {
		elementsBlue[i].style.borderColor = '';
	}
	for (var i = 0; i < elementsRed.length; i++) {
		elementsRed[i].style.borderColor = '';
	}
}
function CtepeniClick(currentCtepeni) {
	let CCV = currentCtepeni.value;
	if (CCV == '^2') {
		let result2 = resultRow.value * resultRow.value;
		resultRow.value = result2;
	}
	else if (CCV == '^3') {
		let result2 = resultRow.value * resultRow.value * resultRow.value;
		resultRow.value = result2;
	}
}
function TrigonometriaClick(currentTrigonometria){
	let CTV = currentTrigonometria.value;
	let resultInRow;
	if (CTV == "sin") {
		resultInRow = Math.sin(parseFloat(resultRow.value));
	}
	else if (CTV == "cos"){
		resultInRow = Math.cos(parseFloat(resultRow.value));
	}
	resultRow.value = resultInRow;
}
function KoreniClick(){
	let CRV = parseFloat(resultRow.value);
	if (CRV < 0){
		alert('There is no root of a negative number!');
		ErrorSetting();
		return;
	}
	resultRow.value = Math.sqrt(CRV);
}
function TangensClick(){
	let resultInRow;

	resultInRow = Math.tan(parseFloat(resultRow.value));
	resultRow.value = resultInRow;
}
function OnFactorialClick(){
	let rowNum = resultRow.value;
	let resultFor = 1;

	if (rowNum != parseInt(rowNum)) {

		alert("The number is not an integer!");
		ErrorSetting();
		return;
	}

	for (var i = rowNum; i >= 1; i--) {
		resultFor *= i;
	}
	resultRow.value = resultFor;
}
function InverseClick() {
	let rowNumber = resultRow.value;
	resultRow.value = 1 / rowNumber;
}
function KybicKoreniClick (){
	let CRV = parseFloat(resultRow.value);
	resultRow.value = Math.cbrt(CRV);
}
let NumRandomResult;
let TimerMath;
function MathGameOnClick(){
	let timeOfTimer = 15000;
	let minNum = 1;
	let maxNum = 100;
	let randomNumResult = parseInt(Math.random()*100 +1);
	NumRandomResult = randomNumResult;
	document.getElementById('RNT').textContent = randomNumResult;
	document.getElementById('CRB').style.display = 'block';

	TimerMath = setTimeout(()=>{
					document.getElementById('CRB').style.display = 'none';
					ErrorSetting();
					return;
	},timeOfTimer);
}
function CheckResultOnClick(){
	let resultNumberRow = resultRow.value;

	if (resultNumberRow == NumRandomResult) {
		alert("You've solved the example correctly!");
		clearTimeout(TimerMath);
	}
	else{
		alert("You've solved the example incorrectly!");
		document.getElementById('CRB').style.display = 'none';
		/*document.getElementById('RNT').style.display = 'none';*/
		ErrorSetting();
		return;

	}
}
function OnRadClick(){
	let resultInRow2 = resultRow.value;
	let ResultInRadian = resultInRow2 / 180 *3.1415;
	resultRow.value = ResultInRadian;
}
//Fire Mode
let BurnedButtons = [];
let FireTimer;
let StartHeightFire = 500;
let FireMinNumber = 1;
let FireMaxNumber = 200;
let CurrentFireNumber;
function FireModeActivated(){
	CurrentFireNumber = parseInt(Math.random()*FireMaxNumber +FireMinNumber);
	document.getElementById('RNFM').textContent = CurrentFireNumber;
	ResetCurrentGame();
	let FireVar = document.getElementById('Fire');
	FireVar.style.height = `${StartHeightFire}px`;

	FireTimer = setInterval(()=>{
		StartHeightFire +=30;
		FireVar.style.height = `${StartHeightFire}px`;
		BurnFireButtons();
		if (BurnedButtons.length >=11) {
			clearInterval(FireTimer);
			alert("You lose! Try again");
		}
	},1500);

}
function CheckFireModeActivated(){
	let FireVar = document.getElementById('Fire');
	let rowResult = resultRow.value;

	if (rowResult == CurrentFireNumber) {
		alert('The example in the "Fire Mode" mode was done correctly!');
		clearInterval(FireTimer);
	}
	else{
		alert('The example in the "Fire Mode" mode was done incorrectly!');
		FireVar.style.display = 'none';
		StartHeightFire = 0;
		FireVar.style.height = StartHeightFire;
		ErrorSetting();
		return;
	}
}
function ResetCurrentGame(){
	let FireVar = document.getElementById('Fire');
	let numButtons = document.querySelectorAll('button[value]');
	numButtons.forEach(z =>{
		z.disabled = false;
		z.style.backgroundcolor = '';
		z.style.cursor = '';
	}) ;
	BurnedButtons = [];
	StartHeightFire = 0;
	FireVar.style.height = StartHeightFire;
}
//Создание функции
function BurnFireButtons(){
	let numButtons = document.querySelectorAll('button[value]');//Находим все кнопки у которых есть 'value'
	let FireSize_Current = document.getElementById('Fire').getBoundingClientRect();//Находим Позицию и Размер огня

	numButtons.forEach(z =>{ //создаем forEach
		let ButtonSize = z.getBoundingClientRect();//Создаем размер кнопки
		if (FireSize_Current.top < ButtonSize.bottom && !BurnedButtons.includes(z)) {//Если размер огня верхняя чась меньше размера кнопки нижней части и соженные кнопки (Я забыл что такое includes)
			BurningButtons(z); //Вызываем функицию Соженния кнопки,'кнопка'
			BurnedButtons.push(z);//В список соженных кнопок добавляем нашу кнопку
		}
	});

}
//Создание функции
function BurningButtons(current_button){
	current_button.disabled = true; //Выключаем нажатие кнопки
	current_button.style.backgroundcolor = 'orangered';//Настрайваем бекграундколор на оранжевый
	current_button.style.cursor = 'not-allowed'; //Меняем курсор на вид "not-allowed"
}
//д/з сделать функцию проверки результата в файр моде