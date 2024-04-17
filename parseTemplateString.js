function parseTemplateString(templateString, data) {
   return interpolate(t, c);
}

// https://github.com/catpea/cataclysm/blob/master/api/processor.mjs#L604C1-L606C2
function interpolate(t, c){
  return t.replace(/\${([^}]+)}/g,(m,p)=>p.split('.').reduce((a,f)=>a?a[f]:undefined,c)??m);
}
