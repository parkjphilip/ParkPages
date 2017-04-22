# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

user1 = User.create({username: "philip", password: "password123"});
guest = User.create({username: "guest", password: "password123"});

Park.create!({name: "Central Park", street: "123 Street Avenue", city: "Manhattan", state: "New York", zip_code: "12345", phone_number: "123456890"})
Park.create!({name: "Overpeck Park", street: "321 Overpeck Avenue", city: "Leonia", state: "New Jersey", zip_code: "07605", phone_number: "0987654321", photo_url: "/images/overpeck.jpg", website: "http://www.co.bergen.nj.us/841/Overpeck-County-Park"})
