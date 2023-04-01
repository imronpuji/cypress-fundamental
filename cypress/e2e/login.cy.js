describe('Test Login', () => {
    beforeEach(() => {
      cy.visit('/login')
      cy.get("[data-cy=username]").as("Username")
      cy.get("[data-cy=password]").as("Password")
      cy.get("button").as("SubmitForm")
    })
    it('Should Error Username', () => {
        cy.fixture('example.json', ({ username, password }) => {
            cy.get("@Username").type(username,{force:true})
            cy.get("@Password").type(password,{force:true})
            cy.get("@SubmitForm").click()
            cy.url({ decode: true }).should('contain', 'login')
        })
            
    })

    it('Should Error Password', () => {
        cy.get("@Username").type("Muhamad Imron",{force:true})
        cy.get("@Password").type("Tahubla",{force:true})
        cy.get("@SubmitForm").click()
        cy.url({decode:true}).should('contain','login')
    })

    it('Should Pass Login and Redirect to /', () => {
        cy.get("@Username").type("muhamadimron",{force:true})
        cy.get("@Password").type("Tahublak_123",{force:true})
        cy.get("@SubmitForm").click()
        cy.url({decode:true}).should('contain','')
    })
})