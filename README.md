# Building ComicViewer(MVP)


## Considerations when serving webcomic pages as a *Static Asset* vs *Fetching from a Database*

#### Static Asset
- Performance: 
	- Since static assets are cached by the browser, it's typically faster
- Simplicity: 
	- Just pop the images into the project directory and call it a day
- Scalability:
	- Since it's just one comic, shouldn't be too bad...? 
- Deployment:
	- Thanks to Vercel I can be brain damaged
- Versioning:
	- Will probably be handled by git... I have no idea how this will look in production :|

#### ~~Database~~ (Not for the MVP)
- Performance:
	- Probably will have some kind of overhead since the user need to fetch the asset from the database
- Simplicity:
	- While the assets can't just be dumped into a project directory, this does allow CRUD to be performed on the assets if tools are built for it
- Scalability:
	- Really scalable, if there are other functionality to be added later down the line it'll probably use a database anyways(user comments, profile, merch page, shopping cart, etc.)
- Deployment:
	- A tad more complicated, and there's the cost of hosting a database...
- Versioning: 
	- Databases are inherently dynamic, so I'm chilling