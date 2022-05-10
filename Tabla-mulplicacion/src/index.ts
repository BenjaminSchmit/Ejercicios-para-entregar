let dato1 : number = document.getElementById("dato1");
let dato2 : number = document.getElementById("dato2");
let btnEnviar = document.getElementById("btnEnviar");

rotulo1.innerHTML = ("¿Que tabla desea saber?");
rotulo2.innerHTML = ("¿Hasta que numero?");

btnEnviar?.addEventListener ("click", () => {
  let tabla : number = Number(dato1.value);
  let limiteTabla : number = Number(dato2.value);
  let resultado : number = 0
  for (let contador = 1; contador <= limiteTabla; contador++){
    resultado = tabla * contador
    console.log(tabla, " x ", contador, " = ", resultado );
  }
}