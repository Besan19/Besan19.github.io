<!DOCTYPE html>
<html lang="en">
<head>
<title>Internship Application</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>


input.empty {
   box-shadow: 0px 0px 10px red;
}

input.not-empty {
   box-shadow: 0px 0px 10px white;
}
</style>
</head>
<body>
<a href="index.htm">Go to old page</a>
<h2>Internship Application</h2>  
<p>Please fill out the form below and hit submit to be considered for the internship.</p>
<script src="jsfile.js"></script>
    <form>  
     <fieldset>  
        <legend>Personalia:</legend>
         <label for="fname">First name:</label>
         <input type="text" id="fname" name="fname" onchange="OnInputChange(this)" required class="empty"><br>
		 <label for="lname">Last name:</label>
         <input type="text" id="lname" name="lname" onchange="OnInputChange(this)" required disabled class="empty"><br>
		 <label for="website">Personal Website:</label>
         <input type="url" id="website" name="website"><br>
		 <label for="phone">Enter a phone number:</label>
         <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"><br>
         <label for="email">Enter your email:</label>
         <input type="email" id="email" name="email" onchange="OnInputChange(this)" required disabled class="empty"><br>
		 <label for="uname">Username:</label>
         <input type="text" id="uname" name="uname" onchange="OnInputChange(this)" required disabled class="empty"><br>
         <label for="pass">Password:</label>
         <input type="password" id="pass" name="pass" onchange="OnInputChange(this)" required disabled class="empty"><br>
	 </fieldset> 
	 <fieldset> 
		 <legend>Education:</legend>
		 <label for="Degree">Degree:</label>
		 <input list="Degree" name="Degree">
         <datalist id="Degree">
         <option value="Associate">
         <option value="Bachelor">
         <option value="Masters">
         <option value="Ph.D.">
         <option value="other">
         </datalist><br>
		 <label for="graduate">When will you graduate:</label>
         <input type="date" id="graduate" name="graduate" max="2022-05-07"><br>
		 <label for="cvfile" >Upload your CV and other documents:</label>  
         <input type="file" id="cvfile" name="cvfile" multiple="multiple"> 
     </fieldset> 
	 <br>
	 <p style="text-align: center;">
	 <input type="submit" id="sub" value="Submit" onclick="missingFields()">
	 <input type="submit" id="sa" value="Save" onclick="DisplayUsername(email)">
	 <input type="reset" id="re" value="Reset">
     </p>  
  </form>  
</body>
</html>
