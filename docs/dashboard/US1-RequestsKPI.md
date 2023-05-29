### Story
As a regular user, I want to be able to see the **total number of pending requests** for **each request family** in which I am **allowed to access**.


### Role
Regular User.


### Precondition
1. User already logged in to SARA as `REGULAR USER`.
2. User is allowed to access the `Main Dashboard` page.

### Trigger
User opens the Main Dashboard page.

### Normal Flow
1. Browser **checks** if the **data** (*total number of pending requests for each request family*) has been stored on the `KPI Store`.
2. If the data has not been stored on the `KPI Store`, the **Subflow S-1** is performed.
3. Browser prepares the data from `KPI Stor` to be **displayed on boxes** for each request family.
4. Browser shows the **total number of pending requests** in **boxes** for each request family.
5. User see the **KPI boxes** containing the number of pending requests for each request family.

### Subflow
**S-1: Retrieve Data From Server**
1. Browser **sends an HTTP request** to the server to retrieve the total number of pending requests for each request family.
2. Server reads the data from the **MySQL** to get the **total numbers of pending requests** for each request family in which the user is **allowed to access**.
3. Server sends the data back to the browser.
4. Browser stores the data sent by the server on the `KPI Store`.
5. Continue to **#3 of Normal Flow**

### Alternate Flow
N/A.