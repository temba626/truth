class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :username
      t.string :status,inclusion: ["normal","admin"], null:false,default: "normal"
      t.string :cohort

      t.timestamps
    end
  end
end
