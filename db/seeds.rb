# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.destroy_all

12.times do
  Recipe.create(name: Faker::Hipster.word,
                description: Faker::Hipster.paragraph,
                minutes: Faker::Number.between(1, 300),
                user: User.all.sample)
end

42.times do
  Instruction.create(step: Faker::Hipster.paragraph,
                    recipe: Recipe.all.sample)
end

5.times do
  User.create(first_name: Faker::Name.first_name,
              last_name: Faker::Name.last_name,
              email: Faker::Internet.email,
              password: Faker::Internet.password)
end
