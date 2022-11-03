class CreateContributors < ActiveRecord::Migration[6.1]
  def change
    create_table :contributors do |t|
      t.string :name
      t.integer :amount
      t.integer :fundraisergroupid

      t.timestamps
    end
  end
end
