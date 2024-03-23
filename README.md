1. Use `yarn dev` to run the project.
2. Load the website using `http://localhost:3000`. The Amplitude page view event is triggered for home page.
3. Click the "About" link on the page, it redirect to About page and you will see the Amplitude page view event being triggered for about page.
4. Then click on the "Blog" link on the "About" page,you would land `/blog/hello-world` but no Amplitude page view event is triggered for that page.

Details about Blog page redirection :

We are using the Link component to redirect to the blog. Inside the getInitialProps of the blog page, we are redirecting to /blog/hello-world using router.replace.