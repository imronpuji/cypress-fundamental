describe('Test Register', () => {
    
    beforeEach(() => {
        cy.visit('/register')
        cy.get("[data-cy=username]").as("Username")
        cy.get("[data-cy=password]").as("Password")
        cy.get("[data-cy=fullname]").as("Fullname")
        cy.get("[data-cy=confirm-password]").as("ConfirmPassword")
        cy.get("button").as("SubmitForm")
    })

    it('Should Error username empty', () => {
        cy.fixture('example.json').then(async ({ username, password, confirmPassword, fullname }) => {
            cy.get("@Password").type(password,{force:true})
            cy.get("@ConfirmPassword").type(confirmPassword,{force:true})
            cy.get("@Fullname").type(fullname,{force:true})
            cy.get("@SubmitForm").click()
            await cy.url({ decode: true }).should('contain', 'register')
        }) 
    })

    it('Should Error Password empty', () => {
        cy.fixture('example.json').then(async ({ username, password, confirmPassword, fullname }) => {
            cy.get("@Username").type(username,{force:true})
            cy.get("@ConfirmPassword").type(confirmPassword,{force:true})
            cy.get("@Fullname").type(fullname,{force:true})
            cy.get("@SubmitForm").click()
            await cy.url({ decode: true }).should('contain', 'register')
        }) 
    })
    it('Should Error Confirmation Password empty', () => {
        cy.fixture('example.json').then(async ({ username, password, confirmPassword, fullname }) => {
            cy.get("@Username").type(username, { force: true })
            cy.get("@Password").type(password,{force:true})
            cy.get("@Fullname").type(fullname,{force:true})
            cy.get("@SubmitForm").click()
            await cy.url({ decode: true }).should('contain', 'register')
        }) 
    })

    it('Should Error all fields empty', () => {
        cy.fixture('example.json').then(async ({ username, password, confirmPassword, fullname }) => {
            cy.get("@SubmitForm").click()
            await cy.url({ decode: true }).should('contain', 'register')
        }) 
    })

    it('Should Error Username fields not valid', () => {
        cy.fixture('example.json').then(async ({ username, password, confirmPassword, fullname }) => {
            cy.get("@Username").type(`${username} ${username}`)
            cy.get("@SubmitForm").click()
            await cy.url({ decode: true }).should('contain', 'register')
        }) 
    })

    it('Should Error Password fields not valid', () => {
        cy.fixture('example.json').then(async ({ username, password, confirmPassword, fullname }) => {
            cy.get("@Password").type(`notvalid`)
            cy.get("@SubmitForm").click()
            await cy.url({ decode: true }).should('contain', 'register')
        }) 
    })

    it('Should Error Confirmation Password fields not same', () => {
        cy.fixture('example.json').then(async ({ username, password, fullname }) => {
            cy.get("@Password").type(password)
            cy.get("@ConfirmPassword").type(`notvalid`)
            cy.get("@SubmitForm").click()
            await cy.url({ decode: true }).should('contain', 'register')
        }) 
    })

    it('Should Passed and redirect to /', () => {
        cy.fixture('example.json').then(async ({ username, password, confirmPassword, fullname }) => {
            cy.get("@Username").type(username,{force:true})
            cy.get("@Password").type(password,{force:true})
            cy.get("@ConfirmPassword").type(confirmPassword,{force:true})
            cy.get("@Fullname").type(fullname,{force:true})
            cy.get("@SubmitForm").click()
            await cy.url({ decode: true }).should('contain', '/')
        }) 
    })
})