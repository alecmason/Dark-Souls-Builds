# Alec Jones" Project 2 - Dark Souls Inspired Build Database

The purpose of the web applicatino is to be a database for RPG "builds" inspired by the video game series Dark Souls.

Technology used: ExpressJS, NodeJs, Mongoose, MongoDB, MongoDB Atlas, Google People API, OAuth, Passport

## Index Page & Logging in
1. The initial page is the index which shows all the created builds in the database. I want the user, even if not logged in, to still be able to see the builds and view them individually.
2. A User who is not logged in does not have access to creating a build or commenting.
<figure>
<img src="https://i.imgur.com/4az9NNG.png?1">
<figcaption align="center">
Index page, user is not logged in
</figcaption>
</figure>

<figure>
<img src="https://i.imgur.com/0Ta2mUg.png?1">
<figcaption align="center">
Index page, user is logged in
</figcaption>
</figure>

## View a created build
1. clicking the "View" button next to a build takes the user to a detailed page of the build.
2. If the user is not logged in they are unable to comment, edit their own comment, or delete their own comment.
<figure>
<img src="https://i.imgur.com/uOPc3Av.png?1">
<figcaption align="center">
The "Show" page of an individual build with the user not logged in
</figcaption>
</figure>

3. If the user in logged in their are able to comment, edit their own comment, and delete their own comment.

<figure>
<img src="https://i.imgur.com/wjCLOtX.png?1">
<figcaption align="center">
The "Show" page of an individual build with the user logged in. The "Edit" and "Delete" buttons now appear.
</figcaption>
</figure>

## Create a new build
1. To create a new build and add it to the database the user must be logged in.
2. If a user who is not logged in clicks the "Create a Build" link, it will redirect them to the Google log in page.
3. Once logged in they will be able to go to the "Create a Build" page

<figure>
<img src="https://i.imgur.com/N5RySDe.png?1">
<figcaption align="center">
Once logged in the user is now able to create and new build and add it to the database.
</figcaption>
</figure>

## Add a comment about an individual build, Editing and Deleting your own comment
1. To comment on a build the user must be logged in. They will be redirected to the current page otherwise.
2. Only a user who is logged through Google may comment.
3. A logged in user may only edit and delete their own comments.

<figure>
<img src="https://i.imgur.com/yZ8y6iD.png?1">
<figcaption align="center">
If the user is logged in they are able to edit and delete only their own comment.
</figcaption>
</figure>

<figure>
<img src="https://i.imgur.com/da2Kka2.png?1">
<figcaption align="center">
If not logged in the "edit" and "delete" buttons will not appear.
</figcaption>
</figure>

## IceBox Features
1. images, screenshots for builds
2. Rating system. 
