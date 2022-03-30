# cloud server for manages messages
this program is written on node.js.

it manages messages and checks whether or not a message is a palindrome.

the app support the following operations follow RESTful design:
- Create, retrieve, update, and delete a message
- List messages
# manual

the table below shows the Instructions for using the app by the client app: which REST method to use, the URL and the body of the message.


|operation|REST method|URL|URL example|body|body example|
|---|---|---|---|---|---|
|create|post|/${ip}:${port}/api/isPalindromText|http://localhost:3000/api/isPalindromText|{"text": "${String}"}|{"text": "hello world"}|
|retrieve|get|/${ip}:${port}/api/posts/${id}|http://localhost:3000/api/posts/1|
|update|put|/${ip}:${port}/api/isPalindromText/${id}|http://localhost:3000/api/isPalindromText/1|{"text": "${String}"}|{"text": "radar"}|
|delete|delete|/${ip}:${port}/api/isPalindromText/${id}|http://localhost:3000/api/isPalindromText/1|
|retrieve the entier list message|get|/${ip}:${port}/api/isPalindromText|http://localhost:3000/api/isPalindromText|

# palindrom
the app checks the whether or not a message is a palindrome. the result saved as a boolyan property of the message.
the definition of palindrom refers to each character, so "abcdcba" is a palindrom, but "PULL AP" is not. if you want, you can change the code to make it count, by use two pointers that skip a character when it is white.
the empty string, "", is palindrom.
