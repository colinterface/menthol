# menthol
A fun little command line tool for seeing how much money you have. Uses [pepper-mint](https://github.com/dhleong/pepper-mint) to access your mint account and displays the total of all account ballances (including credit cards if you want). Allows you to set a goal amount and displays the percentage of the goal represented by your balance.

If you wanna be really cool you can use an alias to run it. Just open up ` ~/.bash_profile` and add this line using your chosen alias and the correct path to the menthol directory.
```
alias money='node /Users/coolperson/menthol/menthol.js'
```
Save the file and make bash aware of the changes by executing it with `source ~/.bash_profile`

Now you can just do `money` from any directory and the code will run.
