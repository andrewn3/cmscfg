Blockly.Blocks['serviceconfiguration'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ServiceConfiguration");
    this.appendStatementInput("serviceSpecifications")
        .setCheck("ServiceSpecification")
        .appendField("ServiceSpecifications");
    this.appendStatementInput("MediationFeeds")
        .setCheck("MediationFeed")
        .appendField("MediationFeeds");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
