context('Header', () => {
  beforeEach(() => {
    cy.visit('https://www.testrail.com')
    cy.viewport(1920, 1080)
    cy.get('#cookiescript_accept').click()
  })
  it('should contain logo', () => {
    cy.get('header img[src*="Logo_Main_01.svg"]').should('be.visible')
  })
  it('should contain site navigation links', () => {
    cy.get('header [href="/platform/"]').should('be.visible')
    cy.get('header [href="/enterprise/"]').should('be.visible')
    cy.get('header [href="/pricing/"]').should('be.visible')
  })
  it('should contain trial button', () => {
    cy.get('header [href*="/trial/"]').should('be.visible')
  })
  it('should contain demo request button', () => {
    cy.get('header [href*="/demo/"]').should('be.visible')
  })
})
