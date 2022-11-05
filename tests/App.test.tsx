import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('App test suite', () => {
  it('should renders correctly', () => {
    // Act
    const tree = renderer.create(<App />).toJSON() as any;

    // Assert
    expect(tree).toMatchSnapshot();
  });
});
