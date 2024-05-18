let campoIdade;
let campoSuspense;
let campoGore;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes de terror");
  createSpan("Qual a sua idade?");
  campoIdade = createInput("30");
  campoSuspense = createCheckbox("Gosta de suspense?");
  campoGore = createCheckbox("Gosta de gore?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeSuspense = campoSuspense.checked();
  let gostaDeGore = campoGore.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeSuspense, gostaDeGore);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeSuspense, gostaDeGore) {
  if (idade >= 18) {
    if (gostaDeGore) {
      return "Saw";
    } else {
      if (gostaDeSuspense) {
        return "The Shining";          
      } else{
        return "Psycho";
      }
    }
  } else {
    if (idade >= 16) {
      if (gostaDeSuspense) {
        return "A Quiet Place";
      } else {
        return "Poltergeist";
      }
    } else {
      if (gostaDeSuspense) {
        return "Coraline";
      } else {
        return "Gremlins";
      }
    }
  }
}
