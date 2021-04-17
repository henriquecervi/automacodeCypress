/// <reference types="Cypress" />

import testeElementos from '../elementosPage/testeElementos'

const testeelementos = new testeElementos
const url = Cypress.config("baseUrl")

class TestePage {
    acessarSite() {
        cy.visit(url)
    }

    firstName() {
        cy.get(testeelementos.firstName()).type("Henrique")        
    }

    lastName() {
        cy.get(testeelementos.lastName()).type("Cutri")
    }

    adress () {
        cy.get(testeelementos.adress()).type(
            "Rua da Automacode, 2021"
        )
    }

    email () {
        cy.get(testeelementos.email()).type(
            "hcervicutri@gmail.com"
        )
    }

    phone () {
        cy.get(testeelementos.phone()).type('0123456789')
    }

    radioMale () {
        cy.get(testeelementos.radioMale()).first().check()
        }

    hobbies () {
        cy.get(testeelementos.hobbies()).click()
    }

    languages () {
        cy.get(testeelementos.languages()).click()
        cy.get(':nth-child(8) > .ui-corner-all')
        .trigger('mousemove').click()
        cy.get('h1').click()
    }

    skills () {
        cy.get(testeelementos.skills()).select('Engineering')
    }

    pais () {
        cy.get(testeelementos.pais()).select('Brazil')
    }

    country () {
        cy.get(testeelementos.country()).click()
        cy.get('#select2-country-results > :nth-child(2)')
        .trigger('mousemove').click()
    }

    year () {
        cy.get(testeelementos.year()).select('1990')
    }

    month () {
        cy.get(testeelementos.month()).select('February')
    }

    date () {
        cy.get(testeelementos.date()).select('14')
    }

    password () {
        cy.get(testeelementos.password()).type('Teste123')
    }

    confirmPassowrd () {
        cy.get(testeelementos.confirmPassword()).type('Teste123')
    }

    submitButton () {
        cy.get(testeelementos.submitButton()).click()
    }
}
export default TestePage;