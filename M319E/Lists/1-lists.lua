-- (1)
fruits = {"Apple", "Orange"} -- add "Apple" and "Orange"

table.insert(fruits, "Banana")

more_fruits = fruits
table.insert(more_fruits, "Grapes"); table.insert(more_fruits, "Pineapple")
-- (4) combine using table.concat or a loop
all_fruits = table.concat(fruits, ", ")
print(all_fruits)

-- (5) print "Orange" using indexing
print(fruits[2])

-- (6) print the last element using #table
print(more_fruits[#more_fruits])

-- --- Optional ---
-- (7) change the last element to "Mango"
-- (8) count how many times "Apple" appears
-- (9) print the length using #table
-- (10) sort alphabetically using table.sort() and print
