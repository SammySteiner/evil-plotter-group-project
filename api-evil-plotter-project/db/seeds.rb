# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

100.times do
  name = Faker::Name.name
  new_user = User.new(name: name, password: "123", password_confirmation: "123")
  new_user.save
  # puts new_user.errors.messages
  # puts new_user
end

300.times do
  title = Faker::Pokemon.name
  new_board = Board.new(title: title)
  new_board.user = User.all.where("id = ?", Random.new.rand(1..100)).first
  new_board.save
  (Random.new.rand(1..3)).times do
    new_board.notes << Note.create(title: Faker::GameOfThrones.house, content: Faker::ChuckNorris.fact)
  end
end
