context('Footer', () => {
  beforeEach(() => {
    cy.visit('https://www.testrail.com')
    cy.viewport(1920, 1080)
    cy.get('#cookiescript_accept').click()
  })
  it('should contain social links', () => {
    cy.get('footer [href="https://www.linkedin.com/company/testrail/"]').should('be.visible')
    cy.get('footer [href="https://twitter.com/testrail"]').should('be.visible')
    cy.get('footer [href="https://www.facebook.com/testrailofficial/"]').should('be.visible')
  })
  it('should contain newsletter link', () => {
    cy.get('footer [href="/newsletter/"]').should('be.visible')
  })
})
