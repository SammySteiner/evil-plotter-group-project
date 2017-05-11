# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'


puts "Begin creating users with names, passwords, and password confirmations\n"

i = 0
100.times do
  name = Faker::Name.name
  new_user = User.new(name: name, password: "123", password_confirmation: "123")
  new_user.save

  puts "NEW USER #{i += 1}: Added #{new_user.name} to the database."

end

puts "Begin adding boards and notes to users\n"

i2 = 0
300.times do
  title = Faker::Pokemon.name
  new_board = Board.new(title: title)
  random_number = Random.new.rand(1..100)
  new_board.user = User.all.where("id = ?", random_number).first
  puts "NEW BOARD #{i2 += 1}: Created #{new_board.title}\n"
  new_board.save
  i3 = 0
  (Random.new.rand(1..3)).times do
     left = Random.new.rand(0..1600)
     right = Random.new.rand(0..900)
     new_note = Note.create(
      title: Faker::GameOfThrones.house,
      content: Faker::ChuckNorris.fact,
      user_id: random_number,
      left: left,
      top: right
    )
     new_board.notes << new_note
     puts "=> NEW NOTE #{i3 += 1}: #{new_note.user.name} titled '#{new_note.title} at X:#{left} Y:#{right}'!"
  end
end

puts "\nFinished adding USERS, BOARDS, and NOTES"
