function toggleMode (){
   const html = document.documentElement;  //documentElement acesso ao HTML, document.body acessava o body 
   html.classList.toggle('light');

    // pegar a tag img

    const img = document.querySelector('#profile img')
    // substituir a imagem
    if(html.classList.contains('light')){
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light-black.png') // setatribute serve para mudar um atributo, nesse caso a img
    img.setAttribute('alt', 'Imagem de Matheus com cor de fundo verde e azul')  // mudando o alt
    } else{
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/linkedin.png') // selecionando a img que estava
    }
}





/*   if(html.classList.contains('light')){
        html.classList.remove('light')
    } else{
        html.classList.add('light')
    } */ // ao inves desse if e else adicionamos somente