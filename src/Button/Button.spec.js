import Button from './Button';
import React from 'react';
import renderer from 'react-test-renderer';

test('Button changes the class when hovered', () => {
  const component = renderer.create(
    <Button href="http://www.facebook.com">Facebook</Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
