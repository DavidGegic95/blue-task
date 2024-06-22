**NOTE**: The .env file is used to store the API_URL. **Please ensure that you add .env file and the according URL for the API in the .env file.**

For starting server use:

- npm run dev

For testing:

- npm test

### Solution

The solution to this problem involved caching retrieved data from the API in an in-memory cache using node-cache. Assuming that the data does not change often, with intervals ranging from 1 to 7 days, the cache duration is set to 24 hours. This approach is suitable for Node.js backend deployed in a non-stop running server architecture, and using services such as AWS EC2. Using FaaS such as AWS Lambda, Google Functions, or it's equivalent, might not be suitable for this scenario due to their nature, which could result in the loss of cached data between invocations. In such cases, it would be more suitable to use external caching solutions like Redis.

### Implementation Details:

### Cache Initialization on Server Startup:

On startup, the server retrieves data from the API, format, and stores it in the cache. This ensures that the server has the latest data available immediately upon startup.

### Refresh Mechanism:

To maintain relatively fresh data, we can implemented a refresh mechanism that runs every 23 hours. This mechanism retrieves new data from the API and updates the cache. This way, ensuring that there is no client API call lasting for ~10 seconds, as the cache is updated just before the expiration of the 24-hour period. For scheduling was used node-cron.

### Test:

Test is written for the formatData function to ensure that the data is correctly formatted according to the given example.
