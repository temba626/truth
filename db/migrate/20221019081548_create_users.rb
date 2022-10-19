class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :username
      t.integer :status
      t.string :cohort

      t.timestamps
    end
  end
end
