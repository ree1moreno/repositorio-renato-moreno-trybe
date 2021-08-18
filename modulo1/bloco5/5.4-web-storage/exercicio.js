window.onload = function() {
 let select = document.querySelector('#background');
 select.addEventListener('change', function() {
   let selected = select.selectedOptions[0];
   document.body.style.backgroundColor = selected.value;
   localStorage.setItem('5.4-background-color', selected.value);
 })

 let fontSelect = document.querySelector('#color');
 fontSelect.addEventListener('change', function() {
   let fontColorSelected = fontSelect.selectedOptions[0];
   document.body.style.color = fontColorSelected.value;
   localStorage.setItem('5.4-font-color', fontColorSelected.value);
 })

 let fontFamily = document.querySelector('#font-family');
 fontFamily.addEventListener('change', function() {
   let fontFamilySelected = fontFamily.selectedOptions[0];
   document.body.style.fontFamily = fontFamilySelected.value;
   localStorage.setItem('5.4-font-family', fontFamilySelected.value);
 })

 let lineHeight = document.querySelector('#line-height');
 lineHeight.addEventListener('change', function() {
   let lineHeightSelected = lineHeight.selectedOptions[0];
   document.body.style.lineHeight = lineHeightSelected.value;
   localStorage.setItem('5.4-line-height', lineHeightSelected.value);
 })

 let inputFontSize = document.querySelector('input[name="font-size"]');
 inputFontSize.addEventListener('change', function() {
   document.querySelector('p').style.fontSize = `${inputFontSize.value}px`;
   localStorage.setItem('5.4-font-size', `${inputFontSize.value}px`);
  })

  let savedBackground = localStorage.getItem('5.4-background-color');
  document.body.style.backgroundColor = savedBackground;
  let savedFontSize = localStorage.getItem('5.4-font-size');
  document.body.style.fontSize = savedFontSize;  
}
