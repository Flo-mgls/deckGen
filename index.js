let cardsNumberInDeck = 8; // Nombre de cartes dans un deck
let allCards = []; // Array contenant toutes les cartes du jeu
let currentDeck = []; // Array contenant les cartes du deck actuel
let modeDeckSelection = 0; // Mode de sélection: 0 > yolo / 1 > balanced / 2 > custom
let imgCardsPath = "./contents/images/cards/"; // Path to cards

// Conctructeur des cartes 
function Cards(id, name, rarety, type, cost, image, arena, date, winCondition, isUsed) { 
	this.id = id,
	this.name = name,
	this.rarety = rarety,
	this.type = type,
	this.cost = cost,
	this.image = image,
	this.arena = arena,
	this.date = date,
	this.winCondition = winCondition,
	this.isUsed = isUsed

}
// Ajout d'une méthode dans le prototype de Cards: Ajoute la carte à l'array allCards
Cards.prototype.addCard = function() {
	allCards.push(this);
}

// Création des cartes avec le constructeur Cards et ajout une à une dans l'array allCards
let arrows = new Cards(1, "Arrows", "Common", "Spell", 3, imgCardsPath + "arrows.png", 0, 1601, false, false).addCard();
let minions = new Cards(2, "Minions", "Common", "Troop", 3, imgCardsPath + "minions.png", 0, 1601, false, false).addCard();
let archers = new Cards(3, "Archers", "Common", "Troop", 3, imgCardsPath + "archers.png", 0, 1601, false, false).addCard();
let knight = new Cards(4, "Knight", "Common", "Troop", 3, imgCardsPath + "knight.png", 0, 1601, false, false).addCard();
let fireball = new Cards(5, "Fireball", "Rare", "Spell", 4, imgCardsPath + "fireball.png", 0, false, 1601, false).addCard();
let miniPekka = new Cards(6, "Mini P.E.K.K.A.", "Rare", "Troop", 4, imgCardsPath + "miniPekka.png", 0, 1601, false, false).addCard();
let musketeer = new Cards(7, "Musketeer", "Rare", "Troop", 4, imgCardsPath + "musketeer.png", 0, 1601, false, false).addCard();
let giant = new Cards(8, "Giant", "Rare", "Troop", 5, imgCardsPath + "giant.png", 0, 1601, true, false).addCard();
let wallBreakers = new Cards(9, "wall Breakers", "epic", "Troop", 2, imgCardsPath + "wallBreakers.png", 0, 1902, true, false).addCard();
let prince = new Cards(10, "Prince", "Epic", "Troop", 5, imgCardsPath + "prince.png", 0, 1601, false, false).addCard();
let babyDragon = new Cards(11, "Baby Dragon", "Epic", "Troop", 4, imgCardsPath + "babyDragon.png", 0, 1601, false, false).addCard();
let skeletonArmy = new Cards(12, "Skeleton Army", "Epic", "Troop", 3, imgCardsPath + "skeletonArmy.png", 0, 1601, false, false).addCard();
let spearGoblins = new Cards(13, "Spear Goblins", "Common", "Troop", 2, imgCardsPath + "spearGoblins.png", 1, 1601, false, false).addCard();
let goblins = new Cards(14, "Goblins", "Common", "Troop", 2, imgCardsPath + "goblins.png", 1, 1601, false, false).addCard();
let goblinHut = new Cards(15, "Goblin Hut", "Rare", "Building", 5, imgCardsPath + "goblinHut.png", 1, 1601, false, false).addCard();
let hogRider = new Cards(16, "Hog Rider", "Rare", "Troop", 4, imgCardsPath + "hogRider.png", 1, 1601, true, false).addCard();
let goblinBarrel = new Cards(17, "Goblin Barrel", "Epic", "Spell", 3, imgCardsPath + "goblinBarrel.png", 1, 1601, true, false).addCard();
let hunter = new Cards(18, "Hunter", "Epic", "Troop", 4, imgCardsPath + "hunter.png", 1, 1712, false, false).addCard();
let bomber = new Cards(19, "Bomber", "Common", "Troop", 3, imgCardsPath + "bomber.png", 2, 1601, false, false).addCard();
let skeletons = new Cards(20, "Skeletons", "Common", "Troop", 1, imgCardsPath + "skeletons.png", 2, 1601, false, false).addCard();
let tombstone = new Cards(21, "Tombstone", "Rare", "Building", 3, imgCardsPath + "tombstone.png", 2, 1601, false, false).addCard();
let valkyrie = new Cards(22, "Valkyrie", "Rare", "Troop", 4, imgCardsPath + "valkyrie.png", 2, 1601, false, false).addCard();
let giantSkeleton = new Cards(23, "Giant Skeleton", "Epic", "Troop", 6, imgCardsPath + "giantSkeleton.png", 2, 1601, true, false).addCard();
let witch = new Cards(24, "Witch", "Epic", "Troop", 5, imgCardsPath + "witch.png", 2, 1601, false, false).addCard();
let cannon = new Cards(25, "Cannon", "Common", "Building", 3, imgCardsPath + "cannon.png", 3, 1601, false, false).addCard();
let barbarians = new Cards(26, "Barbarians", "Common", "Troop", 5, imgCardsPath + "barbarians.png", 3, 1601, false, false).addCard();
let barbarianHut = new Cards(27, "Barbarian Hut", "Rare", "Building", 7, imgCardsPath + "barbarianHut.png", 3, 1601, false, false).addCard();
let battleRam = new Cards(28, "Battle Ram", "Rare", "Troop", 4, imgCardsPath + "battleRam.png", 3, 1702, true, false).addCard();
let barbarianBarrel = new Cards(29, "Barbarian Barrel", "Epic", "Spell", 2, imgCardsPath + "barbarianBarrel.png", 3, 1804, false, false).addCard();
let golem = new Cards(30, "Golem", "Epic", "Troop", 8, imgCardsPath + "golem.png", 3, 1601, true, false).addCard();
let zap = new Cards(31, "Zap", "Common", "Spell", 2, imgCardsPath + "zap.png", 4, 1601, false, false).addCard();
let minionHorde = new Cards(32, "Minion Horde", "Common", "Troop", 5, imgCardsPath + "minionHorde.png", 4, 1601, false, false).addCard();
let infernoTower = new Cards(33, "Inferno Tower", "Rare", "Building", 5, imgCardsPath + "infernoTower.png", 4, 1601, false, false).addCard();
let megaMinion = new Cards(34, "Mega Minion", "Rare", "Troop", 3, imgCardsPath + "megaMinion.png", 4, 1609, false, false).addCard();
let lightning = new Cards(35, "Lightning", "Epic", "Spell", 6, imgCardsPath + "lightning.png", 4, 1601, false, false).addCard();
let pekka = new Cards(36, "P.E.K.K.A.", "Epic", "Troop", 7, imgCardsPath + "pekka.png", 4, 1601, false, false).addCard();
let miner = new Cards(37, "Miner", "Legendary", "Troop", 3, imgCardsPath + "miner.png", 4, 1605, true, false).addCard();
let lavaHound = new Cards(38, "Lava Hound", "Legendary", "Troop", 7, imgCardsPath + "lavaHound.png", 4, 1605, true, false).addCard();
let bats = new Cards(39, "Bats", "Common", "Troop", 2, imgCardsPath + "bats.png", 5, 1707, false, false).addCard();
let fireSpirits = new Cards(40, "Fire Spirits", "Common", "Troop", 2, imgCardsPath + "fireSpirits.png", 5, 1605, false, false).addCard();
let furnace = new Cards(41, "Furnace", "Rare", "Building", 4, imgCardsPath + "furnace.png", 5, 1605, false, false).addCard();
let wizard = new Cards(42, "Wizard", "Rare", "Troop", 5, imgCardsPath + "wizard.png", 5, 1601, false, false).addCard();
let tornado = new Cards(43, "Tornado", "Epic", "Spell", 3, imgCardsPath + "tornado.png", 5, 1611, false, false).addCard();
let poison = new Cards(44, "Poison", "Epic", "Spell", 4, imgCardsPath + "poison.png", 5, 1602, false, false).addCard();
let magicArcher = new Cards(45, "Magic Archer", "Legendary", "Troop", 4, imgCardsPath + "magicArcher.png", 5, 1804, false, false).addCard();
let nightWitch = new Cards(46, "Night Witch", "Legendary", "Troop", 4, imgCardsPath + "nightWitch.png", 5, 1705, false, false).addCard();
let mortar = new Cards(47, "Mortar", "Common", "Building", 4, imgCardsPath + "mortar.png", 6, 1601, true, false).addCard();
let skeletonBarrel = new Cards(48, "Skeleton Barrel", "Common", "Troop", 3, imgCardsPath + "skeletonBarrel.png", 6, 1711, true, false).addCard();
let rocket = new Cards(49, "Rocket", "Rare", "Spell", 6, imgCardsPath + "rocket.png", 6, 1601, true, false).addCard();
let flyingMachine = new Cards(50, "FlyingMachine", "Rare", "Troop", 4, imgCardsPath + "flyingMachine.png", 6, 1710, false, false).addCard();
let xBow = new Cards(51, "X-Bow", "Epic", "Building", 6, imgCardsPath + "x-Bow.png", 6, 1601, true, false).addCard();
let balloon = new Cards(52, "Balloon", "Epic", "Troop", 5, imgCardsPath + "balloon.png", 6, 1601, true, false).addCard();
let theLog = new Cards(53, "The Log", "Legendary", "Spell", 2, imgCardsPath + "theLog.png", 6, 1607, false, false).addCard();
let infernoDragon = new Cards(54, "Inferno Dragon", "Legendary", "Troop", 4, imgCardsPath + "infernoDragon.png", 6, 1609, false, false).addCard();
let royalRecruits = new Cards(55, "Royal Recruits", "Common", "Troop", 7, imgCardsPath + "royalRecruits.png", 7, 1910, false, false).addCard();
let royalGiant = new Cards(56, "Royal Giant", "Common", "Troop", 6, imgCardsPath + "royalGiant.png", 7, 1602, true, false).addCard();
let royalHogs = new Cards(57, "Royal Hogs", "Rare", "Troop", 5, imgCardsPath + "royalHogs.png", 7, 1806, true, false).addCard();
let threeMusketeers = new Cards(58, "Three Musketeers", "Rare", "Troop", 9, imgCardsPath + "threeMusketeers.png", 7, 1602, true, false).addCard();
let darkPrince = new Cards(59, "Dark Prince", "Epic", "Troop", 4, imgCardsPath + "darkPrince.png", 7, 1602, false, false).addCard();
let guards = new Cards(60, "Guards", "Epic", "Troop", 3, imgCardsPath + "guards.png", 7, 1605, false, false).addCard();
let megaKnight = new Cards(61, "Mega Knight", "Legendary", "Troop", 7, imgCardsPath + "megaKnight.png", 7, 1709, false, false).addCard();
let princess = new Cards(62, "Princess", "Legendary", "Troop", 3, imgCardsPath + "princess.png", 7, 1602, false, false).addCard();
let giantSnowball = new Cards(63, "Giant Snowball", "Common", "Spell", 2, imgCardsPath + "giantSnowball.png", 8, 1806, false, false).addCard();
let iceSpirit = new Cards(64, "Ice Spirit", "Common", "Troop", 1, imgCardsPath + "iceSpirit.png", 8, 1607, false, false).addCard();
let elixirCollector = new Cards(65, "Elixir Collector", "Rare", "Building", 6, imgCardsPath + "elixirCollector.png", 8, 1601, false, false).addCard();
let iceGolem = new Cards(66, "ice Golem", "Rare", "Troop", 2, imgCardsPath + "iceGolem.png", 8, 1610, false, false).addCard();
let freeze = new Cards(67, "Freeze", "Epic", "Spell", 4, imgCardsPath + "freeze.png", 8, 1601, false, false).addCard();
let bowler = new Cards(68, "Bowler", "Epic", "Troop", 5, imgCardsPath + "bowler.png", 8, 1607, false, false).addCard();
let lumberjack = new Cards(69, "Lumberjack", "Legendary", "Troop", 4, imgCardsPath + "lumberjack.png", 8, 1607, false, false).addCard();
let iceWizard = new Cards(70, "Ice Wizard", "Legendary", "Troop", 3, imgCardsPath + "iceWizard.png", 8, 1602, false, false).addCard();
let rascals = new Cards(71, "Rascals", "Common", "Troop", 5, imgCardsPath + "rascals.png", 9, 1805, false, false).addCard();
let goblinGang = new Cards(72, "Goblin Gang", "Common", "Troop", 3, imgCardsPath + "goblinGang.png", 9, 1702, false, false).addCard();
let earthquake = new Cards(73, "Earthquake", "Rare", "Spell", 3, imgCardsPath + "earthquake.png", 9, 1904, false, false).addCard();
let dartGoblin = new Cards(74, "Dart Goblin", "Rare", "Troop", 3, imgCardsPath + "dartGoblin.png", 9, 1701, false, false).addCard();
let goblinGiant = new Cards(75, "Goblin Giant", "Epic", "Troop", 6, imgCardsPath + "goblinGiant.png", 9, 1809, true, false).addCard();
let bandit = new Cards(76, "Bandit", "Legendary", "Troop", 3, imgCardsPath + "bandit.png", 9, 1703, false, false).addCard();
let firecracker = new Cards(77, "Firecracker", "Common", "Troop", 3, imgCardsPath + "firecracker.png", 10, 2002, false, false).addCard();
let eliteBarbarians = new Cards(78, "Elite Barbarians", "Common", "Troop", 6, imgCardsPath + "eliteBarbarians.png", 10, 1611, true, false).addCard();
let healSpirit = new Cards(79, "Heal Spirit", "Rare", "Troop", 1, imgCardsPath + "healSpirit.png", 10, 2004, false, false).addCard();
let bombTower = new Cards(80, "Bomb Tower", "Rare", "Building", 4, imgCardsPath + "bombTower.png", 10, 1601, false, false).addCard();
let rage = new Cards(81, "Rage", "Epic", "Spell", 2, imgCardsPath + "rage.png", 10, 1601, false, false).addCard();
let cannonCart = new Cards(82, "Cannon Cart", "Epic", "Troop", 5, imgCardsPath + "cannonCart.png", 10, 1708, false, false).addCard();
let ramRider = new Cards(83, "Ram Rider", "Legendary", "Troop", 5, imgCardsPath + "ramRider.png", 10, 1812, true, false).addCard();
let fisherman = new Cards(84, "Fisherman", "Legendary", "Troop", 3, imgCardsPath + "fisherman.png", 10, 1908, false, false).addCard();
let tesla = new Cards(85, "Tesla", "Common", "Building", 4, imgCardsPath + "tesla.png", 11, 1601, false, false).addCard();
let elixirGolem = new Cards(86, "Elixir Golem", "Rare", "Troop", 3, imgCardsPath + "elixirGolem.png", 11, 1911, true, false).addCard();
let zappies = new Cards(87, "Zappies", "Rare", "Troop", 4, imgCardsPath + "zappies.png", 11, 1712, false, false).addCard();
let clone = new Cards(88, "Clone", "Epic", "Spell", 3, imgCardsPath + "clone.png", 11, 1612, false, false).addCard();
let electroDragon = new Cards(89, "Electro Dragon", "Epic", "Troop", 5, imgCardsPath + "electroDragon.png", 11, 1811, false, false).addCard();
let electroWizard = new Cards(90, "Electro Wizard", "Legendary", "Troop", 4, imgCardsPath + "electroWizard.png", 11, 1612, false, false).addCard();
let sparky = new Cards(91, "Sparky", "Legendary", "Troop", 6, imgCardsPath + "sparky.png", 11, 1605, true, false).addCard();
let royalDelivery = new Cards(92, "Royal Delivery", "Common", "Spell", 3, imgCardsPath + "royalDelivery.png", 12, 2004, false, false).addCard();
let goblinCage = new Cards(93, "Goblin Cage", "Rare", "Building", 4, imgCardsPath + "goblinCage.png", 12, 1905, false, false).addCard();
let battleHealer = new Cards(94, "Battle Healer", "Rare", "Troop", 4, imgCardsPath + "battleHealer.png", 12, 2001, false, false).addCard();
let mirror = new Cards(95, "Mirror", "Epic", "Spell", 0, imgCardsPath + "mirror.png", 12, 1601, false, false).addCard();
let executioner = new Cards(96, "Executioner", "Epic", "Troop", 5, imgCardsPath + "executioner.png", 12, 1701, false, false).addCard();
let royalGhost = new Cards(97, "Royal Ghost", "Legendary", "Troop", 3, imgCardsPath + "royalGhost.png", 12, 1801, false, false).addCard();
let graveyard = new Cards(98, "Graveyard", "Legendary", "Spell", 5, imgCardsPath + "graveyard.png", 12, 1610, true, false).addCard();


