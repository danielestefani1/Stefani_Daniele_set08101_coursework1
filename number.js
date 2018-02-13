function encode()
{
	var plain_text=document.getElementById("message").value;
	var cypher_text= [];
	var alphabet = ['0','1','2','3','4','5','6','7','8','9'];
	

	for (var idx=0; idx<plain_text.length; idx++)
	{
		input=alphabet.indexOf(plain_text[idx]); if (alphapet(plain_text[idx]) === '0' || '1'||'2';)
		
		
		if(input==-1)
	{
		cypher_text.push(plain_text[idx]);
	
	}
	else
	{
		var coded=((input+ Math.floor(Math.random()*12)));
		var letter=alphabet[coded];
		cypher_text.push(letter);
		}
		
	}
	document.getElementById("output").innerHTML=cypher_text.join("");
}