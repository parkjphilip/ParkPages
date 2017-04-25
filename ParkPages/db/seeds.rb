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
              city: "Manhattan", state: "New York", zip_code: "10024", phone_number: "(212) 310-6600",
              image: File.open("app/assets/images/centralpark.jpg"), website: "https://www.nycgovparks.org/parks/central-park"})
park2 = Park.create!({name: "Overpeck Park", street: "321 Overpeck Avenue",
              city: "Leonia", state: "New Jersey", zip_code: "07605", phone_number: "(201) 336-7275",
              image: File.open("app/assets/images/overpeck.jpg"), website: "http://www.co.bergen.nj.us/841/Overpeck-County-Park"})
park3 = Park.create!({name: "Wood Park", street: "370 Broad Avenue",
              city: "Leonia", state: "New Jersey", zip_code: "07605", phone_number: "(201) 592-5783",
              image: File.open("app/assets/images/woodpark.jpg"), website: "http://www.leonianj.gov/content/Parks.aspx"})
park4 = Park.create!({name: "Overpeck County Dog Park", street: "Fort Lee Road",
              city: "Leonia", state: "New Jersey", zip_code: "07605", phone_number: "(201) 592-5783",
              image: File.open("app/assets/images/overpeckdog.jpg"), website: "http://www.leonianj.gov/content/Parks.aspx"})
park5 = Park.create!({name: "Brooklyn Bridge Park", street: "334 Furman St",
              city: "Brooklyn", state: "New York", zip_code: "11201", phone_number: "(718) 222-9939",
              image: File.open("app/assets/images/brooklynbridge.jpg"), website: "http://www.brooklynbridgepark.org/"})
park6 = Park.create!({name: "Gantry Plaza State Park", street: "474 48th Ave",
              city: "Long Island City", state: "New York", zip_code: "11101", phone_number: "(718) 786-6385",
              image: File.open("app/assets/images/gantryplaza.jpg"), website: "https://parks.ny.gov/parks/149/details.aspx/"})
park7 = Park.create!({name: "Prospect Park", street: "95 Prospect Park W",
              city: "Brooklyn", state: "New York", zip_code: "11215", phone_number: "(718) 965-8951",
              image: File.open("app/assets/images/prospect.jpg"), website: "https://www.prospectpark.org/"})
park8 = Park.create!({name: "Astoria Park", street: "Astoria Park",
              city: "Astoria", state: "New York", zip_code: "11102", phone_number: "(212) 639-9675",
              image: File.open("app/assets/images/astoria.jpg"), website: "https://www.nycgovparks.org/parks/astoria-park"})
park9 = Park.create!({name: "Teardrop Park", street: "Warren St",
              city: "New York", state: "New York", zip_code: "10005", phone_number: "(212) 267-9700",
              image: File.open("app/assets/images/teardrop.jpg"), website: "http://bpcparks.org/whats-here/parks/teardrop-park/"})


tag1 = Tag.create!({tag_name: "Basketball"})
tag2 = Tag.create!({tag_name: "Tennis"})
tag3 = Tag.create!({tag_name: "Baseball"})
tag4 = Tag.create!({tag_name: "Volleyball"})
tag5 = Tag.create!({tag_name: "Football"})

tag6 = Tag.create!({tag_name: "Soccer"})
tag7 = Tag.create!({tag_name: "Hockey"})
tag8 = Tag.create!({tag_name: "Jogging"})
tag9 = Tag.create!({tag_name: "Fishing"})
tag10 = Tag.create!({tag_name: "Track"})

tag11 = Tag.create!({tag_name: "Hiking"})
tag12 = Tag.create!({tag_name: "Relaxing"})
tag13 = Tag.create!({tag_name: "People-watching"})
tag14 = Tag.create!({tag_name: "Playground"})
tag15 = Tag.create!({tag_name: "Zoo"})

tag16 = Tag.create!({tag_name: "Barbecue"})
tag17 = Tag.create!({tag_name: "Skate-park"})
tag18 = Tag.create!({tag_name: "Horse-riding"})
tag19 = Tag.create!({tag_name: "Pool"})
tag20 = Tag.create!({tag_name: "Dog"})

tag21 = Tag.create!({tag_name: "Sight-seeing"})


park1.tag_ids = [8, 12, 13, 15] #central park
park2.tag_ids = [2, 3, 4, 6, 8, 10, 16] #overpeck park
park3.tag_ids = [1, 2, 14, 20] #wood park
park4.tag_ids = [20] #overpeck dog park
park5.tag_ids = [12, 13, 21] #brooklyn bridge park
park6.tag_ids = [9, 12, 13, 21] #gantry plaza state park
park7.tag_ids = [1, 3, 9, 16, 17, 18] #prospect park
park8.tag_ids = [1, 2, 11, 14, 19] #astoria park
park9.tag_ids = [11, 14] #teardrop park


park1review1 = Review.create!({user_id: 1, park_id: 1, rating: 4, body: "PARK 1 REVIEW 1"})
park1review2 = Review.create!({user_id: 1, park_id: 1, rating: 5, body: "PARK 1 REVIEW 2"})
park1review3 = Review.create!({user_id: 2, park_id: 1, rating: 3, body: "PARK 1 REVIEW 3"})
park1review4 = Review.create!({user_id: 2, park_id: 1, rating: 4, body: "PARK 1 REVIEW 4"})
park1review5 = Review.create!({user_id: 2, park_id: 1, rating: 5, body: "PARK 1 REVIEW 5"})

park1review5 = Review.create!({user_id: 1, park_id: 2, rating: 1, body: "PARK 2 REVIEW 5"})
park1review5 = Review.create!({user_id: 1, park_id: 2, rating: 2, body: "PARK 2 REVIEW 5"})
park1review5 = Review.create!({user_id: 2, park_id: 2, rating: 3, body: "PARK 2 REVIEW 5"})
park1review5 = Review.create!({user_id: 2, park_id: 2, rating: 4, body: "PARK 2 REVIEW 5"})
park1review5 = Review.create!({user_id: 2, park_id: 2, rating: 5, body: "PARK 2 REVIEW 5"})
