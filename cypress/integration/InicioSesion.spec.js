/// <reference types="cypress" />

describe('<Login />', ()=>{
    it('<Login /> - Validacion y Alertas', ()=>{
        cy.visit('/login');

        //Llenando los formularios
        cy.get('[data-cy=usuario-input]').type('alejousco0708@gmail.com ');
        cy.get('[data-cy=contra-input]').type('123456');
        cy.get('[data-cy=submit-input]').click();

    });
})