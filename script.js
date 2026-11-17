// DATA CERTA: 21 de Fevereiro de 2027 às 15h
  const dataFesta = new Date("2027-02-21T15:00:00-03:00").getTime();

  function atualizarContagem() {
    const agora = new Date().getTime();
    const falta = dataFesta - agora;

    if (falta < 0) {
      document.getElementById("d").innerText = "00";
      document.getElementById("h").innerText = "00";
      document.getElementById("m").innerText = "00";
      document.getElementById("s").innerText = "00";
      return;
    }

    const dias = Math.floor(falta / (1000 * 60 * 60 * 24));
    const horas = Math.floor((falta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((falta % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((falta % (1000 * 60)) / 1000);

    document.getElementById("d").innerText = dias;
    document.getElementById("h").innerText = horas;
    document.getElementById("m").innerText = minutos;
    document.getElementById("s").innerText = segundos;
  }

  atualizarContagem();
  setInterval(atualizarContagem, 1000);

// ENVIAR PARA PLANILHA
document.getElementById("rsvpForm").addEventListener("submit", async function(e){
  e.preventDefault();
  const dados = {
    nome: document.getElementById("nome").value,
    vai: document.getElementById("vai").value,
    qtd: document.getElementById("qtd").value,
    msg: document.getElementById("msg").value
  };
  const URL_PLANILHA = "COLE_AQUI_O_LINK_DO_SEU_APPS_SCRIPT";
  await fetch(URL_PLANILHA, {method:"POST", mode:"no-cors", body: JSON.stringify(dados)});
  document.getElementById("ok").style.display = "block";
  this.reset();
});