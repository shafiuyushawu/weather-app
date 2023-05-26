import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Navbar from '../layouts/Navbar';
import '@testing-library/jest-dom/extend-expect';

describe('Navbar', () => {
  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Navbar />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders Weather Forecast in the Navbar', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const linkElement = getByText(/Weather Forecast/i);
    expect(linkElement).toBeInTheDocument();
  });
});
