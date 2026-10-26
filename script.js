document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('prepare').addEventListener('click', async () => {
  const equipment = document.getElementById('equipment').value;
  const details = document.getElementById('details').value.trim();
  const delivery = document.getElementById('delivery').value;
  const note = document.getElementById('form-note');
  if (!details) { note.textContent = 'Décris d’abord ce qu’il faut réparer.'; return; }
  const message = `Bonjour Salky,\n\nJe souhaite faire réparer : ${equipment}.\n\nDétails : ${details}\n\nMode souhaité : ${delivery}.\n\nMerci !`;
  try { await navigator.clipboard.writeText(message); note.textContent = 'Message copié ! Tu peux le coller dans un e-mail ou un message à Salky.'; }
  catch { note.textContent = 'La copie automatique est indisponible sur ce navigateur. Tu peux sélectionner ton texte et le copier manuellement.'; }
});
