# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
first_name      | string    | not null
last_name       | string    | not null
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, unique

has_many :reviews
has_many :photos

## parks
column names    | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed
street          | string    | not null
city            | string    | not null
state           | string    | not null
zip_code        | string    | not null
phone_number    | string    | not null
website         | string    |
photo_url       | string    | not null
latitude        | float     | not null
longitude       | float     | not null

has_many :reviews
has_many :photos

## reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
rating          | integer   | not null, minimum 1, maximum 5
body            | string    | not null
user_id         | integer   | not null, foreign key (references users), indexed
park_id         | integer   | not null, foreign key (references parks), indexed  

belongs_to :user
belongs_to :park
has_many :photos


## photos
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
review_id     | integer   | not null, foreign key (references reviews)
<!-- user_id       | integer   | not null, foreign key (references users) -->
<!-- park_id       | integer   | not null, foreign key (references parks) -->
<!-- image_url     | string    | not null -->


belongs_to :user
belongs_to :park
belongs_to :review