// Donne un aléatoire selon l'array qui doit être traité
function getRandom(array){
	return Math.floor(Math.random() * array.length);
}
// Donne le coût moyen du deck en fonction du nombre de cartes
function getAverageCost(){
	let totalCost = 0;
	let averageCost;
	for(card of currentDeck){ // Pour chaque cartes on récupère son coût
		totalCost += card.cost; // On l'ajoute
	}
	averageCost = totalCost / currentDeck.length; // On fait la moyenne
	return averageCost.toFixed(1); // On retourne le résultat avec 1 décimale
}

//Récupère le mode sélectionné
function getMode(){
	let modes = document.getElementsByName("mode"); //On récupère les boutons radio
	for(mode of modes){
		if(mode.checked){ // On check lequel est sélectionné
			modeDeckSelection = mode.value; // On attribut sa valeur a modeDeckSelection
		}else{
			continue;
		}
	}
	return parseFloat(modeDeckSelection); // On converti le string récupéré en number
}

// Mode de sélection 0 - choisi 8 cartes totalement aléatoire
function genDeckYolo(){
	while(currentDeck.length < cardsNumberInDeck){
		randomCard = getRandom(allCards); // On définit une carte aléatoire
		if(allCards[randomCard].isUsed){
			continue; // Si la carte a déjà été utilisé
		}else{
			allCards[randomCard].isUsed = true; // Sinon on change son état
			currentDeck.push(allCards[randomCard]); // Et on la push dans l'array contenant le deck displayed
		}
	}
}

