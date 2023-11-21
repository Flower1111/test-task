const addTodoItem = (item) => {
    cy.get('input.new-todo').type(`${item}{enter}`);
};
  
Cypress.Commands.add('addTodoItem', addTodoItem);
  
const assertTodoItem = (item) => {
    cy.get('.todo-list li')
      .should('have.length', 1)
      .last()
      .should('have.text', item);
};
  
Cypress.Commands.add('assertTodoItem', assertTodoItem);

const checkOffTodoItem = (item) => {
    cy.contains(item)
      .parent()
      .find('input[type=checkbox]')
      .check();
};
  
Cypress.Commands.add('checkOffTodoItem', checkOffTodoItem);
  
const assertTodoItemCompleted = (item) => {
    cy.contains(item)
      .parents('li')
      .should('have.class', 'completed');
};
  
Cypress.Commands.add('assertTodoItemCompleted', assertTodoItemCompleted);
  
const clearCompletedTasks = () => {
    cy.contains('Clear completed').click();
};
  
Cypress.Commands.add('clearCompletedTasks', clearCompletedTasks);
  
const assertClearCompletedNotExists = () => {
    cy.contains('Clear completed').should('not.exist');
};
  
Cypress.Commands.add('assertClearCompletedNotExists', assertClearCompletedNotExists);
  
const filterForTasks = (filter) => {
    cy.contains(filter).click();
};
  
Cypress.Commands.add('filterForTasks', filterForTasks);
  
export { addTodoItem, assertTodoItem, checkOffTodoItem, assertTodoItemCompleted, 
    clearCompletedTasks, assertClearCompletedNotExists, filterForTasks };