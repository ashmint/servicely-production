# Servicely:

Simple workshop management solution for customer and vehicle management . Workshop Users can add and delete vehicles, customers, service records for efficient service flow. It is even possible to share service records with customers and anyone else if needed.



**Link to project:** https://servicely.cyclic.app

- [Budget Tracker:](#Servicely)
	- [How It's Made:](#how-its-made)
	- [Optimizations](#optimizations)
	- [Lessons Learned:](#lessons-learned)
	- [Packages/Dependencies used](#packagesdependencies-used)
	- [Installation](#installation)


## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, MongoDB, EJS, express 

## Optimizations


This program works, however in the future it would be great to:

-add PDF's as attachments along with the service record

-Export the record as a pdf

-Linking of multiple Workshops to a single customer


---
## Lessons Learned:

- Acquired an understanding of how the various components of the MVC (Model-View-Controller) architecture collaborate and communicate to manage the movement of data, how the rendering process occurs, and how controllers can make variables accessible to views.

- learned  how to effectively establish public records for sharing information while also gaining proficiency in managing authentication when it's necessary, as well as when it's not required.

---

## Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

---

## Installation

- `npm install` 
- Create a `.env` file and add the following as `key: value` 
DB_STRING: `your database URI` 
PORT: `Any port of your choice`
---