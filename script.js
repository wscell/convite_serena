// CONTAGEM REGRESSIVA
const dataFesta = new Date("2026-12-14T15:00:00-03:00").getTime();
setInterval(()=>{
  const agora = new Date().getTime();
  const falta = dataFesta - agora;
  if(falta < 0) return;
  document.getElementById("d").innerText = Math.floor(falta / (1000*60*60*24));
  document.getElementById("h").innerText = Math.floor((falta % (1000*60*60*24)) / (1000*60*60));
  document.getElementById("m").innerText = Math.floor((falta % (1000*60*60)) / (1000*60));
  document.getElementById("s").innerText = Math.floor((falta % (1000*60)) / 1000);
},1000);

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