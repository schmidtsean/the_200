class Playlist < ApplicationRecord
  has_many :artists, dependent: :destroy
end
