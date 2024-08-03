// Function that allows us to change the project texts easily.
//To change a text, just use the functions calls below and change the text that you want.
function textAssignment(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}
//Project texts
textAssignment('#insert_text','Ingresa el texto que desees encriptar o desencriptar a tu izquierda');
textAssignment('#without_text','Sin mensaje por el momento');
textAssignment('#text_instructions','Solo letras minúsculas, sin acentos y sin caracteres especiales');


//Converts the input text to lowercase, removes accents and special characters,
function lowercase(input){
    // Convert the input text to lowercase
    let inputText = input.value.toLowerCase();
    
    // Remove accents and special characters
    inputText = inputText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    inputText = inputText.replace(/[^a-z0-9\s]/g, "");

    document.getElementById('inputText').value = inputText

}

/*
 Encrypts the text from the input element by replacing vowels
 If the input text is empty, it shows an alert message.
 */
function encryptText() {
    const inputText = document.getElementById('inputText').value;
// Check if the input text is empty
    if(inputText == ""){
        alert('Sin texto para encriptar') //show the alert
        //hide the positive image
        document.getElementById('muneco_image').style.display = 'none';
        // show the negative image
        document.getElementById('muneco_image_negative').style.display = 'block';
        // change the text
        textAssignment('#without_text','¡Lo siento! Es necesario un texto');
    }else{
        // Encrypt the text
        let encriptedText = inputText.replace(/e/g, 'enter')
                                     .replace(/i/g, 'imes')
                                     .replace(/a/g, 'ai')
                                     .replace(/o/g, 'ober')
                                     .replace(/u/g, 'ufat');
            document.getElementById('outputText').innerHTML = encriptedText;

            document.getElementById('warning_container').style.display = 'none';
            document.getElementById('text_container').style.display = 'inherit';
    }
        
}

/*
 Decrypt the text from the input element by replacing vowels
 If the input text is empty, it shows an alert message.
 */
function decryptText(params) {
    const inputText = document.getElementById('inputText').value;
// Check if the input text is empty
    if(inputText == ""){
        alert('Sin texto para desencriptar')//show the alert
        //hide the positive image
        document.getElementById('muneco_image').style.display = 'none';
        // show the negative image
        document.getElementById('muneco_image_negative').style.display = 'block';
        // change the text
        textAssignment('#without_text','¡Lo siento! Es necesario un texto');
    }else{
    // Decrypt the text
    let decryptedText = inputText.replace(/enter/g, 'e')
                                 .replace(/imes/g, 'i')
                                 .replace(/ai/g, 'a')
                                 .replace(/ober/g, 'o')
                                 .replace(/ufat/g, 'u');
            document.getElementById('outputText').innerHTML = decryptedText;

            document.getElementById('warning_container').style.display = 'none';
            document.getElementById('text_container').style.display = 'inherit';
    }
}

/*
 Copies the text content from the element
*/
function copytext() {
    let textToCopy = document.getElementById('outputText').textContent
    // Copy the text to the clipboard
    navigator.clipboard.writeText(textToCopy);
}