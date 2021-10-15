import { render, screen } from "@testing-library/react";
import Dashboard from "../components/Dashboard";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
const puppeteer = require("puppeteer");

describe("Testing Dashboard includes components", () => {
  beforeEach(() => {
    render(<Dashboard />);
  });

  test("Dashboard includes title", () => {
    const header = screen.getByText("Dashboard");
    expect(header).toBeInTheDocument();
  });

  test("Dashboard includes button and modal to submit new board", async () => {
    const addBoard = screen.getByText("Add a new Board");
    expect(addBoard).toBeInTheDocument();
    userEvent.click(addBoard);
    const modal = await screen.findByPlaceholderText("Board Name");
    expect(modal).toBeInTheDocument();
    userEvent.click(modal);
    userEvent.type(modal, "New Board {enter}");
  });
});

describe("Integration tests with fetch", () => {
  beforeEach(() => {
    render(<Dashboard />);
    jest.spyOn(window, "fetch");
  });

  test("Dashboard submits a new board on form submit", async () => {
    const addBoard = screen.getByText("Add a new Board");
    userEvent.click(addBoard);
    const modal = await screen.findByPlaceholderText("Board Name");
    userEvent.click(modal);
    const testBoardName = "board_" + new Date().getTime();
    window.fetch.mockResolvedValueOnce();
    userEvent.type(modal, `${testBoardName}{enter}`);
    
    expect(window.fetch).toHaveBeenCalledWith(
      "http://localhost:4000/boards/",
      {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: testBoardName }),
      }
    );
    expect(await screen.findByText("Dashboard")).toBeInTheDocument();
  });
});
