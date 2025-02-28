# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2025_02_28_015629) do
  create_table "bank_accounts", charset: "utf8mb3", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "bank_name", null: false
    t.string "account_number", null: false
    t.datetime "last_synced_at"
    t.string "status", default: "inactive", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "account_number"], name: "index_bank_accounts_on_user_id_and_account_number", unique: true
    t.index ["user_id"], name: "index_bank_accounts_on_user_id"
  end

  create_table "budgets", charset: "utf8mb3", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "category_id", null: false
    t.decimal "amount", precision: 15, scale: 2, null: false
    t.string "period", default: "monthly", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_budgets_on_category_id"
    t.index ["user_id", "category_id"], name: "index_budgets_on_user_id_and_category_id", unique: true
    t.index ["user_id"], name: "index_budgets_on_user_id"
  end

  create_table "categories", charset: "utf8mb3", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.string "color"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_categories_on_user_id"
  end

  create_table "transactions", charset: "utf8mb3", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "category_id", null: false
    t.bigint "bank_account_id"
    t.decimal "amount", precision: 15, scale: 2, null: false
    t.datetime "date", null: false
    t.text "note"
    t.string "type", default: "expense", null: false
    t.string "source", default: "manual", null: false
    t.string "external_transaction_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bank_account_id"], name: "index_transactions_on_bank_account_id"
    t.index ["category_id"], name: "index_transactions_on_category_id"
    t.index ["external_transaction_id"], name: "index_transactions_on_external_transaction_id", unique: true
    t.index ["user_id"], name: "index_transactions_on_user_id"
  end

  create_table "users", charset: "utf8mb3", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  create_table "webhook_logs", charset: "utf8mb3", force: :cascade do |t|
    t.text "payload", null: false
    t.string "status", default: "received", null: false
    t.datetime "received_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["received_at"], name: "index_webhook_logs_on_received_at"
  end

  add_foreign_key "bank_accounts", "users", on_delete: :cascade
  add_foreign_key "budgets", "categories", on_delete: :cascade
  add_foreign_key "budgets", "users", on_delete: :cascade
  add_foreign_key "categories", "users"
  add_foreign_key "transactions", "bank_accounts", on_delete: :nullify
  add_foreign_key "transactions", "categories"
  add_foreign_key "transactions", "users", on_delete: :cascade
end
