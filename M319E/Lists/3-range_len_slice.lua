numbers = {10, 20, 30, 40, 50}

-- (1) print the length using #numbers
print("numbers has a length of " .. #numbers .. " yippers")

-- (3) slice the second and fourth element
print(table.unpack(numbers, 2, 4))

-- (4) slice the last two elements using negative indexing
