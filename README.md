# React Exercise with React Query and Typescript



## Specification

Write two functional components to display a list broken into pages that are traversable via a list of clickable page numbers below the list. The first component — the parent component — should fetch a list of users and conditionally render a loading status or the next component, the actual list generated from the data. The user array fetched in the parent component should be passed to the child component as a prop along with the number of items that should be displayed on each page. The child component should display the first page of items and clickable links to the remaining pages of users. Here is an image of the final product:
![image](https://user-images.githubusercontent.com/44669565/212493106-38c39eca-8f16-458b-bebb-5c22051bb3f9.png)

In the image above, the “itemsPerPage” prop is set to 5. You may fetch users from randomuser.me, a free API that provides random user data. To query the API, issue a get request to https://randomuser.me/api and include the number of users that you would like returned as a query parameter. For example, issuing a get request to the following URL will return a list of 19 users: https://randomuser.me/api?results=19. The solution I provide later on uses the axios library to issue the request, but you may use fetch or any library that you are comfortable with to issue the request. The object returned by the request takes the following form (in this case, the results parameter was set to 1):
```
{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Gustav",
        "last": "Christiansen"
      },
      "location": {
        "street": {
          "number": 64,
          "name": "Skovbrynet"
        },
        "city": "Askeby",
        "state": "Danmark",
        "country": "Denmark",
        "postcode": 67407,
        "coordinates": {
          "latitude": "-36.0259",
          "longitude": "-50.4015"
        },
        "timezone": {
          "offset": "0:00",
          "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      "email": "gustav.christiansen@example.com",
      "login": {
        "uuid": "5160b12a-bcd1-4e33-94e2-03a6a1a88364",
        "username": "tinydog101",
        "password": "deluxe",
        "salt": "TVZh5olg",
        "md5": "779faf341daac5cebb4033a49e492def",
        "sha1": "d96ff3e60731a11aa8550be0d655dc1361051e4b",
        "sha256": "4216310874a49ce2ddf9bee9fc3803e55558fa209cf602c4b388182b1445134d"
      },
      "dob": {
        "date": "1957-05-22T19:09:09.258Z",
        "age": 65
      },
      "registered": {
        "date": "2013-03-10T08:23:54.944Z",
        "age": 9
      },
      "phone": "61655243",
      "cell": "92661700",
      "id": {
        "name": "CPR",
        "value": "220557-1358"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/43.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/43.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/43.jpg"
      },
      "nat": "DK"
    }
  ],
  "info": {
    "seed": "06d65bd1ae788c54",
    "results": 1,
    "page": 1,
    "version": "1.3"
  }
}
```

I also encourage you to try the API in your browser and observe the structure of the result; it may be helpful to specify an additional query parameter, “format=pretty”, so that the response is more readable. The parent component that fetches the random users should clean the data before passing it to the child component. The cleaned prop passed to the child component should be an array of objects, each of which contains the name, age, and email of a user. The name should be aggregated from the name pieces that are separated in the result of the request. For clarity, the cleaned version of the array above would
```
[
  {
    "name": "Gustav Christiansen",
    "age": 5,
    "email": "gustav.christiansen@example.com"
  }
]
```

The child component should not rely on this structure, however. It may only assume that the prop is an array of objects with no nested objects, and it should render a row of column titles from the field titles of the objects. The rows following the title row should include the actual user data.
