names = {"Ron", "Hermione", "Harry", "Ron", "Sirius"}

-- (1) count how many times "Ron" appears
function table.count(t, value)
    local n = 0
    for _, v in ipairs(t) do
        if v == value then n = n + 1 end
    end
    return n
end

print(table.count(names, "Ron"))

-- (2) sort names alphabetically
table.sort(names)
print(names[1])

-- (3) create sorted_names_reverse
table.sort(names, function(a, b) return a > b end)
print(names[1])

-- (4)