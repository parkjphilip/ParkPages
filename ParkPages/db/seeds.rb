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
              city: "Manhattan", state: "New York", zip_code: "10024", phone_number: "(212) 310-6600", lat: 40.782873, lng: -73.965334,
              image: File.open("app/assets/images/centralpark.jpg"), website: "https://www.nycgovparks.org/parks/central-park"})
park2 = Park.create!({name: "Overpeck Park", street: "321 Overpeck Avenue",
              city: "Leonia", state: "New Jersey", zip_code: "07605", phone_number: "(201) 336-7275", lat: 40.871116, lng: -73.991944,
              image: File.open("app/assets/images/overpeck.jpg"), website: "http://www.co.bergen.nj.us/841/Overpeck-County-Park"})
park3 = Park.create!({name: "Wood Park", street: "370 Broad Avenue",
              city: "Leonia", state: "New Jersey", zip_code: "07605", phone_number: "(201) 592-5783", lat: 40.863537, lng: -73.988549,
              image: File.open("app/assets/images/woodpark.jpg"), website: "http://www.leonianj.gov/content/Parks.aspx"})
park4 = Park.create!({name: "Overpeck County Dog Park", street: "Fort Lee Road",
              city: "Leonia", state: "New Jersey", zip_code: "07605", phone_number: "(201) 592-5783", lat: 40.871270, lng: -73.992062,
              image: File.open("app/assets/images/overpeckdog.jpg"), website: "http://www.leonianj.gov/content/Parks.aspx"})
park5 = Park.create!({name: "Brooklyn Bridge Park", street: "334 Furman St",
              city: "Brooklyn", state: "New York", zip_code: "11201", phone_number: "(718) 222-9939", lat: 40.700316, lng: -73.996410,
              image: File.open("app/assets/images/brooklynbridge.jpg"), website: "http://www.brooklynbridgepark.org/"})
park6 = Park.create!({name: "Gantry Plaza State Park", street: "474 48th Ave",
              city: "Long Island City", state: "New York", zip_code: "11101", phone_number: "(718) 786-6385", lat: 40.745483, lng: -73.958716,
              image: File.open("app/assets/images/gantryplaza.jpg"), website: "https://parks.ny.gov/parks/149/details.aspx/"})
park7 = Park.create!({name: "Prospect Park", street: "95 Prospect Park W",
              city: "Brooklyn", state: "New York", zip_code: "11215", phone_number: "(718) 965-8951", lat: 40.660179, lng: -73.968924,
              image: File.open("app/assets/images/prospect.jpg"), website: "https://www.prospectpark.org/"})
park8 = Park.create!({name: "Astoria Park", street: "Astoria Park",
              city: "Astoria", state: "New York", zip_code: "11102", phone_number: "(212) 639-9675", lat: 40.779628, lng: -73.921589,
              image: File.open("app/assets/images/astoria.jpg"), website: "https://www.nycgovparks.org/parks/astoria-park"})
park9 = Park.create!({name: "Teardrop Park", street: "Warren St",
              city: "New York", state: "New York", zip_code: "10005", phone_number: "(212) 267-9700", lat: 40.717039, lng: -74.015556,
              image: File.open("app/assets/images/teardrop.jpg"), website: "http://bpcparks.org/whats-here/parks/teardrop-park/"})
park10 = Park.create!({name: "Madison Square Park", street: "Eleven Madison Avenue",
              city: "New York", state: "New York", zip_code: "10010", phone_number: "(212) 520-7600", lat: 40.742017, lng: -73.987510,
              image: File.open("app/assets/images/madisonsquarepark.jpg"), website: "https://www.madisonsquarepark.org/"})
park11 = Park.create!({name: "Teaneck Creek Conservatory", street: "20 Puffin Way",
              city: "Teaneck", state: "New Jersey", zip_code: "07666", phone_number: "(201) 836-2403", lat: 40.874044, lng: -74.011580,
              image: File.open("app/assets/images/teaneckcreekconservatory.jpg"), website: "http://www.teaneckcreek.org/"})
park12 = Park.create!({name: "Votee Park", street: "Palisade Ave",
              city: "Teaneck", state: "New Jersey", zip_code: "07666", phone_number: "(201) 837-7130", lat: 40.895687, lng: -74.008945,
              image: File.open("app/assets/images/teaneckcreekconservatory.jpg"), website: "http://www.teanecknj.gov/index.cfm?fuseaction=content.mapLocation&mapLocationId=20698"})
park13 = Park.create!({name: "Philip Park", street: "424 Pine Hill Road",
              city: "Leonia", state: "New Jersey", zip_code: "07605", phone_number: "(201) 562-0016", lat: 40.865940, lng: -73.980018,
              image: File.open("app/assets/images/philippark.jpg"), website: "www.linkedin.com/in/philipjpark https://github.com/parkjphilip"})

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
park10.tag_ids = [8, 13, 20] #madison square park
park11.tag_ids = [8, 11, 21]
park12.tag_ids = [8, 14, 19]

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

