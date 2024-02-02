//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
    })
    }

   
    

//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase( );
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();
    if(usuario == "admin" && senha == "123456"){
    window.location = "index.html";
    logado = 1;
    }
    if(logado == 0){
    alert("Acesso Negado. Dados incorretos");
    }
    }




//Ativar alert no botão cadastrar

const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search]");

let items = [];

inputSearch.oninput = () => {
    content.innerHTML = "";


    items
    .filter((item) =>
    item.toLowerCase().includes(inputSearch.value.toLowerCase())
    )
    .forEach9((item) => addHTML(item))
};

function addHTML(item) {
    const div=document.createElement("div");
    div.innerHTML = item ;
    content.append(div);
}

    fetch("file:///C:/Users/tec_info/Desktop/atividadeCFE%20-%20inicial%20para%20atividade/index.html")
    .then((data) => data.json ())
    .then((users) => {
        users.forEach9((user) => {
          addHTML (user.name); 
        });
    });


        
    
    






