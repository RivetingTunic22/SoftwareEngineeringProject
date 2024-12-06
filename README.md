# System Inception

## Table of Contents
* Requirements
  * [Functional Requirements](#functional-requirements)
  * [Nonfunctional Requirements](#nonfunctional-requirements)
  * [Security Requirements](#security-requirements)
* [Technology Plan](#technology-plan)
* Risk Analysis
  * [Technical Risk by Business Goal](#technical-risk-by-business-goal)
  * [Risk Mitigation Plan](#risk-mitigation-plan)
* [Effort Estimate](#effort-estimate)
* [Architectural Design](#architectural-design)

## Requirements

<div name="functional-requirements">
  <h3>Functional Requirements</h3>
</div>
The following actors and use cases have been identified for the Drury Commons Menu application.

#### Actors
| Actor | Description |
|-------|-------------|
| User | A user is a student who uses the app to view the menu and can view allergens of food items. |

#### Use Cases
* View Menu - A user can look at the menu, which should contain the name, the station it is served at, and any dietary restrictions an item might have.

<div name="nonfunctional-requirements">
  <h3>Nonfunctional Requirements</h3>
</div>
The following nonfunctional requirements will be satisfied.

* Users will be able to see any restrictions a menu item might contain to assist students with allergies.
* The menu will be readable and scrollable on common cell phone and tablet devices.
* The app will also be able to change what menu is seen (EX: changing for breakfast, lunch, and dinner and to look ahead no matter the time)

<div name="security-requirements">
  <h3>Security Requirements</h3>
</div>
The following security requirements will be satisfied.

* Data Encryption: All senstitive data that is exchanged between users will be encrpyted using HTTPS and Transport Layer Security (TLS) to protect against eavesdropping and data tampering.
* Input Validation: All of the users' input will be validated and sanitized to prevent malicious data from being processed. 
* User Authentication: All users will authenticate using secure credentials (user name and password). Passwords will be stored using strong hashing algorithms.

<div name="technology-plan">
  <h2>Technology Plan</h2>
</div>
The following technology plan lists potential technologies to be used in the creation of our application and a personal experience rating for each technology.

| Technology                      | Experience Rating       |
|---------------------------------|-------------------------|
| **Mobile App Technologies**     |                         |
| React                           | Moderate                |
| Expo                            | Moderate                |
| **Application and Web Development** |                     |
| JavaScript                     | Moderate                |
| **Web Server Scripting**        |                         |
| Node.js                        | Moderate                |


## Risk Analysis

<div name="technical-risk-by-business-goal">
 <h3>Technical Risk by Business Goal</h3>
</div>

The following technical risks and business goals have been identified and prioritized.

| ID         | Technical Risk                                                       | Business-Market | Business-Users | Business-Value |
|------------|---------------------------------------------------------------------|-----------------|-----------------|-----------------|
| Tech-R-1   | Limited experience developing mobile apps using React and Expo.     | -               | H               | H               |
| Tech-R-2   | No experience implementing role-based access control in the app.    | -               | H               | H               |
| Tech-R-3   | Ensuring data encryption and secure communication over HTTPS.        | M               | H               | H               |
| Tech-R-4   | Tools needed for the project (e.g., React, Expo, Node.js) are new. | M               | H               | H               |
| Tech-R-5   | Time for the developer to work on the project is limited due to class demands. | M               | -               | -               |
| Tech-R-6   | Inadequate testing may not cover all security requirements.          | L               | -               | -               |
| Tech-R-7   | The app is susceptible to input validation issues and XSS attacks.  | M               | -               | -               |


<div name="risk-mitigation-plan">
  <h3>Risk Mitigation Plan</h3>
</div>

The following risk mitigation plan will help us to address and mitigate these risks to the extent possible.
 
| ID | Risk | Mitigation |
|----|------|------------|
| Tech-R-1 | Limited experience developing mobile apps. | Research and learn through online tutorials |
| Tech-R-2 | No experience implementing role-based access control in the app. | Research and learn through online tutorials |
| Tech-R-3 | Ensuring data encryption and secure communication over HTTPS. | Search for information and tutorials online |
| Tech-R-4 | Tools needed for the project (e.g., React, Expo, Node.js) are new. | Research and learn these tools using tutorials found online |
| Tech-R-5 | Time for the developer to work on the project is limited due to class demands. | Make sure sprints are evenly and thoroughly planned out as to not fall behind |
| Tech-R-6 | Inadequate testing does not cover requirements | Utilize automated testing tools. Make testing a priority activity |
| Tech-R-7 | The app is susceptible to input validation issues and XSS attacks. | Research ways to prevent such attacks an implement them |

 

<div name="effort-estimate">
 <h2>Effort Estimate</h2>
</div>

The following effort estimate has been calculated using NOP (nominal object points) using the following categories of work to be done - screens, reports (none), and 3GL components.

| Artifacts | Complexity | Object Points | Notes |
|-----------|------------|---------------|-------|
| **Menu Screen** | | | |
| Fetch API Data | Medium | 2 | Fetch menu data from the fresh ideas API |
| Parse and Display Data | High | 3 | Display data in a readable format on menu scree |
| Navigation Between Meal Periods | Medium | 2 | Switch between breakfast, lunch, and dinner |
| **Login Screen** | | | |
|    Authentication Routes | High | 3 | Build login, signup, logout routes  |
|    Middleware for Route Protection | Medium | 2 | Implement JWT-based authetication |
|    Error Handling  | Simple | 1 | Add detiled error responses or auth endpoints |
| **MongoDB Integration** | | | | 
| Connection and schema setup | Medium | 2 | Define Models (User Schema) |
| CRUD Operations | Simple | 1 | Implement basic database operations |
| Test database interactions | Simple | 1 | Debug, connection issues |
| **Total Object Points** | | 17 | |


<div name="architectural-design">
 <h2>Architectural Design</h2>
</div>
The following deployment diagram represents the architectural (high-level) design of the Dining Hall Appliation.

![image](architecturaldesign.png)

Front-End
The front-end of the application is developed using React Native and Expo, providing a responsive and user-friendly interface. This layer handles:

Login Form: A clean and intuitive form for user authentication.
API Requests: Communication with the back-end to send and retrieve data securely.
Testing & Debugging: Ensuring the front-end is error-free and optimized for performance.
By using React Native, the application is cross-platform and can run on both Android and iOS devices.

Back-End
The back-end is built with Node.js and Express.js, ensuring robust and efficient server-side logic. Key responsibilities include:

RESTful APIs: Implementation of RESTful endpoints for seamless data exchange between the client and the server.
Middleware: Layers to handle request validation, error handling, and other pre-processing tasks.
Authentication Logic: Secure user authentication using techniques such as JWT (JSON Web Tokens) or sessions.
This layer ensures data integrity and provides a bridge between the front-end and the database.

Database
The database layer utilizes MongoDB Atlas, a cloud-based NoSQL database solution, to store and manage user data. Key components include:

User Collection: A dedicated collection to store user information, such as usernames, email addresses, and other relevant details.
Password Hashing: For security, all passwords are hashed using a secure algorithm (e.g., bcrypt) before storage.
MongoDB Atlas offers scalability, high availability, and easy management, making it an ideal choice for this application.

Data Flow
The Front-End sends user inputs (e.g., login credentials) via API requests to the Back-End.
The Back-End processes these requests, applying middleware and business logic, and communicates with the Database.
The Database responds with the requested data or confirmation, which is passed back through the Back-End to the Front-End for display.
This architecture ensures separation of concerns, scalability, and maintainability, enabling efficient development and future expansion.

TimeSheet: 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Senior Project Timecard
Name: Lauren Snyder
Week: 11/3/2024 to 12/1/2024
Project: Dining Hall App
Total Hours Worked: 29

### TimeSheet:

| **Date** | **Start**  | **Finish** | **Time** | **Code** | **Activity**                                                                                     |
|----------|------------|------------|----------|----------|--------------------------------------------------------------------------------------------------|
| 11/3     | 2:00 p.m.  | 3:00 p.m.  | 1.0      | 60       | Set up the development environment.                                                             |
| 11/3     | 3:00 p.m.  | 4:00 p.m.  | 1.0      | 30       | Designed a new logo for the application.                                                        |
| 11/3     | 4:00 p.m.  | 5:00 p.m.  | 1.0      | 40       | Updated the project to React Native.                                                            |
| 11/10    | 1:00 p.m.  | 4:00 p.m.  | 3.0      | 40       | Integrated API calls to display the menu; added and tested `api.js` and updated `MenuScreen.js`. |
| 11/20    | 10:00 a.m. | 12:00 p.m. | 2.0      | 80       | Conducted research on backend and database implementation.                                      |
| 11/20    | 12:00 p.m. | 2:00 p.m.  | 2.0      | 20       | Analyzed backend and database implementation options.                                           |
| 11/21    | 3:00 p.m.  | 4:00 p.m.  | 1.0      | 70       | Evaluated backend integration progress using Render.                                            |
| 11/24    | 10:00 a.m. | 4:00 p.m.  | 6.0      | 40       | Set up the backend, successfully tested API calls using Postman, and fetched menu data.         |
| 11/30    | 1:00 p.m.  | 5:00 p.m.  | 4.0      | 30       | Styled the application with CSS and updated the menu to display allergen information.           |
| 12/1     | 2:00 p.m.  | 4:00 p.m.  | 2.0      | 70       | Prepared the final presentation and updated the README to reflect project changes.              |

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Senior Project Timecard
Name: Elijah Dean
Week: 10/14/2024 to 12/1/2024
Project: Dining Hall App
Total Hours Worked: 8

### TimeSheet:

| **Date** | **Start**  | **Finish** | **Time** | **Code** | **Activity**                                                                                     |
|----------|------------|------------|----------|----------|--------------------------------------------------------------------------------------------------|
| 10/14    | 4:30 p.m.  | 5:30 p.m.  | 1.0      | 90       | Set up github environment and added team members to the project.                                 |
| 11/4     | 1:00 p.m.  | 3:00 p.m.  | 2.0      | 30       | Created splash animation of the logo Lauren created for the app.                                 |
| 11/20    | 11:00 p.m. | 2:00 a.m.  | 3.0      | 80       | Researched bcrypt to help implement.                                                             |
| 12/1     | 2:00 p.m.  | 4:00 p.m.  | 2.0      | 30       | Created illustration for final presentation, updated read me, and set up color theme for presentation.|

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