function genDeckBalanced(){
	let cardsSpell = allCards.filter(card => card.type == "Spell" && card.winCondition == false);
	let cardsBuilding = allCards.filter(card => card.type == "Building" && card.winCondition == false);
	let cardsWinCondition = allCards.filter(card => card.winCondition == true);
	let cardsSupport = allCards.filter(card => card.type == "Troop" && card.winCondition == false);
	let randomSpell = Math.random();
	let randomBuilding = Math.random();
	let randomWinCondition = Math.random();
	let nbrSpells;
	let nbrBuildings;
	let nbrWinConditions;
	let randomCard;
	switch(true){
		case (randomSpell < 0.6):
		nbrSpells = 2;
		break;
		case (randomSpell >= 0.6 && randomSpell < 0.9):
		nbrSpells = 3;
		break;
		case (randomSpell >= 0.9 && randomSpell < 0.98):
		nbrSpells = 1;
		break;
		case (randomSpell >= 0.98 && randomSpell < 1):
		nbrSpells = 0;
		break;
		default:
		nbrSpells = 2;
	}
	for(i = 0; i < nbrSpells; i++){
		randomCard = getRandom(cardsSpell);
		if(cardsSpell[randomCard].isUsed){
			continue; // Si la carte a déjà été utilisé
		}else{
			cardsSpell[randomCard].isUsed = true; // Sinon on change son état
			currentDeck.push(cardsSpell[randomCard]); // Et on la push dans l'array contenant le deck displayed
		}
	}

	switch(true){
		case (randomBuilding < 0.6):
		nbrBuildings = 0;
		break;
		case (randomBuilding >= 0.6 && randomBuilding < 0.9):
		nbrBuildings = 1;
		break;
		case (randomBuilding >= 0.9 && randomBuilding < 0.98):
		nbrBuildings = 2;
		break;
		case (randomBuilding >= 0.98 && randomBuilding < 1):
		nbrBuildings = 3;
		break;
		default:
		nbrBuildings = 0;
	}
	for(i = 0; i < nbrBuildings; i++){
		randomCard = getRandom(cardsBuilding);
		if(cardsBuilding[randomCard].isUsed){
			continue; // Si la carte a déjà été utilisé
		}else{
			cardsBuilding[randomCard].isUsed = true; // Sinon on change son état
			currentDeck.push(cardsBuilding[randomCard]); // Et on la push dans l'array contenant le deck displayed
		}
	}

	switch(true){
		case (randomWinCondition < 0.55):
		nbrWinConditions = 1;
		break;
		case (randomWinCondition >= 0.55 && randomWinCondition < 0.9):
		nbrWinConditions = 2;
		break;
		case (randomWinCondition >= 0.9 && randomWinCondition < 0.95):
		nbrWinConditions = 3;
		break;
		case (randomBuilding >= 0.95 && randomWinCondition < 1):
		nbrWinConditions = 0;
		break;
		default:
		nbrWinConditions = 1;
	}
	for(i = 0; i < nbrWinConditions; i++){
		randomCard = getRandom(cardsWinCondition);
		if(cardsWinCondition[randomCard].isUsed){
			continue; // Si la carte a déjà été utilisé
		}else{
			cardsWinCondition[randomCard].isUsed = true; // Sinon on change son état
			currentDeck.push(cardsWinCondition[randomCard]); // Et on la push dans l'array contenant le deck displayed
		}
	}
	while(currentDeck.length < cardsNumberInDeck){
		randomCard = getRandom(cardsSupport); // On définit une carte aléatoire
		if(cardsSupport[randomCard].isUsed){
			continue; // Si la carte a déjà été utilisé
		}else{
			cardsSupport[randomCard].isUsed = true; // Sinon on change son état
			currentDeck.push(cardsSupport[randomCard]); // Et on la push dans l'array contenant le deck displayed
		}
	}
}

// S'occupe d'afficher tous les éléments à leur place
function displayInDom(){
	let cardNumber = 0;
	let slots = document.getElementsByClassName("image");
	for(slot of slots){
		slot.setAttribute("src", currentDeck[cardNumber].image);
		slot.parentElement.setAttribute("id", `slot--${cardNumber}`);
		cardNumber++;
	}
	let averageCost = getAverageCost();
	let elixir = document.getElementsByClassName("deck-builder__deck__elixir")[0];
	elixir.getElementsByTagName("span")[0].textContent = averageCost;
}

// Affichage des 8 cartes dans le DOM
function displayDeck(e){
	e.preventDefault();
	currentDeck = []; // On réinitialise le deck displayed
	for(card of allCards){
		card.isUsed = false; // On réinitialise l'état isUsed de chaque cartes 
	}
	switch(getMode()){ // Selon le mode on appelle telle ou telle fonction
		case 0:
		genDeckYolo();
		displayInDom();
		break;
		case 1:
		genDeckBalanced();
		displayInDom();
		break;
		case 2:
		alert("Mode soon available 👌");
		break;
		default:
		genDeckYolo();
	}
}

document.getElementsByName("deck-it")[0].addEventListener("click", displayDeck);
