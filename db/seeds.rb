# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "start seeding"

user1 = User.create(name: "chris", email: "example@gmail.com", username: "Kpine", cohort: "ab25", password: "1234", password_confirmation: "1234", image_url: "https://images.pexels.com/photos/2095582/pexels-photo-2095582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

user2 = User.create(name: "pine", email: "example2@gmail.com", username: "pine", cohort: "ab25", password: "1234", password_confirmation: "1234", image_url: "https://images.pexels.com/photos/2146722/pexels-photo-2146722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
user2 = User.create(name: "admin", email: "example2@gmail.com", username: "admin", status: "admin", cohort: "ab25", password: "1234", password_confirmation: "1234", image_url: "https://images.pexels.com/photos/2146722/pexels-photo-2146722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

post1 = Post.create(title: "Walmart", content: "If your current poll-style posts aren’t getting the engagement you’d hoped for, what about presenting a non-verbal option? Walmart’s battle of the likes versus shares yielded over 300,000 votes for the major retailer.", user_id: user1.id)

post2 = Post.create(title: "Walmart", content: "If your current poll-style posts aren’t getting the engagement you’d hoped for, what about presenting a non-verbal option? Walmart’s battle of the likes versus shares yielded over 300,000 votes for the major retailer.", user_id: user2.id)

post3 = Post.create(title: "Walmart", content: "If your current poll-style posts aren’t getting the engagement you’d hoped for, what about presenting a non-verbal option? Walmart’s battle of the likes versus shares yielded over 300,000 votes for the major retailer.", user_id: user1.id)

post4 = Post.create(title: "Walmart", content: "If your current poll-style posts aren’t getting the engagement you’d hoped for, what about presenting a non-verbal option? Walmart’s battle of the likes versus shares yielded over 300,000 votes for the major retailer.", user_id: user1.id)

# comment1 = Comment.create(content: "coment number one", user_id: user1.id, post_id: post1.id)
# comment2 = Comment.create(content: "coment number two", user_id: user2.id, post_id: post2.id)
# comment3 = Comment.create(content: "coment number one", user_id: user2.id, post_id: post4.id)
# comment4 = Comment.create(content: "coment number two", user_id: user2.id, post_id: post3.id)

puts "finished seeding"