addLine();
addLine();
addLine();
addLine();
var resultInput = document.getElementById('result');

function copyWords(e){
	e.preventDefault();
	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData);
	console.log(data);

	const words = Object.keys(data).filter(item => item.includes('word'));
	let result = '';

	for (let word of words){
		const index = Number(word.replace('word', ''));
		let j = 0;
		while (j < Number(data[`count${index}`])){
			result += `${data[word]}\n`;
			j++;
		}
		result += '\n';
	}

	console.log(result);
	resultInput.value = result;
}

function addLine(){
	const i = document.getElementById("inputs").childElementCount;
	const inputs = document.getElementById('inputs');
	const div = document.createElement('div');
	div.className = 'flex gap-4';

	const word = document.createElement('input');
	word.className = 'flex-1';
	word.placeholder = `Слово ${i + 1}`;
	word.name = `word${i}`;

	const count = document.createElement('input');
	count.className = 'count';
	count.type = 'number';
	count.placeholder = `x Раз`;
	count.name = `count${i}`;
	count.min = '1';

	div.appendChild(word);
	div.appendChild(count);
	inputs.appendChild(div);
}

function clearAll(){
	const inputs = document.getElementsByTagName('input');
	for (let input of inputs){
		input.value = '';
	}
	resultInput.value = '';
}

function copyResult(){
	resultInput.select();
	resultInput.setSelectionRange(0, 99999); // For mobile devices

	navigator.clipboard.writeText(resultInput.value);
}