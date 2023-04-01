describe('Submit Fullname', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.get("[data-cy=fullname]").as("InputFullName")
    cy.get("[data-cy=usercountry]").as("InputUserCountry")
    cy.get("button").as("SubmitForm")
  })
  it('Should showing alert for imron', () => {
    cy.get("@InputFullName").type("Muhamad Imron",{force:true})
    cy.get("@InputUserCountry").type("Indonesia",{force:true})
    cy.get("@SubmitForm").click()
    cy.get("[data-cy=show-fullname]").contains("Muhamad Imron")
  })
})