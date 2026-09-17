print("🏔️🏔️🏔️ Swiss Winter Adventure 🏔️🏔️🏔️")
print("You're on a snowy mountain. What will you do?")

print("1. Start skiing 🎿")
-- (3) TODO: the fondue option goes back here
-- print("2. Fondue")
io.write("Enter your choice: ")
choice1 = tonumber(io.read())

if choice1 == 1 then -- (1) bug: fix data type
  print("You ski down the slopes! You see a cozy chalet.")
  print("1. Visit the chalet ☕")
  print("2. Keep skiing ⛷️")

  io.write("Enter your choice (1–2): ")
  choice1_1 = io.read()

  if choice1_1 == 1 then -- (1) same bug here
    print("You enjoy hot chocolate! You completed the adventure! ❄️🔥")
  else -- (2) TODO: handle invalid input here too (elseif / else)
    print("You ski to the base. You completed the adventure! 🏂🌟")
  end
else print("Invalid choice")
end

-- (2) TODO: handle invalid choice1 input (elseif / else)

-- (3) TODO: add choice 2 — fondue path with two sub-options (same structure as skiing)
