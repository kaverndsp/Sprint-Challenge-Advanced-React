import React from 'react';
import Players from './components/Players';
import NavBar from './components/NavBar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test('renders players tag ', () => {
  const players = render(
    <Players />
  );
  const item = players.getByText(/players/i);
  
  expect(item).toBeInTheDocument();
 
});

test('navbar darkmode button is displaying ', () => {
  const navBar = render(
    <NavBar />
  );
  const darkModeText = navBar.getByText(/dark mode/i);
  const darkModeButton = navBar.getByTestId(/darkmodebutton/i)
  expect(darkModeText).toBeInTheDocument();
  expect(darkModeText).toBeVisible();
  expect(darkModeButton).toBeVisible();
});