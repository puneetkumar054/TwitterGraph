# TwitterGraph

## About the TwitterGraph
    1. First page will be asking for any twitter handle which is available on twitter. 
    2. This will show your 10 tweets and graph of current week (10 visible data)  with infinite scrolling.

## Development server

Run `node app.js 'or' nodemon app.js` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Program Stacks 
    1. Node: 12.18.3

## Credentials of twitter
    1. Make an account on twitter.
    2. Make developer account on twitter : https://developer.twitter.com/en/application/use-case ->Exploring the API -> Next -> proceed according your choice
    3. After all of this you will get :-
        Api Key : jazWnXXXXXXXXXXXXXX
        Api Secret Key : r0EVzXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        Bearer Token : AAAAAAAAAAAAAAAAAAAAAAj%2B######################################################################################
    4. Done.

## How To Setup TwitterGraph
    1. Download (clone / download as zip) the repository using 
        i.>Run : clone git clone  https://github.com/puneetkumar054/TwitterGraph
            OR
        ii.> download as zip by going on repository and extract the zip on system

    2. Go into the directory by - Run: cd TwitterGraph 'OR' cd TwitterGraph-master.

    3.Install all the dependency by- Run: npm i 

    4. Set all twitter credentials in .env file on going in project folder        
            SERVER_HOST=localhost
            SERVER_PORT=3000
            API_KEY=jazWnXXXXXXXXXXXXXX
            API_SECRET_KEY=r0EVzXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            BEARER_TOKEN=AAAAAAAAAAAAAAAAAAAAAAj%2B######################################################################################
            TWITTER_API=https://api.twitter.com/1.1/statuses/user_timeline.json  

    5.Run the project by - 
        i.> Run on local by - Run: node app.js 'OR' nodemon app.js

    6. Goto any browser and hit the url : http:// hostname : port
        i.> for local: http://localhost:3000