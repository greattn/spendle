class CreateBankAccounts < ActiveRecord::Migration[7.2]
  def change
    create_table :bank_accounts, id: :bigint do |t|
      t.references :user, null: false, foreign_key: { on_delete: :cascade }
      t.string :bank_name, null: false
      t.string :account_number, null: false
      t.datetime :last_synced_at
      t.string :status, null: false, default: 'inactive'
      t.timestamps
    end
    add_index :bank_accounts, [:user_id, :account_number], unique: true
  end
end
