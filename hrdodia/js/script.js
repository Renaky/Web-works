function carregar(){
    var msg = window.document.getElementById('msg')
    var tit1 = window.document.getElementById('tit1')
    var descTit1 = window.document.getElementById('descTit1')
    var desc1 = window.document.getElementById('desc1')
    var price1 = window.document.getElementById('price1')
    var tit2 = window.document.getElementById('tit2')
    var descTit2 = window.document.getElementById('descTit2')
    var desc2 = window.document.getElementById('desc2')
    var price2 = window.document.getElementById('price2')
    var descTit3 = window.document.getElementById('descTit3')
    var desc3 = window.document.getElementById('desc3')
    var price3 = window.document.getElementById('price3')
    var descTit4 = window.document.getElementById('descTit4')
    var desc4 = window.document.getElementById('desc4')
    var price4 = window.document.getElementById('price4')
    var img = window.document.getElementById('imagem')
    var disponivel = window.document.getElementById('disponivel')
    var data = new Date()
    var hora = 23
    const body = document.querySelector('body');
    //var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >=0 && hora <12) {
        // Bom Dia!!!
        disponivel.innerHTML = `Bom dia!<br>Menu disponível até as 12 horas`
        img.src = './images/cookies.jpg'
        // Item 1
        tit1.innerHTML = `Doces`
        descTit1.innerHTML = `Waffle Doce`
        desc1.innerHTML = `Waffle doce, acompanha calda de chocolate e mel.`
        price1.innerHTML = `R$15.90`
        // Item 2
        descTit2.innerHTML = `Bolo Gelado`
        desc2.innerHTML = `Sabor chocolate com raspas, creme de ninho e nutela.`
        price2.innerHTML = `R$13.50`

        //Salgados
        tit2.innerHTML = `Salgados`
        //item 3
        descTit3.innerHTML = `Massas Assadas`
        desc3.innerHTML = `Assados recheados com carne de frango + catupiry ou presunto e queijo.`
        price3.innerHTML = `R$14.90`
        //item 4
        descTit4.innerHTML = `Empadão`
        desc4.innerHTML = `Recheado com frango, palmito e catupiry.`
        price4.innerHTML = `R$11.90`

        document.body.style.backgroundImage = 'url("./images/background-cafes.jpg")'

    }else if (hora>=12 && hora <=18){
        //boa tarde
        img.src = './images/almoço.jpg'
       // Item 1
        tit1.innerHTML = `Refeições`
        descTit1.innerHTML = `Macarrão ao molho branco`
        desc1.innerHTML = `Macarrão ao molho com frango desfiado e queijo ralado.`
        price1.innerHTML = `R$22.90`
        // Item 2
        descTit2.innerHTML = `Salada`
        desc2.innerHTML = `Alface, cenoura ralada, tomate cereja, pepinos e limão.`
        price2.innerHTML = `R$10.50`
        //Item 3
         //Salgados
         tit2.innerHTML = `Doces`
         //item 3
         //prox
         descTit3.innerHTML = `Torta de Limão`
         desc3.innerHTML = `Torta assada no forno e recheada com um creme a base de limão.`
         price3.innerHTML = `R$13.90`
         //item 4
         descTit4.innerHTML = `Abacaxi Assado`
         desc4.innerHTML = `Abacaxi ao mel, assado com canela em pó.`
         price4.innerHTML = `R$10.90`
        disponivel.innerHTML = `Boa tarde!<br>Menu disponível até as 18 horas`
        document.body.style.backgroundImage = 'url("./images/backtarde.jpg")'
    }else{
        img.src = './images/pizza.jpg'
       // Item 1
        tit1.innerHTML = `Doces`
        descTit1.innerHTML = `Rocambole`
        desc1.innerHTML = `Fatia Rocambole, sabores chocolate, brigadeiro, doce de leite, ninho.`
        price1.innerHTML = `R$10.90`
        // Item 2
        descTit2.innerHTML = `Torta Holandesa`
        desc2.innerHTML = `Sabor chocolate, com chantily, cereja e avelãs.`
        price2.innerHTML = `R$11.90`
        //item 3
        //prox
        tit2.innerHTML = `Refeições`
        //item 3
        descTit3.innerHTML = `Self Service`
        desc3.innerHTML = `Diversos pratos disponíveis para Self Service durante a noite.`
        price3.innerHTML = `R$24.90`
        //item 4
        descTit4.innerHTML = `Pizza Sabores`
        desc4.innerHTML = `Sabores frango, marguerita, calabresa, portuguesa.`
        price4.innerHTML = `R$34.90`
       
        disponivel.innerHTML = `Boa Noite!<br>Menu disponível até as 23 horas`
        document.body.style.backgroundImage = 'url("./images/backpizza.jpg")'
    }


}