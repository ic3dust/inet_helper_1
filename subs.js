function Function1() {
    let quotesFix = document.querySelector("#quotesFix").value;
    quotesFix = quotesFix.replace(/«/g, '"');
    quotesFix = quotesFix.replace(/»/g, '"');
    document.querySelector("#message1out").textContent = quotesFix;
    return quotesFix;
}
function copyText() {
    const textToCopy = document.getElementById('message1out').innerText;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    success();
}
function success() {
    let message = document.getElementById('copy_message');
    message.style.opacity = 1; 
    setTimeout(() => {
         message.style.opacity = 0; 
    }, 2000);
}
