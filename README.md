## Setup

Install dependencies using `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

## Available Users

Login to app with these users:

| Email                   |     Password      |
| ----------------------- | :---------------: |
| kitttens@email.com      | kiitensAreTheBest |
| mr.doggo@email.com      |    woofwoof123    |
| llamaInMyRoom@email.com |    timtimpirim    |

## Requirements

### Main

These were requirements for an app.

1. Login view / screen

   - Login window for user with basic login information email & password
   - Once a user inputs any details he will be redirected to chat view
   - No server logic is required here

2. Chat view / screen

   - Chat window with sidebar for multiple chats and chat box
   - In chat box user is able to send and read messages
   - Create a JSON at https://jsonbin.io API which contains mock messages
   - Once a user enters the chat, fetch messages from the API and render in chat view.
   - Basic implementation - once a user clicks the “Send” button or presses enter - message appears
     in chat.
   - Keep API up to date with new messages.

3. Profile view / screen
   - Create a view to edit basic profile details
   - No server logic is required here

### Bonus

- Option for disappearing messages

## More Details

Polling interval and jsonbin secret key can be changed in `consts.js` file.

## My Journey

I built this project using best Agile practises:

![Progress](https://github.com/KristinaBrak/chat-application/blob/main/public/first.jpg 'In the middle of the project')

![Done](https://github.com/KristinaBrak/chat-application/blob/main/public/second.jpg 'Done!')
