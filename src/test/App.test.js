import React from 'react';
import { render } from '@testing-library/react';
import Header from '../client/components/Header';

test('renders cancer research assignment', () => {
    const { getByText } = render( <Header/> );
    const linkElement = getByText(/Cancer Research: Assignment/i);
    expect(linkElement).toBeInTheDocument();
});