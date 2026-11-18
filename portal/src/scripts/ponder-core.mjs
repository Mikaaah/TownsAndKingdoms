export function assetUrl(base, path) {
  return String(base || '/').replace(/\/*$/, '/') + String(path || '').replace(/^\/+/, '');
}

export function isReferenceStep(step) {
  return Boolean(step.displayOnly || step.machine === 'marker');
}

export function matchesScene(scene, query) {
  const normalize=value=>String(value || '').toLowerCase().replace(/[_:/-]+/g,' ');
  const haystack=normalize(scene.title+' '+(scene.anchors || []).join(' '));
  return normalize(query).trim().split(/\s+/).filter(Boolean).every(word=>haystack.includes(word));
}

export function fitCameraSpan(projectedWidth, projectedHeight, aspect) {
  return Math.max(projectedHeight, projectedWidth / Math.max(.1, aspect), 2) * 1.14;
}

export function multiblockPoints(multiblock) {
  return (multiblock.parts || []).map(([x,y,z]) => {
    const rotation=multiblock.rotation || 'NONE';
    const point=rotation==='CLOCKWISE_90' ? [-z,y,x] : rotation==='COUNTERCLOCKWISE_90' ? [z,y,-x] : rotation==='CLOCKWISE_180' ? [-x,y,-z] : [x,y,z];
    return point.map((v,index) => v + multiblock.origin[index]);
  });
}
