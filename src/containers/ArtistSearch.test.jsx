/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ArtistSearch from './ArtistSearch';
import { act } from 'react-dom/test-utils';

describe('ArtistSearch', () => {
  it.skip('should display a search ar along with text, allow for navigation', async () => {
    const { container } = render(<MemoryRouter><ArtistSearch /></MemoryRouter>);
    const screenText = await screen.getByText('Loading...');
    expect(screenText).not.toBeEmptyDOMElement();

    const artistSearchBar = await screen.findByLabelText('Find an Artist:');
    act(() => {
      userEvent.type(artistSearchBar, 'peaches');
    });

    const submitButton = await screen.getByRole('button', { name: 'submit search' });
    userEvent.click(submitButton);

    return waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
