function toggleTZConverterPopup() {
  console.log('run');
  if (query('#tzc-options-display').classList.contains('hidden')) {
    query('#tzc-options-display').classList.remove('hidden');
  } else {
    query('#tzc-options-display').classList.add('hidden');
  }
}

export { toggleTZConverterPopup };
