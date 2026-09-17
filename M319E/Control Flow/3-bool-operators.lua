-- (1) Write an if statement here that checks the two requirements below
ects = 120
degree = "Bachelor"

if ects >= 120 or degree == "Bachelor" then
  print("You have met at least one of the requirements.")
end


-- (2) OPTIONAL: uncomment the block below, then rewrite the condition
--     using DeMorgan's laws so the outer "not (...)" disappears.
has_degree = degree == "Bachelor"
enrolled = true
if (ects < 120 or has_degree or enrolled) then
  print("You are eligible for admission.")
else
  print("You are not eligible.")
end
