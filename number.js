//https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers/4467559
function mod(n, m) {
        return ((n % m) + m) % m;
}

function encode()
{
	var plain_text=document.getElementById("message").value;
	
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var digits   = ['1','2','3','4','5','6','7','8','9','!','?','@','%','$','^','&','*','(',')','_','-','+','=','#','~','we'];
	
	var cypher_text= [];
	for (var idx=0; idx<plain_text.length; idx++)
	{
		var input=alphabet.indexOf(plain_text[idx]);
		
		if(input==-1)
		{
			cypher_text.push(plain_text[idx]);
			//fnction for the number here 
		}
		else
		{
			var coded=(input+5) % digits.length;
			var letter=digits[coded];
			cypher_text.push(letter);
		}
	}
	
	document.getElementById("output").innerHTML= cypher_text;
}

function decrypt()
{
	var  symbols = document.getElementById("output").innerHTML;
	console.log(symbols);
	
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var digits   = ['1','2','3','4','5','6','7','8','9','!','?','@','%','$','^','&','*','(',')','_','-','+','=','#','~','we'];
	
	var cypher_text = [];
	
	for (var i = 0; i<symbols.length; i++) 
	{
		
		var input=digits.indexOf(symbols[i]);
		
		if(input==-1)
		{
			cypher_text.push(cypher_text[i]);
			//fnction for the number here 
		}
		else
		{
			//var coded=(input-5) % alphabet.length;
			var coded = mod((input - 5) , alphabet.length);
			var alpha=alphabet[coded];
			cypher_text.push(alpha);
		}
		document.getElementById("output2").innerHTML=cypher_text.join("");
	}
		
}	

