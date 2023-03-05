describe('Submit Fullname', () => {

  beforeEach(() => {
    cy.visit('/')
  })
  it('Should showing alert for imron', () => {
    cy.get("[data-cy=fullname]").type("Muhamad Imron",{force:true})
    cy.get("[data-cy=usercountry]").type("Indonesia",{force:true})
    cy.get("button").click()
    cy.get("[data-cy=show-fullname]").contains("Muhamad Imron")
  })
})