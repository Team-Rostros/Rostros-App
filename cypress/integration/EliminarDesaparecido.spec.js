/// <reference types="cypress" />

import 'cypress-file-upload';

describe('<Crear Eliminar Desaparecido />', ()=>{
    it('<Crear Eliminar Desaparecido /> - Validacion y Alertas', ()=>{
        cy.visit('/login');

        //Llenando los formularios
        cy.get('[data-cy=usuario-input]').type('diegoleandro-29@hotmail.com ');
        cy.get('[data-cy=contra-input]').type('1234567');
        cy.get('[data-cy=submit-input]').click();

        //eliminar comentario desaparecido
        cy.get('[data-cy=desaparecidos-input]').click();
        cy.get('[data-cy=eliminardes-input]').click();
        
    });
})