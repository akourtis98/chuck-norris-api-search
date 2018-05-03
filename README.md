The task is to create a single page application that will consume the search endpoint of https://api.chucknorris.io.

## Requirements:
- The user should be able to type a query in a search box and see the list of results (only show the icon and value fields). 
- The app should not perform the search as the user types but when the user presses the enter key or clicks a button.
- The app should cache the results. If a query is submitted for more than once, then the app should not hit the api but should retrieve the results from its cache. 
- The user should be able to easily delete a specific query from the cache. 
- If the user restarts the browser, the cached queries and results should not be cleaned up.
- The application should be mobile-friendly.
- Reactjs and Redux should be used. All other decisions are up to the developer.