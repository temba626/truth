class AccountMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.account_mailer.new_account.subject
  #
  def new_account(user)
    @user = user

    mail to: @user.email,
    subject: "New Account For #{@user.name}"
  end
end
