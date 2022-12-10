const cpp = '/* who am i? */\nint AboutMe() {\n\tstring name = "Miles Hanbury";\n\tint age = 22;\n}';

document.addEventListener('DOMContentLoaded', function() {

});

document.getElementById('Generate').addEventListener('click', () => {
	DisplayAbout(cpp);
});

function CountLines(str) {
	let count = 1;
	for (let i = 0; i < str.length; ++i)
		if (str.charAt(i) === '\n')
			count++;
	return count;
}

const printSpeed = 50;
var printIndex = 0;
var lines;
async function PrintLines() {
	if (printIndex === 0) {
		printIndex++;
		lines++;
	}

	if (printIndex < lines) {
		document.getElementById('LineNumbers').innerHTML += `${printIndex}<br>`;
		printIndex++;
		setTimeout(PrintLines, printSpeed);
	}
}

function HandleWord(str) {
	let c = str.charAt(0);
	let word = '';
	
	let end;
	if (c === '/') {
		if (str.charAt(1) === '/')
			end = str.indexOf('\n');
		else
			end = str.indexOf('*/') + 1;
	}
	else if (c === '\n' || c === '\t') {
		end = 1;
	}
	else {
		end = str.indexOf(' ');
		end = str.indexOf('\n') < end ? str.indexOf('\n') : end;
		end = str.indexOf('\t') < end ? str.indexOf('\t') : end;
	}

	console.log(str.substring(0, end));
	return end;
}

const types = {
	'cpp':			[ 'int', 'string', 'char', 'bool' ],
	'c':			[ 'int', 'char' ],
	'javascript':	[ 'let', 'var' ]
}
function PrintAbout(str) {
	let i = 0;
	while (i < str.length)
		i = HandleWord(str.substring(i, str.length));
}

async function DisplayAbout() {
	lines = CountLines(cpp);
	await PrintLines();
	PrintAbout(cpp);
}