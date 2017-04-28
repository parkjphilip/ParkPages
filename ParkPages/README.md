# ParkPages

[ParkPages live][heroku]

[heroku]: https://parkpages.herokuapp.com/#/

ParkPages is a full stack web application based off of Yelp built using React with Redux architectural framework on the frontend and Ruby on Rails on the backend with a PostgreSQL database. ParkPages aims to enhance the user's park-finding experience in the New York/New Jersey area with the ability to read and create reviews for restaurants.

## Libraries
- React.js
- Redux
- pg_search
- BCrypt (for authentication)
- Figaro to securely store keys and other important data
- Paperclip (storing park images on Amazon Web Services)

## Features & Implementation

ParkPages has the following features
- Create an account
- Log in / Log out / Guest Login
- List of featured parks on home page
- Search functionality by park name and tag name
- View locations of parks on Google Maps with markers on park index and detail pages
- Add reviews and ratings to parks
- Park detail page with park info, picture, reviews, and new review form


### Search
ParkPages utilizes pg_search multisearch to search for parks with whole text. It searches based on Park Name and by Park Taggings, which are stored in the tags tabled, joined by a taggings join table.

### Park Rendering




### Reviews
Reviews are

### Google Maps
Google Maps is used and displays all locations of parks. Users have the ability search for restaurants and click on markers to display park information.



## Future Implementation Plans

In addition to the features that have been implemented and described above, I plan to continue work by implementing the following features.

### Image Upload & Image Carousel

Image uploading by users is a standard feature of Evernote. Profile images of parks are already stored on Amazon's servers, but I plan to add functionality so that users can upload image files which will be added to an image carousel for each Park.

### Mark Reviews as Funny/Cool, etc.

I aim to imeplement the feature so that users will be able to mark reviews with a cartain set of characteristics (funny, cool, helpful, etc.).
