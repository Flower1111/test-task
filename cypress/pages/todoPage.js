class TodoPage {
    constructor() {
        this.url = 'https://todomvc.com/examples/react/#/';
        this.todoList = '.todo-list li';
        this.inputNewTodo = 'input.new-todo';
    }

    visit() {
        cy.visit(this.url);
    }

    addTodoItem = (item) => {
        cy.get(this.inputNewTodo).type(`${item}{enter}`);
    };

    assertTodoItem = (item) => {
        cy.get(this.todoList)
          .should('have.length', 1)
          .last()
          .should('have.text', item);
    };

    checkOffTodoItem = (item) => {
        cy.contains(item)
          .parent()
          .find('input[type=checkbox]')
          .check();
    };

    assertTodoItemCompleted = (item) => {
        cy.contains(item)
          .parents('li')
          .should('have.class', 'completed');
    };

    clearCompletedTasks = () => {
        cy.contains('Clear completed').click();
    };

    assertTaskCountAndText = (expectedCount, expectedText) => {
        cy.get(this.todoList)
          .should('have.length', expectedCount)
          .first()
          .should('have.text', expectedText);
    };

    assertClearCompletedNotExists = () => {
        cy.contains('Clear completed').should('not.exist');
    };

    filterForTasks = (filter) => {
        cy.contains(filter).click();
    };
}
  
export default new TodoPage();