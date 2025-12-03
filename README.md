this is my project to showcase to get hired in 2026.
I have researched and kept learning for the past few years and with over just 6 months of industry experience and lots of just theoritical knowledge i am jotting everything down here

this is my project to showcase to get hired in 2026.
I have researched and kept learning for the past few years and with over just 6 months of industry experience and lots of just theoritical knowledge i am jotting everything down here

<details>
<summary>
Day one
</summary>
## Day one
first i create a simple nextjs app with the js and the vanilla css but day one would be to create a simple functioning app with all the pages and the routing in place. in day 2 i will style them and make them mobile responsive.

For now i have just used the nextjs built in <Link> component to do the routing in between the links. as the project grows big i need to optimise it further

so for today i learnt new hook of the nextjs routing useLinkStatus and i have implemented it in the projects route. now time to wrap this up for today.

now i have to make this project public in github

to be able to run this project in your localhost simply
clone the project in your machine and run
`cd portfolio`
`npm i`
`npm run dev`

but you must satisfy this dependecy

```
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "next": "16.0.1"
```

</details>

<details>
<summary>
Day two
</summary>
so as i have mentioned yesterday! I will be working in designing the basic pages style for the home page, contact page, blog page and the project page.
I will be using the basic jsx components and the vanilla css to create a design that is mobile responsive.

Not much of a work today, loaded a sample video file and made the homepage with the video running and i made it responsive as well.

Tomorrow I will be working in the blogs page and the contact page.

</details>
<details>
<summary>Day three</summary>
Yesterday i spent a lot of time playing with the home-page of the project. Today i must get the blog page and the contact page up and running.
I am expecting to do the front end and the backend of the blog page and the contact page today.
The pages will be simple and mobile responsive.
Blog page will have a simple card with the video running that will explain about the project or the blog itself.
Contact page will have my simple contact information with the social icons and the contact form to send me an email. 
</details>
<details>
<summary>Day four</summary>
Today i will be working in creating a backend to CRUD blogs and if possible i will also create a contact form and hook that with some backend process. 
This is my first time working with the postgre sql. Why did i choose it? well i want to learn it. I have worked with  SQL in the past and i want to keep the data in my site in relational database. I get to polish my SQL skills while working in this project.

Connecting to the postgre sql was hassel. I initiated the project in vercel just for the sake of learning and i was trying to connect to the storage provided by vercel prisma+postgres. However, i wasnot able to connect to the database server. After few minutes of research i found that my vpn was blocking the network once i turned off the vpn i was able to connect.

After the connection, i created a prisma client with recommended setting in /lib/prisma used that client to perform Create and Read operation from the blog page.

This is it for today.

</details>
<details>
<summary>Day 5</summary>
Today i started by creating a model for the message.
I want to create a simple contact me form and when the user send the message the message will be stored in the database with the help of prisma.
The key objectives of doing it is to perform CREATE operation with the help of prisma.
let's build the contact me page now!

So the basic of the frontend is done and setting up the new table took all my time and effort however i made it happen. Steps involved?

1. write your new model
2. migrate that new model
3. generate prisma client
4. use it in the application code.
</details>
<details>
<summary>Day 6</summary>
untill day 5 i have created a basic contact form and the user can contact me. But how do i get to know that the client have actually sent me a message? to be able to read this message, i must create an admin application. which we will build together in coming days. But for today let's focus on creating a feature, which will have a basic counter. 
keeping track of visitor
I want to keep track of how many times the site has been visited and display that number in the home page of this site.
A simple CREATE and READ operation.
so for that,  
repeat the flow of day-1.

Now the update part is complete but now the update is not in real time. user manually have to refresh the page. let's work on that. For the shake of able to deploy in vercel, i am using Ably.

1. create an account and get the API_KEY, store in .env file
2. </details>
   <details>
   <summary>Day 7</summary>
   I updated the database on every render of the component and the ably subscribe and the publisher are added and on every render of the component, we update the database and the message with the new count is published to all the subscriber and displayed accordingly.
   But...
   </details>
   <details>
   <summary>Day 8</summary>
   There was this issue that i couldnot fix for past 2 days. Ofcourse i didnot fully commited to solve the problem. 
   The Ably: Auth.requestToken() was bugging me for a while in the production deployment. later after number of research and `chatgpt` i simply changed the env file with api key with the NEXT_PUBLIC_ prefix and it fixed all the issue.
   Let's create a blog writting tool where only i can login and write a blog.
3. create a login button ✅
4. create a login form
5. implement authentication
6. if authenticated, go to admin page
</details>
<details>
<summary>Day 9</summary>
Day began by implementing the authenticattion and successfully redirecting the user to the dashboard and protecting the dashboard page. I implemented NextAuth with Credentials Provider to authenticate the users. 
✅clientloginpage -> authorize() -> JWT based session -> dashboard
❌clientloginpage -> incorrect -> Nextauth(return null) -> loginpage with error

📝Note: I have to change the value of NEXTAUTH_URL in production environment

<!-- let's create a create blogs, create projects, and view messages in the dashboard page -->

since we already have message schema, let's see all the message.
I have implemented that, next challenge was to protect all the routes inside the dashboard. For that i used proxy.js which is a middleware for nextjs application. I can make use of withAuth middleware from nextjs and use that to create a proxy function that always run for the paths that are defined in the config for now they are dashboard page and the page with /api .
🔏 certain bits and pieces of the application

</details>
<details>
<summary>Day 10</summary>
Day 10 challenge will be to create a pagination and attaching caching to the server.
And also designing the contact me form, login form and home page.
</details>
<details>
<summary>Day 11</summary>
I started by asking chatgpt to create 10 different blogs and the titles accordingly and uploaded them to the website. now i need to create a pagination.
✅I created pagination after reading the documentation from the prisma website and now i am heading to create a redis website to implement the caching
✅Installed redis in the docker and accessed it in port 6379
✅Implemented redis get and set from the nextjs app, the idea of pagination will be added in the message section in admin dashboard again, but blogs i would just cover it as pagination however it is just serving from redis at the moment.
✅st
</details>
