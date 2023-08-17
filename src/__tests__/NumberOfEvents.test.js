import {getByText, render, screen, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import App from "../App";


describe("<NumberOfEvents /> component", () => {
  test("checks if element has the role of a text box", () => {
    render(<NumberOfEvents eventNumber={32} setEventNumber={() => {}} />);
    const numberTextBox = screen.queryByRole("textbox");
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass("textbox");
  });
  test("by default, number of events is listed as 32", async () => {
    render(<NumberOfEvents eventNumber={32} />);
    const numberTextBox = screen.getByPlaceholderText("Enter a number");
    expect(numberTextBox).toHaveValue("32");
  });

  describe("<NumberOfEvents /> integration", () => {
    test("renders a specific number of events when the app is rendered", async () => {
      //const currentNumberOfEvents = 32;
      render(<App />);
      const numberOfEvents = screen.getByTestId("number-of-events");
      const numberTextbox = within(numberOfEvents).getByRole("textbox");
      await userEvent.type(numberTextbox, "10");
      await screen.findAllByRole("listitem");
      const eventListItems = screen.queryAllByRole("listitem");
      expect(eventListItems.length).toBe(10);
    });
  });
  test("user can change number of events they wish to see listed", async () => {
    const handleEventNumberChange = jest.fn();
    render(
      <NumberOfEvents
        eventNumber={32}
        onEventNumberChange={handleEventNumberChange}
        setEventNumber={() => {}}
        setErrorAlert={() => {}}
      />
    );
    const numberTextBox = screen.getByPlaceholderText("Enter a number");
    await userEvent.type(numberTextBox, "{backspace}{backspace}10");
    expect(handleEventNumberChange).toHaveBeenCalled();
  });
  test("user needs to input a valid number", async () => {
    const handleEventNumberChange = jest.fn();
    const {getByText} = render(
      <NumberOfEvents
        eventNumber={32}
        onEventNumberChange={handleEventNumberChange}
        setEventNumber={() => {}}
        setErrorAlert={() => {}}
      />
    );
    const numberTextBox = screen.getByPlaceholderText("Enter a number");
    await userEvent.type(numberTextBox, "{backspace}{backspace}X");
    expect(getByText("Not a valid number")).toBeInTheDocument();
  });

  test("user needs to input a number smaller than 100", async () => {
    const handleEventNumberChange = jest.fn();
    const {getByText} = render(
      <NumberOfEvents
        eventNumber={32}
        onEventNumberChange={handleEventNumberChange}
        setEventNumber={() => {}}
        setErrorAlert={() => {}}
      />
    );
    const numberTextBox = screen.getByPlaceholderText("Enter a number");
    await userEvent.type(numberTextBox, "{backspace}{backspace}102");
    expect(getByText("Maximum Value is 100")).toBeInTheDocument();
  });

  test("user cant input a number smaller than 1", async () => {
    const handleEventNumberChange = jest.fn();
    const {getByText} = render(
      <NumberOfEvents
        eventNumber={32}
        onEventNumberChange={handleEventNumberChange}
        setEventNumber={() => {}}
        setErrorAlert={() => {}}
      />
    );
    const numberTextBox = screen.getByPlaceholderText("Enter a number");
    await userEvent.type(numberTextBox, "{backspace}{backspace}-1");
    expect(getByText("Minimum Value is 1")).toBeInTheDocument();
  });
});
