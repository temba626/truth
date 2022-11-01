# Preview all emails at http://localhost:3000/rails/mailers/account_mailer
class AccountMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/account_mailer/new_account
  def new_account
    user = User.last
    AccountMailer.new_account(user)
  end

end
