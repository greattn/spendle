class User < ApplicationRecord
  has_many :categories, dependent: :destroy
  has_many :transactions, dependent: :destroy
  has_many :bank_accounts, dependent: :destroy
end
