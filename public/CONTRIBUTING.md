This guide will maintain our styling standards for our Data Visualisation project. We will stick to this not only within our group components, but our individual components too. Thank you to everyone who has contributed to this document and finalising a style guide we are happy with and comfortable to stick to.

We appreciate anyone who is taking the time to read our contributing file -  we look forward to seeing your contributions and feedback.




# General
 
* Prefer single quotes over double quotes
```
Do this   ‘Comment’
Not this  “Comment”                               
```
* Acknowledge all third party scripts using comments 
* Function and variables names should be logical and descriptive
```
Do this   ‘AddListItem’
Not this  ‘ListItem”
```
* Use the DRY principle, no repetition
* Minimize the use of global variable
* Keep the line length under 80 spaces

# Formatting
* Scoped Vue Styles
```
 <style scoped>
</style>
```
* Block comment Style 
```
 /*
 * This is fIne 
 */ and 
 // This is fine. 
```
 * Don’t have large spaces in code
* Always use semicolons
```
Do this   function (name){}; 
Not this  function (name){}
```
* Single-file components should always order <template>, <script> and <style> tags consistently, with <style> last, because at least one of the other two is always necessary
* The attributes of elements (including components) should be ordered consistently
* Keep spaces around operators
```
Do this  a > b
Not this  a>b
```

* Place the opening bracket on the same line as the object name
```
Do this   function (name){}; 
Not this  function (name)
          {};
```
# Naming conventions
* Component names should always be multi-word
```
Do this   todo-item / TodoItem
Not this  todo
```
* Keep const values in upper case
```
Do this  const EXAMPLE_VALUE
Not this  const example_value
```
* Order of words in component names 
```
Do this  SearchButtonClear / SearchButtonRun
Not this  ClearSearchButton
```
* Use UpperCamelCase when creating component files.
```
Do this   ComponentName
Not this  componentname
```
* Use camelCase when naming objects and functions, or hyphenation when using JS
```
Do this   functionName / function-name
Not this  functionname
```

In the interest of having an open and welcoming environment, we are committed to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

# Rules and regulations of behaviour
* Examples of behavior that contributes to creating a positive environment include:
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members
* Examples of unacceptable behavior by participants include:
* The use of sexualized language or imagery and unwelcome sexual attention or advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a professional setting

 
