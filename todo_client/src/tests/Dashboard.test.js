import { render, screen } from "@testing-library/react";
import Dashboard from "../components/Dashboard";
import "@testing-library/jest-dom";
const puppeteer = require('puppeteer');

test("Dashboard includes title", () => {
    render(<Dashboard />);
    const header = screen.getByText("Dashboard");
    expect(header).toBeInTheDocument();
});

test("Dashboard includes form to submit new board", () => {
    const { container } = render(<Dashboard />);
    const form = container.querySelector("form");
    expect(form).toBeInTheDocument();
});


