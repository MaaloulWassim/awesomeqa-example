# Awesome ticket challenge

### Backend

# Configure the Environment:

Create a '.env' file in the root directory and add the following content to the '.env' file:
 
 TICKET_FILEPATH=./path/to/awesome_tickets.json

# Endpoints
-Health Check:

URL: http://localhost:5001/healthz

-Get Tickets:

URL: http://localhost:5001/tickets
Method: GET
Query Parameters:
start (Optional): Start index for pagination (default is 0).
stop (Optional): Stop index for pagination (default is 20).

# Notes

The .env file contains configuration variables, including the path to the JSON file.
Ensure that the JSON file (awesome_tickets.json) is correctly formatted and located at the specified path.