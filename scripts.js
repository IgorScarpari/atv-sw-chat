function LoadList() {

    for (let i = 0; i < 9; i++) {
        let list = document.getElementById("listMessage");
        let line = document.createElement("li");
        line.innerHTML = "";
        list.appendChild(line);
    }
}

document.getElementById("formAdd").addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    sendMessage();
}

function sendMessage() {

    //Busca a mensagem digitada
    const message = document.getElementById("message");

    //Verifica se foi digitado algo
    if (message.value != "") {

        //Remove itens iniciais da lista
        let list = document.getElementById("listMessage");

        //Adiciona o título
        addTitle(list);

        //Forma a mensagem
        let newMessage = document.createElement("li");
        newMessage.innerHTML = message.value;

        //Adiciona o design na mensagem
        newMessage = loadDesign(newMessage);

        //Adiciona a mensagem na lista
        list.appendChild(newMessage);

        //Remove itens específicos da lista ao atingir tamanho máximo
        list = emptyItensList(list);

        message.value = "";
        message.focus();
    }
}

function addTitle(list) {
    //Busca se é o atendente o usuário que está digitando
    let type = document.querySelector('input[name=type]:checked').value;
    let title = document.createElement("li");

    if (type == "U") {

        title.innerHTML = "Usuário diz:";
    }
    else {
        title.innerHTML = "Atendente diz:";
    }

    title = loadDesignTitle(title);

    list.appendChild(title);
}

function loadDesignTitle(title) {

    let type = document.querySelector('input[name=type]:checked').value;

    title.style.visibility = "visible";
    title.style.border = "none";
    title.style.padding = "1px";
    title.style.display = "block";
    title.style.fontWeight = "bold";
    title.style.marginBottom = "4px";

    if (type == "U") {
        title.style.marginLeft = "auto";
        title.style.textAlign = "right";
    }
    else {
        title.style.textAlign = "left";
        title.style.marginLeft = "none";
    }
    return title;
}

function loadDesign(newList) {

    let type = document.querySelector('input[name=type]:checked').value;

    newList.style.visibility = "visible";

    if (type == "U") {

        newList.style.marginLeft = "auto";
        newList.style.textAlign = "right";

    }
    else {
        newList.style.marginLeft = "none";
        newList.style.textAlign = "left";
    }
    return newList;
}

function emptyItensList(list) {
    if (list.childElementCount > 10) {
        list.removeChild(list.childNodes[0])
        list.removeChild(list.childNodes[0])
    }

    return list;
}