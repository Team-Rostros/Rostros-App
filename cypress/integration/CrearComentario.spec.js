/// <reference types="cypress" />

import 'cypress-file-upload';

describe('<Crear Comentario />', ()=>{
    it('<Crear Comentario /> - Validacion y Alertas', ()=>{
        cy.visit('/login');

        //Llenando los formularios
        cy.get('[data-cy=usuario-input]').type('alejousco0708@gmail.com ');
        cy.get('[data-cy=contra-input]').type('123456');
        cy.get('[data-cy=submit-input]').click();

        //crear comentario desaparecido
        cy.get('[data-cy=comentario-input]').click();
        cy.get('[data-cy=viste-input]').click();
        cy.get('[data-cy=ccomentario-input]').click();
        cy.get('[data-cy=crearcomentario-input]').type('hola, comentario creado desde cypress');
        cy.get('[data-cy=submit-comentario]').click();
        

        
    });
})