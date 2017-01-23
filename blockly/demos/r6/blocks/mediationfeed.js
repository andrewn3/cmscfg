Blockly.Blocks['mediationfeed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MediationFeed")
        .appendField(new Blockly.FieldTextInput("key"), "mediationFeedKey", "MediationFeedKey_")
        .appendField(new Blockly.FieldTextInput("description"), "mediationFeedDescription")
        .appendField(new Blockly.FieldTextInput("timeZone"), "mediationFeedtimeZone");
    this.appendStatementInput("mediationEvents")
        .setCheck("mediationEvent");
    this.setPreviousStatement(true, "MediationFeed");
    this.setNextStatement(true, "MediationFeed");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
