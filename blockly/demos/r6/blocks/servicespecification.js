Blockly.Blocks['servicespecification'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ServiceSpecification")
        .appendField(new Blockly.FieldTextInput("Key"), "ServiceSpecificationKey");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Description"), "ServiceSpecificationDescription");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("DisplayName"), "ServiceSpecificationDisplayName");
    this.appendDummyInput()
		.appendField(new Blockly.FieldTextInput("2016-11-11"), "ServiceSpecificationActivationDate");
    this.appendStatementInput("serviceSpecificationCharacteristics")
        .setCheck("ServiceSpecificationCharacteristic")
        .appendField("Characteristics");
    this.appendStatementInput("subServices")
        .setCheck("subService")
        .appendField("SubServices");
	this.appendStatementInput("serviceActions")
		.setCheck("serviceAction")
		.apeendField("serviceActions")
    this.appendStatementInput("MediationReferences")
        .setCheck("MediationReference")
        .appendField("MediationReferences");
    this.setPreviousStatement(true, "ServiceSpecification");
    this.setNextStatement(true, "ServiceSpecification");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
