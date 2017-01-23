Blockly.Blocks['mediationreference'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MediationReference")
        .appendField(new Blockly.FieldDropdown(getMediationFeeds), "MediationReference")
        .appendField(new Blockly.FieldTextInput("Activation"), "MediationReferenceActivationDate")
        .appendField(new Blockly.FieldTextInput("Termination"), "MediationReferenceTerminationDate");
    this.setPreviousStatement(true, "MediationReference");
    this.setNextStatement(true, "MediationReference");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};