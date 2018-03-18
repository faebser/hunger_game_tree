// build simple tree structure

/*
Voici nos questions: 
1. Déterminer la position de l’individu: Quelle est la ville la plus proche? 
2. Est-ce que la terre stérile ou non? 
3. Si oui, quel type de plantes poussent? (Végétaux pionnier ou pas?) 
4. Si oui: L’individu doit tirer une plante du sol: Est-ce que la terre s’attache aux racines? 
5. Est-ce qu’il est possible de planter ses doigts dans le sol? 
6. Si oui: L’individu doit prendre une poignée de terre et la compacté : est-ce que la terre est compactable? 
7. Y’a-t-il une activité humaine dans les environs? (Usine/route/ville)
8. Trouve t’on un point d’eau à proximité ? 
9. Est-ce qu’il y a des insectes dans le sol? 
10. Quand il pleut, est-ce qu’il y a des flaques? 
11. Si l’on creuse la terre est-ce qu’elle se casse en grosses mottes? 
12. Ces mottes ce cassent-elles facilement à la main? 
13. L’individu doit former un boudin de terre: Est-ce que si l’individu suspend le boudin de terre, il se casse?

questions: 
1. location: what's the closest town? 
2. Is the land barren? 
3. if not, what kind of plants? (pionnier or not?) 
4. Pull a plant from the soil: does the earth stick to it? 
5. can you dig your fingers in the ground? 
6. If yes, when you squeeze it, does it form a ball or is it too dry and sandy/crumbly? 
7. Is there human activity around? (Road/factory/farm/city)
8. Is there water/water source close by ? 
9. Are there insects in the ground? 
10. when it rains, does it form puddles? 
11. when you dig the ground, does it come in big lumps? 
12. do they break easily (using your hands) ? 
13.Make a ribbon with the earth, when you hold it down, does it break?
*/

/*
crops...

rice - a lot of water
beans - warm temp
lentils - more cold also semi arid conditions ok
maize - grows fucking everywhere
wheat - temperate climate
potato - Soybean prefers climates with hot summers, with mean temperatures of 20 to 30 °C.
tomato - wide range of climates from tropical to temperate
*/
 document.addEventListener("DOMContentLoaded", function(event) {
	(function() {

		var yes_image = document.getElementById("yes");
		var yes_element = yes_image.parentElement;
		var no_image = document.getElementById("no");
		var no_element = no_image.parentElement;

		function node(_question, _visual) {
			return {
				question: _question,
				visual: _visual
			}
		};

		function end_node(text) {
			return text;
		};

		function is_end(node) {
			return !(node instanceof Array);
		}

		function fadein(selected_element, selected_image, other_element, other_element) {
			return new Promise(function (resolve) {

			});
		}

		function fadeout(selected_element, selected_image, other_element, other_image) {
			selected_element.style.transition = null;
			other_element.style.transition = null;
			return new Promise(function (resolve) {
				other_image.style.opacity = 0;
				other_image.addEventListener("transitionend", function () {
					window.requestAnimationFrame(function () {
						selected_element.style.width = "100%";
						other_element.style.width = "0%";
						window.setTimeout(function () {
							selected_image.style.opacity = 0;
							selected_image.addEventListener("transitionend", function () {
								selected_element.style.transition = "none";
								other_element.style.transition = "none";
								selected_element.style.width = "50%";
								other_element.style.width = "50%";
								
								resolve();
							}, {once: true});
						}, 1000);
					});
				}, {once: true});
			});
		}

		// a function that returns a function


		function load_node(node, yes, no) {
			console.log("loading new node");
			// set opacity to 1 for images

			console.log(node.question);
			no_image.setAttribute('src', node.visual[1]);
			yes_image.style.opacity = 1;
			no_image.style.opacity = 1;
			window.setTimeout(function () {
				
			}, 500)
			// unload all event handlers
			// check if end node
			// add event handlers for loading nodes
			yes_element.addEventListener('click', function once() {
				// end node
				if(is_end(yes)) {
					reached_end(yes);
					return;
				}
				// animation
				fadeout(yes_element, yes_image, no_element, no_image)
					.then(function () {
						load_node(yes[0], yes[1][0], yes[1][1]);
					});
				// normal node
				
			}, { 'once': true });

			no_element.addEventListener('click', function once() {
				if(is_end(no)) {
					reached_end(no);
					return;
				}
				fadeout(no_element, no_image, yes_element, yes_image)
					.then(function () {
						load_node(no[0], no[1][0], no[1][1]);
					});
			}, { 'once': true });
		};

		function reached_end(node) {
			console.log(node);
		};

		// [node, [[node, []], [node, []]]]

		var tree = [
			node("human activity?", ["img/3.gif", "img/4.gif"]), 
			[
				[node("what kind of plants", ["img/land_good.jpg", "img/land_bad.jpg"]), [end_node("nope_dead"), end_node("its fucking maize")] ],
				[node("what kind of plants", ["img/land_bad.jpg", "img/land_good.jpg"]), [end_node("nope_dead"), end_node("its fucking maize")] ]
			]
		];

		load_node(tree[0], tree[1][0], tree[1][1]);
	})();
});
