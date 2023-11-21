import { addTodoItem, assertTodoItem, checkOffTodoItem, assertTodoItemCompleted, 
  clearCompletedTasks, assertClearCompletedNotExists, filterForTasks } from '../common/base.js';

describe('todo application', () => {
  const mainPage = 'https://todomvc.com/examples/react/#/';
  const firstTask = 'Buy milk';
  const secondTask = 'Buy bread';
  // const thirdTask = 'Buy sugar';
  const todoList = '.todo-list li'

  beforeEach(() => {
    cy.visit(mainPage)
  })

  it('can add new task', () => {
    addTodoItem(firstTask);
    assertTodoItem(firstTask);
  })

  it('can check off a task as completed', () => {
    addTodoItem(secondTask);
    checkOffTodoItem(secondTask);
    assertTodoItemCompleted(secondTask);
  })

  it('can delete task', () => {
    addTodoItem(secondTask);
    checkOffTodoItem(secondTask);
    clearCompletedTasks();
    assertClearCompletedNotExists();
  })

  context('can filter tasks', () => {
    beforeEach(() => {
      addTodoItem(firstTask);
      addTodoItem(secondTask);
      checkOffTodoItem(firstTask);
    })

    it('can filter for uncompleted tasks', () => {
      filterForTasks('Active');
      cy.get(todoList)
        .should('have.length', 1)
        .first()
        .should('have.text', secondTask);
    })

    it('can filter for completed tasks', () => {
      filterForTasks('Completed');
      cy.get(todoList)
        .should('have.length', 1)
        .first()
        .should('have.text', firstTask);
    })
  })
})
