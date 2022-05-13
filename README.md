![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Project 02 | Vinyl Database

## Description

Search database for artist vinyls and see the related artists by genre.
Create a profile and add items to a wishlist or collection.

## User stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn't exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to signup / login and access the profile page.
- **profile page** - As a user, I will see a search bar and a preview of my wishlist / my collection. I can also access my wishlist / collection.
- **edit user profile** - As a user, I want to be able to edit my profile informations and add a profile picture.
- **wishlist / collection** - As a user, I want to be able to access the wishlist / collection and see the album details. I can also delete the album from the wishlist / collection.
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **result of search** - As a user I want to see the list of vinyls filtered by artist name.
- **album listing** - As a user I want to see more details of the albums, be able to add them to my wishlist/collection, and from details be able to look from related artists by genre.
- **genre listing** - As a user, I want to see the related artists from that genre.

### Bonus features

- **share button** - As a user, I want to be able to share my collection / wishlist by e-mail.
- **responsive** - As a user, I want to be able to use the app on mobile.

<br>

## Server Routes (Back-end):

| **Method** | **Route**                      | **Description**                                                      | Request - Body                |
| ---------- | ------------------------------ | -------------------------------------------------------------------- | ----------------------------- |
| `GET`      | `/`                            | Main page route. Renders home `index` view.                          |                               |
| `GET`      | `/login`                       | Renders `login` form view.                                           |                               |
| `POST`     | `/login`                       | Sends Login form data to the server.                                 | { username, password }        |
| `GET`      | `/signup`                      | Renders `signup` form view.                                          |                               |
| `POST`     | `/signup`                      | Sends Sign Up info to the server and creates user in the DB.         | { username, email, password } |
| `GET`      | `/private/profile`             | Private route. Renders `profile` form view.                          |
| `PUT`      | `/private/profile-edit`        | Private route. Renders `profile-edit` form view.                     |
| `GET`      | `/private/wishlist`            | Private route. Renders `wishlist` view.                              |
| `POST`     | `/private/wishlist/:albumId`   | Private route. Add a new album for the current user.                 | { artist, album}              |
| `DELETE`   | `/private/wishlist/:albumId`   | Private route. Deletes an existing album from the user's wishlist.   |
| `GET`      | `/private/collection`          | Private route. Renders `collection` view.                            |
| `POST`     | `/private/collection/:albumId` | Private route. Add a new album for the current user.                 | { artist, album}              |
| `DELETE`   | `/private/collection/:albumId` | Private route. Deletes an existing album from the user's collection. |
| `GET`      | `/artists`                     | Renders `artist-list` view.                                          |                               |
| `GET`      | `/albums`                      | Renders `albums-list` view.                                          |
| `GET`      | `/album-details`               | Renders `album-details` view.                                        |                               |
| `GET`      | `/artist-genres`               | Renders `artist-genres` view.                                        |

## Models

User model

```javascript
{
  username: String,
  email: String,
  password: String,
  collection: [{
    type: Schema.Types.ObjectId, ref: "Album"
}],
  wishlist: [{
  type: Schema.Types.ObjectId, ref: "Album"
}]
}

```

Album model

```javascript
{
  artist: String,
  title: String,
  genre: String,
  year: Number,
}

```

<br>

## API's

DiscoGS API

<br>

## Packages

NODEMAILER – Share collection / wishlist

<br>

## Backlog

[See the Trello board.](https://trello.com/b/K1OIaMYF/projecto-2)

<br>

## Links

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/joaocbantunes/Project_2)

[Deploy Link](https://ironhack-discogs.herokuapp.com/)

<br>

### Slides

The url to your presentation slides

[Slides Link]()

### Contributors

João Antunes - [`<github-joaocbantunes>`](https://github.com/joaocbantunes/) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/person1-username)

João Morgado - [`<github-JoaoMorgado8>`](https://github.com/JoaoMorgado8) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/person2-username)
