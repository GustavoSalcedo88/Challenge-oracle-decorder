const texto=document.getElementById(textUser);
const mensajeFinal =document.getElementById("mensajeFinal");
const muñeco= document.getElementById("muñeco");
const infoDerecha= document.getElementById("info-derecha");
const btnEncriptar= document.getElementById("btnEncriptar");
const btnCopiar= document.getElementById("btn-Copiar");
const right=document.getElementById("derecha");
const btnDesencriptar=document.getElementById("btnDesencriptar");

let arregloRemplazar=[
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
];

btnEncriptar.addEventListener("click",() => { 
    const textoUsuario = textUser.value.toLowerCase();
    
    if(textoUsuario !=""){
        function encriptar(newText) {
            for(let i=0; i<arregloRemplazar.length; i++){
                if (newText.includes(arregloRemplazar[i][0])) {
                    newText=newText.replaceAll(arregloRemplazar[i][0], arregloRemplazar[i][1]);
                }
            }
            return newText;
        }
        const textoEcriptado=encriptar(textoUsuario);
        console.log(textoEcriptado);
        mensajeFinal.innerHTML= textoEcriptado;
        muñeco.style.display="none";
        infoDerecha.style.display="none"
        btnCopiar.style.display="block"
        right.classList.add("ajustar");
        mensajeFinal.classList.add("ajustar")
    }
    else{
        alert("Ingrese texto por favor");
    }
    
});
btnDesencriptar.addEventListener("click", () =>{
    const texto =textUser.value.toLowerCase();

    if(texto != ""){
        function desencriptar(newText) {
            for (let i = 0; i < arregloRemplazar.length; i++) {
                if(newText.includes(arregloRemplazar[i][1])){
                    newText = newText.replaceAll(arregloRemplazar[i][1], arregloRemplazar[i][0]);
                }
                
            };
            return newText;
        }
        const textoDesencriptado= desencriptar(texto);
        mensajeFinal.innerHTML= textoDesencriptado;
        muñeco.style.display="none";
        infoDerecha.style.display="none"
        btnCopiar.style.display="block"
        right.classList.add("ajustar");
        mensajeFinal.classList.add("ajustar")
    }
    else{
        alert(" Ingresa texto por favor");
    }

    
});

btnCopiar.addEventListener("click", ()=>{
   let texto= mensajeFinal;
    navigator.clipboard.writeText(texto.value);
    mensajeFinal.innerHTML="";

    muñeco.classList.remove("ocultar");

    infoDerecha.style.display="block";
    btnCopiar.style.display="none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    muñeco.style.display="block";
    
    
    
    textUser.focus();


    alert("mensaje fue copiado");
});