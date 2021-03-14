# requirement
- nodejs
- npm install
- node app.js


# database design PRD

## Users
- _id(pk)
- name
- email
- auth_token

## Excercises
- _id(pk)
- name
- user_id(fk)
- used_weight
- used_times

## Records
- _id(pk)
- timestamp
- user_id(fk)
- exercise_id(fk)
- weight
- times