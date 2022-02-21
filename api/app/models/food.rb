class Food
  include Mongoid::Document
  include Mongoid::Timestamps
  field :name, type: String
  field :charityName, type: String
  field :indicators, type: Array, default: []
end
