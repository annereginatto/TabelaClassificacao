const liverpool = {
  nome: "Liverpool",
  escudo:
    "https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_96x96.png",
  jogos: 0,
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

const arsenal = {
  nome: "Arsenal",
  escudo:
    "https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_96x96.png",
  jogos: 0,
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

const manunited = {
  nome: "Manchester United",
  escudo:
    "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_96x96.png",
  jogos: 0,
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

const chelsea = {
  nome: "Chelsea",
  escudo:
    "https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_96x96.png",
  jogos: 0,
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

const mancity = {
  nome: "Manchester City",
  escudo:
    "https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_96x96.png",
  jogos: 0,
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

liverpool.pontos = calculaPontos(liverpool);
arsenal.pontos = calculaPontos(arsenal);
manunited.pontos = calculaPontos(manunited);
chelsea.pontos = calculaPontos(chelsea);
mancity.pontos = calculaPontos(mancity);

function calculaPontos(clube) {
  let pontos = clube.vitorias * 3 + clube.empates;
  return pontos;
}

let clubes = [arsenal, chelsea, liverpool, mancity, manunited];

function exibeClubesNaTela(clubes) {
  let elemento = "";

  for (let i = 0; i < clubes.length; i++) {
    elemento += `
    <tr><td>${clubes[i].nome}</td>
    <td><img src="${clubes[i].escudo}"></td>
    <td>${clubes[i].jogos}</td>
    <td>${clubes[i].vitorias}</td>
    <td>${clubes[i].empates}</td>
    <td>${clubes[i].derrotas}</td>
    <td>${clubes[i].pontos}</td>
    <td><button id="vitoria(${i})" class="vitoria" onClick="adicionarVitoria(${i})">Vitória</button></td>
    <td><button  id="empate(${i})" class="empate" onClick="adicionarEmpate(${i})">Empate</button></td>
    <td><button id="derrota(${i})" class="derrota" onClick="adicionarDerrotas(${i})">Derrota</button></td>
    </tr>
    `;
  }
  let tabelaClubes = document.getElementById("tabela-clubes");
  tabelaClubes.innerHTML = elemento;
}

exibeClubesNaTela(clubes);

function adicionarVitoria(i) {
  let texto = document.getElementById("texto");
  texto.innerHTML = "";
  let botaoEmpate = document.getElementById(`empate(${i})`);
  if (botaoEmpate.disabled == false) {
    let clube = clubes[i];
    clube.jogos++;
    clube.vitorias++;
    clube.pontos = calculaPontos(clube);
    exibeClubesNaTela(clubes);
    ordemClassificacao();
    let botaoDerrota = document.getElementById(`derrota(${i})`);
    botaoDerrota.disabled = true;
    for (let c = 0; c < clubes.length; c++) {
      let botaoEmpate = document.getElementById(`empate(${c})`);
      botaoEmpate.disabled = true;
      let botaoVitoria = document.getElementById(`vitoria(${c})`);
      botaoVitoria.disabled = true;
    }
  } else {
    let clube = clubes[i];
    clube.jogos++;
    clube.vitorias++;
    clube.pontos = calculaPontos(clube);
    exibeClubesNaTela(clubes);
    let botaoDerrota = document.getElementById(`derrota(${i})`);
    botaoDerrota.disabled = false;
    for (let c = 0; c < clubes.length; c++) {
      let botaoEmpate = document.getElementById(`empate(${c})`);
      botaoEmpate.disabled = false;
      let botaoVitoria = document.getElementById(`vitoria(${c})`);
      botaoVitoria.disabled = false;
    }
  }
}

function adicionarEmpate(i) {
  let texto = document.getElementById("texto");
  texto.innerHTML = "";
  let botaoDerrota = document.getElementById(`derrota(${i})`);
  if (botaoDerrota.disabled == false) {
    let clube = clubes[i];
    clube.jogos++;
    clube.empates++;
    clube.pontos = calculaPontos(clube);
    exibeClubesNaTela(clubes);
    let botaoEmpate = document.getElementById(`empate(${i})`);
    botaoEmpate.disabled = true;
    for (let c = 0; c < clubes.length; c++) {
      let botaoVitoria = document.getElementById(`vitoria(${c})`);
      botaoVitoria.disabled = true;
      let botaoDerrota = document.getElementById(`derrota(${c})`);
      botaoDerrota.disabled = true;
      ordemClassificacao();
    }
  } else {
    let clube = clubes[i];
    clube.jogos++;
    clube.empates++;
    clube.pontos = calculaPontos(clube);
    exibeClubesNaTela(clubes);
    let botaoEmpate = document.getElementById(`empate(${i})`);
    botaoEmpate.disabled = false;
    for (let c = 0; c < clubes.length; c++) {
      let botaoVitoria = document.getElementById(`vitoria(${c})`);
      botaoVitoria.disabled = false;
      let botaoDerrota = document.getElementById(`derrota(${c})`);
      botaoDerrota.disabled = false;
      ordemClassificacao();
    }
  }
}

function adicionarDerrotas(i) {
  let texto = document.getElementById("texto");
  texto.innerHTML = "";
  let botaoEmpate = document.getElementById(`empate(${i})`);
  if (botaoEmpate.disabled == false) {
    let clube = clubes[i];
    clube.jogos++;
    clube.derrotas++;
    exibeClubesNaTela(clubes);
    let botaoVitoria = document.getElementById(`vitoria(${i})`);
    botaoVitoria.disabled = true;
    for (let c = 0; c < clubes.length; c++) {
      let botaoDerrota = document.getElementById(`derrota(${c})`);
      botaoDerrota.disabled = true;
      let botaoEmpate = document.getElementById(`empate(${c})`);
      botaoEmpate.disabled = true;
      ordemClassificacao();
    }
  } else {
    let clube = clubes[i];
    clube.jogos++;
    clube.derrotas++;
    exibeClubesNaTela(clubes);
    let botaoVitoria = document.getElementById(`vitoria(${i})`);
    botaoVitoria.disabled = false;
    for (let c = 0; c < clubes.length; c++) {
      let botaoDerrota = document.getElementById(`derrota(${c})`);
      botaoDerrota.disabled = false;
      let botaoEmpate = document.getElementById(`empate(${c})`);
      botaoEmpate.disabled = false;
      ordemClassificacao();
    }
  }
}

function limpaInput() {
  document.getElementById("nomeClube").value = "";
  document.getElementById("escudoClube").value = "";
  document.getElementById("jogosClube").value = "";
  document.getElementById("vitoriasClube").value = "";
  document.getElementById("empatesClube").value = "";
  document.getElementById("derrotasClube").value = "";
}

function ordemClassificacao() {
  clubes.sort(function (a, b) {
    if (a.pontos < b.pontos) {
      return 1;
    } else if (a.pontos == b.pontos) {
      return 0;
    } else {
      return -1;
    }
  });
}

function adicionarClube() {
  let nomeClube = document.getElementById("nomeClube").value;
  let escudoClube = document.getElementById("escudoClube").value;
  let jogosClubes = document.getElementById("jogosClube").value;
  let vitoriasClube = document.getElementById("vitoriasClube").value;
  let empatesClube = document.getElementById("empatesClube").value;
  let derrotasClube = document.getElementById("derrotasClube").value;

  let nomeClubes = clubes.map(function (clubes) {
    return clubes.nome;
  });

  let mesmoNome = clubes.some(function (nomeClubes) {
    return nomeClubes.nome === nomeClube;
  });

  if (mesmoNome) {
    let texto = document.getElementById("texto");
    texto.innerHTML = "Esse clube já foi inserido...";
  } else {
    if (escudoClube.endsWith(".png")) {
      let novoClube = {
        nome: nomeClube,
        escudo: escudoClube,
        jogos: jogosClubes,
        vitorias: parseInt(vitoriasClube),
        empates: parseInt(empatesClube),
        derrotas: parseInt(derrotasClube)
      };
      clubes.push(novoClube);

      for (i = 0; i < clubes.length; i++) {
        let clube = clubes[i];
        clube.pontos = calculaPontos(clube);
      }
      ordemClassificacao(clubes);
      exibeClubesNaTela(clubes);
      let texto = document.getElementById("texto");
      texto.innerHTML = "Clube adicionado";
    } else {
      let texto = document.getElementById("texto");
      texto.innerHTML =
        "Esse formato de imagem é inválido... insira uma imagem com final .png";
    }
  }
  limpaInput();
}

function removerClube() {
  let nomeClube = document.getElementById("nomeClube").value;
  let escudoClube = document.getElementById("escudoClube").value;
  let jogosClubes = document.getElementById("jogosClube").value;
  let vitoriasClube = document.getElementById("vitoriasClube").value;
  let empatesClube = document.getElementById("empatesClube").value;
  let derrotasClube = document.getElementById("derrotasClube").value;

  let nomeClubes = clubes.map(function (clubes) {
    return clubes.nome;
  });

  let mesmoNome = clubes.some(function (nomeClubes) {
    return nomeClubes.nome === nomeClube;
  });

  if (nomeClube == "") {
    let texto = document.getElementById("texto");
    texto.innerHTML = "Insira o nome do clube a ser removido";
  } else if (mesmoNome) {
    let nomeClube = document.getElementById("nomeClube").value;
    let posicao = clubes.findIndex((i) => i.nome === nomeClube);

    clubes.splice(posicao, 1);
    exibeClubesNaTela(clubes);

    for (c = 0; c < clubes.length; c++) {
      var clube = clubes[c];
      clube.pontos = calculaPontos(clube);
    }
    let texto = document.getElementById("texto");
    texto.innerHTML = "Clube removido";
  } else {
    let texto = document.getElementById("texto");
    texto.innerHTML = "Clube não encontrado";
  }
  limpaInput();
}