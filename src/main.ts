import './style.css'


document.addEventListener('DOMContentLoaded', () => {
  const jegyek = document.getElementById("jegy");
  const btn = document.getElementById("hozzaad");
  const kereses = document.getElementById("kereses");

  const arr: Array<number> = [];


  document.getElementById("kereses")!.addEventListener("input", () => {
    const keres = Number((kereses as HTMLInputElement)?.value);
    const talalat = arr.filter((value) => value === keres);

    document.getElementById("kimenet")!.textContent = "";
    document.getElementById("kimenet")!.textContent = talalat.toString();

  })

  btn?.addEventListener("click", () => {
    arr.push(Number((jegyek as HTMLInputElement)?.value));
    document.getElementById("kimenet")!.textContent = arr.toString();







  })
})


