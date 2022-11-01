class CreateGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :groups do |t|
      t.string :title
      t.string :status,inclusion: ["public","private"], null:false,default: "public"

      t.timestamps
    end
  end
end
