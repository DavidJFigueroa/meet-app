import {loadFeature, defineFeature} from "jest-cucumber";
import React from "react";
import {render, screen, within, waitFor} from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn't specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given("the main page is open", () => {
      render(<App />);
    });

    when("the user doesn't specify the number of events visible", async () => {
      await waitFor(() => {
        const eventList = screen.queryByTestId("event-list");
        const EventListItems = within(eventList).queryAllByRole("listitem");
        expect(EventListItems.length).toBeGreaterThan(0);
      });
    });

    then(/^the default number should be (\d+)$/, (arg0) => {
      const numberTextBox = screen.getByPlaceholderText("Enter a number");
      expect(numberTextBox).toHaveValue("32");
    });
  });
  test("User can change the number of events", ({given, when, then}) => {
    given("the main page is open", () => {
      render(<App />);
    });

    when("the user specifies the number of events visible", async () => {
      const numberTextBox = screen.getByPlaceholderText("Enter a number");
      await userEvent.type(numberTextBox, "10");
    });

    then(
      "the user should be able to see events equal to the given number at once",
      async () => {
        await waitFor(() => {
          const eventListItems = screen.queryAllByRole("listitem");
          expect(eventListItems.length).toBe(10);
        });
      }
    );
  });
});
