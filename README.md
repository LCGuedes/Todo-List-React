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

- - - - - - - - - - - - - - - - - - - -  - - - -  - - - - - - - - - - - - - - - - - - - - - - - - -

    1) Lifting state up:

    For every child component that will be accessing the data, we will need to declare the shared state in their closest common parent. For this reason, the shared state data will live in the Container component, which is their closest common parent. This parent component can then pass the state back to the children by using props. This is what we call “Lifting state up” and then having a “top-down” data flow.
    Instead of declaring a shared state in the parent component as mentioned above, an alternative is to use the Context API to manage the state data.

    2) Prop dilling:

    3) Handling Events:

        - Container is the one that holds the state data. This component is the ONLY one that can change it. Meaning the ItemList component, which is the one handling the checkboxes, cannot change the state data in the parent component.
        - We need to find a way to access the state data from the ItemList and toggle the completed value to true or false in the Container component. To do this, we will need to raise an event from the ItemList up a level to List, and then into Container component. In other words, we need to climb a ladder.
        - The ItemList component will raise the event while the parent component, Container will handle the event. And the way we do that is through props. The ToggleBox do that.

        Como a função ToggleBox funciona: 


