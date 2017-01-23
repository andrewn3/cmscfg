Blockly.Blocks['servicespecificationcharacteristic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Characteristic");

    var dropdown = new Blockly.FieldDropdown([["selection list", "SELECT"], ["phone number", "PHONE_NUMBER"], ["boolean", "BOOLEAN"], ["none", "NONE"], ["string", "STRING"], ["number", "NUMBER"]], function(option) {
      var characteristicValuesRequired = (option == 'SELECT');
      this.sourceBlock_.updateShape_(characteristicValuesRequired);
	  });
    this.appendDummyInput()
        .appendField("Key")
        .appendField(new Blockly.FieldTextInput("key"), "CharacteristicKey")
        .appendField("DisplayName")
        .appendField(new Blockly.FieldTextInput("key"), "CharacteristicDisplayName")
        .appendField("type")
        //.appendField(new Blockly.FieldDropdown([["selection list", "SELECT"], ["phone number", "PHONE_NUMBER"], ["boolean", "BOOLEAN"], ["none", "NONE"], ["string", "STRING"], ["number", "NUMBER"]]), "CharacteristicType");
        .appendField(dropdown,"CharacteristicType");


    this.appendDummyInput()
        .appendField("Hidden")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "isHidden")
        .appendField("ReadOnly")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "isReadOnly")
        .appendField("Mandatory")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "isMandatory")
        .appendField("DefaultActive")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "isDefaultActive")
        .appendField("Changable")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "isChangable")
        .appendField("ServiceIdentifier")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "isServiceIdentifier");
    this.appendDummyInput()
        .appendField("ChangeableDuringProvisioning")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "isChangeableDuringProvisioning")
        .appendField("GroupIdentifier")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "isGroupIdentifier")
        .appendField("Searchable")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "isSearchable")
        .appendField("ServiceAddress")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "isServiceAddress")
        .appendField("DeliveryAddress")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "isDeliveryAddress");
    this.appendStatementInput("ServiceSpecificationCharacteristicValues")
        .setCheck("ServiceSpecificationCharacteristicValue")
        .appendField("Values:");
    this.setPreviousStatement(true, "ServiceSpecificationCharacteristic");
    this.setNextStatement(true, "ServiceSpecificationCharacteristic");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    },
	
	
	
	
    /**
     * Create XML to represent whether the 'divisorInput' should be present.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function() {
      var container = document.createElement('mutation');
      var characteristicValueRequired = (this.getFieldValue('CharacteristicType') == 'selectionlist');
      container.setAttribute('characteristicValueRequired', characteristicValueRequired);
      return container;
    },
    /**
     * Parse XML to restore the 'divisorInput'.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
      var characteristicValueRequired = (xmlElement.getAttribute('characteristicValueRequired') == 'true');
      this.updateShape_(characteristicValueRequired);
    },


  updateShape_: function(characteristicValuesRequired) {
    // Add or remove a Statement Input.
    var StatementExists = this.getInput('ServiceSpecificationCharacteristicValues');
    if (characteristicValuesRequired) {
      if (!StatementExists) {
        this.appendStatementInput("ServiceSpecificationCharacteristicValues")
            .setCheck("ServiceSpecificationCharacteristicValue")
            .appendField("Values:");
      }
    } else if (StatementExists) {
      this.removeInput("ServiceSpecificationCharacteristicValues");
    }
  }

};
