Components:

    1) container: Closest common parent that will host the data (central location).

    2) Input:

        - Takes the responsibility of accepting the user's input then we pass to a central location when we can manange it.

    3) List:

        - Will be accessing the data (user's input) and display its Items List.
        - Has the responsibility to handle the Item list. This is where we will apply the knowledge of props.
        - What we want to do is to pass the state data from the Container down to the List child component.

    4) ItemList:

        -component (which holds the checkbox and delete button) will be accessing the data to update the checkbox, update edited items and also remove items from the state.
        - By default, the input type (checkboxes) are being handled by the DOM – i.e they have the default HTML behaviour. That is why we can toggle the boxes. This type of input is called uncontrolled input. But this is not the case with React. The input fields are meant to be controlled.
        - To make the input field controllable, the input data (in this case, toggling of the checkbox) has to be handled by the component state and not the browser DOM. With this, the state will serve as a Single Source of Truth. Meaning, the input checkbox would no longer listens to its internal state (i.e the browser DOM) but the state in our app. This is necessary because the component state will not change unless you change it. To do it we use checked prop in the input.
        - React is telling us to add an onChange handler to keep track of any changes in the field. Else, it wouldn’t know if the input field is checked or not. we want to toggle the checkboxes anytime they are being clicked. To do this, we need to understand how to raise and handle events.

        - toggle checkbox using map();
        - Delete button using filter()

- - - - - - - - - - - - - - - - - - - -  - - - -  - - - - - - - - - - - - - - - - - - - - - - - 

    1) Lifting state up:

    For every child component that will be accessing the data, we will need to declare the shared state in their closest common parent. For this reason, the shared state data will live in the Container component, which is their closest common parent. This parent component can then pass the state back to the children by using props. This is what we call “Lifting state up” and then having a “top-down” data flow.
    Instead of declaring a shared state in the parent component as mentioned above, an alternative is to use the Context API to manage the state data.

    2) Prop dilling:

    3) Handling Events:

        - Container is the one that holds the state data. This component is the ONLY one that can change it. Meaning the ItemList component, which is the one handling the checkboxes, cannot change the state data in the parent component.
        - We need to find a way to access the state data from the ItemList and toggle the completed value to true or false in the Container component. To do this, we will need to raise an event from the ItemList up a level to List, and then into Container component. In other words, we need to climb a ladder.
        - The ItemList component will raise the event while the parent component, Container will handle the event. And the way we do that is through props. The ToggleBox do that.

        Como a função ToggleBox funciona: 


- - - - - - - - - - - - - - - - - - - -  - - - -  - - - - - - - - - - - - - - - - - - - - - - - 

    WEB STORAGE API:

            Web browsers have a storage unit for every website or application where we can store data. From this storage, we can also retrieve or delete the data. Now, to have access to this storage, the browser provides for us, the Storage API mechanism that allows us to interact with the data. These mechanisms are Local Storage and Session Storage.

The Session storage as the name implies allows us to store data that persists throughout the session. That is, as long as the current browser tab remains active.

On the other hand, the data stored in the Local Storage has no expiration date. The data will not be erased when the browser is closed and it is shared between all windows with the same origin.

Same-origin here implies – same domain (example.com); same protocol (either HTTP or HTTPS) and same port (for instance, port 80 which handles HTTP request exclusively). The URL path can be different.

console -> localStorage -> prototype -> setItem:

    localStorage.setItem("key", "value")

    We use this method to add an item to the Storage object. This method accepts two arguments – the key name and value. We use this method to add an item to the Storage object. This method accepts two arguments – the key name and value.

The storage only accepts strings for both the keys and the values. It converts other data types like the Number and Boolean to string automatically.  Most of the time, we work with a JavaScript object. In this case, use JSON to exchange this data type to/from the local storage. Use JSON.stringify() method to convert the JavaScript object to a JSON string. To retrieve the data and use in your application, you’ll need to re-convert it back to object.

2) localStorage.getItem("key").

    To retrieve or read data from the local storage.

Exemple: 

    const obj = {
        id: 1,
        title: "Setup development environment",
        completed: true,
    };

    localStorage.setItem("myItem", JSON.stringify(obj));

JSON.stringify(obj) converts the object to JSON string that the storage can handle.

    localStorage.getItem("myItem");

We’ll receive your data in the JSON format. The storage always returns a string. So we need to make use of the JSON.parse() method to parse the string and returns a JavaScript object.

    JSON.parse(localStorage.getItem("myItem"));

3) Removing data from local storage

    There are two methods available on the localStorage object that allows us to remove item(s) from the storage. The removeItem() and clear() methods. These methods remove an item and clear the storage respectively.

    localStorage.removeItem("key");
    localStorage.clear();

4) Fetching data from a remote endpoint

    In our todos app, we can make all sort of HTTP request (like GET, POST or DELETE data) to and from a remote endpoint. So instead of manually adding the default to-dos items, we can request the data from the server and list them on the frontend.

We can get this data from any backend, but here, we will make use of a free online REST API called JSONPlaceholder. It allows us to mimic a real live server and have a backend to work with. From there, we can get a list of fake todos items into our to-dos app.

To fetch the data, we will make use of the fetch() method from the native Fetch API to perform this request and handles the responses. We can also make use of a library like Axios to do the same.

useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => response.json())
            .then(data => setState({Items: data}));
    }, []);

    This is the simplest use of the fetch() method.

 We already know that when the component gets rendered to the DOM, whatever is placed in the useEffect() hook gets executed. We started by making a request to the specified URL. This then returns a promise containing an HTTP response. The data here is not useful to us. So we resolved the response to JSON format where we then receive the data in the format we can work with.

In the same way, you can use the fetch() method to make a post and delete request to the JSONPlaceholder or whatever backend.

5) Persisting the todos data to local storage

We will saving and retrieving data from the browser storage. Whenever our application mounts on the screen and the user interact with the app by inputting the to-dos data, we will save the to-dos item(s) in the local storage.

However, on component mounts (i.e on page reload or on a subsequent visit), we will check if there are to-dos items present in the local storage, then, we grab them.

----------------------------------------------------------------------

PASSOS: 

1) GET THE DATA FROM LOCAL STORAGE:

We want to get the data from the local storage when the component mounts the screen.

    1.1) useEffect hook:

        useEffect(() => {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)

        if (loadedTodos) {
            setTodos(loadedTodos)
        }
        }, [])

    1.2) componentDidMount() method:

        componentDidMount() {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
            this.setState({
            todos: loadedTodos
            })
        }
        }

--------------------------------------------------------------

    2) GUARDANDO DADOS NO LOCAL STORAGE

    2.1) 

        useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
        }, [todos])

    2.2)

        componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos) {
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos", temp)
        }
        }



