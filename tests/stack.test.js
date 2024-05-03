const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('Pop should remove the top element of the stack', () => {
    stack.push("Value1");
    stack.push("Value2");
    stack.push(3);
    stack.push("Value4");
    stack.pop();
    
    expect(stack.peek()).toBeDefined();
    expect(stack.pop()).toBe(3);
});