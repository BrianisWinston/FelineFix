# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  img_url    :string           not null
#  caption    :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ApplicationRecord
  validates :img_url, :caption, :user_id, presence: true

  belongs_to :user

  has_many :likes,
    dependent: :destroy

  has_many :liked_pics,
    through: :likes,
    source: :user
end
