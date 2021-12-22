/// <reference types="cypress" />

describe('<Login />', ()=>{
    it('<Login /> - Validacion y Alertas', ()=>{
        cy.visit('/rpassword');

        //Llenando los formularios
        cy.get('[data-cy=correo-input]').type('alejousco0708@gmail.com ');
        cy.get('[data-cy=contra-input]').type('123456');
        cy.get('[data-cy=rcontra-input]').type('123456');
        cy.get('[data-cy=submit-input]').click();

    });
})