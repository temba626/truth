class CreateAdverts < ActiveRecord::Migration[6.1]
  def change
    create_table :adverts do |t|
      t.string :image_url

      t.timestamps
    end
  end
end
