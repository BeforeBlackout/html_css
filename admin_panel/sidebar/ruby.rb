class User
  attr_accessor :age, :name, :gender, :email

  def initialize( params = {})
    @age = params.fetch(:age)
    @gender = params.fetch(:gender)
    @name = params.fetch(:name)
    @email = params.fetch(:email)
  end

  def say_info
    p self
  end

  def is_older_than_18?
    if self.age > 18
      true
    else
      false
    end
  end
end

user = User.new( name: "Oleh", age: 19, email: "k41383", gender: "male")
user.say_info
puts user.is_older_than_18?