var container = document.querySelector(".text");

var speeds = {
    normal: 70,
    fast: 40,
    slow: 120,
    pause: 500,
}

var textLines = [
    {string: "Hey", speed: speeds.normal},
    {string: "What's up?", speed: speeds.normal},
    {string: "I'm Great!", speed: speeds.fast},
]

var characters = [];
textLines.forEach(line => {

    if (index < textLines.length -1) {
        line.string += " ";
    }

    line.string.split("").forEach(character => {
        var span = document.createElement("span");
        span.textContent = character;
        container.appendChild(span);

    })

})