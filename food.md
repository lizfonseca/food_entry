#Daily Food Journal
The user can keep a simple journal of the food they eat.

This app can carry out 2 commands:

**1. Create**

The user makes a new entry by providing their name, current date, snack, meal, and drink.

>The user must provide their name in order to create a new food entry or access old ones.

If something is missing, they will receive an error message.

```bash
client.write("Uh oh, don't forget to add all of your info!
'entry date' snack' 'meal' 'drink' \n");
```
If everything is filled in properly, they will be notified as well.

```bash
client.write("New entry created! \n")
```

**2. View**

The user can look at their archives through this function. Each entry with their respective details will be displayed.

If there are no existing entries under the user's account, they will be notified.

```bash
client.write("No entries found. Dogs must have eaten them.")
```


---

If the user tries to command the program to run a different function, they will receive an error message.

 ```bash
 client.write("Nice try Booboo. Please use the following commands: 'create' 'view'")
 ```
