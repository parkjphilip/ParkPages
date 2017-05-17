if @user
  json.extract! @user, :id, :username
elsif user
  json.extract! user, :id, :username
end
