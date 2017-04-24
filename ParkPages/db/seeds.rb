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

park1 = Park.create!({name: "Central Park", street: "5th Ave to Central Park West, 59th Street to 110 Street",
              city: "Manhattan", state: "New York", zip_code: "10024", phone_number: "(212-310-6600)",
              image: File.open("app/assets/images/centralpark.jpg"), website: "https://www.nycgovparks.org/parks/central-park"})
park2 = Park.create!({name: "Overpeck Park", street: "321 Overpeck Avenue",
              city: "Leonia", state: "New Jersey", zip_code: "07605", phone_number: "(201)-336-7275",
              image: File.open("app/assets/images/overpeck.jpg"), website: "http://www.co.bergen.nj.us/841/Overpeck-County-Park"})
park3 = Park.create!({name: "Wood Park", street: "370 Broad Avenue",
              city: "Leonia", state: "New Jersey", zip_code: "07605", phone_number: "(201)-592-5783",
              image: File.open("app/assets/images/woodpark.jpg"), website: "http://www.leonianj.gov/content/Parks.aspx"})

tag1 = Tag.create!({tag_name: "basketball"})
tag2 = Tag.create!({tag_name: "tennis"})
tag3 = Tag.create!({tag_name: "jogging"})
tag4 = Tag.create!({tag_name: "relaxing"})
tag5 = Tag.create!({tag_name: "people-watching"})
tag6 = Tag.create!({tag_name: "playground"})

tagging1 = Tagging.create!({park_id: 1, tag_id: 3})
tagging2 = Tagging.create!({park_id: 1, tag_id: 4})
tagging3 = Tagging.create!({park_id: 1, tag_id: 5})

tagging4 = Tagging.create!({park_id: 2, tag_id: 2})
tagging5 = Tagging.create!({park_id: 2, tag_id: 3})
tagging6 = Tagging.create!({park_id: 2, tag_id: 6})

tagging7 = Tagging.create!({park_id: 3, tag_id: 1})
tagging8 = Tagging.create!({park_id: 3, tag_id: 2})
tagging9 = Tagging.create!({park_id: 3, tag_id: 6})
