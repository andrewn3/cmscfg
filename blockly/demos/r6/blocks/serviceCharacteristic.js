Blockly.Blocks['servicespecificationcharacteristicvalue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Value")
        .appendField(new Blockly.FieldTextInput("key"), "CharacteristicValueKey")
        .appendField("DisplayValue")
        .appendField(new Blockly.FieldTextInput("displayValue"), "CharacteristicValueDisplayValue")
        .appendField("DisplayOrder")
        .appendField(new Blockly.FieldNumber(0, 0), "CharacteristicValueDisplayOrder")
        .appendField("Description")
        .appendField(new Blockly.FieldTextInput("description"), "CharacteristicValueDescription");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "ServiceSpecificationCharacteristicValue");
    this.setNextStatement(true, "ServiceSpecificationCharacteristicValue");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};