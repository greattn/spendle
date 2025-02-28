class Budget < ApplicationRecord
  belongs_to :user
  belongs_to :category

  enum period: { daily: 'daily', weekly: 'weekly', monthly: 'monthly' }, _default: 'monthly'

  validates :amount, presence: true, numericality: { greater_than: 0 }
  validates :period, presence: true
end
