const input = document.getElementById("input_text");
const output = document.getElementById("output_text");
const outputButton = document.getElementById("output_button");

const criptografar = () => {
  const text = input.value;

  if (!text.length) return;

  const criptografado = text
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[aeiou]/g, (value) => {
      if (value === "a") return "ai";
      else if (value === "e") return "enter";
      else if (value === "i") return "imes";
      else if (value === "o") return "ober";
      else return "ufat";
    });

  outputButton.hidden = false;

  output.innerText = criptografado;
};

const descriptografar = () => {
  const text = input.value;

  const descriptografado = text.replace(/enter|imes|ai|ober|ufat/g, (value) => {
    if (value === "ai") return "a";
    else if (value === "enter") return "e";
    else if (value === "imes") return "i";
    else if (value === "ober") return "o";
    else return "u";
  });

  output.innerText = descriptografado;
};

const copyText = () => {
  const text = output.innerHTML;

  if (!text.length) return;

  navigator.clipboard.writeText(text);
};
