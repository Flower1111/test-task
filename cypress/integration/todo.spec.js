import TodoPage from "../pages/todoPage";

describe('todo application', () => {
  const firstTask = 'Buy milk';
  const secondTask = 'Buy bread';

  beforeEach(() => {
    TodoPage.visit();
  })

  it('can add new task', () => {
    TodoPage.addTodoItem(firstTask);
    TodoPage.assertTodoItem(firstTask);
  })

  it('can check off a task as completed', () => {
    TodoPage.addTodoItem(secondTask);
    TodoPage.checkOffTodoItem(secondTask);
    TodoPage.assertTodoItemCompleted(secondTask);
  })

  it('can delete task', () => {
    TodoPage.addTodoItem(secondTask);
    TodoPage.checkOffTodoItem(secondTask);
    TodoPage.clearCompletedTasks();
    TodoPage.assertClearCompletedNotExists();
  })

  context('can filter tasks', () => {
    beforeEach(() => {
      TodoPage.addTodoItem(firstTask);
      TodoPage.addTodoItem(secondTask);
      TodoPage.checkOffTodoItem(firstTask);
    })

    it('can filter for uncompleted tasks', () => {
      TodoPage.filterForTasks('Active');
      TodoPage.assertTaskCountAndText(1, secondTask);
    })

    it('can filter for completed tasks', () => {
      TodoPage.filterForTasks('Completed');
      TodoPage.assertTaskCountAndText(1, firstTask);
    })
  })
})
