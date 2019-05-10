
			var arr = [];
			var sum = 0;
			var f = 0;
			function ok()
			{
				var v = document.getElementById("val").value;
				
				var a = Math.floor((Math.random() * 6) + 1);
				
				if(v == 1){
					sum += 0;
				}
				else{
					if(v == 6){
						f = a * 2;
						sum += f;
					}
					else{
						sum += a;
					}
				}
				
				document.getElementById("val").value = a;
				
				arr.push(a);
				var len = arr.length;
				document.getElementById("res").innerHTML = "Roll n° " + len + ": rolls([" + arr.toString() + ")] -> The sum =  " + sum;
				
				
				
				if(len == 5){
					document.getElementById("btn").style.display= 'none';
					document.getElementById("r_div").style.display='block';
				}
				document.getElementById("msg").innerHTML  = "";
				if(len != 5){
					if(a == 1){
						document.getElementById("msg").innerHTML  = "1 rolled, bad luck !!! The next roll will count as 0.  ";
					}
					if(a == 6){
						document.getElementById("msg").innerHTML  = "6 rolled, good luck !!! The next roll will be amplified by a factor of 2.";
					}
				}
			}
		