class UserMailer < ApplicationMailer
    default from: 'notifications@example.com',
    return_path: 'admin@example.com'

    def welcome_email(user)
      user = user
      mail(to: user.email, subject: 'Welcome to My Awesome Site')
    end
end
