import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import EnrollmentComponent from './components/Enrollment.component';

test('Renders welcome screen with button.', () => {
    render(<App />);
    //Todo Snapshot
    const element = screen.getByTestId('welcomeBtn');
    expect(element).toBeInTheDocument();
});

test('Renders app and clicks welcome to move to enrollment', () => {
    render(<App />);
    const welcomeElement = screen.getByTestId('welcomeBtn');
    userEvent.click(welcomeElement);
    const enrollmentElement = screen.getByTestId('enrollmentBtn');
    expect(enrollmentElement).toBeInTheDocument();
});

test('Renders enrollment and then pass value into input', () => {
    render(<App />);
    const welcomeElement = screen.getByTestId('welcomeBtn');
    userEvent.click(welcomeElement);
    const inputEl: any = document.querySelector(`input[name="account"]`);
    if (inputEl) {
        userEvent.type(inputEl, '000000');
    } else {
        throw Error;
    }
    expect(inputEl).toHaveValue('000000');
});

// Add tests for input requirements for the enrollment form.
