function Function2() {
    let compare1 = document.querySelector("#compare1").value;
    let compare2 = document.querySelector("#compare2").value;
    let comp1 = compare1.replace(/\s/g, '');
    let comp2 = compare2.replace(/\s/g, '');

    let minLength = Math.min(comp1.length, comp2.length);
    let differenceIndex = -1;

    for (let i = 0; i < minLength; i++) {
        if (comp1[i] !== comp2[i]) {
            differenceIndex = i;
            break; 
        }
    }

    if (differenceIndex === -1) {
        if (comp1.length !== comp2.length) {
            differenceIndex = minLength; 
        } else {
            document.querySelector("#message2out").textContent = "Відмінностей немає";
            return;
        }
    }

    let output2 = `Відмінності(аналізувати уважно): ${differenceIndex === minLength ? compare1.substr(minLength) : compare1.substr(differenceIndex)}`;
    output2 += ` | ${differenceIndex === minLength ? compare2.substr(minLength) : compare2.substr(differenceIndex)}`;
    document.querySelector("#message2out").textContent = output2;
}
