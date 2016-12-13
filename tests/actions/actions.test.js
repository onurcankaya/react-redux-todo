import expect from 'expect';
import { setSearchText, addTodo, addTodos, toggleShowCompleted, toggleTodo } from 'actions';

describe('Actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some search text'
    };
    const res = setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    const res = toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'something to do'
    };
    const res = addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate add todos action object', () => {
    const todos = [{
      id: 111,
      text: 'Something',
      completed: false,
      completedAt: null,
      createdAt: 33000
    }];

    const action = {
      type: 'ADD_TODOS',
      todos
    };

    const res = addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 2
    };
    const res = toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
