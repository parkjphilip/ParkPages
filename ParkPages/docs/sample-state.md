```js
{
  session: {
    currentUser: {
      id: 1,
      username: "philippark"
    },
    errors: []
  },
  parks: {
    1: {
      id: 1,
      name: "Test Park",
      street: "123 Test Avenue",  
      city: "Test City",
      state: "Test State",
      zip_code: "12345",
      phone_number: "123-456-7890",
      website: "testpark.com",
      photo_url: "testpark.com/images/123"
      lat_coordinate: 12.1234,
      long_coordinate: 123.12345,    
    }
  }
  reviews: [
    {
      id: 1,             
      rating: 4,
      body: "This park is a very good park. Great for dog-walking...",
      user_id: 1,
      park_id: 1
      photos: [
        {
          id: 1,
          image_url: "testpicture.com"
        }
      ]
    }
<<<<<<< HEAD
  }
  photos: {
    1: {
      id: 1,
      review_id: 1,
      // park_id: 1,
      // user_id: 1,
      // image_url: "testpicture.com"
    }
  }
=======
  ]
>>>>>>> 9d520beae7d419c589138ba5732170d6f9bf884a
}
```
