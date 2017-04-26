# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

user1 = User.create({username: "guest", password: "password123"});
user2 = User.create({username: "philip", password: "password123"});
user3 = User.create({username: "alex", password: "password123"});
user4 = User.create({username: "alan", password: "password123"});
user5 = User.create({username: "michelle", password: "password123"});
user6 = User.create({username: "jane", password: "password123"});
user7 = User.create({username: "tyreke", password: "password123"});
user8 = User.create({username: "damian", password: "password123"});
user9 = User.create({username: "jessica", password: "password123"});
user10 = User.create({username: "ashley", password: "password123"});

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


park1review1 = Review.create!({user_id: 2, park_id: 1, rating: 4, body: "What more can I say about the world's greatest park.. 2.5 miles of rocky hills, lakes and lawns fenced in by NYC skyscrapers!

It's an absolute must-see for everyone and worth a trip all by itself into the Big Apple!  There's a children's zoo in there, art museums, in addition to hiking trails and breathtaking scenery! Strangely it's almost as if it's one of the wonders of the world!"})
park1review2 = Review.create!({user_id: 3, park_id: 1, rating: 5, body: "I could literally spend a whole day here!  I have heard that certain parts of Central Park could be a dangerous place come night time, but I went during the day and luckily didn't run into anything even remotely dangerous or questionable.  The sun was out, the dogs were playing, and the views were gorgeous at every corner of our stroll.  The calm, serene atmosphere around this iconic park was a nice break from the rush-hour feel and non-stop walking of the city.  "})
park1review3 = Review.create!({user_id: 4, park_id: 1, rating: 5, body: "On a Sunday late afternoon, after visiting the American Museum Of Natural History (which is right in front of this gigantic park), my husband and I decided to walk across the street to this park.

Even though there was still snow on the ground (the majority of it was already cleared away so that you can can walk along some of the sidewalk paths), it did not stop visitors from walking around this park. Some with strollers, some with their 4 legged little friends (my cousin's kids begged me to dog sit our dog while we were visiting the museum so unfortunately she did not get the chance to walk around with us), some with families, etc. "})
park1review4 = Review.create!({user_id: 5, park_id: 1, rating: 4, body: "Great place for people watching! The zoo is small but is worth a stop if you enjoy that sort of thing, $18 for adults. Check the times of operation before you go, though. We also really enjoyed all the musicians in the park. Beware of pick pocketers and people trying to sell you things"})
park1review5 = Review.create!({user_id: 6, park_id: 1, rating: 5, body: "Oh, central park! Who doesn't like it, who? It is definitely a mesmerizing place. I have visited Central park several times and I fell in love with it everytime. Last time I went it was mid winter. It was foggy and surprisingly not horribly cold. I went with a friend and we walked the whole park. The lakes were defrosting and the little creatures, that call central park home, were starting to explore the areas again, watching every person very carefully."})

park2review1 = Review.create!({user_id: 10, park_id: 2, rating: 4, body: "Gorgeous park with tons of activities!
Thanks to the Bergen County government, this park has been hugely expanded in recent years.

My personal favorite thing to do there is the very inexpensive kayak rentals--they've also got canoes and paddleboats--that you can take out on the lake."})
park2review2 = Review.create!({user_id: 9, park_id: 2, rating: 4, body: "This park is HUUUUGGGEE!

So much to see and do. There's playscapes for kids, walking/biking/roller blading paths that seem to go on forever, tennis courts, soccer fields, baseball fields, picnic tables, and even a place to rent kayaks if you wanna go for a row. Plenty of wildlife to spot, as well as other lovely views such as ponds and rivers."})
park2review3 = Review.create!({user_id: 8, park_id: 2, rating: 4, body: "Tennis at the park. There are two areas ( Leona and Ridgefield ) to play both are in good to great condition! The park should be a prototype for all county parks in Bergen County. Mainly because people are happily making good use of the green w blue (perfect choice for line calls) Hard surface courts. Why because of the design effort and integrity ....build it and they will come. Multi racial mix of people make for a extra special spice to friendly competitive games. For the most part you can just show up and get a workout. Levels are 3.3 to 4.5. , A blessed scene... great landscape and sky scape... with a afternoon river wind Kiss. Leona side for pick up games . Ridgefield BYO people."})
park2review4 = Review.create!({user_id: 7, park_id: 2, rating: 4, body: "Love this park! They really fixed it up nice over the years. Beautiful twin towers tribute. Big grass area with spacious walk/bike/blade trail around the park. Soccer field, track, volleyball, tennis, and basketball court. Bathrooms at the park too. Small river and even a small doggy park. Now they have a dinosaur exhibit but I have not seen it yet. Great park!"})
park2review5 = Review.create!({user_id: 6, park_id: 2, rating: 5, body: "Awesome park wherein you run overlooking the lake. Running the whole park is around 5k. What I like most about it is that the walking/running path is a mix of uphill/downhill and level ground. If you want to intensify your workout then go to the hilly/grassy part and do some hill sprints."})
