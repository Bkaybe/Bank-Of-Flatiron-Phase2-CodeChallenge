### PHASE 2 : BANK OF FLATIRON CODE CHALLENGE

## PREREQUISITES

- For this project, you’ll be building out a React application that displays a list of your recent bank transactions, among other features.

- Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

### Challenge Topics

- Working with state using the `useState` hook
- Effects in React using the `useEffect` hook
- Rendering and re-rendering in React
- React Events
- Working with forms and inputs in React
- Consuming APIs/Communicating with a server in React.
- CRUD operations in React.

### Core Deliverables

As a user, I should be able to:

- See a table of the transactions.
- Fill out and submit the form to add a new transaction. This should add the new transaction to the table **as well as post the new transaction to the backend API for persistence**.
- Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.

### Pre-requisite Data

If you may want to get the json data to use it in a different project feel free to check it out here

- [http://localhost:3000/transactions](http://localhost:3000/transactions)

## System Requirements

For you to be able to run this program in your local machine ensure you machine meets the following requirements :

1. Ensure you have an IDE e.g VsCode

2. Ensure you have installed Node in your computer if not follow the link below;

   - For windows: Nodejs-Installation-Steps:Windows
   - For Linux: Nodejs-Installation-Linux
   - For Mac: Nodejs-Installation-Mac
   -

3. Installed and up-to date json-server, Run the following command in your terminal to install it;

```console
 $ sudo npm install json-server
```

4. 8BG and above of RAM

5. Intel Corei5 and above processor

## Installation

Follow the steps below to install the program to your computer:

- Open your terminal in Ubuntu or the CLI in windows in your machine.
- Clone this repository to your machine by running the following command:
  ```console
   $ git clone
  ```
- After cloning in the desired folder you can therefore open the project folder by right clicking anywhere within the project folder and choose open in terminal then type the following command on the terminal.

  `code .`

## Running the program

- To run this program you can click on the link below to get to the deployed website

  [https://bank-of-flatiron-phase2-code-challenge.vercel.app/](https://bank-of-flatiron-phase2-code-challenge.vercel.app/)

- To run it on your local machine you will need to open the folder containing the project in vscode then in your terminal run the following command

  ```console
      $ npm install
  ```

  - After it is done run the the db.json file by using the following command in your terminal:

  ```console
     $ json-server db.json
  ```

  - Once the server has started you can see the following in your terminal

  ```console
      Index:
      http://localhost:3000/

      Static files:
      Serving ./public directory if it exists

      Endpoints:
      http://localhost:3000/transactions
  ```

  - All you have to do now is to now is to start the react application using the following command in your terminal and you'll have run the program.

  ```
    npm start
  ```
