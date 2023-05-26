import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CurrentCondition from '../components/CurrentCondtion';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

describe('Check if current location components render correctly', () => {
  test('renders CurrentCondition component', () => {
    const store = mockStore({
      weather: {
        conditions: {},
      },
    });

    render(
      <Provider store={store}>
        <CurrentCondition />
      </Provider>,
    );

    expect(screen.getByText('Current conditions')).toBeInTheDocument();
    expect(screen.getByText('Last Updated:')).toBeInTheDocument();
  });

  test('renders with conditions', () => {
    const store = mockStore({
      weather: {
        conditions: {
          last_updated: '2022-04-20 12:00',
          temp_c: '20',
          humidity: '70',
          cloud: '50',
          wind_mph: '10',
          icon: 'https://example.com/icon.png',
          text: 'Partly cloudy',
        },
      },
    });

    const { container } = render(
      <Provider store={store}>
        <CurrentCondition />
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders CurrentCondition component', () => {
    const store = mockStore({
      weather: {
        conditions: {},
      },
    });

    render(
      <Provider store={store}>
        <CurrentCondition />
      </Provider>,
    );

    expect(screen.getByText('Current conditions')).toBeInTheDocument();
    expect(screen.getByText('Last Updated:')).toBeInTheDocument();
  });
});
