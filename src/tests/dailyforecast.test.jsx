import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import DailyForecast from '../components/DailyForecast';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

test('renders DailyForecast component', () => {
  const fcast = {
    date: '2023-04-22',
    icon: 'sunny.png',
    text: 'Sunny',
  };

  const store = mockStore({
    weather: {
      forecast: [fcast],
    },
  });

  const { container } = render(
    <BrowserRouter>
      <Provider store={store}>
        <DailyForecast fcast={fcast} />
      </Provider>
    </BrowserRouter>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
