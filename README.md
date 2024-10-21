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
| User | A user is a student who uses the app to view the menu and can edit and confirm menu items |
| Admin | The admin is a person who can publish and edit the menu. Note that an admin can use the app as a user would and is thus a user. A user, however, is not an Admin |

#### Use Cases
* View Menu - A user can look at the menu, which should contain the name, the station it is served at, and any dietary restrictions an item might have
* Edit Menu - A user can change whatever item was published to another item.
* Confirm Menu - A user can confirm any changes a menu might have to ensure a menu's accuracy
* Add Menu Items - An admin can add menu items to the current menu.
* Publish Menu - An admin can publish the menu they have set.

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
* Audit Logging: The application will maintain a comprehensive audit log to record significat actions performed by the users and admin. It will capture the user's id, timestamp, description of action, and changes made.
* User Authentication: All users will authenticate using secure credentials (user name and password). Passwords will be stored using strong hashing algorithms.
* Role-Based Action Control: The application will managed user permissions, and access control checks will be enforced to ensure only authroized users can perform specific actions. 

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
| HTML 5                         | Moderate                |
| Bootstrap Framework            | Tutorial                |
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
| **Screens** | | | |
| Browse Hikes | Simple | 1 | Screen will be constructed by reading hike locations & names from a data source |
| Explore Hikes | Medium | 2 | Screen will have several components drawing data from different sources |
|    Sub-screens | | | |
|    Read About | Simple | 1 | Simple text with some images in the screen |
|    View Hike | Medium | 2 | Must position on a map and allow for zoom with different sized devices |
|    Driving Directions | Simple | 1 | Will have to query map server to get the directions |
|    Watch Video | Simple | 1 | Embedded video viewer |
|    Leave Comment | Simple | 1 | Simple input of text |
|    Read Comments | Simple | 1 | Simple display of text extracted from data table |
|    View on Google Earth | Simple | 1 | Simple linke, but will require scripting for Google Earth |
| Setup Hike Mode | Simple | 1 | Simple screen |
| GPS Trail Guide | Medium | 2 | Complex screen drawing from multiple local data sources |
| Create Trail Entry | Simple | 1 | Simple data entry screen |
| Edit Trail Entry | Simple | 1 | Simple data update |
| *Screen Total* | | 16 | |
| **3GL Components** | | | |
| Map Components | 2 @ 10 | 20 | Map interaction and hike data management components |
| Google Earth Interaction | 1 | 10 | Component to link hike to Google Earth |
| Standalone GPS Mode | 1 | 10 | Component to manage map and data in standalone GPS mode |
| Server Components | 2 @ 10 | 20 | Server-side scripts for managing mobile interaction and hike data |
| **Total Object Points** | | 76 | |


<div name="architectural-design">
 <h2>Architectural Design</h2>
</div>
The following deployment diagram represents the architectural (high-level) design of the Dining Hall Appliation.

![image](https://raw.githubusercontent.com/wildharpo/ozarks-day-hiker-app/refs/heads/main/Documents/Diagrams/DeploymentDiagram.jpg)

The basic architecture of the Dining Hall app has four components: a component that runs on a mobile device, a map server, an administrative component, and a server component. Components will communicate over the Internet. The details of the architecture are specified in Figure 7.5. Notice that the administrative componet-server component communication is specified at two levels. The devices communicate using the Internet while the browser and the web server communicate using the http protocol.
