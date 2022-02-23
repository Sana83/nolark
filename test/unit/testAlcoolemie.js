/**
* Tests unitaires getAlcoolPur du projet Alcoolémie
*
*/
MesTestsUnitaires = TestCase('AlcoolemieTest');
MesTestsUnitaires.prototype.testsGetAlcoolPur = function() {
    assertEquals('0 verre', 0, getAlcoolPur(0));
    assertEquals('1 verre', 10, getAlcoolPur(1));
};

/**
* Tests unitaires getCoefDiffusion du projet Alcoolémie
*
*/
MesTestsUnitaires.prototype.testsGetCoefDiffusion = function() {
    assertEquals('Homme', 0.7, getCoefDiffusion('homme'));
    assertEquals('Femme', 0.6, getCoefDiffusion('femme'));
};

/**
* Tests unitaires getAlcoolemie du projet Alcoolémie
*
*/
MesTestsUnitaires.prototype.testsGetAlcoolemie = function() {
    assertEquals('Homme 100 kg 1 verre', 0.14, getAlcoolemie('homme', 100, 1));
    assertEquals('Femme 100 kg 1 verre', 0.17, getAlcoolemie('femme', 100, 1));
};

/**
* Tests unitaires getAmande du projet Alcoolémie
*
*/
MesTestsUnitaires.prototype.testsGetAmende = function() {
 assertEquals('Moins de 0,8 g/l de sang', 'Minorée : 90 € / Forfaitaire : 135 € / Majorée : 375 €', getAmende(0.4));
 assertEquals('A partir de 0,8 g/l', '4500 €', getAmende(0.8));
};

/**
* Tests unitaires getSanction du projet Alcoolémie
*
*/
MesTestsUnitaires.prototype.testsGetSanction = function() {
 assertEquals('Moins de 0,8 g/l de sang', '6 points + suspension 3 ans',
getSanction(0.4));
 assertEquals('A partir de 0,8 g/l de sang', '6 points + 2 ans de prison + suspension 3 ans + stage de sensibilisation', getSanction(0.8));
};


/**
* Tests unitaires testsGetInt du projet Alcoolémie
*
*/
MesTestsUnitaires.prototype.testsGetInt = function () {
 /*:DOC +=
 <input type="number" id="num_verre" value="1">
 <input type="number" id="num_poids" value="100">
 */
 assertTrue('Test poids 100 Kg', 100 === getInt('#num_poids'));
 assertTrue('Test 1 verre', 1 === getInt('#num_verre'));
 window.document.querySelector('#num_verre').value = 'texte';
 assertTrue('Test erreur saisie verre', 0 === getInt('#num_verre'));
};


/**
* Tests unitaires testsGetString du projet Alcoolémie
*
*/
MesTestsUnitaires.prototype.testsGetString = function () {
 /*:DOC +=
 <fieldset id="sexe">
 <input type="radio" name="rd_sexe" id="rd_sexehomme" value="homme"
 checked="checked">
 <input type="radio" name="rd_sexe" id="rd_sexefemme" value="femme">
 </fieldset>
 */
 assertTrue('Test bouton radio Homme',
 'homme' === getString('#sexe input[type="radio"]:checked'));
 // Changement de sexe
 window.document.querySelector('#rd_sexehomme').removeAttribute('checked');
 window.document.querySelector('#rd_sexefemme').setAttribute('checked','checked');
 assertTrue('Test bouton radio Femme',
 'femme' === getString('#sexe input[type="radio"]:checked'));
};