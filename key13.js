
function encode()
{
	var plain_text=document.getElementById("message").value;
	
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9'];
	
	
var cypher_text= [];
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
		var coded=(input+13) % alphabet.length;
		var letter=alphabet[coded];
		cypher_text.push(letter);
		}
		
	}
	
	document.getElementById("output").innerHTML=cypher_text.join("");
}
function decode()
{
	var  o = document.getElementById("output").innerHTML;
	var alphabet2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9'];
	var r= [];
	
	for (var i = 0; i<o.length; i++) {
	
	
		input2=alphabet2.indexOf(o[i]);
		
		if(input2==-1){
			r.push(o[i]);
		}
		else{
		var coded2=(input2-13 + alphabet2.length) % alphabet2.length;
		var letter2 =alphabet2[coded2];
		r.push(letter2);
		}
	}
	document.getElementById("output2").innerHTML= r.join("");
	
	
}	