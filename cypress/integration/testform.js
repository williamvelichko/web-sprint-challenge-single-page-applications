describe("app", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/pizza");
  });

  const textInput = () => cy.get("input[name=name]");

  it("textinputs work", () => {
    textInput().should("exist");
  });
  it("can type into inputs", () => {
    textInput()
      .should("have.value", "")
      .type("Who likes CSS anyways?")
      .should("have.value", "Who likes CSS anyways?");
  });
});
