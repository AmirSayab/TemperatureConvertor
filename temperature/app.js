function message() {
 var choice=prompt("Press 1 Fahrenheit to Celsius: \nPress 2 for Celsius to Fahrenheit: ")
if (choice==1) {
    let num=prompt("Enter value in fahrenheit to change: ");
    let celsius=((num-32)/1.8);
    document.write("Fahrenheit "+ num + " To celsius: " + celsius);
} else if(choice==2) {
    let num=prompt("Enter value in celsius to change: ");
    let fahrenheit=((num-32)/1.8);
    document.write("celsius "+ num + " To Fahrenheit: " + fahrenheit);
} 
else{
    alert("ERROR: Invalid Choice")
}
}