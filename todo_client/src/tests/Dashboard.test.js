import { render, screen } from "@testing-library/react";
import Dashboard from "../components/Dashboard";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';
const puppeteer = require('puppeteer');

test("Dashboard includes title", () => {
    render(<Dashboard />);
    const header = screen.getByText("Dashboard");
    expect(header).toBeInTheDocument();
});

test("Dashboard includes button and modal to submit new board", async () => {
    render(<Dashboard />);
    const addBoard = screen.getByText("Add a new Board");
    expect(addBoard).toBeInTheDocument();
    userEvent.click(addBoard);
    const modal = await screen.findByPlaceholderText("Board Name")
    expect(modal).toBeInTheDocument();
});


