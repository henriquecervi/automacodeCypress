/* global Given, When, Then */

import TestePage from '../pageObjects/testePage'
const PageTeste = new TestePage;

Given("que acesso o site", () => {
    PageTeste.acessarSite()
})


When("preencho todos os campos", () => {
    PageTeste.firstName()
    PageTeste.lastName()
    PageTeste.adress()
    PageTeste.email()
    PageTeste.phone()
    PageTeste.radioMale()
    PageTeste.hobbies()
    PageTeste.languages()
    PageTeste.skills()
    PageTeste.pais()
    PageTeste.country()
    PageTeste.year()
    PageTeste.month()
    PageTeste.date()
    PageTeste.password()
    PageTeste.confirmPassowrd()
})


Then("encerro meu teste", () => {
    PageTeste.submitButton()
})