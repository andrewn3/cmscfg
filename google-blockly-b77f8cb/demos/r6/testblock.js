Blockly.Blocks['test'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("key"), "NAME");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};