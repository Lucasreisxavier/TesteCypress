/// <reference types="cypress" />


describe('Teste de funcionalidades Automatico', () => {

    it('Teste de Ordenações', () => {
        cy.visit("https://henriquediasdev.github.io/github-api/")


        cy.contains("Buscar").parent().click().type("ReactJS").wait(3000)


        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Estrelas").click().wait(1500)
        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Estrelas").click().wait(1500)

        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Bifurcações").click().wait(1500)
        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Bifurcações").click().wait(1500)


        
        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Atualização").click().wait(1500)
        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Atualização").click().wait(1500)


    
    })


    it('Sobrecarga de ordenações para ver se de alguma forma funciona', () => {
        cy.visit("https://henriquediasdev.github.io/github-api/")


        cy.contains("Buscar").parent().click().type("ReactJS").wait(3000)


        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Estrelas").click().wait(1000)
        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Bifurcações").click().wait(1000)
        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Atualização").click().wait(1000)
        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Estrelas").click().wait(1000)
        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Estrelas").click().wait(1000)
        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Bifurcações").click().wait(1000)
        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Atualização").click().wait(1000)
        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Estrelas").click().wait(1000)
        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Estrelas").click().wait(1000)
        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Bifurcações").click().wait(1000)
        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Atualização").click().wait(1000)
        cy.get("span").should("have.class", "MuiButtonBase-root MuiTableSortLabel-root").contains("Estrelas").click().wait(1000)

   
    })
})

