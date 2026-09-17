function print_count_locations()
  favorite_locations = {"Paris", "Norway", "Iceland"}
  print("There are " .. #favorite_locations .. " locations")
end

-- This function will print the favorite locations
function show_favorite_locations()
  print("Your favorite locations are: " .. table.concat(favorite_locations, ", "))
end

print_count_locations()
show_favorite_locations()
