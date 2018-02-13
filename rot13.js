function encode()
{
	var plain_text=document.getElementById("message").value;
	var cypher_text= [];
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3'];
	

	for (var idx=0; idx<plain_text.length; idx++)
	{
		input=alphabet.indexOf(plain_text[idx]);
		
		
		if(input==-1)
	{
		cypher_text.push(plain_text[idx]);
		//fnction for the number here 
	}
	else
	{
		var coded=(input+13)%29;
		var letter=alphabet[coded];
		cypher_text.push(letter);
		}
		
	}
	
	document.getElementById("output").innerHTML=cypher_text.join("");
}


