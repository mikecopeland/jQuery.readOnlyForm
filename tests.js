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
  var readOnlyForm = $("form[name='foo']").readOnlyForm();
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

module("is='readonly-form' attribute constructor method");
test("is readonly-form constructor", function(){
    var readOnlyForm = $("form[name='bar']");
    ok(readOnlyForm, "object exists");
    equal(readOnlyForm.length, 1, "one form element found");
})
module("Implementation");
test("Hide Submits", function() {
  equal($("form[name='bar']").find(":submit:visible").length, 0, "submit buttons are hidden");
});

test("Hide Buttons", function() {
  equal($("form[name='bar']").find(":button:visible").length, 0, "buttons are hidden");
});

test("Hide TextFields", function() {
  equal($("form[name='bar']").find("input[type='text']:visible").length, 0, "text fields are hidden");
  equal($("form[name='bar']").find("#readOnly-text1").length, 1, "text equivalents is shown");
  equal($("form[name='bar']").find("#readOnly-text1").html(), "lorem", "text equivalent matches value");
  equal($("form[name='bar']").find("#readOnly-text2").length, 1, "text equivalents is shown");
  equal($("form[name='bar']").find("#readOnly-text2").html(), "", "text equivalent matches value");
});

test("Hide TextAreas", function() {
  equal($("form[name='bar']").find("textarea:visible").length, 0, "text fields are hidden");
  equal($("form[name='bar']").find("#readOnly-textarea1").length, 1, "a text equivalent is shown");
  var txtVal = $("form[name='bar']").find("#readOnly-textarea1").html();
  ok(txtVal.indexOf("Lorem ipsum<br /> dolor sit amet."), "text equivalent matches value");
});

test("Disable Radios", function() {
  equal($("form[name='bar']").find("input[type='radio']:enabled").length, 0, "radios are disabled");
});

test("Disable Checkboxes", function() {
  equal($("form[name='bar']").find("input[type='checkbox']:enabled").length, 0, "checkboxes are disabled");
});

test("Hide Selects", function() {
  equal($("form[name='bar']").find("select:visible").length, 0, "selects are hidden");
  equal($("form[name='bar']").find("#readOnly-select1").length, 1, "text equivalents is shown");
  equal($("form[name='bar']").find("#readOnly-select1").html(), "value 1", "text equivalent matches value");
  equal($("form[name='bar']").find("#readOnly-select2").length, 1, "text equivalents is shown");
  equal($("form[name='bar']").find("#readOnly-select2").html(), "value A, value B, value E", "text equivalent matches value");
});

module("preserve textfields");
test("preserveTextfields constructor", function(){
    var preserveTextfieldsForm = $("form[name='preserveTextfields']").readOnlyForm({preserveTextfields: true});
    ok(preserveTextfieldsForm, "object exists");
    equal(preserveTextfieldsForm.length, 1, "one form element found");
})
module("Implementation");
test("Hide Submits", function() {
  equal($("form[name='preserveTextfields']").find(":submit:visible").length, 0, "submit buttons are hidden");
});

test("Hide Buttons", function() {
  equal($("form[name='preserveTextfields']").find(":button:visible").length, 0, "buttons are hidden");
});

test("Disable TextFields", function() {
  equal($("form[name='preserveTextfields']").find("input[type='text']:enabled").length, 0, "text fields are disabled");
});

test("Disable TextAreas", function() {
  equal($("form[name='preserveTextfields']").find("textarea:enabled").length, 0, "text fields are disabled");
});

test("Disable Radios", function() {
  equal($("form[name='preserveTextfields']").find("input[type='radio']:enabled").length, 0, "radios are disabled");
});

test("Disable Checkboxes", function() {
  equal($("form[name='preserveTextfields']").find("input[type='checkbox']:enabled").length, 0, "checkboxes are disabled");
});

test("Hide Selects", function() {
  equal($("form[name='preserveTextfields']").find("select:visible").length, 0, "selects are hidden");
  equal($("form[name='preserveTextfields']").find("#readOnly-select1").length, 1, "text equivalents is shown");
  equal($("form[name='preserveTextfields']").find("#readOnly-select1").html(), "value 1", "text equivalent matches value");
  equal($("form[name='preserveTextfields']").find("#readOnly-select2").length, 1, "text equivalents is shown");
  equal($("form[name='preserveTextfields']").find("#readOnly-select2").html(), "value A, value B, value E", "text equivalent matches value");
});

module("Preserve buttons");
test("preserveButtons constructor", function(){
    var preserveButtonsForm = $("form[name='preserveButtons']").readOnlyForm({preserveButtons: true});
    ok(preserveButtonsForm, "object exists");
    equal(preserveButtonsForm.length, 1, "one form element found");
})
module("Implementation");
test("Disable Submits", function() {
   equal($("form[name='preserveButtons']").find("input[type='button']:enabled").length, 0, "buttons are disabled");
});

test("Disable Buttons", function() {
   equal($("form[name='preserveButtons']").find("input[type='submit']:enabled").length, 0, "submits are disabled");
});

test("Hide TextFields", function() {
  equal($("form[name='preserveButtons']").find("input[type='text']:visible").length, 0, "text fields are hidden");
  equal($("form[name='preserveButtons']").find("#readOnly-text1").length, 1, "text equivalents is shown");
  equal($("form[name='preserveButtons']").find("#readOnly-text1").html(), "lorem", "text equivalent matches value");
  equal($("form[name='preserveButtons']").find("#readOnly-text2").length, 1, "text equivalents is shown");
  equal($("form[name='preserveButtons']").find("#readOnly-text2").html(), "", "text equivalent matches value");
});

test("Hide TextAreas", function() {
  equal($("form[name='preserveButtons']").find("textarea:visible").length, 0, "text fields are hidden");
  equal($("form[name='preserveButtons']").find("#readOnly-textarea1").length, 1, "a text equivalent is shown");
  var txtVal = $("form[name='preserveButtons']").find("#readOnly-textarea1").html();
  ok(txtVal.indexOf("Lorem ipsum<br /> dolor sit amet."), "text equivalent matches value");
});

test("Disable Radios", function() {
  equal($("form[name='preserveButtons']").find("input[type='radio']:enabled").length, 0, "radios are disabled");
});

test("Disable Checkboxes", function() {
  equal($("form[name='preserveButtons']").find("input[type='checkbox']:enabled").length, 0, "checkboxes are disabled");
});

test("Hide Selects", function() {
  equal($("form[name='preserveButtons']").find("select:visible").length, 0, "selects are hidden");
  equal($("form[name='preserveButtons']").find("#readOnly-select1").length, 1, "text equivalents is shown");
  equal($("form[name='preserveButtons']").find("#readOnly-select1").html(), "value 1", "text equivalent matches value");
  equal($("form[name='preserveButtons']").find("#readOnly-select2").length, 1, "text equivalents is shown");
  equal($("form[name='preserveButtons']").find("#readOnly-select2").html(), "value A, value B, value E", "text equivalent matches value");
});