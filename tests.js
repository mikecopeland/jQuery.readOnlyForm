module("Setup");
test("Setup", function(){
	expect(7);
	equal($("form[name='foo']").find(":submit:visible").length, 1, "one submit button shown");
	equal($("form[name='foo']").find(":button:visible").length, 1, "one button shown");
	equal($("form[name='foo']").find("input[type='text']:visible").length, 2, "two text fields shown");
	equal($("form[name='foo']").find("textarea:visible").length, 1, "one textarea shown");
	equal($("form[name='foo']").find("input[type='radio']:enabled").length, 4, "three radio buttons enabled");
	equal($("form[name='foo']").find("input[type='checkbox']:enabled").length, 3, "three checkboxes enabled");
	equal($("form[name='foo']").find("select:visible").length, 2, "two selects shown");

});

module("Constructor");
test("Constructor", function() {
  readOnlyForm = $("form[name='foo']").readOnlyForm();
  ok(readOnlyForm, "object exists");
  equal(readOnlyForm.length, 1, "one form element found");
});

module("Implementation");
test("Hide Submits", function() {
  equal($("form[name='foo']").find(":submit:visible").length, 0, "submit buttons are hidden");
});

test("Hide Buttons", function() {
  equal($("form[name='foo']").find(":button:visible").length, 0, "buttons are hidden");
});

test("Hide TextFields", function() {
  equal($("form[name='foo']").find("input[type='text']:visible").length, 0, "text fields are hidden");
  equal($("form[name='foo']").find("#readOnly-text1").length, 1, "text equivalents is shown");
  equal($("form[name='foo']").find("#readOnly-text1").html(), "lorem", "text equivalent matches value");
  equal($("form[name='foo']").find("#readOnly-text2").length, 1, "text equivalents is shown");
  equal($("form[name='foo']").find("#readOnly-text2").html(), "", "text equivalent matches value");
});

test("Hide TextAreas", function() {
  equal($("form[name='foo']").find("textarea:visible").length, 0, "text fields are hidden");
  equal($("form[name='foo']").find("#readOnly-textarea1").length, 1, "a text equivalent is shown");
  var txtVal = $("form[name='foo']").find("#readOnly-textarea1").html();
  ok(txtVal.indexOf("Lorem ipsum<br /> dolor sit amet."), "text equivalent matches value");
});

test("Disable Radios", function() {
  equal($("form[name='foo']").find("input[type='radio']:enabled").length, 0, "radios are disabled");
});

test("Disable Checkboxes", function() {
  equal($("form[name='foo']").find("input[type='checkbox']:enabled").length, 0, "checkboxes are disabled");
});

test("Hide Selects", function() {
  equal($("form[name='foo']").find("select:visible").length, 0, "selects are hidden");
  equal($("form[name='foo']").find("#readOnly-select1").length, 1, "text equivalents is shown");
  equal($("form[name='foo']").find("#readOnly-select1").html(), "value 1", "text equivalent matches value");
  equal($("form[name='foo']").find("#readOnly-select2").length, 1, "text equivalents is shown");
  equal($("form[name='foo']").find("#readOnly-select2").html(), "value A, value B, value E", "text equivalent matches value");
});