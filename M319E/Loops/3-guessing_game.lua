-- math is built into Lua, no import needed
-- randomseed makes sure you get a different number on every run
--math.randomseed(os.time())

-- set the correct parameters for the random number generator
secret_number = math.random(0, 100)
--print(secret_number)
while guess ~= secret_number do
  print("Guess a number between 0 and 100:")
  guess = tonumber(io.read())
  if guess == secret_number then
    print("yayayay you guessed correctly!! sugoi desu !!")
  elseif guess < secret_number then
    print("Wrong. Your guesses number is too low.")
  elseif guess > secret_number then
    print("Wrong. Your guessed number is too high.")
  end
end