# Axios HTTP Requests with Async/Await

Welcome to a quick and effective guide on using **Axios** for handling HTTP requests in JavaScript applications with the power of `async/await`. Below, you'll find practical examples of common operations (GET, POST, PUT, DELETE) made simple.

## 🚀 Getting Started

### 1. Install Axios

Ensure you have `axios` installed in your project. If not, you can add it using:

```bash
npm install axios
# or
yarn add axios
```

---

## 📋 Examples

### 1. GET Request - Fetching Data

```javascript
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data); // Displays fetched data
  } catch (error) {
    console.error('Error fetching data:', error); // Handles error
  }
};

fetchData();
```

**Description**: This request fetches data from an endpoint and logs it to the console. Great for retrieving lists or collections!

---

### 2. POST Request - Sending Data

```javascript
import axios from 'axios';

const postData = async () => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'My Post',
      body: 'This is the content',
      userId: 1
    });
    console.log(response.data); // Logs the response data
  } catch (error) {
    console.error('Error posting data:', error); // Handles error
  }
};

postData();
```

**Description**: This example demonstrates creating a new resource by sending data to the server.

---

### 3. PUT Request - Updating Data

```javascript
import axios from 'axios';

const updateData = async (id) => {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title: 'Updated Title',
      body: 'Updated content'
    });
    console.log(response.data); // Logs the updated data
  } catch (error) {
    console.error('Error updating data:', error); // Handles error
  }
};

updateData(1);
```

**Description**: This `PUT` request modifies existing data identified by its `id`. Useful for editing or replacing resources.

---

### 4. DELETE Request - Removing Data

```javascript
import axios from 'axios';

const deleteData = async (id) => {
  try {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log('Deleted:', response.data); // Logs response after deletion
  } catch (error) {
    console.error('Error deleting data:', error); // Handles error
  }
};

deleteData(1);
```

**Description**: This request deletes data from the server. It uses the `id` to identify the resource to be removed.

---

## 🛠️ Tips & Best Practices

- **Error Handling**: Always wrap requests in `try-catch` blocks to catch and handle errors gracefully.
- **URL Parameters**: You can dynamically change URL parameters (e.g., using `id`).
- **Custom Headers**: You can pass headers and other configurations as needed.
  ```javascript
  axios.get('https://api.example.com/data', {
    headers: {
      'Authorization': 'Bearer your_token_here',
      'Content-Type': 'application/json'
    }
  });
  ```
- **Interceptors**: `Axios` supports interceptors for requests and responses, useful for logging, error handling, and token management.

---

## 📚 Additional Resources

- [Axios Documentation](https://axios-http.com/docs/intro)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

Happy coding with Axios! 🚀

--- 

This README provides a clear, step-by-step guide with well-commented examples, making it engaging and easy to follow for developers looking to use `Axios` effectively with `async/await`.