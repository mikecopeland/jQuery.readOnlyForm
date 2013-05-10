jQuery.readOnlyForm
===================

This jQuery plugin converts a form to a read-only equivalent. All submit and button elements will be hidden. 
Text fields, text areas and select elements will be translated to their text values. Checkbox and radio elements
will become disabled.

Usage
=====

To start, be sure to include the js file:
```HTML
<script src="jQuery.readOnlyForm.js"></script>
```


To convert a form, simply call the readOnlyForm method on the element:
```HTML
<script type="text/javascript">
  var readOnlyForm = $("form[name='foo']").readOnlyForm();
</script>
```

The method will return the form element.
