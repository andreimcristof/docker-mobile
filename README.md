# What is docker-mobile?

The intention is to build a mobile app running on both Android and iOS, that easily controls an entire dockerized microservice infrastructure. 

Docker-mobile offers an UI to control/ manage docker images and containers that are running on a given host. 
The API that the mobile client communicates with, is for the moment fetching the images running on localhost and keeps them in sync with the mobile client. 

This is, first and foremost, a learning project that touches multiple issues - building a mobile app that runs cleanly with 100% unit test coverage, react-native with socket.io, circle ci, proper mobile UX, etc. 

## Please note: 
1. Since this is a "learn-as-you-go" project, things might not always run as you expect, sky might not always be blue. 
2. Contributions are welcome, however regarding feature requests: this project is oriented not towards getting the app out there fast, but on much slower steps insisting on proper unit testing of all features. The main goal is to obtain 100% unit testing coverage, and maintain it as the app grows. 


# Install on device
`react-native run-android`  
`react-native run-ios`


# Sync added packages
`react-native link`


# Run app on device

### iOS
   `react-native start ios`  
   or open the project in Xcode and press `Run`

### Android
connect phone through usb to computer  
`react-native start android`


# See logs:
`react-native log-android`  
`react-native log-ios`

# API
There will be a swagger API running on localhost which pushes docker-related data to the mobile client, keeping things in sync.  
