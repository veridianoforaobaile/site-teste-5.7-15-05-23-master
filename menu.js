$('.menu-toggle').click(function(e){
    //click event for left clicks only! http://www.jacklmoore.com/notes/click-events

/*  

 Isso vincula uma função de callback ao evento de clique do elemento com a classe 
 "menu-toggle". A função de callback será executada quando esse elemento for clicado.
 */
  if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey)) {  
/*  Isso verifica se o clique foi feito com o botão esquerdo do mouse apenas, e não com outros botões do mouse, como o botão 
direito. Ele também verifica se as teclas Shift, Alt ou Meta (como a tecla Command em um teclado Mac) não estão pressionadas ao
 mesmo tempo. Se alguma dessas condições for verdadeira, a função de 
callback será interrompida usando e.preventDefault(), que impede o comportamento padrão do clique.
*/ 
      e.preventDefault();
    /*se você quiser personalizar o comportamento de envio de dados usando JavaScript, pode usar o método 
    e.preventDefault() para impedir que o formulário 
    seja enviado automaticamente e, em vez disso, executar seu próprio código personalizado
    */
      if($(this).parent().find('.menu').hasClass('expanded-mobile-menu')){
      /* Isso verifica se o elemento pai do elemento clicado possui um filho com a classe "menu" que também possui a 
    classe "expanded-mobile-menu". Essa verificação é feita usando o método hasClass(*/
      $(this).removeClass('expanded-menu-toggle').parent().removeClass('nav-expanded').find('.menu').removeClass('expanded-mobile-menu');
      /*Se o filho com a classe "menu" tiver a classe "expanded-mobile-menu", então algumas classes serão removidas do elemento clicado (que possui a classe "menu-toggle"), do elemento pai dele (que possui a classe "nav-expanded") e do filho com a classe "menu". 
      Essas classes removidas são "expanded-menu-toggle", "nav-expanded" e "expanded-mobile-menu"*/
    }else{
      /**/
      $(this).addClass('expanded-menu-toggle').parent().addClass('nav-expanded').find('.menu').addClass('expanded-mobile-menu');
      /*
      Se o filho com a classe "menu" não tiver a classe "expanded-mobile-menu", então algumas classes serão adicionadas ao elemento clicado, 
      ao elemento pai dele e ao filho com a classe "menu". Essas classes adicionadas são "expanded-menu-toggle", "nav-expanded" e "
      expanded-mobile-menu".
      */
    }
  }
});