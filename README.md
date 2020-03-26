# noDB Credit Card Getter
<hr/>

## Frontend Checklist
- reset.css
- change page title
- take a nice pic of myself with treasures

### package-json setup
- add proxy
- add main property (main property is what gives nodemon a target)

### dependencies
- axios

### folder structure
- src/
    - App.js => class component with state
    - components/
        - SubmitCard.js (this is where you submit your card info)
        - ListCard.js (this is where received credit cards are displayed)
        - DeleteCard.js (this is the button to delete a submitted card)
        - UpdateCard.js (this updates the remaining balance on the card)
        - Progress.js (this will display my progress toward more treasures in some way)
<hr/>

## Backend Checklist

### dependencies
- express

### server folder structure
- server/
    - index.js
    - controller/
        - CardController.js

### endpoints

- get: "/api/cards"
- get: "/api/progress"
- post: "/api/add_card"
- put: "/api/update_balance" (this will update remaining balance or credit on the card)
- delete: "/api/delete_card"

### data
```js
// How will we structure our data?
{
    "id": "1",
    "card": "card number",
    "balance": "dollar amount"
}
```# nodb-project
