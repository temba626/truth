require "rails_helper"

RSpec.describe AccountMailer, type: :mailer do
  describe "new_account" do
    let(:mail) { AccountMailer.new_account }

    it "renders the headers" do
      expect(mail.subject).to eq("New account")
      expect(mail.to).to eq(["to@example.org"])
      expect(mail.from).to eq(["from@example.com"])
    end

    it "renders the body" do
      expect(mail.body.encoded).to match("Hi")
    end
  end

end
