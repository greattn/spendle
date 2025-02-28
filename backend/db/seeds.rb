# db/seeds.rb
require 'bcrypt'

WebhookLog.destroy_all
Budget.destroy_all
Transaction.destroy_all
BankAccount.destroy_all
Category.destroy_all
User.destroy_all

user = User.create!(
  name: "Trần Thanh Phong",
  email: "phongtlcp@gmail.com",
  password: "Aa@123456"
)

categories = [
  Category.create!(user: user, name: "Ăn uống", color: "#FF5733"),
  Category.create!(user: user, name: "Mua sắm", color: "#33FF57"),
  Category.create!(user: user, name: "Khác", color: "#CCCCCC")
]

bank_account = BankAccount.create!(
  user: user,
  bank_name: "Vietcombank",
  account_number: "0071000888888",
  status: "active",
  last_synced_at: Time.current
)

transactions = [
  Transaction.create!(
    user: user,
    bank_account: bank_account,
    category: categories[0],
    amount: 50_000,
    date: Time.current - 1.day,
    note: "Ăn trưa",
    type: "expense",
    source: "manual"
  ),
  Transaction.create!(
    user: user,
    bank_account: bank_account,
    category: categories[1],
    amount: 200_000,
    date: Time.current - 2.hours,
    note: "Mua áo",
    type: "expense",
    source: "webhook",
    external_transaction_id: "TX12345"
  ),
  Transaction.create!(
    user: user,
    bank_account: bank_account,
    category: categories[2],
    amount: 1_000_000,
    date: Time.current - 3.days,
    note: "Lương tháng",
    type: "income",
    source: "webhook",
    external_transaction_id: "TX12346"
  )
]

webhook_logs = [
  WebhookLog.create!(
    payload: '{"transaction_id": "TX12345", "account_number": "0071000888888", "amount": -200000, "date": "2025-02-24 10:00:00", "description": "Mua áo"}',
    status: "processed",
    received_at: Time.current - 2.hours
  ),
  WebhookLog.create!(
    payload: '{"transaction_id": "TX12346", "account_number": "0071000888888", "amount": 1000000, "date": "2025-02-21 09:00:00", "description": "Lương tháng"}',
    status: "processed",
    received_at: Time.current - 3.days
  )
]

budgets = [
  Budget.create!(
    user: user,
    category: categories[0],
    amount: 1_000_000,
    period: "monthly"
  ),
  Budget.create!(
    user: user,
    category: categories[1],
    amount: 500_000,
    period: "monthly"
  )
]

puts "Created sample data:"
puts "- #{User.count} users"
puts "- #{Category.count} categories"
puts "- #{BankAccount.count} bank accounts"
puts "- #{Transaction.count} transactions"
puts "- #{WebhookLog.count} webhook logs"
puts "- #{Budget.count} budgets"
