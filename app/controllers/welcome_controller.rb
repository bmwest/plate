class WelcomeController < ApplicationController
  def index
    @greetings = ["I think it's time for some food.",
                  "Who's hungry?", "Hey, let's eat",
                  "There's never a bad time for food."]
  end

  def show
    @name = "Briana West"
    @email = " brianawest.m@gmail.com "
    @github = " bmwest "
    @linked_in = " brianawest "
  end
end