park3review1 = Review.create!({user_id: 2, park_id: 3, rating: 4, body: "Great park. basketball court is awesome"})
park3review2 = Review.create!({user_id: 3, park_id: 3, rating: 1, body: "Library should be more accessible. There should be more bathrooms at the park, there are none now."})
park3review2 = Review.create!({user_id: 4, park_id: 3, rating: 5, body: "Tennis courts were just laid down 2 years ago, 4 courts, so there are no cracks however there are a few dead spots.  park has a 2 sided tennis wall and a two full sized basket courts.  Tennis courts are lit up at night, lights are supposed to go off at 10 but there not on a timer and often stay lit all night.
The rest of the park contains a stick ball field, a base ball field, and two playgrounds for children.
Parking for the park is at the public library."})

park4review1 = Review.create!({user_id: 10, park_id: 4, rating: 1, body: "1st thing to know - There is no water here.  There are metal bowls.  Bring water.
2nd thing to know - It's north of Ft Lee Road.  As soon as you drive in, parking is on your left.  It's across the large field at the far end on the western edge of the park.
OK, about some of the comments below.  It's good that you have to walk a bit to get to the dog park.  Dogs should never be allowed into a dog park in a highly agitated state.  This is not a substitute for taking your dog for a daily long walk or exercise.  It does exercise your dog but also socializes him/her with other dogs.  Having to walk a bit allows you to get the dog under control and enter the park in a relaxed state.  I do not allow my dog to go in unless he's in the right frame of mind."})
park4review2 = Review.create!({user_id: 9, park_id: 4, rating: 2, body: "This is my favorite dog park in the area. It's well maintained and other owners are always leaving toys and jugs of water for the next person. Sometimes people with big dogs let them in the small dog section and I'm like  The only reason I'm not giving this place five starts is that the parking isn't close."})
park4review3 = Review.create!({user_id: 8, park_id: 4, rating: 3, body: "I haven't been to a lot of dog runs before. This one was alright. Thankfully they separated the big dogs and smaller dogs. However, there isn't much shade in the smaller dog park and I was sweating within seconds. There is limited seating in the run and it was right out in the bright sun rather than under some shade.
"})
park4review4 = Review.create!({user_id: 7, park_id: 4, rating: 4, body: "I like it but always check your dog before leaving. Alot of tickss perhaps fleas too. Make sure your not bringing extra tiny pets home with you riding on your dog."})

park5review1 = Review.create!({user_id: 4, park_id: 5, rating: 3, body: "My hubby & I got married at this location. This was our favorite date night place. Which eventually turned into our go to photography spot. Then of course our big day!!
I don't know how many words I can use to describe how amazing this park is.
During the spring and summer months this is the place to be. Whether you want to just read a good book, or eat ice cream and chat it up. This is one of the BEST locations in Brooklyn."})
park5review2 = Review.create!({user_id: 5, park_id: 5, rating: 2, body: "One of my all time favorite NYC parks and even better now with the expansion. There are big playgrounds at either end of the park and a toddler play area towards the middle. Plenty of places to run, walk, picnic, bike, relax and just enjoy the amazing views. The pier in the middle has all kinds of sports activities. There are even launch sites for kayaking.
If you're in NYC for a visit plan to walk over the bridge and hang out at this beautiful park. It's a beautiful mix of local/tourist flavors."})
park5review3 = Review.create!({user_id: 6, park_id: 5, rating: 4, body: "Awesome place to come if you are looking for a view of the Brooklyn Bridge and the skyline. You can also catch the East River boat along with some cool restaurants near by to eat at! If you like pizza there are some good places near by to check out! They do have a restroom incase you have to go! Coming during the evening is probably the best so you get to see everything lit up and all the restaurants are open!"})
park5review4 = Review.create!({user_id: 7, park_id: 5, rating: 5, body: "Probably the most beautiful project achieved during the Bloomberg administration.
Sure, the Highline is cute, but the Brooklyn Bridge Park is grand, and changed the neighborhood forever. "})

park6review1 = Review.create!({user_id: 5, park_id: 6, rating: 4, body: "I absolutely love coming to this park. I'm certain I haven't seen all of it, and what it has to offer. It seems every time I come here there's some new activity going on. "})
park6review2 = Review.create!({user_id: 6, park_id: 6, rating: 5, body: "Gantry State Park is truly a gem just across the East River in Queens"})
park6review3 = Review.create!({user_id: 7, park_id: 6, rating: 4, body: "Simply amazing. If you're a tourist or even a local you should definitely come check out gantry. It's crazy to see how much it has changed in the past few years but definitely for the better."})
park6review4 = Review.create!({user_id: 8, park_id: 6, rating: 3, body: "This park is alright."})
park6review5 = Review.create!({user_id: 9, park_id: 6, rating: 5, body: "The view. It's all about the view!"})

park7review1 = Review.create!({user_id: 9, park_id: 7, rating: 5, body: "Prospect Park is the location where my anniversary run is with NYRR. The Jingle Bell Jog is located here every December. It's a four mile run and usually on the colder side. The park is great and offers a good amount of property to run and hang out in. "})
park7review2 = Review.create!({user_id: 2, park_id: 7, rating: 5, body: "The second visit  was worthwhile just like the first.  A good way to start the spring season. I used the Grand Army Plaza entrance this time... a magnificent landmark that anybody wont miss the park location. "})
park7review3 = Review.create!({user_id: 3, park_id: 7, rating: 5, body: "Central Park is not the only large park worth visiting in New York. If you are in Brooklyn, Prospect Park should not be missed. "})
park7review4 = Review.create!({user_id: 4, park_id: 7, rating: 5, body: "What a lovely surprise this park was, beautiful....strolled through it on a late fall sunny afternoon and it was delightful..."})
park7review5 = Review.create!({user_id: 5, park_id: 7, rating: 5, body: "The view. It's all about the view!"})

park8review1 = Review.create!({user_id: 9, park_id: 8, rating: 1, body: "This was not a fun park for me."})
park8review2 = Review.create!({user_id: 8, park_id: 8, rating: 3, body: "This park was ok."})
park8review3 = Review.create!({user_id: 6, park_id: 8, rating: 5, body: "This park was great!"})

# park9review1 = Review.create!({user_id: 3, park_id: 9, rating: 3, body: "A dream
# My only wish is that all these parks that cost do much money were placed in neighborhoods not so well to do. There is a park in Chinatown that is like walking into China that is always filled with children's voices. The water part of the park does not even work. Chinatown has one of the most dense people per room of any part of the city.
# Please city listen"})
# park9review2 = Review.create!({user_id: 5, park_id: 9, rating: 3, body: "Not sure why this place is called TEARdrop Park, but I had a joyful experience here! *cries tears of joy huehuehue* It's really close by to Pier 11 and Brookfield Place. There's plenty of green foliage to shield you from the beating sun, and a maze of paths leading to different areas. The way the sprinklers are placed can be said to be zen-like.  Bathrooms here are way cleaner than the ones at other parks throughout the city. I came here just to try out the slide. :D"})
# park9review3 = Review.create!({user_id: 6, park_id: 9, rating: 5, body: "Amazing little park. An absolute must if you have kids 5+. There is a huge metal slide and a small water area. Just be prepared for the kids to get messy. The slide dumps them into a large sand area.
# There is a restroom if you walk towards the water (river, not the play area). This park is not dog friendly!"})

park10review1 = Review.create!({user_id: 2, park_id: 10, rating: 1, body: "I've never waited in line for Shake Shack, but it's inside the park if you need to get your burger on.
I'll go to Madison Square Park to meet up with my husband during his lunch break or after work.
It's people watching heaven here. You'll see all types of people - office workers who come here for a break from their work, dog people who walk their pouches and congregate at the dog run, little kids at the playground, people on their phones (free wi-if) sitting on benches or sprawled out on the green.
It's a nice little park!"})
park10review2 = Review.create!({user_id: 3, park_id: 10, rating: 2, body: "As someone who works across the street from this park and walks through the belly of the operation several days per week, Madison Square Park is a necessary oasis in the middle of Flatiron."})
park10review3 = Review.create!({user_id: 4, park_id: 10, rating: 3, body: "I was blessed that I experienced a heavy snow day, downpour of rain and a sunny day during my trip in Manhattan."})
park10review4 = Review.create!({user_id: 5, park_id: 10, rating: 4, body: "This is a cute little park for dog walking, relaxing and kids jungle gym. The dog park is super busy and all the doggies love to run and play with each other here.  There is an artistic area where different art is presented but it was closed off for winter. I wonder if that art is rotated?  We went to the kids playground too. This jungle gym is for little kids mostly. Our 7 year old was a bit bored by it. Over all this park is pleasing, relaxing and close to shops housings and offices. Oh and a bonus the original Shake Shack is in there."})
park10review5 = Review.create!({user_id: 6, park_id: 10, rating: 5, body: "If it weren't so cold during my visit to NYC, I could've sat here and people watched all day. This was the closest park to my hotel The Hotel Giraffe. It's within view of the flatiron Building. There is a section for the pups, a fountain and massive structure/work of art that I couldn't quite figure out what it was...  "})

park11review1 = Review.create!({user_id: 4, park_id: 11, rating: 3, body: "Nice trails...Brought my son here for a nice walk. Saw bunnies all over. Would go back very quiet and a place to go and think."})
park11review2 = Review.create!({user_id: 6, park_id: 11, rating: 5, body: "Love coming here for a peaceful walk or to walk my dog. The foliage in the Spring and Summer are dope! It's a nice long walk to get your mind out of the daily BS !
Note: please be respectful of others and pick up after your dog."})

park12review1 = Review.create!({user_id: 9, park_id: 12, rating: 1, body: "This was not a fun park for me."})
park12review2 = Review.create!({user_id: 8, park_id: 12, rating: 3, body: "This park was ok."})
park12review3 = Review.create!({user_id: 6, park_id: 12, rating: 5, body: "This park was great!"})
