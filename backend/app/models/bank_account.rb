class BankAccount < ApplicationRecord
  belongs_to :user
  has_many :transactions, dependent: :nullify

  enum status: { active: 'active', inactive: 'inactive', error: 'error' }, _default: 'inactive'

  validates :status, presence: true
end
