/// <reference types="cypress" />

import 'cypress-file-upload';

describe('<Crear Desaparecido />', ()=>{
    it('<Crear Desaparecido /> - Validacion y Alertas', ()=>{
        cy.visit('/login');

        //Llenando los formularios
        cy.get('[data-cy=usuario-input]').type('alejousco0708@gmail.com ');
        cy.get('[data-cy=contra-input]').type('123456');
        cy.get('[data-cy=submit-input]').click();

        //Reportar desaparecido
        cy.get('[data-cy=reportar-input]').click();
        cy.fixture('imagen.jpg').then(fileContent => {
            cy.get('input[type="file"]').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'imagen.jpg',
                mimeType: 'image/jpg'
            });
        });

        cy.get('[data-cy=name1-input]').type('Alycia');
        cy.get('[data-cy=name2-input]').type('Debnam');
        cy.get('[data-cy=lastname1-input]').type('Carey');
        cy.get('[data-cy=lastname2-input]').type('Klash');
        cy.get('[data-cy=genero-select]').select('Femenino');
        cy.get('[data-cy=fechan-select]').type('1999-01-29');
        cy.get('[data-cy=pais-select]').select('Colombia');
        cy.get('[data-cy=departamento-select]').select('Huila');
        cy.get('[data-cy=ciudad-select]').select('Neiva');
        cy.get('[data-cy=zip-input]').type('410006');
        cy.get('[data-cy=fecha-select]').type('2020-01-29');
        cy.get('[data-cy=next1-input]').click();

        cy.get('[data-cy=craneo-select]').select('Dolicocefalico');
        cy.get('[data-cy=cuello-select]').select('Largo');
        cy.get('[data-cy=cuerpo-select]').select('Endomorfo');
        cy.get('[data-cy=oreja-select]').select('Verticales');
        cy.get('[data-cy=rostro-select]').select('Ovalado');
        cy.get('[data-cy=ojos-select]').select('Almendrados');
        cy.get('[data-cy=labios-select]').select('Gruesos');
        cy.get('[data-cy=nariz-select]').select('Aguileña');
        cy.get('[data-cy=next1-input]').click();


        cy.get('[data-cy=piel-select]').select('Clara');
        cy.get('[data-cy=cpiel-select]').select('Blanca');
        cy.get('[data-cy=pig-select]').select('Manchas');
        cy.get('[data-cy=peso-input]').type('60');
        cy.get('[data-cy=cabello-select]').select('Ondulado');
        cy.get('[data-cy=cojos-select]').select('Verdes');
        cy.get('[data-cy=ccabello-input]').select('Castaño claro');
        cy.get('[data-cy=estatura-input]').type('1.75');
        cy.get('[data-cy=clabios-select]').select('Rojo');
        cy.get('[data-cy=cdientes-select]').select('Blancos');
        cy.get('[data-cy=next1-input]').click();


        cy.get('[data-cy=info-input]').type('Esta bien bonita');
        cy.get('[data-cy=submit-input]').click();
        
    });
})