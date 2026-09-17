Story = {
	start = {
		text = "You wake up on Times Square and are asked for some pocket change by a homeless person.",
		choices = {
			{ "give", "Give him some change", "gave_change" },
			{ "deny", "Deny him his request", "denied" },
		},
	},

	gave_change = {
		text = "You give him some change you found in your pocket. The homeless person says thank you and tells you that all good deeds get rewarded.",
		choices = {
			{ "walk", "Walk on", "hungry" },
		},
	},

	denied = {
		text = "You deny the homeless guy his request. He gets angry and tells you you will soon come to regret your choice.",
		choices = {
			{ "walk", "Walk on", "hungry" },
		},
	},

	hungry = {
		text = "You realize you're kinda hungry. Checking your phone you see there's two nearby options for some quick food at this hour: A McDonald's or a Bodega.",
		choices = {
			{ "bodega", "Go to the Bodega", "bodega" },
			{ "mc", "Go to McDonald's", "mcdonalds" },
		},
	},

	bodega = {
		text = "You get some snacks and pay for them at the counter. As you walk outside holding your snacks, you see the same guy from earlier again. He's with a tall and kinda menacing looking guy but as the homeless guy sees you he smiles.",
		choices = {
			{ "approach", "Approach him", "bodega_approach" },
			{ "nod", "Nod back and ask for directions home", "bodega_nod" },
		},
	},

	bodega_approach = {
		text = "You approach him and ask what's up. He asks if there's a problem. You notice the guy he's with start getting a bit panicked. You try talking your way out but it's too late. The homeless person tries calming his friend down but he shoots you point blank. You're dead.",
	},

	bodega_nod = {
		text = "You nod back and ask for directions home. Just 2 more blocks. You get home with a good feeling having eaten a tasty bagel and befriended a homeless person who seems to have high ranking street connections. You get a good night's sleep.",
	},

	mcdonalds = {
		text = "You order a McFlurry on the kiosk. As you're waiting for your order to be prepared, a visibly drunk guy steps up to the counter and starts arguing with the cashier over his order having fewer chicken nuggies than he ordered.",
		choices = {
			{ "help", "Help the cashier calm him down", "mcd_help" },
			{ "ignore", "Ignore it — not your problem", "mcd_ignore" },
		},
	},

	mcd_help = {
		text = "You decide to help out the cashier and try to calm down the drink. The cashier says thank you, hands you your McFlurry and asks if you want a medium soft drink on the house.",
		choices = {
			{ "coke", "Take a regular Coke", "mcd_sugar" },
			{ "zero", "Take a Coke Zero", "mcd_zero" },
		},
	},

	mcd_ignore = {
		text = "You decide this is not worth your time. Your order number pops up as collection ready. You get your McFlurry and check your phone for directions home — just 5 more blocks. You get home but on your step, the homeless person from the beginning blocks your way and says he saw you didn't even help the cashier. He makes a signal. You hear a loud noise, then nothing. You're dead.",
	},

	mcd_sugar = {
		text = "You gratefully accept her offer and ask for a regular Coke. You take a few sips. Your teeth feel acidic. You remember you already had 10x the recommended amount of sugar. Your heart starts beating fast. You die of diabetes or something.",
	},

	mcd_zero = {
		text = "You gratefully accept her offer and ask for a Coke Zero. You take a few sips, eat your McFlurry and check your phone for directions to get home — just 5 blocks away. You decide to eat the rest while walking and go home. You lay in your bed with a good feeling in your tummy (not just McFlurry) and fall asleep.",
	},
}

local function show(node)
	print("\n" .. node.text)
end

local function match_keyword(input, choices)
	local word = input:lower()
	for _, c in ipairs(choices) do
		if word == c[1] then
			return c
		end
	end
	return nil
end

local function choose(node)
	if node.choices == nil then
		return nil
	end
	print("\n What do you do?")
	for _, c in ipairs(node.choices) do
		print("- " .. c[2] .. " ('" .. c[1] .. "')")
	end
	while true do
		io.write("> ")
		local line = io.read()
		if line == nil then
			return nil
		end
		local hit = match_keyword(line, node.choices)
		if hit then
			print(
				"\n──────────────────────────────────"
			)
			return hit[3]
		end
		print("That's not a valid choice. Try again.")
	end
end

print("──୨ৎ──── Mamdanistan breakout ────୨ৎ────")
local id = "start"
while id do
	local node = Story[id]
	show(node)
	id = choose(node)
end
print("\n— The End —")
