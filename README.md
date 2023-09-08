# Meet App

A serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

![image](https://github.com/DavidJFigueroa/my-first-js-app/assets/122026800/db8a6b00-3a66-4e55-88f0-a214d9fc42f7.png)

## Key Features:

- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.

## Features, User Stories & Scenarios

### 1. Filter Events by City.

As a **_user_**,
I would like to be able to **_filter events by city_**
so that I can **_see a list of events that take place in that city._**

**_Scenario 1_**

User selects a city from the suggested list.

- **_Given_** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
- **_When_** the user selects a city (e.g., “Berlin, Germany”) from the list;
- **_Then_** their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city;

**_Scenario 2_**

User doesnt select a city from the suggested list.

- **_Given_** user was not selecting a city;
- **_When_** the user opens the app;
- **_Then_** it should show a list of all events in all cities;

**_Scenario 3_**

User has not select a city

- **_Given_** main page was opened;
- **_When_** the user has not selected a city;
- **_Then_** it should suggest a list of cities;

### 2. Show/Hide Event Details.

As a **_user_**,
I would like to be able to **_show/hide event details_**
so that I can **_see more/less information about an event._**

**_Scenario 1_**

An event element is collapsed by default.

- **_Given_** the user first opens the app;
- **_When_** the user recieves the full list of events (specific for the city or all events)
- **_Then_** all events will colapse by default.

**_Scenario 2_**

User can select details from a listed event

- **_Given_** user was searching for events and a list of events is showing;
- **_When_** the user selects "show details" on a specific event;
- **_Then_** the event details should fold out on click;

**_Scenario 3_**

User can colapse details from a listed event

- **_Given_** user was clicking on show details for an event;
- **_When_** the user selects "hide details" on a specific event;
- **_Then_** the event details should collapse on click;

### 3. Specify Number of Events.

As a **_user_**,
I would like to be able to **_specify the number of events_** I want to view in the app
so that I can **_see more or fewer events in the events list at once._**

**_Scenario 1_**

User selects how many events they want to be shown

- **_Given_** the user has searched for events in a city;
- **_When_** the user selects how many event will be shown;
- **_Then_** the number of listed events should change to what the user will choose;

**_Scenario 2_**

User does not select how many events they want to be shown

- **_Given_** the user is on the home page with a list of events;
- **_When_** the user does not select how many events will be shown;
- **_Then_** the page should display 32 upcoming events;

### 4. Use the App When Offline

As a **_user_**,
I would like to be able to **_use the app when offline_**
so that I can **_see the events I viewed the last time I was online._**

**_Scenario 1_**

User looses internet connection

- **_Given_** the user is on the home page with a list of events
- **_When_** the user loses internet connection
- **_Then_** the application should display a message indicating that it is currently offline

**_Scenario 2_**

User goes offline

**_Given_** the user is on the home page with a list of events
**\*When\*\*** the user goes offline and then clicks on an event to see its details
**\*Then\*\*** the application should display the event details from the cached data

**_Scenario 3_**

User goes offline and accesses app from different service

- **\*Given\*\*** the user is on the home page with a list of events
- **\*When\*\*** the user goes offline and then tries to access the application from a different device
- **_Then_** the application should still work with the cached data from the previous session

### 5. Add an App Shortcut to the Home Screen.

As a **_user_**,
I would like to be **_able to add the app shortcut to my home screen_**
so that I can **_open the app faster._**

**_Scenario 1_**

- **_Given_** the user is on the home page of the application
- **_When_** the user clicks on the "Add to Home Screen" button
- **_Then_** the browser should prompt the user to add the application shortcut to the home screen

**_Scenario 2_**

- **_Given_** the user has already added the application shortcut to the home screen
- **_When_** the user clicks on the shortcut from the home screen
- **_Then_** the application should open and the user should land on the home page

### 6. Display Charts Visualizing Event Details

As a **_user_**,
I would like to be able to **_see a chart showing the upcoming events in each city_**
so that **_I know what events are organized in which city._**

**_Scenario 1_**

- **_Given_** the user is on the home page with a list of events
- **_When_** the user clicks on an event to view its details
- **_Then_** the page should display a chart visualizing relevant event details, such as attendance or location data

**_Scenario 2_**

- **_Given_** the user is on the home page with a list of events
- **_When_** the user filters events by a specific city
- **_Then_** the page should update the charts to visualize event details relevant to the selected city

**_Scenario 3_**

- **_Given_** the user is on the home page with a list of events
- **_When_** the user specifies a number of events to be displayed
- **_Then_** the page should update the charts to visualize event details based on the specified number of events

## Serverless functions

![diagram](https://i.ibb.co/NyFjJgr/Meet-App-Diagram.png)

The Meet App utilizes serverless functions to enhance its functionality and architecture. The serverless functions, implemented through AWS Lambda, are an integral part of the app's backend, providing various services and benefits.

- **_1. Authorization and Authentication_**: The serverless functions handle OAuth2 authentication via the Google Calendar API. This means that user authentication and authorization processes are offloaded to these serverless functions, ensuring secure access to user data without the need for traditional server maintenance.

- **_2. API Endpoints_**: Serverless functions serve as API endpoints for the frontend React app. These functions enable communication between the app and external services, such as fetching upcoming event data from the Google Calendar API. As serverless functions scale automatically, the app remains responsive even under high user loads.

- **_3. Offline Support_**: Serverless functions enable the app to work seamlessly offline. Cached data can be retrieved from these functions, providing a smooth user experience even when an internet connection is unavailable. This aligns with the app's goal of being a Progressive Web App (PWA) with offline capabilities.

- **_4. Backend Scalability_**: The app leverages serverless architecture to ensure easy scalability. As more users access the app, the serverless functions dynamically scale up to handle the increased load, without requiring manual intervention or backend adjustments.

- **_5. Cost Efficiency_**: With serverless functions, the app benefits from a cost-effective model. The app only incurs charges based on actual usage, avoiding costs associated with idle resources. This aligns with the serverless principle of paying only for what is consumed.

- **_6. Deployment and Availability_**: By utilizing serverless functions and hosting the app on GitHub Pages, the app remains readily available and easily deployable. Users can access the app from various devices, and it remains operational even in low network conditions.

- **_7. Interaction with Data Visualization_**: Serverless functions can facilitate data processing and manipulation required for data visualization features. For example, when generating charts showcasing upcoming events in different cities, the serverless functions may aggregate and format data to be presented effectively.

In summary, the Meet App integrates serverless functions into its architecture to enhance authentication, API communication, offline support, scalability, cost efficiency, and deployment. This approach aligns with the app's emphasis on providing a seamless user experience, leveraging the benefits of serverless technology and PWAs to create a powerful and user-friendly application.
