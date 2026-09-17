heights = {{"Jenny", 180}, {"Alexus", 170}, {"Sam", 167}, {"Grace", 195}}

-- (1) add {"James", 182}
table.insert(heights, {"James", 182})

-- (2) fill in the sublists
ages = {{"Aaron", 21}, {"Dhruti", 32}}

-- (3) change Sam's height to 174 — hint: heights[n][m] = ...
heights[3][2] = 174

-- (4) Optional: insert {"Lily", 160} after Sam, then table.remove() to remove her
