/// <reference types="cypress" />

describe('<NuevaCuenta />', ()=>{
    it('<NuevaCuenta /> - Validacion y Alertas', ()=>{
        cy.visit('/nueva-cuenta');

        //Llenando los formularios
        cy.get('[data-cy=nombre-input]').type('Dimitri');
        cy.get('[data-cy=apellido-input]').type('Vegas');
        cy.get('[data-cy=correo-input]').type('dimitrivegas2901@gmail.com');
        cy.get('[data-cy=contra-input]').type('123456');
        cy.get('[data-cy=rcontra-input]').type('123456');
        cy.get('[data-cy=pais-input]').select('Colombia');
        cy.get('[data-cy=departamento-input]').select('Huila');
        cy.get('[data-cy=ciudad-input]').select('Neiva');
        cy.get('[data-cy=telefono-input]').type('3209744269');
        cy.get('[data-cy=tdni-input]').select('CC');
        cy.get('[data-cy=dni-input]').type('1234567890');
        cy.get('[data-cy=check-input]').check();
        cy.get('[data-cy=submit-input]').click();

    });
})