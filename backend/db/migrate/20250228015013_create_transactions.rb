class CreateTransactions < ActiveRecord::Migration[7.2]
  def change
    create_table :transactions, id: :bigint do |t|
      t.references :user, null: false, foreign_key: { on_delete: :cascade }
      t.references :category, null: false, foreign_key: { on_delete: :restrict }
      t.references :bank_account, null: true, foreign_key: { on_delete: :nullify }
      t.decimal :amount, precision: 15, scale: 2, null: false
      t.datetime :date, null: false
      t.text :note
      t.string :type, null: false, default: 'expense'
      t.string :source, null: false, default: 'manual'
      t.string :external_transaction_id, index: { unique: true }
      t.timestamps
    end
  end
end
