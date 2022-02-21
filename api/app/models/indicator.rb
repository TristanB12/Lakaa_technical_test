class Indicator
  include Mongoid::Document
  include Mongoid::Timestamps
  field :type, type: String
  field :title, type: String
  field :value, type: String
end
