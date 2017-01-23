Blockly.Blocks['serviceaction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Service Provisioning Type")
        .appendField(new Blockly.FieldDropdown([["New","NEW"], ["Terminate","TERMINATE"], ["Update","UPDATE_SERVICE_FEATURES"]]), "serviceProvisioningTypeKey");
    this.appendDummyInput()
        .appendField("workflow Definition Name")
        .appendField(new Blockly.FieldDropdown([["BT Default Provision","bt-compute-provision-default-service"], ["BT Default Terminate","bt-compute-terminate-default-service"], ["BT Default Update","bt-compute-provision-default-service"]]), "WorkflowDefinitionName");
    this.setPreviousStatement(true, "serviceAction");
    this.setNextStatement(true, "serviceAction");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
