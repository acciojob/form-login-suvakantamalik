function getFormvalue() {
    //Write your code here
		let fn = document.getElementsByName("fname")[0].value;
		let ln = document.getElementsByName("lname")[0].value;

		alert(fn + " " + ln);
}
