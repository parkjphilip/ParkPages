if @user
  json.extract! @user, :id, :username
end
