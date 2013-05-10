(function ($) {

  function hideSubmitButtons (formElem) {
  	$(formElem).find(":submit").hide();
  }

  function hideButtons (formElem){
  	$(formElem).find(":button").hide();
  }

  function replaceTextFields (formElem) {
  	$(formElem).find("input[type='text']").each(function(){
  		$(this).after("<div id='readOnly-" + $(this).attr("name") + "'>" + $(this).val() + "</div>");
  		$(this).hide();
  	});
  }

  function replaceTextAreas (formElem) {
  	$(formElem).find("textarea").each(function(){
  		$(this).after("<div id='readOnly-" + $(this).attr("name") + "'>" + $(this).val().replace(/\n/g, "<br />") + "</div>");
  		$(this).hide();
  	});
  }

  function disableCheckboxes (formElem) {
  	$(formElem).find("input[type='checkbox']").attr("disabled", "disabled");
  }

  function disableRadioButtons (formElem) {
  	$(formElem).find("input[type='radio']").attr("disabled", "disabled");
  }

  function replaceSelects (formElem) {
  	$(formElem).find("select").each(function(){
  		var selectedValues = [];
  		$(this).children("option:selected").each(function(){
  			if($(this).html() != ""){
  				selectedValues.push($(this).html());
  			}	
  		});
  		$(this).after("<div id='readOnly-" + $(this).attr("name") + "'>" + selectedValues.join(", ") + "</div>");
  		$(this).hide();
  	});
  }	

  function disableFormElement (formElem) {
	$(formElem).submit = function (){
		return false;
	} 	
  }

  $.fn.readOnlyForm = function () {

    hideSubmitButtons(this);
    hideButtons(this);
    replaceTextFields(this);
    replaceTextAreas(this);
    disableCheckboxes(this); 
    disableRadioButtons(this);
    replaceSelects(this);
    disableFormElement(this);

    return $(this);

  };

})(jQuery);

$(document).ready(function () {
    $('[is="readonly-form"]').each(function () {
        $(this).readOnlyForm();
    });
});