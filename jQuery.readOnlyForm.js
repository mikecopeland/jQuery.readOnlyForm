(function (jQuery) {

  function hideSubmitButtons (formElem) {
  	jQuery(formElem).find(":submit").hide();
  }

  function hideButtons (formElem){
  	jQuery(formElem).find(":button").hide();
  }

  function replaceTextFields (formElem) {
  	jQuery(formElem).find("input[type='text']").each(function(){
  		jQuery(this).after("<div id='readOnly-" + jQuery(this).attr("name") + "'>" + jQuery(this).val() + "</div>");
  		jQuery(this).hide();
  	});
  }

  function replaceTextAreas (formElem) {
  	jQuery(formElem).find("textarea").each(function(){
  		jQuery(this).after("<div id='readOnly-" + jQuery(this).attr("name") + "'>" + jQuery(this).val().replace(/\n/g, "<br />") + "</div>");
  		jQuery(this).hide();
  	});
  }

  function disableTextFields (formElem){
       jQuery(formElem).find("input[type='text']").attr("disabled", "disabled");
  }

  function disableTextAreas (formElem){
       jQuery(formElem).find("textarea").attr("disabled", "disabled");
  }

  function disableCheckboxes (formElem) {
  	jQuery(formElem).find("input[type='checkbox']").attr("disabled", "disabled");
  }

  function disableRadioButtons (formElem) {
  	jQuery(formElem).find("input[type='radio']").attr("disabled", "disabled");
  }

  function disableSubmitButtons (formElem) {
    jQuery(formElem).find(":submit").attr("disabled", "disabled");
  }

  function disableButtons (formElem){
    jQuery(formElem).find(":button").attr("disabled", "disabled");
  }

  function replaceSelects (formElem) {
  	jQuery(formElem).find("select").each(function(){
  		var selectedValues = [];
  		jQuery(this).children("option:selected").each(function(){
  			if(jQuery(this).html() != ""){
  				selectedValues.push(jQuery(this).html());
  			}	
  		});
  		jQuery(this).after("<div id='readOnly-" + jQuery(this).attr("name") + "'>" + selectedValues.join(", ") + "</div>");
  		jQuery(this).hide();
  	});
  }	

  function disableFormElement (formElem) {
	jQuery(formElem).submit = function (){
		return false;
	} 	
  }

  jQuery.fn.readOnlyForm = function (params) {
    if(typeof params !== 'undefined' && typeof params.preserveButtons !== 'undefined' && params.preserveButtons){
        disableSubmitButtons(this);
        disableButtons(this);
    }else{
        hideSubmitButtons(this);
        hideButtons(this);
    }

    if(typeof params !== 'undefined' && typeof params.preserveTextfields !== 'undefined' && params.preserveTextfields){
        disableTextFields(this);
        disableTextAreas(this);
    }else{
        replaceTextFields(this);
        replaceTextAreas(this);
    }

    disableCheckboxes(this); 
    disableRadioButtons(this);
    replaceSelects(this);
    disableFormElement(this);

    return jQuery(this);

  };

})(jQuery);

jQuery(document).ready(function () {
    jQuery('[is="readonly-form"]').each(function () {
        jQuery(this).readOnlyForm();
    });
});