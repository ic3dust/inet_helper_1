function Function1() {
    let quotesFix = document.querySelector("#quotesFix").value;
    quotesFix = quotesFix.replace(/«/g, '"');
    quotesFix = quotesFix.replace(/»/g, '"');
    let a = " \nКопіюйте впевнено, блокноту начхати на фон тексту";
    let mas = [quotesFix, a];
    document.querySelector("#message1out").textContent = mas;
    return mas;
}
