Blockly.Blocks['mediationevent'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mediationEvent")
        .appendField(new Blockly.FieldTextInput("Name"), "mediationEventName")
        .appendField(new Blockly.FieldTextInput("Description"), "mediationEventDescription");
    this.setPreviousStatement(true, "mediationEvent");
    this.setNextStatement(true, "mediationEvent");
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};