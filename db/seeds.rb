# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# 20.times do
#   q = Question.create( title: Faker::Company.catch_phrase,
#   	                    content: Faker::Company.bs,
#   	                    user_id: rand(1..10),
#   	                    vote_count: rand(1..100),
#   	                    created_at: Time.now)
# end

# 20.times do 
# 	a = Answer.create(content: Faker::Company.bs,
# 		              created_at: Time.now,
# 		              question_id: rand(1..5),
# 		              user_id: rand(1..10),
# 		              question_id: rand(20),
# 		              vote_count: rand(1..100))
# end

# 10.times do 
# 	u = User.create(username: Faker::Internet.user_name,
# 		            email: Faker::Internet.email,
# 		            password: '123456')
# end