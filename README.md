# Evil Plotter

## MVP feature set
A user can sign up
A user can login
A user can create a board
A user can create a card on a board with a title and content
A user can create multiple notes on a board
A user can connect notes
A user can change the position of a note on a board
A user can change the size of a note on a board
A user can update his board title
A user can delete a board
A user can update a card's title, content, position, and size

## Models
User - :name, :password, has_many :boards, has_many :notes, through: :boards
Board - :title, has_many :notes, belongs_to :user
Note - :title, :content, :image, :x, :y, :height, :width, belongs_to :board, has_many :connections, has_many :connected_notes, through :connections
Connections- :note_id, :connected_note_id, belongs_to :note, belongs_to :connected_note, class_name: "note"



## Future Features
