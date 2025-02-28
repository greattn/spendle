class Transaction < ApplicationRecord
  self.inheritance_column = nil

  belongs_to :user
  belongs_to :category
  belongs_to :bank_account, optional: true

  enum type: { income: 'income', expense: 'expense' }, _default: 'expense'
  enum source: { manual: 'manual', webhook: 'webhook' }, _default: 'manual'

  validates :type, presence: true
  validates :source, presence: true
end
