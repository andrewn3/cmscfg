Blockly.Blocks['subservice'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SubService")
        .appendField(new Blockly.FieldDropdown([["...select SubService", "...select"]]), "subServiceReference")
        .appendField("NumOfInstances")
        .appendField(new Blockly.FieldNumber(0, 0), "minNumOfInstances")
        .appendField("-")
        .appendField(new Blockly.FieldNumber(0, 0), "maxNumOfInstances")
        .appendField("Activation")
        .appendField(new Blockly.FieldTextInput("2016-11-11"), "subServiceActivation")
        .appendField("Termination")
        .appendField(new Blockly.FieldTextInput("4000-01-01"), "subServiceTerminiation");
    this.setPreviousStatement(true, "subService");
    this.setNextStatement(true, "subService");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};