# menthol
a fun little command line tool for seeing how much money you have

- Uses [pepper-mint](https://github.com/dhleong/pepper-mint) to access your mint account and displays the total
- Allows you to set a goal amount and displays your percentage


If you wanna be really cool you can use an alias to run it. Just open up ` ~/.bash_profile` and add this line using the correct path to the menthol directory.
```
alias money='node /Users/coolperson/menthol/menthol.js'
```
Then run `source ~/.bash_profile`

Now you can just enter `money` from any directory and the code will run.
