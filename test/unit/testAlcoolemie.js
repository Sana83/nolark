/**
* Tests unitaires du projet Alcoolémie
*
*/
MesTestsUnitaires = TestCase('AlcoolemieTest');
MesTestsUnitaires.prototype.testsGetAlcoolPur = function() {
    assertEquals('0 verre', 0, getAlcoolPur(0));
    assertEquals('1 verre', 10, getAlcoolPur(1));
};

/**
* Tests unitaires 2 du projet Alcoolémie
*
*/
MesTestsUnitaires.prototype.testsGetCoefDiffusion = function() {
    assertEquals('Homme', 0.7, getCoefDiffusion('homme'));
    assertEquals('Femme', 0.6, getCoefDiffusion('femme'));
};

/**
* Tests unitaires 3 du projet Alcoolémie
*
*/
MesTestsUnitaires.prototype.testsGetAlcoolemie = function() {
    assertEquals('Homme 100 kg 1 verre', 0.14, getAlcoolemie('homme', 100, 1));
    assertEquals('Femme 100 kg 1 verre', 0.17, getAlcoolemie('femme', 100, 1));
};




