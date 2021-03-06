class AddingNewColumn < ActiveRecord::Migration[6.1]
  def change
    change_table(:artists) do |t|
      t.column :body, :string
    end
  end
end
