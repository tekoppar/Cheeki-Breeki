let ems_messages = [
	"Contact left! Contact left!' / '3 o'clock, 3 o'clock! Check your fire!",
	"Control, we're picking up a heavy psychic signature near the hotel lobby...",
	"Sector clear... wait, did that shadow just move?",
	"Grenade! Get down, you idiots!",
	"Target spotted! Behind the rusted bus! Open fire!",
	"Static is getting louder. Does anyone else hear... whispering?",
	"Attention all units: Blowout imminent. Find cover or say your goodbyes.",
	"The air is glowing blue again. Don't look directly at it.",
	"Front desk to Security: A Snork is trying to check into the Presidential Suite again.",
	"Reminder: Do not feed the local fauna. Especially the ones with more than two eyes.",
	"Housekeeping to Room 402: Please stop molecularly bonding to the wallpaper.",
	"Complaints department: The 'voices in the walls' are not a bug, they are a feature.",
	"We have a wounded man here! Need a medkit, stat!",
	"Echo 4 to Echo 1: The dogs are quiet tonight. Too quiet. Did you remember to salt the perimeter?",
	"Attention all stalkers: The 'miracle' artifacts found near the hotel are actually highly unstable batteries. Return them or melt. Your choice.",
	"Prip-2 to all units: Keep away from the stadium. Something's nesting in the bleachers.",
	"Attention: Today's 'Anomaly Awareness' seminar is cancelled. The instructor has... drifted.",
	"Breeki-1: Found a stash of canned meat. Expiry date 1985. Living like kings tonight!",
	"Duty Patrol: Sector 4 is clear of mutants. Radiation is still 'very spicy', over.",
	"Monolith frequency detected... 'Oh Great Monolith, we thank thee...' (Static cuts in)",
	"Front Desk: To the guest in 302, your Geiger counter is keeping the neighbors awake.",
	"Rookie: I think I found a 'Goldfish' artifact! Wait... why is my hand melting?",
	"Freedom Squad: Anyone seen a Bloodsucker? We lost a bet and need to find one.",
	"Military HQ: Any unauthorized stalkers in the Red Forest will be shot. Then fined.",
	"Housekeeping: Found a gravity anomaly in the laundry room. Sheets are now 2D.",
	"Emergency: Emission in 3... 2... (Signal Lost)",
	"Barman: Don't forget to pay your tab before you turn into a Zombie. No credit for Zoms.",
	"Scientist: Observation Log 44: The bread has begun to solve basic calculus. Concerning.",
	"3 o'clock! 3 o'clock! Check your fire! It's just a tourist!",
	"Static... (low growling)... Static... 'I think it's under the floorboards'...",
	"Radio Free Zone: Playing 'Dirge for the Planet' for the 400th time today. Enjoy."
];

let ems_animation_frame = 0;
let ems_message_index = Math.floor(Math.random() * ems_messages.length);
let ems_message_character_index = 0;
let ems_delay = 0;
const ems_radio_delay = 2250;
const ems_update_rate = 4;

function ems_loop() {
	const ems = document.getElementById('ems');
	if (ems == null)
		return; // the web browser is broken

	if (ems_message_character_index >= ems_messages[ems_message_index].length) {
		ems_message_index = Math.floor(Math.random() * ems_messages.length);
		ems_message_character_index = 0;
		ems_delay = Math.floor(Math.random() * ems_radio_delay) + ems_animation_frame;
		var el = document.createElement("p");
		el.setAttribute("class", "ems-delay");
		ems.appendChild(el);
	}
	if (ems_message_index >= ems_messages.length)
		ems_message_index = 0;

	if (ems_delay > ems_animation_frame) {
		if (ems_animation_frame % ems_update_rate / 2 == 0 && ems.lastElementChild != null)
			ems.lastElementChild.textContent = ems.lastElementChild.textContent + " ";

		ems_animation_frame += 1;
		window.requestAnimationFrame(ems_loop);
		return;
	}
	if (ems_delay == ems_animation_frame) {
		ems_delay = 0;
		var el = document.createElement("p");
		el.setAttribute("class", "ems");
		ems.appendChild(el);
	}

	if (ems_delay == 0) {
		if (ems_animation_frame % ems_update_rate == 0 && ems.lastElementChild != null) {
			ems.lastElementChild.textContent = ems.lastElementChild.textContent + ems_messages[ems_message_index][ems_message_character_index];
			++ems_message_character_index;
		}
	}

	if (ems.children.length > 10 && ems.firstElementChild != null) {
		ems.removeChild(ems.firstElementChild);
	}

	ems_animation_frame += 1;
	window.requestAnimationFrame(ems_loop);
};
window.requestAnimationFrame(ems_loop);