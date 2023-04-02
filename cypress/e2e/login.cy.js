describe('Test Login', () => {
    beforeEach(() => {
      cy.visit('/login')
      cy.get("[data-cy=username]").as("Username")
      cy.get("[data-cy=password]").as("Password")
      cy.get("button").as("SubmitForm")
    })

    it('Should Error Username', () => {
        cy.fixture('example.json').then( async ({ username, password }) => {
            cy.get("@Username").type(`${username} ${username}`,{force:true})
            cy.get("@Password").type(password,{force:true})
            cy.get("@SubmitForm").click()
            await cy.url({ decode: true }).should('contain', 'login')
        })
            
    })

    it('Should Error Username and Password', () => {
        cy.get("@SubmitForm").click()
        cy.url({ decode: true }).should('contain', 'login')
    })

    it('Should Error Password', () => {
        cy.get("@Username").type("Muhamad Imron",{force:true})
        cy.get("@Password").type("Tahubla",{force:true})
        cy.get("@SubmitForm").click()
        cy.url({decode:true}).should('contain','login')
    })

    it('Should Pass Login and Redirect to /', async () => {
        cy.get("@Username").type("muhamadimron",{force:true})
        cy.get("@Password").type("Tahublak_123",{force:true})
        cy.get("@SubmitForm").click()
        await cy.url({decode:true}).should('contain','')
    })
})