import  _ from 'lodash';

export function flatPick(object, paths) {
  
  const o= {};

  paths.forEach(path => _.set(
    o,
    _.last(path.split('.')),
    _.get(object, path)
  ));

  return o;
}

