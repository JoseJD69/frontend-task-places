This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
## Configuration
- Create a .env.local file in the root directory of the project.
- Add the following variables to the .env.local file:
```
NEXT_PUBLIC_GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY
NEXT_PUBLIC_GOOGLE_API_URL=https://maps.googleapis.com/maps/api/place/nearbysearch/json
```


## Comments
- I used Next.js because it is a framework that I am familiar with and it is easy to use.
- I used Redux for state management because it is easy to use and it is a good practice to use it in a big project.
- I used PrimeReact for the UI components because it is easy to use and it has a lot of components that I can use.
- I used API Routes to fetch the data from Google Places API because I have problems with CORS when I fetch the data from the client side.
